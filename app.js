/* ============================================================
   DATA — 47 U.S. Presidents
   Cleveland counted twice (22 & 24); term = first inauguration.
   ============================================================ */
const P = [
 {n:1,name:"George Washington",start:1789,end:1797,party:"None / Federalist",vp:"John Adams",event:"Presided over the first federal government and put down the Whiskey Rebellion."},
 {n:2,name:"John Adams",start:1797,end:1801,party:"Federalist",vp:"Thomas Jefferson",event:"Signed the Alien and Sedition Acts amid the Quasi-War with France."},
 {n:3,name:"Thomas Jefferson",start:1801,end:1809,party:"Democratic-Republican",vp:"Aaron Burr; George Clinton",event:"Completed the Louisiana Purchase (1803), doubling the nation's size."},
 {n:4,name:"James Madison",start:1809,end:1817,party:"Democratic-Republican",vp:"George Clinton; Elbridge Gerry",event:"Led the country through the War of 1812."},
 {n:5,name:"James Monroe",start:1817,end:1825,party:"Democratic-Republican",vp:"Daniel D. Tompkins",event:"Issued the Monroe Doctrine (1823)."},
 {n:6,name:"John Quincy Adams",start:1825,end:1829,party:"Democratic-Republican",vp:"John C. Calhoun",event:"Won the contested 'corrupt bargain' election of 1824."},
 {n:7,name:"Andrew Jackson",start:1829,end:1837,party:"Democratic",vp:"John C. Calhoun; Martin Van Buren",event:"Signed the Indian Removal Act and fought the Bank War."},
 {n:8,name:"Martin Van Buren",start:1837,end:1841,party:"Democratic",vp:"Richard M. Johnson",event:"Presided during the Panic of 1837."},
 {n:9,name:"William Henry Harrison",start:1841,end:1841,party:"Whig",vp:"John Tyler",event:"Died of illness just 31 days into his term — the shortest presidency."},
 {n:10,name:"John Tyler",start:1841,end:1845,party:"Whig / None",vp:"—",event:"First VP to succeed to the presidency; annexed Texas."},
 {n:11,name:"James K. Polk",start:1845,end:1849,party:"Democratic",vp:"George M. Dallas",event:"Won the Mexican–American War, adding the Southwest and California."},
 {n:12,name:"Zachary Taylor",start:1849,end:1850,party:"Whig",vp:"Millard Fillmore",event:"Died in office in 1850 during the slavery-in-territories crisis."},
 {n:13,name:"Millard Fillmore",start:1850,end:1853,party:"Whig",vp:"—",event:"Signed the Compromise of 1850, including the Fugitive Slave Act."},
 {n:14,name:"Franklin Pierce",start:1853,end:1857,party:"Democratic",vp:"William R. King",event:"Signed the Kansas–Nebraska Act, reigniting the slavery conflict."},
 {n:15,name:"James Buchanan",start:1857,end:1861,party:"Democratic",vp:"John C. Breckinridge",event:"Watched Southern states begin to secede before the Civil War."},
 {n:16,name:"Abraham Lincoln",start:1861,end:1865,party:"Republican",vp:"Hannibal Hamlin; Andrew Johnson",event:"Led the Union through the Civil War and issued the Emancipation Proclamation."},
 {n:17,name:"Andrew Johnson",start:1865,end:1869,party:"National Union / Democratic",vp:"—",event:"Clashed over Reconstruction and was impeached in 1868 (acquitted by one vote)."},
 {n:18,name:"Ulysses S. Grant",start:1869,end:1877,party:"Republican",vp:"Schuyler Colfax; Henry Wilson",event:"Enforced Reconstruction and fought the Ku Klux Klan."},
 {n:19,name:"Rutherford B. Hayes",start:1877,end:1881,party:"Republican",vp:"William A. Wheeler",event:"The Compromise of 1877 ended Reconstruction and withdrew federal troops."},
 {n:20,name:"James A. Garfield",start:1881,end:1881,party:"Republican",vp:"Chester A. Arthur",event:"Assassinated months into his term in 1881."},
 {n:21,name:"Chester A. Arthur",start:1881,end:1885,party:"Republican",vp:"—",event:"Signed the Pendleton Civil Service Reform Act."},
 {n:22,name:"Grover Cleveland",start:1885,end:1889,party:"Democratic",vp:"Thomas A. Hendricks",event:"First term of the only president to serve two non-consecutive terms."},
 {n:23,name:"Benjamin Harrison",start:1889,end:1893,party:"Republican",vp:"Levi P. Morton",event:"Signed the Sherman Antitrust Act (1890)."},
 {n:24,name:"Grover Cleveland",start:1893,end:1897,party:"Democratic",vp:"Adlai Stevenson I",event:"Second, non-consecutive term; faced the Panic of 1893."},
 {n:25,name:"William McKinley",start:1897,end:1901,party:"Republican",vp:"Garret Hobart; Theodore Roosevelt",event:"Won the Spanish–American War (1898); assassinated in 1901."},
 {n:26,name:"Theodore Roosevelt",start:1901,end:1909,party:"Republican",vp:"Charles W. Fairbanks",event:"Began the Panama Canal and 'trust-busting' of monopolies."},
 {n:27,name:"William Howard Taft",start:1909,end:1913,party:"Republican",vp:"James S. Sherman",event:"Pursued 'Dollar Diplomacy' and antitrust suits; later Chief Justice."},
 {n:28,name:"Woodrow Wilson",start:1913,end:1921,party:"Democratic",vp:"Thomas R. Marshall",event:"Led the U.S. through World War I and proposed the League of Nations."},
 {n:29,name:"Warren G. Harding",start:1921,end:1923,party:"Republican",vp:"Calvin Coolidge",event:"Administration marred by the Teapot Dome scandal; died in office 1923."},
 {n:30,name:"Calvin Coolidge",start:1923,end:1929,party:"Republican",vp:"Charles G. Dawes",event:"Presided over the prosperity of the Roaring Twenties."},
 {n:31,name:"Herbert Hoover",start:1929,end:1933,party:"Republican",vp:"Charles Curtis",event:"The Great Depression began months into his term (1929)."},
 {n:32,name:"Franklin D. Roosevelt",start:1933,end:1945,party:"Democratic",vp:"John Nance Garner; Henry Wallace; Harry Truman",event:"Launched the New Deal and led the U.S. through most of World War II."},
 {n:33,name:"Harry S. Truman",start:1945,end:1953,party:"Democratic",vp:"Alben W. Barkley",event:"Ordered the atomic bombings and began the Cold War containment policy."},
 {n:34,name:"Dwight D. Eisenhower",start:1953,end:1961,party:"Republican",vp:"Richard Nixon",event:"Created the Interstate Highway System and ended the Korean War."},
 {n:35,name:"John F. Kennedy",start:1961,end:1963,party:"Democratic",vp:"Lyndon B. Johnson",event:"Navigated the Cuban Missile Crisis; assassinated in Dallas in 1963."},
 {n:36,name:"Lyndon B. Johnson",start:1963,end:1969,party:"Democratic",vp:"Hubert Humphrey",event:"Signed the Civil Rights Act and launched the Great Society."},
 {n:37,name:"Richard Nixon",start:1969,end:1974,party:"Republican",vp:"Spiro Agnew; Gerald Ford",event:"Opened relations with China; resigned in 1974 over Watergate."},
 {n:38,name:"Gerald Ford",start:1974,end:1977,party:"Republican",vp:"Nelson Rockefeller",event:"Only unelected president; pardoned Richard Nixon."},
 {n:39,name:"Jimmy Carter",start:1977,end:1981,party:"Democratic",vp:"Walter Mondale",event:"Brokered the Camp David Accords; faced the Iran hostage crisis."},
 {n:40,name:"Ronald Reagan",start:1981,end:1989,party:"Republican",vp:"George H. W. Bush",event:"Cut taxes and presided over the late Cold War thaw with the USSR."},
 {n:41,name:"George H. W. Bush",start:1989,end:1993,party:"Republican",vp:"Dan Quayle",event:"Led the Gulf War coalition as the Soviet Union collapsed."},
 {n:42,name:"Bill Clinton",start:1993,end:2001,party:"Democratic",vp:"Al Gore",event:"Presided over a 1990s economic boom; impeached in 1998 (acquitted)."},
 {n:43,name:"George W. Bush",start:2001,end:2009,party:"Republican",vp:"Dick Cheney",event:"Responded to the 9/11 attacks and launched the War on Terror."},
 {n:44,name:"Barack Obama",start:2009,end:2017,party:"Democratic",vp:"Joe Biden",event:"First Black president; signed the Affordable Care Act."},
 {n:45,name:"Donald Trump",start:2017,end:2021,party:"Republican",vp:"Mike Pence",event:"First term; the COVID-19 pandemic struck in 2020."},
 {n:46,name:"Joe Biden",start:2021,end:2025,party:"Democratic",vp:"Kamala Harris",event:"Signed the Inflation Reduction Act and major infrastructure law."},
 {n:47,name:"Donald Trump",start:2025,end:null,party:"Republican",vp:"JD Vance",event:"Returned for a second, non-consecutive term in 2025."}
];
const termLabel = p => p.end ? (p.start+"–"+p.end) : (p.start+"–present");

/* Display name — presidents who served non-consecutive terms (Cleveland 22/24,
   Trump 45/47) get a (1)/(2) suffix so their two presidencies are distinguishable.
   p.name stays clean for Wikipedia lookups and portrait matching. */
(function(){
  const counts={},seen={};
  P.forEach(p=>counts[p.name]=(counts[p.name]||0)+1);
  P.forEach(p=>{
    if(counts[p.name]>1){seen[p.name]=(seen[p.name]||0)+1;p.disp=p.name+" ("+seen[p.name]+")";}
    else p.disp=p.name;
  });
})();

/* ============================================================
   PORTRAITS
   Cascade: local images/<n>.jpg  ->  Wikipedia portrait  ->  monogram
   Runs in the user's browser (needs internet only for the Wikipedia fallback).
   ============================================================ */
const wikiThumb={}; // name -> resolved url (or null)
function initials(name){
  const parts=name.replace(/[.,]/g,"").split(" ").filter(w=>w.length>1||/[A-Z]/.test(w));
  return (parts[0][0]+parts[parts.length-1][0]).toUpperCase();
}
function loadWikiThumb(name,size){
  if(name in wikiThumb) return Promise.resolve(wikiThumb[name]);
  const url="https://en.wikipedia.org/api/rest_v1/page/summary/"+encodeURIComponent(name.replace(/ /g,"_"));
  return fetch(url).then(r=>r.json()).then(j=>{
    let src=(j.originalimage&&j.originalimage.source)||(j.thumbnail&&j.thumbnail.source)||null;
    if(src&&size){ src=src.replace(/\/\d+px-/,"/"+size+"px-"); }
    wikiThumb[name]=src; return src;
  }).catch(()=>{wikiThumb[name]=null;return null;});
}
function setBg(node,url){ node.style.backgroundImage=`url("${url}")`; const s=node.querySelector("span"); if(s)s.style.display="none"; }
// Build an avatar node; fills with a picture asynchronously, keeps monogram until/unless one loads.
function avatar(p,size,extraClass){
  const px=size||44;
  const node=el(`<div class="avatar ${extraClass||''}" style="width:${px}px;height:${px}px"><span>${initials(p.name)}</span></div>`);
  const wikiSize=Math.max(160,px*2);
  // 1) try a local file first
  const probe=new Image();
  probe.onload=()=>setBg(node,probe.src);
  probe.onerror=()=>{ loadWikiThumb(p.name,wikiSize).then(u=>{ if(u) setBg(node,u); }); };
  probe.src="images/"+p.n+".jpg";
  return node;
}
function wikiURL(p){return "https://en.wikipedia.org/wiki/"+encodeURIComponent(p.name.replace(/ /g,"_"));}
function factFace(p,html){
  const w=el(`<div class="fact" style="display:flex;gap:11px;align-items:flex-start">
    <div><div>${html}</div><a class="wmore" href="${wikiURL(p)}" target="_blank" rel="noopener">Read on Wikipedia ↗</a></div></div>`);
  const a=el(`<a class="avlink" href="${wikiURL(p)}" target="_blank" rel="noopener"></a>`);
  a.appendChild(avatar(p,46));
  w.insertBefore(a,w.firstChild);
  return w;
}

/* ============================================================
   Seeded RNG (deterministic daily)
   ============================================================ */
function xmur3(str){let h=1779033703^str.length;for(let i=0;i<str.length;i++){h=Math.imul(h^str.charCodeAt(i),3432918353);h=h<<13|h>>>19;}return function(){h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return (h^=h>>>16)>>>0;};}
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return ((t^t>>>14)>>>0)/4294967296;};}
function rngFrom(seedStr){const s=xmur3(seedStr);return mulberry32(s());}
function shuffle(arr,rand){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function pickN(arr,n,rand){return shuffle(arr,rand).slice(0,n);}
function sample(arr,rand){return arr[Math.floor(rand()*arr.length)];}
function todayStr(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}

/* ============================================================
   Storage (streaks / daily completion)
   ============================================================ */
const KEY="htts_v1";
function loadState(){try{return JSON.parse(localStorage.getItem(KEY))||{};}catch(e){return {};}}
function saveState(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){}}

/* ============================================================
   App shell
   ============================================================ */
const app=document.getElementById("app");
let toastEl=document.getElementById("toast");
let toastT;
// Self-healing: if the page didn't ship a #toast element, make one. A missing
// toast must never throw — it's called mid-click-handler, so an exception here
// kills the round in progress.
function toast(msg){
  if(!toastEl || !toastEl.isConnected){
    toastEl=document.getElementById("toast");
    if(!toastEl){
      toastEl=document.createElement("div");
      toastEl.className="toast"; toastEl.id="toast";
      document.body.appendChild(toastEl);
    }
  }
  toastEl.textContent=msg; toastEl.classList.add("show");
  clearTimeout(toastT); toastT=setTimeout(()=>toastEl.classList.remove("show"),1600);
}

/* ============================================================
   SHARING — every result, always with a link back
   ============================================================ */
const SITE="https://presidentl.app";
// Fire a Vercel Web Analytics custom event (no-op if analytics isn't loaded).
function vaEvent(name, data){ try{ if(window.va) window.va('event',{name, data:data||{}}); }catch(e){} }
// Native share sheet where there is one, clipboard everywhere else.
// Every path is instrumented so we can see how often results get shared.
function shareText(txt, surface){
  const s=surface||"unknown";
  vaEvent('share_click',{surface:s});
  if(navigator.share){
    navigator.share({text:txt})
      .then(()=>vaEvent('share_completed',{surface:s, method:'native'}))
      .catch(()=>vaEvent('share_dismissed',{surface:s}));   // user cancelled the sheet
    return;
  }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt)
      .then(()=>{ vaEvent('share_completed',{surface:s, method:'copy'}); toast("Result copied"); })
      .catch(()=>toast("Couldn't copy"));
    return;
  }
  toast("Sharing not supported");
}
// Emoji grid of pass/fail flags, wrapped every `per` columns.
function emojiGrid(flags, per){
  const rows=[];
  for(let i=0;i<flags.length;i+=per) rows.push(flags.slice(i,i+per).map(f=>f?"🟩":"⬜").join(""));
  return rows.join("\n");
}
// Every share ends with a link, so a screenshot in a group chat is an invitation.
function shareResult(headline, body, path){
  // Derive which surface was shared from the headline, for the analytics label.
  const surface = /^PRESIDENTL No\./.test(headline) ? "daily"
    : /Name Them All/.test(headline) ? "quiz_nameall"
    : /Trivia/.test(headline) ? "quiz_trivia"
    : /Learning/.test(headline) ? "quiz_learning" : "other";
  shareText([headline, body, SITE+(path||"")].filter(Boolean).join("\n"), surface);
}
function shareBtn(label, fn){
  const b=el(`<button class="btn" style="margin-top:12px">${label||"Share result"}</button>`);
  b.onclick=fn; return b;
}
// Returns a single element when the template has one root, otherwise a
// DocumentFragment so multi-root templates render all of their blocks.
function el(html){
  const t=document.createElement("template");
  t.innerHTML=html.trim();
  return t.content.children.length===1 ? t.content.firstElementChild : t.content;
}
function clear(){app.innerHTML="";}
/* ---------- Chrome: bunting + header + menu ---------- */
const logoSVG=(s=32)=>`<svg width="${s}" height="${s}" viewBox="0 0 28 28" style="flex:none">
  <circle cx="14" cy="14" r="13.5" fill="#2E4A7A"/>
  <rect x="8.5" y="6" width="11" height="9" rx="1" fill="#F6EFDF"/>
  <rect x="8.5" y="12" width="11" height="3" fill="#A63A32"/>
  <rect x="5.5" y="15" width="17" height="2.6" rx="1.3" fill="#F6EFDF"/>
  <path d="M14 19 L14.9 21.3 L17.3 21.4 L15.4 22.9 L16.1 25.2 L14 23.8 L11.9 25.2 L12.6 22.9 L10.7 21.4 L13.1 21.3 Z" fill="#F6EFDF"/>
</svg>`;
const LOGO=logoSVG(32);
function header(active){
  active=active||{"/":"home","/quiz":"quiz"}[currentPath()];
  return `<div>
    <div class="bunting"></div>
    <div class="hdr">
      ${LOGO}
      <span class="wordmark">PRESIDENTL</span>
      <div class="tabs">
        <a class="tab ${active==='home'?'active':''}" href="/">HOME</a>
        <a class="tab ${active==='quiz'?'active':''}" href="/quiz">PUB QUIZ</a>
        <button class="burger" onclick="toggleMenu()" aria-label="Menu">
          <svg width="16" height="12" viewBox="0 0 16 12">
            <rect width="16" height="2.2" fill="#2E4A7A"/><rect y="4.9" width="16" height="2.2" fill="#2E4A7A"/><rect y="9.8" width="16" height="2.2" fill="#2E4A7A"/>
          </svg>
        </button>
      </div>
      <div class="menu hide" id="menu">
        <a href="/stats">STATS</a>
        <a href="/about">ABOUT</a>
        <a href="/privacy">PRIVACY &amp; TERMS</a>
        <a href="/more">MORE GAMES</a>
      </div>
    </div>
  </div>`;
}
function toggleMenu(){const m=document.getElementById("menu");if(m)m.classList.toggle("hide");}
function pageFoot(){
  return `<div class="pgfoot">
    <div class="bunting sm"></div>
    <div class="links">
      <a href="/about">ABOUT</a><a href="/privacy">PRIVACY &amp; TERMS</a>
    </div>
    <div class="copy">© 2026 PRESIDENTL · A NEW PUZZLE EVERY MIDNIGHT</div>
  </div>`;
}
/* Ads are handled by AdSense Auto ads — Google injects placements itself via the
   tag in <head>. No manual ad units here. Control placement/density in
   AdSense → Ads → your site, not in this file. */
function endPage(){app.appendChild(el(pageFoot()));}
/* Puzzle number — epoch chosen so 15 Jul 2026 = No. 213 */
function puzzleNo(){
  const epoch=new Date(2025,11,13);
  const d=new Date();
  return Math.floor((new Date(d.getFullYear(),d.getMonth(),d.getDate())-epoch)/86400000);
}
function longDate(){
  return new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'}).toUpperCase();
}

/* ---------------- HOME = the lobby ---------------- */
function Home(){
  clear();
  app.appendChild(el(header('home')));
  const st=loadState();
  const done = st.dailyDone===todayStr();
  const g=st.dailyGame;
  const solved = done && g && g.date===todayStr() && g.win;
  const played=st.played||0, wins=st.wins||0, pct=played?Math.round(wins/played*100):0;
  app.appendChild(el(`
    <div class="masthead" style="padding-bottom:10px">
      <div class="kicker">★ PUZZLE No. ${puzzleNo()} · ${longDate()} ★</div>
      <div style="margin:16px 0 8px">${logoSVG(60)}</div>
      <div class="hero" style="font-size:28px">PRESIDENTL</div>
      <div class="tagline">One puzzle · every day · no runoffs.</div>
    </div>
    <div class="sect">
      <button class="btn" onclick="navTo('/play')">${done?"See today's result":"Play today's puzzle"}</button>
      <p class="muted center" style="margin:9px 0 20px">
        ${done ? (solved ? `★ Solved in ${g.guesses.length}/${MAX_GUESSES} · next puzzle at midnight ★`
                         : "★ Today's puzzle is closed · next one at midnight ★")
               : "Six guesses. Five clues. One Commander-in-Chief."}
      </p>
      <button class="btn secondary" onclick="navTo('/quiz')">Pub quiz</button>
      <p class="muted center" style="margin:9px 0 0">Endless practice — order them by term, match vice presidents, events and portraits.</p>
    </div>
    <div class="row">
      <div class="pill"><b>${st.streak||0}</b><span>STREAK</span></div>
      <div class="pill"><b>${pct}%</b><span>WON</span></div>
      <div class="pill"><b>${played}</b><span>PLAYED</span></div>
    </div>
    <div class="howto">
      <div class="h">★ THE RULES, BRIEFLY ★</div>
      <p>Name any U.S. president. Each guess reveals how close you stand on number, vice presidents, year sworn in, party, and terms served.
      <span class="chip g">GREEN</span> is exact, <span class="chip y">GOLD</span> is close.</p>
    </div>
  `));
  endPage();
}

/* ---------------- STATS ---------------- */
function Stats(){
  clear();
  app.appendChild(el(header()));
  const st=loadState();
  const played=st.played||0, wins=st.wins||0;
  const pct=played?Math.round(wins/played*100):0;
  const dist=st.dist||{};
  const max=Math.max(1,...Object.values(dist));
  let bars="";
  for(let i=1;i<=MAX_GUESSES;i++){
    const v=dist[i]||0;
    const w=Math.max(8,Math.round(v/max*100));
    bars+=`<div class="dist"><span style="width:10px">${i}</span>
      <div class="bar ${v&&v===max?'hi':''}" style="width:${w}%">${v}</div></div>`;
  }
  app.appendChild(el(`
    <div class="masthead">
      <div class="kicker">★ THE RECORD ★</div>
      <div class="hero">YOUR STATS</div>
      <div class="tagline">Every puzzle, every streak, tallied.</div>
    </div>
    <div class="row">
      <div class="pill"><b>${st.streak||0}</b><span>STREAK</span></div>
      <div class="pill"><b>${st.best||0}</b><span>BEST</span></div>
      <div class="pill"><b>${pct}%</b><span>WON</span></div>
      <div class="pill"><b>${played}</b><span>PLAYED</span></div>
    </div>
    <div class="howto">
      <div class="h">★ GUESS DISTRIBUTION ★</div>
      <div style="padding:10px 0 0">${bars}</div>
    </div>
    <div class="sect">
      <button class="btn" onclick="navTo('/play')">Back to today's puzzle</button>
      <div style="height:10px"></div>
      <button class="btn secondary" onclick="navTo('/')">Back to home</button>
    </div>
  `));
  endPage();
}

/* ---------------- STATIC PAGES ---------------- */
function staticPage(kicker,title,bodyHTML){
  clear();
  app.appendChild(el(header()));
  app.appendChild(el(`
    <div class="masthead">
      <div class="kicker">★ ${kicker} ★</div>
      <div class="hero">${title}</div>
    </div>
    <div class="sect prose">${bodyHTML}
      <div class="stripe"></div>
      <button class="btn secondary" onclick="navTo('/')">Back to home</button>
    </div>
  `));
  endPage();
}
/* Published contact route — AdSense review expects a working one. */
const CONTACT_EMAIL="kstdyn@gmail.com";
function MoreGames(){
  clear();
  app.appendChild(el(header()));
  app.appendChild(el(`
    <div class="masthead">
      <div class="kicker">★ THE TICKET ★</div>
      <div class="hero">MORE GAMES</div>
      <div class="tagline">Other daily puzzles worth your midnight.</div>
    </div>
    <div class="sect">
      <a href="https://orbil.app" target="_blank" rel="noopener" style="text-decoration:none;display:block">
        <div class="mode-btn mode-daily" style="align-items:flex-start">
          <div class="mode-ico">🌍</div>
          <div>Orbil — the daily globe game
            <small>A country lights up on a spinning 3D globe — can you name it? Five countries a day, one per continent, the same for everyone. Free, no account.</small>
          </div>
        </div>
      </a>
      <div class="stripe"></div>
      <button class="btn secondary" onclick="navTo('/')">Back to home</button>
    </div>
  `));
  endPage();
}

/* ============================================================
   SORT COMPONENT (pointer-based drag reorder, touch-friendly)
   ============================================================ */
function makeSortList(items, container){
  // items: array of president objects in the (shuffled) starting order
  let order=items.slice();
  const list=el('<ul class="sortlist"></ul>');
  container.appendChild(list);

  function render(){
    list.innerHTML="";
    order.forEach((p,i)=>{
      const li=el(`<li class="sortItem" data-n="${p.n}">
        <div class="rank">${i+1}</div>
        <div>${p.disp}</div>
        <div class="grip">≡</div>
      </li>`);
      li.insertBefore(avatar(p,34),li.children[1]);
      list.appendChild(li);
    });
  }
  render();

  // Pointer drag logic (pointer events cover mouse + touch)
  //
  // The dragged row is offset with translateY(curY - startY). When we reorder it
  // in the DOM its *layout* position jumps by a row height, and since the
  // transform is relative to that new position the row visually leaps — which
  // immediately satisfies the next swap test, cascading it to one end of the
  // list. Fix: after every reorder, re-baseline startY by however far the row
  // just moved, so it stays visually still and only one swap happens per crossing.
  let dragEl=null,startY=0,curY=0;
  function onDown(e){
    if(e.button!==undefined && e.button!==0) return; // primary button only
    const target=e.target.closest(".sortItem");
    if(!target || !list.contains(target)) return;
    dragEl=target;
    startY=curY=e.clientY;
    dragEl.classList.add("dragging");
    dragEl.style.position="relative";
    dragEl.style.zIndex="10";
    dragEl.style.transform="translateY(0px)";
    document.addEventListener("pointermove",onMove,{passive:false});
    document.addEventListener("pointerup",onUp);
    document.addEventListener("pointercancel",onUp);
    e.preventDefault();
  }
  function moveTo(sib,after){
    const before=dragEl.getBoundingClientRect().top;
    list.insertBefore(dragEl, after ? sib.nextSibling : sib);
    const now=dragEl.getBoundingClientRect().top;
    startY += (now-before);            // compensate the layout jump
    dragEl.style.transform=`translateY(${curY-startY}px)`;
    reindex();
  }
  function onMove(e){
    if(!dragEl) return;
    e.preventDefault();
    curY=e.clientY;
    dragEl.style.transform=`translateY(${curY-startY}px)`;
    const dr=dragEl.getBoundingClientRect();
    const dragMid=dr.top+dr.height/2;
    for(const s of [...list.children]){
      if(s===dragEl) continue;
      const r=s.getBoundingClientRect();
      const mid=r.top+r.height/2;
      // DOCUMENT_POSITION_FOLLOWING => dragEl comes after s, i.e. s sits above
      const sAbove=!!(s.compareDocumentPosition(dragEl)&Node.DOCUMENT_POSITION_FOLLOWING);
      if(sAbove && dragMid<mid){ moveTo(s,false); break; }
      if(!sAbove && dragMid>mid){ moveTo(s,true);  break; }
    }
  }
  function reindex(){
    [...list.children].forEach((c,i)=>{c.querySelector(".rank").textContent=i+1;});
  }
  function onUp(){
    if(!dragEl) return;
    dragEl.classList.remove("dragging");
    dragEl.style.transform="";dragEl.style.position="";dragEl.style.zIndex="";
    dragEl=null;
    document.removeEventListener("pointermove",onMove);
    document.removeEventListener("pointerup",onUp);
    document.removeEventListener("pointercancel",onUp);
    // update order from DOM
    order=[...list.children].map(c=>P.find(p=>p.n==c.dataset.n));
  }
  list.addEventListener("pointerdown",onDown);

  return {
    getOrder:()=>[...list.children].map(c=>P.find(p=>p.n==c.dataset.n)),
    lock:(correctOrder)=>{
      [...list.children].forEach((c,i)=>{
        const n=+c.dataset.n;
        const ok=correctOrder[i].n===n;
        c.classList.add(ok?"correct":"wrong");
        const yr=P.find(p=>p.n===n);
        c.querySelector(".grip").outerHTML=`<div class="yr">${yr.start}</div>`;
      });
      list.style.pointerEvents="none";
    }
  };
}

/* ============================================================
   DAILY MODE — Guess the President (Wordle / Poeltl style)
   Columns:  #  ·  VP  ·  Year  ·  Party  ·  Terms
   ============================================================ */
const MAX_GUESSES=6;
// Number of 4-year terms each president served in (a partial term counts as 1).
const TERMS={1:2,2:1,3:2,4:2,5:2,6:1,7:2,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:2,17:1,18:2,19:1,20:1,21:1,22:1,23:1,24:1,25:2,26:2,27:1,28:2,29:1,30:2,31:1,32:4,33:2,34:2,35:1,36:2,37:2,38:1,39:1,40:2,41:1,42:2,43:2,44:2,45:1,46:1,47:1};
P.forEach(p=>p.terms=TERMS[p.n]);

function partyShort(s){
  if(/Democratic-Rep/i.test(s))return "Dem-Rep";
  if(/Democratic/i.test(s))return "Dem";
  if(/Republican/i.test(s))return "Rep";
  if(/Whig/i.test(s))return "Whig";
  if(/Federalist/i.test(s))return "Fed";
  if(/Union/i.test(s))return "Union";
  return "None";
}
function partyKey(s){
  if(/Democratic-Rep/i.test(s))return "DR";
  if(/Democratic/i.test(s))return "D";
  if(/Republican/i.test(s))return "R";
  if(/Whig/i.test(s))return "W";
  if(/Federalist/i.test(s))return "F";
  if(/Union/i.test(s))return "D";
  return "O";
}
function vpSet(p){return p.vp==="—"?[]:p.vp.split(";").map(s=>s.trim());}
function vpLast(p){const s=vpSet(p);if(!s.length)return "—";const w=s[0].split(" ");return w[w.length-1];}

function Daily(){
  const rand=rngFrom("potus-daily-"+todayStr());
  const target=sample(P,rand);
  const saved=loadState().dailyGame;
  const resume = saved && saved.date===todayStr();
  const guesses = resume ? saved.guesses.slice() : [];
  let done = resume ? saved.done : false;
  let win  = resume ? saved.win  : false;

  const fmt=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  function save(){
    const s=loadState();
    const already = s.dailyGame && s.dailyGame.date===todayStr() && s.dailyGame.done;
    s.dailyGame={date:todayStr(),guesses:guesses.slice(),done,win};
    if(done) s.dailyDone=todayStr();
    if(done && !already){
      s.played=(s.played||0)+1;
      if(win){
        const y=new Date();y.setDate(y.getDate()-1);
        s.streak=(s.lastSolved===fmt(y))?(s.streak||0)+1:1;
        s.lastSolved=todayStr();
        s.best=Math.max(s.best||0,s.streak);
        s.wins=(s.wins||0)+1;
        s.dist=s.dist||{};
        s.dist[guesses.length]=(s.dist[guesses.length]||0)+1;
      } else { s.streak=0; }
    }
    saveState(s);
  }

  // compare a guess to the target -> 5 cells (#, VP, Year, Party, Terms)
  function cellsFor(g){
    const num=(gv,tv,r)=>({cls:gv===tv?"g":(Math.abs(gv-tv)<=r?"y":"n"),arw:gv===tv?"":(tv>gv?"↑":"↓"),val:gv});
    const pMatch=partyKey(g.party)===partyKey(target.party);
    return [
      Object.assign(num(g.n,target.n,5),{lab:"#"}),
      Object.assign(num(vpSet(g).length,vpSet(target).length,1),{lab:"VPs"}),
      Object.assign(num(g.start,target.start,20),{lab:"Year"}),
      {cls:pMatch?"g":"n",arw:"",val:partyShort(g.party).toUpperCase(),lab:"Party"},
      Object.assign(num(g.terms,target.terms,1),{lab:"Terms"})
    ];
  }

  function submit(n){
    if(done||guesses.includes(n))return;
    guesses.push(n);
    if(n===target.n){done=true;win=true;}
    else if(guesses.length>=MAX_GUESSES){done=true;win=false;}
    save();render();
    if(done)setTimeout(()=>toast(win?"Solved! 🎖️":"Out of guesses"),60);
  }

  function renderInput(){
    let pending=null;
    const w=el(`<div class="searchWrap">
      <input class="searchInput" id="gi" placeholder="Name your candidate…" autocomplete="off" autocapitalize="words" autocorrect="off">
      <div class="sugg hide" id="sg"></div></div>`);
    app.appendChild(w);
    const castWrap=el(`<div style="padding:6px 16px 4px"></div>`);
    const cast=el(`<button class="btn">Cast your guess</button>`);
    castWrap.appendChild(cast); app.appendChild(castWrap);
    const inp=w.querySelector("#gi"), sg=w.querySelector("#sg");
    function hideSugg(){sg.classList.add("hide");}
    inp.addEventListener("input",()=>{
      pending=null;
      const q=inp.value.trim().toLowerCase();
      sg.innerHTML="";
      if(!q){hideSugg();return;}
      const matches=P.filter(p=>!guesses.includes(p.n)&&p.name.toLowerCase().includes(q)).slice(0,8);
      if(!matches.length){hideSugg();return;}
      matches.forEach(p=>{
        // Name only — no number, year or party, which are the very clues the board reveals.
        const b=el(`<button data-n="${p.n}"><b>${p.disp}</b></button>`);
        b.insertBefore(avatar(p,26),b.firstChild);
        b.onclick=()=>{inp.value=p.disp;pending=p.n;hideSugg();inp.focus();};
        sg.appendChild(b);
      });
      sg.classList.remove("hide");
    });
    function doCast(){
      hideSugg();
      if(pending!==null){submit(pending);return;}
      const q=inp.value.trim().toLowerCase();
      if(!q){toast("Name a candidate first");inp.focus();return;}
      const pool=P.filter(p=>!guesses.includes(p.n));
      let m=pool.filter(p=>p.disp.toLowerCase()===q);
      if(m.length!==1) m=pool.filter(p=>p.name.toLowerCase()===q);
      if(m.length!==1) m=pool.filter(p=>p.name.toLowerCase().includes(q));
      if(m.length===1) submit(m[0].n);
      else if(m.length===0) toast("No such president");
      else toast("Pick one from the list");
    }
    cast.onclick=doCast;
    inp.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); doCast(); } });
  }

  function shareG(){
    const rows=guesses.map(n=>cellsFor(P.find(p=>p.n===n)).map(c=>c.cls==="g"?"🟩":c.cls==="y"?"🟨":"⬜").join("")).join("\n");
    shareResult(`PRESIDENTL No. ${puzzleNo()} — ${win?guesses.length:"X"}/${MAX_GUESSES}`, rows, "/play");
  }

  function renderEnd(){
    const box=el(`<div class="sect">
      <div class="center">
        ${win?`<div class="kicker">★ ELECTED IN ${guesses.length} ★</div><div class="result-big">${guesses.length}/${MAX_GUESSES}</div>`
             :`<div class="kicker">★ NO CONFIRMATION ★</div><p class="muted" style="margin:6px 0 0">Out of guesses. Today's president was:</p>`}
      </div>
    </div>`);
    app.appendChild(box);
    const inner=box.querySelector(".center");
    inner.parentNode.appendChild(factFace(target,`<b>${target.disp.toUpperCase()}</b> — No. ${target.n} · ${termLabel(target)} · ${partyShort(target.party)} · ${target.terms} term${target.terms>1?'s':''}. ${target.event}`));
    const share=el('<button class="btn" style="margin-top:12px">Share result</button>');share.onclick=shareG;
    box.appendChild(share);
    // Puzzle's done for the day — the natural moment to send them to the quiz.
    // A second navigation is a second pageview, i.e. no longer a bounce.
    box.appendChild(el(`<div class="crosssell">
      <div class="h">★ THAT'S TODAY'S ★</div>
      <p>New puzzle at midnight. In the meantime, there's a whole Pub Quiz — Name Them All,
      Trivia and Learning, from easy to Extra Hard.</p></div>`));
    const q=el('<button class="btn" style="margin-top:10px">Play the Pub Quiz →</button>');q.onclick=()=>navTo('/quiz');
    box.appendChild(q);
    const st=el('<button class="btn secondary" style="margin-top:10px">See your stats</button>');st.onclick=()=>navTo('/stats');
    box.appendChild(st);
  }

  function render(){
    clear();
    app.appendChild(el(header()));
    app.appendChild(el(`<div class="masthead">
      <div class="kicker">★ PUZZLE No. ${puzzleNo()} · ${longDate()} ★</div>
      <div class="hero">GUESS TODAY'S<br>PRESIDENT</div>
      <div class="tagline">Six guesses. Five clues. One Commander-in-Chief.</div>
    </div>`));
    const board=el(`<div class="board">
      <div class="cells labels"><div>No.</div><div>VPs</div><div>YEAR</div><div>PARTY</div><div>TERMS</div></div>
    </div>`);
    app.appendChild(board);
    guesses.forEach((n,i)=>{
      const g=P.find(p=>p.n===n);
      const row=el(`<div class="guessRow">
        <div class="gName"><a class="wlink" href="${wikiURL(g)}" target="_blank" rel="noopener">${g.disp}</a><span class="num">${i+1}/${MAX_GUESSES}</span></div>
        <div class="cells"></div></div>`);
      const nameEl=row.querySelector(".gName");
      const al=el(`<a class="avlink" href="${wikiURL(g)}" target="_blank" rel="noopener"></a>`);
      al.appendChild(avatar(g,30));
      nameEl.insertBefore(al,nameEl.firstChild);
      const ce=row.querySelector(".cells");
      cellsFor(g).forEach((c,ci)=>ce.appendChild(el(
        `<div class="cell ${c.cls}" style="animation-delay:${ci*60}ms">${c.val}${c.arw}</div>`)));
      board.appendChild(row);
    });
    for(let i=guesses.length;i<MAX_GUESSES;i++){
      board.appendChild(el(`<div class="cells">${'<div class="cellEmpty"></div>'.repeat(5)}</div>`));
    }
    if(done) renderEnd(); else renderInput();
    const s=loadState();
    const played=s.played||0, wins=s.wins||0, pct=played?Math.round(wins/played*100):0;
    app.appendChild(el(`<div class="row">
      <div class="pill"><b>${s.streak||0}</b><span>STREAK</span></div>
      <div class="pill"><b>${pct}%</b><span>WON</span></div>
      <div class="pill"><b>${played}</b><span>PLAYED</span></div>
    </div>`));
    app.appendChild(el(`<div class="howto">
      <div class="h">★ HOW TO PLAY ★</div>
      <p>Name any U.S. president. Each guess reveals how close you are on number, vice presidents, year sworn in, party, and terms served.
      <span class="chip g">GREEN</span> is exact, <span class="chip y">GOLD</span> is close, and arrows point the way.</p>
    </div>`));
    endPage();
  }

  render();
}


/* ============================================================
   PUB QUIZ — setup (difficulty → mode → sub-settings) then play
   ============================================================ */

/* Difficulty is one axis across every mode. What it changes:
   · Trivia      — how many options, and how close the wrong ones sit.
   · Name Them All / Learning — how many attempts you get, whether you're told
     immediately, and whether names are suggested at all.
   Extra Hard is Hard plus no autofill: you must spell them yourself. */
const DIFFS=["easy","medium","hard","extra"];
const DIFF={
  easy:  {label:"EASY",       opts:3, sort:5, tries:3, tell:true,  suggest:true,
          blurb:"Three options from far-flung eras. Told the moment you're wrong, with three tries at each president."},
  medium:{label:"MEDIUM",     opts:4, sort:7, tries:2, tell:true,  suggest:true,
          blurb:"Four options from the same neighbourhood of history. Told when you're wrong, with one retry each."},
  hard:  {label:"HARD",       opts:6, sort:9, tries:1, tell:false, suggest:true,
          blurb:"Six options — same era, same party. One attempt each, and you learn nothing until the end."},
  extra: {label:"EXTRA HARD", opts:6, sort:9, tries:1, tell:false, suggest:false,
          blurb:"As Hard, but nothing is suggested and nothing is confirmed. Spell all 47 yourself, from memory."}
};
const MODES={
  learning:{label:"LEARNING", ico:"📖",
    sub:"Answers revealed as you go, and anything you miss comes back until you've got it."},
  nameall: {label:"NAME THEM ALL", ico:"📜",
    sub:"All 47 presidents, in order, from Washington to today."},
  trivia:  {label:"TRIVIA", ico:"🎲",
    sub:"A mix of vice presidents, events, terms, portraits and chronology."}
};
const CATS={vp:"VICE PRESIDENTS", event:"EVENTS", term:"TERMS", portrait:"PORTRAITS", order:"CHRONOLOGY"};

const QZ_DEFAULT={diff:"medium", mode:"trivia", count:10, cats:["vp","event","term","portrait","order"], drill:"trivia"};
let QZ=Object.assign({},QZ_DEFAULT,(loadState().qz)||{});
if(!DIFF[QZ.diff]) QZ.diff="medium";
function saveQZ(){const s=loadState(); s.qz=QZ; saveState(s);}
function setQZ(k,v){QZ[k]=v; saveQZ(); QuizMenu();}
function toggleCat(c){
  const i=QZ.cats.indexOf(c);
  if(i<0) QZ.cats.push(c);
  else if(QZ.cats.length>1) QZ.cats.splice(i,1);   // never let them empty it
  saveQZ(); QuizMenu();
}

/* ---------- distractors ----------
   The real difficulty lever: not how many wrong answers, but how close they sit.
   Easy pulls from far-flung eras and rival parties; hard pulls the target's
   nearest neighbours in number, era and party. Extra Hard matches Hard here —
   its bite is the missing autofill, not the options. */
function pickDistractors(pool,t,need,getText,correctText,rand){
  const near=p=>Math.abs(p.n-t.n)+Math.abs(p.start-t.start)/8+(partyKey(p.party)===partyKey(t.party)?0:8);
  const diff=QZ.diff==="extra"?"hard":QZ.diff;
  let arr=pool.slice();
  if(diff==="hard"){
    arr.sort((a,b)=>near(a)-near(b));
    arr=shuffle(arr.slice(0,Math.max(need*2,need+2)),rand);
  }else if(diff==="easy"){
    arr.sort((a,b)=>near(b)-near(a));
    arr=shuffle(arr.slice(0,Math.max(need*3,need+4)),rand);
  }else{
    arr.sort((a,b)=>near(a)-near(b));
    arr=shuffle(arr.slice(0,Math.max(need*6,Math.ceil(arr.length*0.5))),rand);
  }
  const out=[],seen=new Set([correctText]);
  const take=list=>{for(const p of list){const tx=getText(p);if(!seen.has(tx)){seen.add(tx);out.push(tx);}if(out.length>=need)return true;}return false;};
  if(!take(arr)) take(shuffle(pool,rand));   // top up if the narrow band ran dry
  return out;
}

/* ---------- answer matching ----------
   Generous but never ambiguous: full name always works; "first last" works when
   there's a middle initial; a bare surname works only when it belongs to exactly
   one president (so "Lincoln" passes, "Adams" and "Bush" don't). */
const norm=s=>String(s).toLowerCase().replace(/[.,'’\-]/g," ").replace(/\s+/g," ").trim();
const SURNAMES={};
P.forEach(p=>{
  const last=norm(p.name.split(/\s+/).pop());
  (SURNAMES[last]=SURNAMES[last]||new Set()).add(p.name);
});
function nameKeys(p){
  const keys=new Set([norm(p.name)]);
  const parts=p.name.replace(/\./g,"").split(/\s+/);
  if(parts.length>2) keys.add(norm(parts[0]+" "+parts[parts.length-1]));
  const last=norm(parts[parts.length-1]);
  if(SURNAMES[last].size===1) keys.add(last);
  return keys;
}
const NAMEKEYS=new Map(P.map(p=>[p.n,nameKeys(p)]));
const answerMatches=(input,p)=>NAMEKEYS.get(p.n).has(norm(input));

/* ---------- name entry ----------
   Suggestions show the NAME AND NOTHING ELSE. In Name Them All the prompt is the
   president's number, so a suggestion listing "No. 7 · 1829–1837" would hand over
   the answer. */
function nameInput(host, opts){
  const {suggest=true, placeholder="Name a president…", onSubmit, cta="Submit"} = opts;
  const w=el(`<div class="searchWrap" style="padding:0">
    <input class="searchInput" id="ni" placeholder="${placeholder}" autocomplete="off"
           autocapitalize="words" autocorrect="off" spellcheck="false">
    <div class="sugg hide" id="ns" style="left:0;right:0"></div></div>`);
  host.appendChild(w);
  const btn=el(`<button class="btn" style="margin-top:10px">${cta}</button>`);
  host.appendChild(btn);
  const inp=w.querySelector("#ni"), sg=w.querySelector("#ns");
  const hide=()=>sg.classList.add("hide");
  if(suggest){
    inp.addEventListener("input",()=>{
      const q=norm(inp.value); sg.innerHTML="";
      if(!q){hide();return;}
      const seen=new Set(), out=[];
      for(const p of P){
        if(seen.has(p.name)) continue;
        if(norm(p.name).includes(q)){ seen.add(p.name); out.push(p); }
        if(out.length>=6) break;
      }
      if(!out.length){hide();return;}
      out.forEach(p=>{
        const b=el(`<button type="button">${p.name}</button>`);   // name only. no number, no term.
        b.onclick=()=>{inp.value=p.name; hide(); inp.focus();};
        sg.appendChild(b);
      });
      sg.classList.remove("hide");
    });
  }
  const go=()=>{const v=inp.value.trim(); if(!v){toast("Type a name first");inp.focus();return;}
                hide(); inp.value=""; onSubmit(v);};
  btn.onclick=go;
  inp.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();go();}});
  setTimeout(()=>inp.focus(),30);
  return inp;
}

/* A "back to the daily" nudge for the end of any quiz round — a second
   navigation is a second pageview, which is what turns a bounce into a session. */
function dailyCTA(){
  const done = loadState().dailyDone===todayStr();
  const w=el(`<div>
    <div class="crosssell"><div class="h">★ THE MAIN EVENT ★</div>
      <p>${done ? "You've already solved today's puzzle — see how you did."
                : "Haven't played today's puzzle yet? Six guesses, one secret president."}</p></div>
    <button class="btn" style="margin-top:10px">${done?"See today's result →":"Play today's puzzle →"}</button>
  </div>`);
  w.querySelector("button").onclick=()=>navTo('/play');
  return w;
}

/* ---------- setup screen ---------- */
function QuizMenu(){
  clear();
  app.appendChild(el(header('quiz')));
  app.appendChild(el(`<div class="masthead">
    <div class="kicker">★ THE BACK ROOM ★</div>
    <h1 class="hero">PUB QUIZ</h1>
    <div class="tagline">Endless practice. No runoffs.</div>
  </div>`));

  // 1 — difficulty
  const d=el(`<div class="sect" style="padding-bottom:0">
    <div class="setup-h">★ 1 · DIFFICULTY ★</div>
    <div class="seg seg4">${DIFFS.map(k=>
      `<button class="${QZ.diff===k?'active':''}" data-d="${k}">${DIFF[k].label}</button>`).join("")}</div>
    <p class="muted center" style="margin:0">${DIFF[QZ.diff].blurb}</p>
  </div>`);
  d.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>setQZ("diff",b.dataset.d));
  app.appendChild(d);

  // 2 — mode
  const m=el(`<div class="sect" style="padding-bottom:0">
    <div class="setup-h">★ 2 · GAME MODE ★</div>
    <div class="grid"></div>
  </div>`);
  const grid=m.querySelector(".grid");
  Object.keys(MODES).forEach(k=>{
    const b=el(`<button class="mode-btn ${QZ.mode===k?'mode-daily picked':'mode-quiz'}">
      <div class="mode-ico">${MODES[k].ico}</div>
      <div>${MODES[k].label}<small>${MODES[k].sub}</small></div>
    </button>`);
    b.onclick=()=>setQZ("mode",k);
    grid.appendChild(b);
  });
  app.appendChild(m);

  // 3 — sub-settings, only where the mode has any
  const subs=modeSubSettings();
  if(subs) app.appendChild(subs);

  // 4 — start
  const s=el(`<div class="sect"><button class="btn">Start ${MODES[QZ.mode].label.toLowerCase()}</button></div>`);
  s.querySelector("button").onclick=startQuiz;
  app.appendChild(s);
  app.appendChild(el(`<p class="foot">${DIFF[QZ.diff].label} · ${MODES[QZ.mode].label}</p>`));
  endPage();
}

function modeSubSettings(){
  if(QZ.mode==="learning"){
    const w=el(`<div class="sect" style="padding-bottom:0">
      <div class="setup-h">★ 3 · WHAT TO DRILL ★</div>
      <div class="seg">
        <button data-k="order" class="${QZ.drill==='order'?'active':''}">THE ORDER</button>
        <button data-k="trivia" class="${QZ.drill==='trivia'?'active':''}">TRIVIA</button>
      </div>
      <p class="muted center" style="margin:0">${QZ.drill==='order'
        ? "Work through all 47 in order. Miss one and you're told who it was — then it comes back later."
        : "Mixed trivia. Every miss is explained, and the question returns until you get it."}</p>
    </div>`);
    w.querySelectorAll("[data-k]").forEach(b=>b.onclick=()=>setQZ("drill",b.dataset.k));
    return w;
  }
  if(QZ.mode==="trivia"){
    const w=el(`<div class="sect" style="padding-bottom:0">
      <div class="setup-h">★ 3 · QUESTIONS ★</div>
      <div class="seg">
        ${[10,20,0].map(n=>`<button data-n="${n}" class="${QZ.count===n?'active':''}">${n||"ENDLESS"}</button>`).join("")}
      </div>
      <div class="setup-h" style="margin-top:16px">★ CATEGORIES ★</div>
      <div class="cats">${Object.keys(CATS).map(c=>
        `<button data-c="${c}" class="cat ${QZ.cats.includes(c)?'on':''}">${CATS[c]}</button>`).join("")}</div>
      <p class="muted center" style="margin:8px 0 0">Tap to include or exclude. At least one stays on.</p>
    </div>`);
    w.querySelectorAll("[data-n]").forEach(b=>b.onclick=()=>setQZ("count",+b.dataset.n));
    w.querySelectorAll("[data-c]").forEach(b=>b.onclick=()=>toggleCat(b.dataset.c));
    return w;
  }
  // Name Them All: difficulty already says everything that matters
  const cfg=DIFF[QZ.diff];
  return el(`<div class="sect" style="padding-bottom:0">
    <div class="setup-h">★ 3 · HOW IT'LL GO ★</div>
    <div class="fact"><b>${cfg.tries}</b> attempt${cfg.tries>1?"s":""} at each president ·
      ${cfg.tell?"told immediately when wrong":"no feedback until the end"} ·
      ${cfg.suggest?"names suggested as you type":"<b>no name suggestions — spelling is on you</b>"}</div>
  </div>`);
}

function startQuiz(){
  if(QZ.mode==="nameall") return NameThemAll();
  if(QZ.mode==="learning") return QZ.drill==="order" ? Learning("order") : Learning("trivia");
  return Trivia();
}

/* ============================================================
   NAME THEM ALL — 47 in order
   ============================================================ */
function NameThemAll(){
  const cfg=DIFF[QZ.diff];
  const answers=new Array(P.length).fill(null);   // {ok, said}
  let i=0, tries=0;

  function finish(){
    const got=answers.filter(a=>a&&a.ok).length;
    clear(); app.appendChild(el(header('quiz')));
    app.appendChild(el(`<div class="masthead">
      <div class="kicker">★ ${DIFF[QZ.diff].label} · NAME THEM ALL ★</div>
      <div class="result-big">${got}/${P.length}</div>
      <div class="tagline">${got===P.length?"Every last one. Extraordinary."
        :got>=40?"A commanding performance."
        :got>=25?"A respectable showing.":"The Republic forgives you."}</div>
    </div>`));
    const list=el('<div class="sect" style="padding-top:8px"></div>');
    P.forEach((p,k)=>{
      const a=answers[k];
      const ok=a&&a.ok;
      const row=el(`<div class="nrow ${ok?'ok':'bad'}">
        <span class="nnum">${p.n}</span>
        <span class="nname">${p.disp}</span>
        ${ok?'<span class="ntick">✓</span>'
            :`<span class="nsaid">${a&&a.said?`you said “${a.said}”`:"skipped"}</span>`}
      </div>`);
      list.appendChild(row);
    });
    app.appendChild(list);
    const btns=el('<div class="sect"></div>');
    btns.appendChild(shareBtn("Share result",()=>shareResult(
      `PRESIDENTL · Name Them All (${DIFF[QZ.diff].label.toLowerCase()}) — ${got}/${P.length}`,
      emojiGrid(answers.map(a=>!!(a&&a.ok)),10), "/quiz")));
    btns.appendChild(el('<div style="height:10px"></div>'));
    const again=el('<button class="btn secondary">Try again</button>'); again.onclick=NameThemAll; btns.appendChild(again);
    btns.appendChild(el('<div style="height:10px"></div>'));
    const back=el('<button class="btn secondary">Change setup</button>'); back.onclick=QuizMenu; btns.appendChild(back);
    btns.appendChild(dailyCTA());
    app.appendChild(btns); endPage();
  }

  function render(msg){
    if(i>=P.length) return finish();
    clear(); app.appendChild(el(header('quiz')));
    const p=P[i];
    app.appendChild(el(`<div class="masthead" style="padding-bottom:6px">
      <div class="kicker">★ ${DIFF[QZ.diff].label} · ${i+1} OF ${P.length} ★</div>
      <h1 class="hero" style="font-size:22px">WHO WAS PRESIDENT No. ${p.n}?</h1>
      ${cfg.tries>1?`<div class="tagline">${cfg.tries-tries} attempt${cfg.tries-tries>1?"s":""} left</div>`:""}
    </div>`));
    // the filling list — the satisfying part
    const strip=el('<div class="sect" style="padding:8px 16px 0"></div>');
    const from=Math.max(0,i-4);
    for(let k=from;k<i;k++){
      const a=answers[k];
      strip.appendChild(el(`<div class="nrow ${cfg.tell?(a.ok?'ok':'bad'):'done'}">
        <span class="nnum">${P[k].n}</span>
        <span class="nname">${cfg.tell?(a.ok?P[k].disp:(a.said||"—")):(a.said||"—")}</span>
        ${cfg.tell?(a.ok?'<span class="ntick">✓</span>':'<span class="ntick">✗</span>'):''}
      </div>`));
    }
    app.appendChild(strip);
    const host=el('<div class="sect" style="padding-top:10px"></div>');
    app.appendChild(host);
    if(msg) host.appendChild(el(`<div class="fact center" style="margin:0 0 10px">${msg}</div>`));
    nameInput(host,{suggest:cfg.suggest, cta:"Submit", placeholder:cfg.suggest?"Name a president…":"Spell the name…",
      onSubmit:v=>{
        const ok=answerMatches(v,p);
        if(ok){ answers[i]={ok:true,said:v}; i++; tries=0; render(); return; }
        tries++;
        if(cfg.tell && tries<cfg.tries){ render(`Not <b>${v}</b>. Try again.`); return; }
        answers[i]={ok:false,said:v}; i++; tries=0;
        render(cfg.tell?`No — that was <b>${p.disp}</b>.`:"");
      }});
    const skip=el('<button class="btn secondary" style="margin-top:10px">Skip</button>');
    skip.onclick=()=>{answers[i]={ok:false,said:null}; i++; tries=0; render();};
    host.appendChild(skip);
    app.appendChild(el(`<p class="foot">${cfg.suggest?"":"no suggestions · "}${cfg.tell?"":"answers at the end"}</p>`));
    endPage();
  }
  render();
}

/* ============================================================
   LEARNING — tells you the answer, then brings it back
   ============================================================ */
function Learning(drill){
  const rand=rngFrom("learn-"+drill+"-"+Date.now());
  const cfg=DIFF[QZ.diff];
  // queue of president numbers (order drill) or question specs (trivia drill)
  let queue = drill==="order" ? P.map(p=>p.n) : buildTriviaQueue(rand, 0);
  const total=queue.length;
  let done=0, misses=0;

  function requeue(item){
    // back it comes — far enough away to be a real recall test, close enough to matter
    const at=Math.min(queue.length, 4+Math.floor(rand()*3));
    queue.splice(at,0,item);
  }
  function finish(){
    clear(); app.appendChild(el(header('quiz')));
    app.appendChild(el(`<div class="masthead">
      <div class="kicker">★ LEARNING · ${drill==="order"?"THE ORDER":"TRIVIA"} ★</div>
      <div class="result-big">${total}</div>
      <div class="tagline">All learned${misses?` — after ${misses} miss${misses>1?"es":""}`:", first time through"}.</div>
    </div>`));
    const b=el('<div class="sect"></div>');
    b.appendChild(shareBtn("Share result",()=>shareResult(
      `PRESIDENTL · Learning (${drill==="order"?"the order":"trivia"})`,
      `Learned all ${total}${misses?` — after ${misses} miss${misses>1?"es":""}`:", first time through"}.`, "/quiz")));
    b.appendChild(el('<div style="height:10px"></div>'));
    const again=el('<button class="btn secondary">Go again</button>'); again.onclick=()=>Learning(drill); b.appendChild(again);
    b.appendChild(el('<div style="height:10px"></div>'));
    const back=el('<button class="btn secondary">Change setup</button>'); back.onclick=QuizMenu; b.appendChild(back);
    b.appendChild(dailyCTA());
    app.appendChild(b); endPage();
  }
  function next(){
    if(!queue.length) return finish();
    clear(); app.appendChild(el(header('quiz')));
    const item=queue.shift();
    app.appendChild(el(`<div class="masthead" style="padding-bottom:6px">
      <div class="kicker">★ LEARNING · ${queue.length} TO GO ★</div>
    </div>`));
    const host=el('<div class="sect"></div>'); app.appendChild(host);

    if(drill==="order"){
      const p=P.find(x=>x.n===item);
      host.appendChild(el(`<div class="prompt center">Who was president No. ${p.n}?</div>`));
      nameInput(host,{suggest:cfg.suggest, cta:"Check",
        onSubmit:v=>{
          const ok=answerMatches(v,p);
          if(!ok) misses++;
          reveal(host,p,ok,()=>{ if(!ok) requeue(item); else done++; next(); });
        }});
    } else {
      askTrivia(host,item,rand,(ok,t)=>{
        if(!ok){ misses++; requeue(item); } else done++;
        const cont=el('<button class="btn" style="margin-top:12px">Continue</button>');
        cont.onclick=next; host.appendChild(cont);
      }, true);
    }
    app.appendChild(el(`<p class="foot">learning · every miss comes back</p>`));
    endPage();
  }
  function reveal(host,p,ok,cont){
    host.innerHTML="";
    host.appendChild(el(`<div class="prompt center">${ok?"Correct":"Not quite"}</div>`));
    host.appendChild(factFace(p,`<b>${p.disp}</b> — No. ${p.n} · ${termLabel(p)} · ${partyShort(p.party)}. ${p.event}`));
    const b=el(`<button class="btn" style="margin-top:12px">${ok?"Next":"Got it — bring it back later"}</button>`);
    b.onclick=cont; host.appendChild(b);
  }
  next();
}

/* ============================================================
   TRIVIA — a mix of everything
   ============================================================ */
function buildTriviaQueue(rand, count){
  const cats=QZ.cats.length?QZ.cats:["vp","event","term","portrait","order"];
  const n=count||10;
  const q=[];
  for(let k=0;k<n;k++){
    const cat=cats[Math.floor(rand()*cats.length)];
    let t=sample(P,rand);
    if(cat==="vp"){ const pool=P.filter(p=>p.vp!=="—"); t=sample(pool,rand); }
    q.push({cat, n:t.n});
  }
  return q;
}
function Trivia(){
  const rand=rngFrom("trivia-"+Date.now());
  const endless=QZ.count===0;
  const total=endless?Infinity:QZ.count;
  let i=0, score=0; const marks=[];
  function next(){
    if(i>=total) return result();
    clear(); app.appendChild(el(header('quiz')));
    const spec=buildTriviaQueue(rand,1)[0];
    const dots=endless?"":`<div class="progress">${Array.from({length:QZ.count},(_,k)=>
      `<div class="dot ${k<i?'done':k===i?'on':''}"></div>`).join("")}</div>`;
    const wrap=el(`<div class="card">${dots}<div id="q"></div></div>`);
    app.appendChild(wrap);
    askTrivia(wrap.querySelector("#q"), spec, rand, ok=>{
      if(ok) score++;
      marks.push(!!ok);
      const cont=el('<button class="btn" style="margin-top:12px">'+(endless?"Next":(i+1>=total?"See result":"Next"))+'</button>');
      cont.onclick=()=>{i++;next();};
      wrap.querySelector("#q").appendChild(cont);
    });
    app.appendChild(el(`<p class="foot">${DIFF[QZ.diff].label} · ${endless?`question ${i+1}`:`question ${i+1} of ${QZ.count}`} · score ${score}</p>`));
    if(endless){
      const stop=el('<div class="sect"><button class="btn secondary">Finish</button></div>');
      stop.querySelector("button").onclick=result; app.appendChild(stop);
    }
    endPage();
  }
  function result(){
    clear(); app.appendChild(el(header('quiz')));
    const asked=i||1;
    app.appendChild(el(`<div class="masthead">
      <div class="kicker">★ ${DIFF[QZ.diff].label} · TRIVIA ★</div>
      <div class="result-big">${score}/${i}</div>
      <div class="tagline">${Math.round(score/asked*100)}% — ${score/asked>=.9?"Cabinet material."
        :score/asked>=.7?"A solid showing.":score/asked>=.5?"Room to revise.":"The Republic forgives you."}</div>
    </div>`));
    const b=el('<div class="sect"></div>');
    b.appendChild(shareBtn("Share result",()=>shareResult(
      `PRESIDENTL · Trivia (${DIFF[QZ.diff].label.toLowerCase()}) — ${score}/${marks.length}`,
      emojiGrid(marks,10), "/quiz")));
    b.appendChild(el('<div style="height:10px"></div>'));
    const again=el('<button class="btn secondary">Play again</button>'); again.onclick=Trivia; b.appendChild(again);
    b.appendChild(el('<div style="height:10px"></div>'));
    const back=el('<button class="btn secondary">Change setup</button>'); back.onclick=QuizMenu; b.appendChild(back);
    b.appendChild(dailyCTA());
    app.appendChild(b); endPage();
  }
  next();
}

/* One trivia question of any category. onDone(ok, target). */
function askTrivia(host, spec, rand, onDone, explain){
  const t=P.find(p=>p.n===spec.n);
  const cfg=DIFF[QZ.diff];
  if(spec.cat==="order") return askOrder(host,t,rand,onDone);

  let prompt,sub,correctText,getText,pool;
  if(spec.cat==="vp"){
    prompt=`Who was <b>${t.disp}'s</b> vice president?`; sub="MATCH THE VP";
    const fv=t.vp.split(";")[0].trim(); correctText=fv;
    // Exclude any president whose (first) VP was ALSO a real VP of the target —
    // e.g. George Clinton served Jefferson too, so offering him against Jefferson
    // would mark a correct answer wrong. Compare against the target's FULL VP list.
    const tvps=vpSet(t);
    pool=P.filter(p=>p.vp!=="—" && !tvps.includes(p.vp.split(";")[0].trim())); getText=p=>p.vp.split(";")[0].trim();
  }else if(spec.cat==="event"){
    prompt=`“${t.event}”`; sub="WHICH PRESIDENT?"; correctText=t.disp;
    pool=P.filter(p=>p.name!==t.name); getText=p=>p.disp;
  }else if(spec.cat==="term"){
    prompt=`When did <b>${t.disp}</b> serve?`; sub="MATCH THE TERM"; correctText=termLabel(t);
    pool=P.filter(p=>termLabel(p)!==termLabel(t)); getText=p=>termLabel(p);
  }else{ // portrait
    prompt=""; sub="NAME THAT PRESIDENT"; correctText=t.name;
    pool=P.filter(p=>p.name!==t.name); getText=p=>p.name;
  }
  const distract=pickDistractors(pool,t,cfg.opts-1,getText,correctText,rand);
  const opts=shuffle([correctText,...distract],rand);
  host.appendChild(el(`<div class="subprompt center">${sub}</div>`));
  if(spec.cat==="portrait"){
    const f=el('<div class="center"></div>'); f.appendChild(avatar(t,150,"big")); host.appendChild(f);
  } else host.appendChild(el(`<div class="prompt">${prompt}</div>`));
  const ow=el('<div class="opts"></div>'); host.appendChild(ow);
  let answered=false;
  opts.forEach(o=>{
    const b=el(`<button class="opt">${o}</button>`);
    b.onclick=()=>{
      if(answered)return; answered=true;
      const ok=o===correctText;
      [...ow.children].forEach(c=>{
        if(c.textContent===correctText)c.classList.add("correct");
        else if(c===b)c.classList.add("wrong"); else c.classList.add("dim");
      });
      toast(ok?"Correct":"Nope");
      host.appendChild(factFace(t,`<b>${t.disp}</b> — No. ${t.n} · ${termLabel(t)} · ${partyShort(t.party)}. ${t.event}`));
      onDone(ok,t);
    };
    ow.appendChild(b);
  });
}

/* Chronology round — the old Sort Challenge, now one of the trivia categories. */
function askOrder(host,t,rand,onDone){
  const cfg=DIFF[QZ.diff];
  const N=cfg.sort;
  let items;
  if(QZ.diff==="hard"||QZ.diff==="extra"){
    const s=Math.max(0,Math.min(P.length-N, t.n-1-Math.floor(N/2)));
    items=P.slice(s,s+N);                     // a consecutive run: no era gaps to help
  } else items=pickN(P,N,rand);
  host.appendChild(el(`<div class="subprompt center">CHRONOLOGY</div>
    <div class="prompt">Drag these ${N} into order — earliest at the top.</div>`));
  const holder=el('<div></div>'); host.appendChild(holder);
  const sorter=makeSortList(shuffle(items,rand),holder);
  const btn=el('<button class="btn" style="margin-top:6px">Lock in order</button>');
  host.appendChild(btn);
  btn.onclick=()=>{
    const guess=sorter.getOrder();
    // Harrison & Tyler (both 1841) and Garfield & Arthur (both 1881) share a start
    // year; break ties by presidential number so the accepted order is always the
    // true one, without relying on sort stability.
    const correct=items.slice().sort((a,b)=>(a.start-b.start)||(a.n-b.n));
    let hits=0; guess.forEach((g,k)=>{if(g.n===correct[k].n)hits++;});
    sorter.lock(correct);
    const ok=hits===N;
    btn.outerHTML=`<div class="fact center"><b>${hits}/${N}</b> in the right place</div>`;
    toast(ok?"Flawless":hits>=Math.ceil(N*.7)?"Close":"Keep practising");
    onDone(ok,t);
  };
}

/* ============================================================
   ROUTING — real URLs, one page per view.
   Each path is a genuine HTML file serving its own crawlable content, so
   navigation is ordinary links and the browser does the routing for us.
   ============================================================ */
const ROUTES={
  "/":Home, "/play":Daily, "/quiz":QuizMenu, "/stats":Stats, "/more":MoreGames
};
function currentPath(){
  let p=location.pathname.replace(/\/index\.html$/,"/").replace(/\.html$/,"");
  if(p.length>1) p=p.replace(/\/$/,"");
  return ROUTES[p]?p:"/";
}
// Real navigation. Sub-views within a page (quiz questions, guesses) still
// re-render in place; only cross-page moves hit the network.
function navTo(path){
  if(currentPath()===path){ renderRoute(); return; }
  location.href=path;
}
function renderRoute(){
  const m=document.getElementById("menu"); if(m) m.classList.add("hide");
  (ROUTES[currentPath()]||Home)();
}

/* boot */
renderRoute();
