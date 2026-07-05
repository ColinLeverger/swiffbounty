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
  if (typeof audio !== "undefined" && !audio.paused) audio.pause();
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
  audioWasPlaying = typeof audio !== "undefined" && !audio.paused;
  if (audioWasPlaying) audio.pause();
}
function closeLightbox() {
  lb.classList.remove("open");
  lbContent.innerHTML = "";
  if (audioWasPlaying && typeof audio !== "undefined") audio.play().catch(() => {});
  audioWasPlaying = false;
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ---- Render concerts ---- */
const concertList = document.getElementById("concertList");
concerts.forEach(c => {
  const row = document.createElement("div");
  row.className = "concert-row";
  row.innerHTML = `
    <div class="concert-date">
      <span class="day">${c.day}</span>
      <span class="month">${c.month} ${c.year}</span>
    </div>
    <div class="concert-venue">
      <h4>${c.venue}</h4>
      <p>${c.city}${c.note ? ` · ${c.note}` : ""}</p>
      ${c.with ? `<span class="with">Avec ${c.with}</span>` : ""}
    </div>
    <div class="concert-cta">Bientôt →</div>
  `;
  concertList.appendChild(row);
});

/* ---- Audio player ---- */
const player = document.getElementById("player");
const playerTitle = document.getElementById("playerTitle");
const playerPlay = document.getElementById("playerPlay");
const playerNext = document.getElementById("playerNext");
const playerMute = document.getElementById("playerMute");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const volIcon = document.getElementById("volIcon");
const muteIcon = document.getElementById("muteIcon");

const audio = new Audio();
audio.preload = "none";
audio.volume = 0.45;
audio.muted = true;
let trackIdx = Math.floor(Math.random() * audioPlaylist.length);

function loadTrack(i) {
  trackIdx = (i + audioPlaylist.length) % audioPlaylist.length;
  const t = audioPlaylist[trackIdx];
  audio.src = `assets/audio/${t.file}`;
  playerTitle.textContent = t.title;
}
function setPlayingUI(playing) {
  playIcon.style.display = playing ? "none" : "";
  pauseIcon.style.display = playing ? "" : "none";
}
function setMutedUI(muted) {
  volIcon.style.display = muted ? "none" : "";
  muteIcon.style.display = muted ? "" : "none";
}

playerPlay.addEventListener("click", () => {
  if (audio.paused) audio.play(); else audio.pause();
});
playerNext.addEventListener("click", () => {
  loadTrack(trackIdx + 1);
  audio.play();
});
playerMute.addEventListener("click", () => {
  audio.muted = !audio.muted;
  setMutedUI(audio.muted);
  if (!audio.muted) player.classList.remove("muted-prompt");
});
audio.addEventListener("play", () => setPlayingUI(true));
audio.addEventListener("pause", () => setPlayingUI(false));
audio.addEventListener("ended", () => { loadTrack(trackIdx + 1); audio.play(); });

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

function startAudio() {
  loadTrack(trackIdx);
  setMutedUI(true);
  player.hidden = false;
  audio.play().catch(() => setPlayingUI(false));
}
if (document.readyState === "complete") startAudio();
else window.addEventListener("load", startAudio);
const oneShotUnmute = () => {
  if (audio.muted) {
    audio.muted = false;
    setMutedUI(false);
    player.classList.remove("muted-prompt");
  }
  if (audio.paused) audio.play().catch(() => {});
  document.removeEventListener("click", oneShotUnmute);
};
document.addEventListener("click", oneShotUnmute, { once: false });

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
