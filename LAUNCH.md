# Launching Presidentl on Vercel → presidentl.app

Everything in the `Presidentl` folder is the deploy root. It is a plain static site — no build step, no dependencies, no server.

---

## 1. Register the domain

`presidentl.app` is a Google-run `.app` TLD, so **HTTPS is mandatory** (the whole TLD is HSTS-preloaded). That's fine — Vercel issues a certificate automatically — but the site will never be reachable over plain http. Register through any registrar (Cloudflare, Namecheap, Porkbun are all reasonable).

## 2. Deploy

**The no-CLI path:** go to vercel.com/new → *Deploy* → drag the `Presidentl` folder onto the drop zone. It's live on a `*.vercel.app` URL in under a minute.

**The CLI path**, if you'd rather:

```bash
npm i -g vercel
cd "path/to/Presidentl"
vercel --prod
```

Answer "no" when it asks about linking to an existing project, and accept the defaults — there's no framework to detect.

Either way, **delete `Presidentl Game Website Design.zip` from the folder before deploying** — it's a 900 KB design archive that would be served publicly.

## 3. Point the domain at it

In the Vercel project → **Settings → Domains → Add** → `presidentl.app`. Vercel will show you the DNS records to create at your registrar. Typically:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | `76.76.21.21`          |
| CNAME | www  | `cname.vercel-dns.com` |

Use whatever Vercel actually displays — those values change. DNS usually resolves in minutes; the TLS certificate is automatic. Add `www.presidentl.app` too and let Vercel redirect it to the apex.

## 4. Verify after it's live

- Open `https://presidentl.app` on your phone → Share → **Add to Home Screen**. It should install as "Presidentl" with the top-hat icon and open full-screen with no browser chrome.
- Paste the URL into iMessage/Slack/X — you should get the social card (`og.png`). If a platform caches an old preview, use the [Facebook debugger](https://developers.facebook.com/tools/debug/) to refresh it.
- Check `https://presidentl.app/robots.txt` and `/sitemap.xml` load.
- Submit the site to [Google Search Console](https://search.google.com/search-console) and add the sitemap — that's what gets you indexed.

---

## What's in the folder

| File | Purpose |
|---|---|
| `index.html` | The entire game — markup, styles, logic, and all 47 presidents' data |
| `images/1–47.jpg` | Presidential portraits, keyed by number |
| `favicon.ico`, `favicon-32.png` | Browser tab icon |
| `icon-180.png` | iOS home-screen icon |
| `icon-192.png`, `icon-512.png` | PWA icons |
| `icon-maskable-512.png` | Android adaptive icon (safe-zone padded) |
| `og.png` | 1200×630 social share card |
| `manifest.webmanifest` | Makes it installable; sets name, colours, icons |
| `robots.txt` | Allows crawling, points to the sitemap |
| `sitemap.xml` | For Search Console |
| `vercel.json` | Security headers + cache rules (portraits cached a year, HTML never) |

## URLs

Hash routing means each page is linkable and the Back button works:

```
/            lobby
/#/play      the daily puzzle
/#/quiz      pub quiz
/#/stats     your stats
/#/about     about
/#/privacy   privacy
/#/terms     terms
/#/more      more games (Orbil)
```

## Indexing, then AdSense review — in that order

Do these in sequence. Requesting review before Google has crawled the site is the
most common way to collect an avoidable rejection.

### 1. Search Console

1. [Google Search Console](https://search.google.com/search-console) → *Add property* → **Domain** → `presidentl.app`.
2. It'll give you a TXT record. Add it at your registrar's DNS, then click Verify.
   (Domain property covers www/apex/http/https in one go — simpler than the URL-prefix option.)
3. *Sitemaps* → submit `sitemap.xml`.
4. *URL Inspection* → paste each URL → **Request Indexing**:
   - `https://presidentl.app/`
   - `https://presidentl.app/about`
   - `https://presidentl.app/privacy`
5. On the homepage, use *Test Live URL* → *View Tested Page* and confirm Google sees the
   rendered game, not a blank shell.

Indexing usually takes a few days. Check *Pages* for "Indexed" before moving on.

### 2. Then AdSense

1. AdSense → *Sites* → add `presidentl.app`.
2. **Privacy & messaging** → turn on the GDPR message (the certified CMP) and publish it.
   Do this *before* review — EEA traffic without it is a policy breach.
3. Confirm `presidentl.app/ads.txt` loads and matches your publisher ID.
4. *Request review.*

### Why the URLs look like this

Google indexes URLs and ignores `#fragments`, so `/#/about` could never be indexed —
it's the same URL as `/`. That's why About and Privacy are real HTML files
(`about.html`, `privacy.html`, served at `/about` and `/privacy` via `cleanUrls`)
with their text in the source rather than drawn by JavaScript. The game itself stays a
single-page app; its internal routes (`/#/play`, `/#/quiz`, `/#/stats`, `/#/more`) are
for humans and the Back button, not for crawlers, and are deliberately absent from the
sitemap. `/contact` and `/terms` 301-redirect to the merged pages.

## Updating the game later

Re-drag the folder onto Vercel, or run `vercel --prod` again. `vercel.json` tells browsers never to cache `index.html`, so players get updates on their next visit. The portraits are cached for a year — if you ever swap one, rename it (e.g. `16-v2.jpg`) so caches don't serve the old image.

## Known gaps, honestly

- **The daily answer is guessable from the source.** Anyone who opens dev tools can read the president list and the seeding function and work out today's answer. Fine for a fun daily; if it ever matters, the answer has to come from a server.
- **Not AdSense-ready.** The current privacy policy truthfully states you collect nothing and set no cookies. The moment you add ads that becomes false and must be rewritten, and EEA/UK traffic needs a Google-certified consent platform. Worth doing deliberately, not as an afterthought.
- **Fonts load from Google Fonts.** First paint depends on a third-party request; it falls back to Georgia/system fonts offline. Self-hosting the two fonts would make it fully independent.
- **No analytics.** Vercel's built-in Web Analytics is one toggle in the dashboard and is cookie-free if you want numbers without a privacy-policy change.
