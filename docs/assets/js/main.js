/* ============ Swiff Bounty - main.js ============ */

/* ---- Data ---- */
const tracks = [
  { title: "Modern Jungle", date: "5 déc 2025", type: "album", yt: "kjgHtYrj_nA", cover: "assets/img/covers/pochette-modern-jungle-v2.jpg", playlist: "PLEQHouVYID5H1ZfCcvElC-zK61wlEyM6Q", link: "https://wiseband.lnk.to/Swiff-Bounty-Modern-Jungle", badge: "Album" },
  { title: "Be Ruff", date: "28 nov 2025", type: "visualizer", yt: "xkP7cPlSuPI", link: "https://wiseband.lnk.to/Swiff-Bounty-Be-Ruff" },
  { title: "Good Times", date: "30 oct 2025", type: "clip", yt: "VDaJe8f1_qc", link: "https://wiseband.lnk.to/Swiff-Bounty-Good-Times" },
  { title: "Run the Track", date: "10 oct 2025", type: "clip", yt: "kjgHtYrj_nA", link: "https://wiseband.lnk.to/Swiff-Bounty-Faya-Pyd-Cozik-Run-The-Track" },
  { title: "Flamming Soul", date: "27 mai 2025", type: "clip", yt: "1sLDdVg2S3w", link: "https://open.spotify.com/intl-fr/track/5ll1WxWijqjHzL1wng644Y" },
  { title: "Short Remix - Série n°1", date: "2025", type: "clip", yt: "brP1eqxWkCg", playlist: "PLEQHouVYID5H0-dq6d5cVq-WaJNj4pb2R", link: "https://open.spotify.com/artist/4aZOR8MAhs4QKX2pUvTEjI" },
  { title: "Like a Storm", date: "20 janv 2025", type: "clip", yt: "6prtKJXYOxQ", link: "https://wiseband.lnk.to/Swiff-Bounty-Like-A-Storm" },
  { title: "Like the Sun", date: "19 janv 2024", type: "clip", yt: "Z3YieICV8mE", link: "https://wiseband.lnk.to/Swiff-Bounty-Like-The-Sun" },
  { title: "La Paix", date: "14 juil 2023", type: "visualizer", yt: "CQgDo7XeCcw", link: "https://wiseband.lnk.to/Swiff-Bounty-La-Paix" },
  { title: "Vaillant", date: "5 mai 2023", type: "visualizer", yt: "fth2nh0gJMM", link: "https://wiseband.lnk.to/Swiff-Bounty-Vaillant" },
];

const videos = [
  { title: "Run the Track", type: "clip", yt: "kjgHtYrj_nA" },
  { title: "Good Times", type: "clip", yt: "VDaJe8f1_qc" },
  { title: "Like a Storm", type: "clip", yt: "6prtKJXYOxQ" },
  { title: "Like the Sun", type: "clip", yt: "Z3YieICV8mE" },
  { title: "Flamming Soul", type: "clip", yt: "1sLDdVg2S3w" },
  { title: "Be Ruff", type: "visualizer", yt: "xkP7cPlSuPI" },
  { title: "Vaillant", type: "visualizer", yt: "fth2nh0gJMM" },
  { title: "La Paix", type: "visualizer", yt: "CQgDo7XeCcw" },
];

const photos = [
  "photo-couv-2025.jpeg",
  "couv-2025-face.jpeg",
  "couv-2025-profil.jpeg",
  "DSC07447-Modifier.jpg",
  "DSC07458.jpg",
  "DSC07501-Modifier-Modifier.jpg",
  "DSC07650.jpg",
  "DSC07688-Modifier.jpg",
  "DSC07691-Modifier.jpg",
  "DSC08056-Modifier.jpg",
  "A7405588.jpg",
  "4466.jpg",
  "464810800_872452425035752_9050805074011595582_n.jpg",
  "464865445_872452328369095_7716067350802011596_n.jpg",
  "464969468_872452058369122_1932927156611793003_n.jpg",
  "465149601_872452658369062_1812988239041034570_n.jpg",
  "465277746_872453131702348_1293497862133730910_n.jpg",
];

const concerts = [
  { day: "30", month: "Mai", year: 2026, venue: "Noktambül", city: "Rennes", note: "Bouyaka Party" },
  { day: "05", month: "Juin", year: 2026, venue: "Bar Le QG", city: "Le Petit Fougeray" },
  { day: "06", month: "Juin", year: 2026, venue: "Festival des Pelos Locos", city: "Tressé (35)" },
  { day: "19", month: "Juin", year: 2026, venue: "Tremplin des Nuits de l'Erdre", city: "Nort-sur-Erdre" },
  { day: "20", month: "Juin", year: 2026, venue: "Bar La Cambuse", city: "Langouët (35)", with: "The Fanatiks" },
  { day: "11", month: "Juillet", year: 2026, venue: "Festival de Pancé", city: "Pancé (35)" },
  { day: "24", month: "Juillet", year: 2026, venue: "Guinguette de Camille et Léon", city: "St-Erblon (35)" },
  { day: "07", month: "Septembre", year: 2026, venue: "Guinguette de Kercabiron", city: "Le Cours (56)" },
  { day: "11", month: "Septembre", year: 2026, venue: "Bistrot la maison", city: "Bain-sur-Oust" },
  { day: "03", month: "Octobre", year: 2026, venue: "Convention Tatoo Encreetsens", city: "Pornichet" },
  { day: "11", month: "Décembre", year: 2026, venue: "CAP", city: "Pancé (35)" },
];

const audioPlaylist = [
  { title: "Run the Track", file: "run-the-track.mp3" },
  { title: "Good Times", file: "good-times.mp3" },
  { title: "Be Ruff", file: "be-ruff.mp3" },
  { title: "Flaming Soul", file: "flaming-soul.mp3" },
  { title: "Moonlight", file: "moonlight.mp3" },
  { title: "Soul Quest", file: "soul-quest.mp3" },
  { title: "El Barrio", file: "el-barrio.mp3" },
  { title: "Ina di Yard", file: "ina-di-yard.mp3" },
  { title: "No Judgment", file: "no-judgment.mp3" },
];

/* ---- Render discographie ---- */
const discoGrid = document.getElementById("discoGrid");
tracks.forEach(t => {
  const card = document.createElement("div");
  card.className = "track-card";
  card.dataset.yt = t.yt;
  card.dataset.playlist = t.playlist || "";
  card.innerHTML = `
    ${t.badge ? `<span class="track-badge ${t.type === 'album' ? 'album' : ''}">${t.badge}</span>` : ""}
    <div class="track-cover">
      <img src="${t.cover || `https://img.youtube.com/vi/${t.yt}/hqdefault.jpg`}"
           alt="${t.title}" loading="lazy">
    </div>
    <div class="track-info">
      <h3>${t.title}</h3>
      <div class="track-date">${t.date}</div>
    </div>
  `;
  if (t.link) {
    card.addEventListener("click", () => window.open(t.link, "_blank", "noopener"));
  } else {
    card.style.cursor = "default";
  }
  discoGrid.appendChild(card);
});

/* ---- Render videos ---- */
const videoGrid = document.getElementById("videoGrid");
function renderVideos(filter = "all") {
  videoGrid.innerHTML = "";
  videos.filter(v => filter === "all" || v.type === filter).forEach(v => {
    const c = document.createElement("div");
    c.className = "video-card reveal";
    c.innerHTML = `
      <div class="video-embed" data-yt="${v.yt}" role="button" tabindex="0" aria-label="Lire ${v.title}">
        <img src="https://img.youtube.com/vi/${v.yt}/hqdefault.jpg" alt="${v.title}" loading="lazy">
        <div class="play-overlay">▶</div>
      </div>
      <div class="label">
        <span>${v.title}</span>
        <small>${v.type}</small>
      </div>
    `;
    const facade = c.querySelector(".video-embed");
    facade.addEventListener("click", () => swapFacade(facade));
    facade.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); swapFacade(facade); } });
    videoGrid.appendChild(c);
  });
  observeReveal();
}
function swapFacade(el) {
  const yt = el.dataset.yt;
  el.innerHTML = `<iframe src="https://www.youtube.com/embed/${yt}?autoplay=1"
    title="YouTube"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`;
  pausePlayer();
}
renderVideos();
document.querySelectorAll(".video-tabs button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".video-tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderVideos(btn.dataset.filter);
  });
});

/* ---- Render photos ---- */
const photoGrid = document.getElementById("photoGrid");
photos.forEach(p => {
  const fig = document.createElement("figure");
  fig.innerHTML = `<img src="assets/img/photos/${p}" alt="Swiff Bounty" loading="lazy">`;
  fig.addEventListener("click", () => openImage(`assets/img/photos/${p}`));
  photoGrid.appendChild(fig);
});

/* ---- Lightbox ---- */
const lb = document.getElementById("lightbox");
const lbContent = document.getElementById("lightboxContent");
function openImage(src) {
  lbContent.innerHTML = `<img src="${src}" alt="">`;
  lb.classList.add("open");
}
let audioWasPlaying = false;
function openVideo(yt, playlist) {
  const src = playlist
    ? `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&list=${playlist}`
    : `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1`;
  lbContent.innerHTML = `<iframe src="${src}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  lb.classList.add("open");
  audioWasPlaying = isPlaying;
  pausePlayer();
}
function closeLightbox() {
  lb.classList.remove("open");
  lbContent.innerHTML = "";
  if (audioWasPlaying) resumePlayer();
  audioWasPlaying = false;
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ---- Concert date utils ---- */
const FR_MONTHS = {
  'Janvier':0,'Février':1,'Mars':2,'Avril':3,'Mai':4,
  'Juin':5,'Juillet':6,'Août':7,'Septembre':8,'Octobre':9,'Novembre':10,'Décembre':11
};
const FR_MONTH_ABBR = {
  'Janvier':'JANV','Février':'FÉVR','Mars':'MARS','Avril':'AVRI',
  'Mai':'MAI','Juin':'JUIN','Juillet':'JUIL','Août':'AOÛT',
  'Septembre':'SEPT','Octobre':'OCT','Novembre':'NOV','Décembre':'DÉC'
};
function concertDateObj(c) {
  return new Date(c.year, FR_MONTHS[c.month], parseInt(c.day, 10));
}
function proximityBadge(c) {
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((concertDateObj(c) - today) / 86400000);
  if (diff < 0) return '';
  if (diff === 0) return "<span class=\"prox-badge today\">Aujourd'hui !</span>";
  if (diff === 1) return '<span class="prox-badge soon">Demain !</span>';
  if (diff <= 6) return `<span class="prox-badge soon">Dans ${diff} jours</span>`;
  return '';
}
function downloadIcal(c) {
  const d = concertDateObj(c);
  const pad = n => String(n).padStart(2,'0');
  const fmt = dt => `${dt.getFullYear()}${pad(dt.getMonth()+1)}${pad(dt.getDate())}`;
  const endDay = new Date(d); endDay.setDate(endDay.getDate() + 1);
  const desc = ['Concert Swiff Bounty', c.note, c.with ? `avec ${c.with}` : ''].filter(Boolean).join(' – ');
  const ics = [
    'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Swiff Bounty//FR',
    'BEGIN:VEVENT',
    `UID:swiff-${c.year}-${c.month}-${c.day}@swiffbounty.fr`,
    `DTSTART;VALUE=DATE:${fmt(d)}`,
    `DTEND;VALUE=DATE:${fmt(endDay)}`,
    `SUMMARY:Swiff Bounty – ${c.venue}`,
    `LOCATION:${c.venue}\\, ${c.city}`,
    `DESCRIPTION:${desc}`,
    'END:VEVENT','END:VCALENDAR'
  ].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = `swiff-bounty-${c.year}-${c.month}-${c.day}.ics`;
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ---- Render concerts ---- */
const concertList = document.getElementById("concertList");
concerts.forEach(c => {
  const row = document.createElement("div");
  row.className = "concert-row";
  row.innerHTML = `
    <div class="concert-date">
      <span class="day">${c.day}</span>
      <span class="month">
        <span class="month-full">${c.month} ${c.year}</span>
        <span class="month-abbr">${FR_MONTH_ABBR[c.month]} ${c.year}</span>
      </span>
    </div>
    <div class="concert-venue">
      <h4>${c.venue}</h4>
      <p>${c.city}${c.note ? ` · ${c.note}` : ""}</p>
      ${c.with ? `<span class="with">Avec ${c.with}</span>` : ""}
    </div>
    <div class="concert-cta">
      ${proximityBadge(c)}
      <button class="ical-btn" title="Ajouter au calendrier" aria-label="Ajouter au calendrier">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        <span class="ical-label">Calendrier</span>
      </button>
    </div>
  `;
  row.querySelector('.ical-btn').addEventListener('click', e => { e.stopPropagation(); downloadIcal(c); });
  concertList.appendChild(row);
});

/* ---- Audio player (pure Web Audio API — no HTMLMediaElement output) ---- */
const player = document.getElementById("player");
const playerTitle = document.getElementById("playerTitle");
const playerPlay = document.getElementById("playerPlay");
const playerNext = document.getElementById("playerNext");
const playerMute = document.getElementById("playerMute");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const volIcon = document.getElementById("volIcon");
const muteIcon = document.getElementById("muteIcon");

const TARGET_VOL = 0.35;
let audioCtx = null, gainNode = null, currentSource = null;
let trackIdx = Math.floor(Math.random() * audioPlaylist.length);
let isPlaying = false, isMuted = true;
const bufferCache = {};

function setPlayingUI(v) { playIcon.style.display = v ? "none" : ""; pauseIcon.style.display = v ? "" : "none"; }
function setMutedUI(v) { volIcon.style.display = v ? "none" : ""; muteIcon.style.display = v ? "" : "none"; }

function initWebAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainNode = audioCtx.createGain();
  gainNode.gain.value = 0;
  gainNode.connect(audioCtx.destination);
}

async function fetchBuffer(file) {
  if (bufferCache[file]) return bufferCache[file];
  const res = await fetch(`assets/audio/${file}`);
  const buf = await audioCtx.decodeAudioData(await res.arrayBuffer());
  bufferCache[file] = buf;
  return buf;
}

async function playTrack(i) {
  trackIdx = (i + audioPlaylist.length) % audioPlaylist.length;
  playerTitle.textContent = audioPlaylist[trackIdx].title;
  if (!audioCtx) return;
  if (currentSource) { try { currentSource.onended = null; currentSource.stop(); } catch(e) {} currentSource = null; }
  try {
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    const buffer = await fetchBuffer(audioPlaylist[trackIdx].file);
    currentSource = audioCtx.createBufferSource();
    currentSource.buffer = buffer;
    currentSource.connect(gainNode);
    currentSource.onended = () => { isPlaying = false; setPlayingUI(false); playTrack(trackIdx + 1); };
    currentSource.start(0);
    isPlaying = true;
    setPlayingUI(true);
  } catch(e) { isPlaying = false; setPlayingUI(false); }
}

function pausePlayer() {
  if (audioCtx && audioCtx.state === 'running') { audioCtx.suspend(); isPlaying = false; setPlayingUI(false); }
}
function resumePlayer() {
  if (audioCtx && audioCtx.state === 'suspended') { audioCtx.resume(); isPlaying = true; setPlayingUI(true); }
}

function fadeInVolume() {
  if (!gainNode) return;
  const doFade = () => {
    const now = audioCtx.currentTime;
    gainNode.gain.cancelScheduledValues(0);
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(TARGET_VOL, now + 8);
  };
  if (audioCtx.state === 'suspended') audioCtx.resume().then(doFade); else doFade();
}

playerPlay.addEventListener("click", () => {
  if (!audioCtx) return;
  if (isPlaying) pausePlayer(); else resumePlayer();
});
playerNext.addEventListener("click", () => { if (audioCtx) playTrack(trackIdx + 1); });
playerMute.addEventListener("click", () => {
  if (!audioCtx) return;
  isMuted = !isMuted;
  setMutedUI(isMuted);
  if (!isMuted) {
    player.classList.remove("muted-prompt");
    gainNode.gain.cancelScheduledValues(0);
    gainNode.gain.setValueAtTime(TARGET_VOL, audioCtx.currentTime);
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } else {
    gainNode.gain.cancelScheduledValues(0);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  }
});

/* ---- Render full support ---- */
const support = [
  {
    name: "Brozearth Sound System",
    logo: "brozearth.jpg",
    link: "https://www.facebook.com/Brozearth/?locale=fr_FR",
    bio: "Sound system rennais actif depuis 2014. Sélections roots reggae & dub en pure tradition jamaïcaine, plus de 250 concerts, un message de partage et d'unité.",
  },
  {
    name: "Cozik",
    logo: "cozik.png",
    link: "https://www.youtube.com/channel/UC9qJfUToyntvuWC9Rqmr0jQ",
    bio: "Chanteur-compositeur breton, voix du reggae francophone moderne. Révélé par le contest #1minute2reggae, des millions de streams aux côtés de Faya Pyd.",
  },
  {
    name: "Faya Pyd",
    logo: "faya-pyd.png",
    link: "https://www.youtube.com/channel/UCUcjdU5xZn9S7OMhTBFk3SA",
    bio: "Producteur & réalisateur parisien, hip-hop et reggae. A produit l'album Modern Jungle. Duo Cozik & Faya Pyd : +8 millions de vues sur YouTube.",
  },
  {
    name: "Kali Sound System",
    logo: "kali-sound.jpg",
    link: "https://www.facebook.com/p/Kali-Sound-System-100063640326462/",
    bio: "Sound system breton spécialisé reggae, dancehall & ragga jungle. Dubplates exclusives, basses puissantes... L'énergie des grandes soirées.",
  },
  {
    name: "The Fanatiks",
    logo: "the-fanatiks.png",
    link: "https://thefanatiks.fr",
    bio: "5 musiciens rennais fondés en 2015. Roots, rock & reggae. Textes conscients et mélodies accrocheuses sur fond d'énergie positive.",
  },
];
const supportGrid = document.getElementById("supportGrid");
support.forEach(a => {
  const card = document.createElement("a");
  card.className = "support-card reveal";
  card.href = a.link;
  card.target = "_blank";
  card.rel = "noopener";
  const imgHtml = a.logo
    ? `<img src="assets/img/logos/${a.logo}" alt="${a.name}"${a.logoWide ? ' class="wide"' : ""}>`
    : "";
  card.innerHTML = `${imgHtml}<h4>${a.name}</h4><p class="support-bio">${a.bio}</p>`;
  supportGrid.appendChild(card);
});

// Show player immediately; audio starts on first user gesture
playerTitle.textContent = audioPlaylist[trackIdx].title;
setMutedUI(true);
player.hidden = false;

const oneShotStart = () => {
  if (isMuted) {
    initWebAudio();
    isMuted = false;
    setMutedUI(false);
    player.classList.remove("muted-prompt");
    fadeInVolume();
    playTrack(trackIdx);
  }
  document.removeEventListener("click", oneShotStart);
};
document.addEventListener("click", oneShotStart, { once: false });

/* ---- Mobile menu ---- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---- Scroll reveal ---- */
function observeReveal() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}
observeReveal();
