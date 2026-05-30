// =====================
// PARTICLES
// =====================
const hearts = ['♥', '❤', '💕', '💗', '💓', '✨', '🌸', '💖'];

function makeParticle() {
  const bg = document.getElementById('particles-bg');
  if (!bg) return;
  const el = document.createElement('span');
  el.className = 'particle';
  el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
  el.style.left = (Math.random() * 95) + '%';
  el.style.top = (80 + Math.random() * 20) + 'vh';
  el.style.fontSize = (10 + Math.random() * 14) + 'px';
  el.style.animationDuration = (5 + Math.random() * 7) + 's';
  el.style.animationDelay = (Math.random() * 3) + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), 14000);
}

// =====================
// SAKURA PETALS
// =====================
function makeSakura() {
  const bg = document.getElementById('particles-bg');
  if (!bg) return;
  const petal = document.createElement('div');
  petal.className = 'sakura';
  petal.style.left = (Math.random() * 100) + '%';
  petal.style.top = '-30px';
  petal.style.animationDuration = (4 + Math.random() * 6) + 's';
  petal.style.animationDelay = (Math.random() * 4) + 's';
  petal.style.fontSize = (10 + Math.random() * 16) + 'px';
  petal.textContent = '🌸';
  bg.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

// =====================
// PAGE TRANSITION
// =====================
function initTransition() {
  if (document.getElementById('transition-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'transition-overlay';
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('fade-out');
  }, 50);

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('#') && !href.startsWith('http')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });
}

// =====================
// LIGHTBOX
// =====================
function openLightbox(src, caption) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  cap.textContent = caption;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
}

// =====================
// NAVBAR SCROLL
// =====================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.85)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.15)';
    }
  }
});

// =====================
// CAKE EXPLOSION
// =====================
function initCake() {
  const overlay = document.getElementById('cake-overlay');
  if (!overlay) return;
  setTimeout(() => {
    overlay.classList.add('visible');
  }, 800);
}

function explodeCake() {
  const wrap = document.getElementById('cake-wrap');
  const message = document.getElementById('cake-message');
  const confettiContainer = document.getElementById('cake-confetti');
  if (!wrap) return;

  wrap.style.display = 'none';
  message.classList.add('show');

  const colors = ['#f9a8c9', '#f472b6', '#fcd34d', '#fb923c', '#c084fc', '#34d399', '#fff'];
  const emojis = ['🌸', '💖', '✨', '🎉', '💕', '⭐', '🎊'];

  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';

      if (Math.random() > 0.5) {
        const size = 6 + Math.random() * 10;
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      } else {
        piece.style.fontSize = (14 + Math.random() * 14) + 'px';
        piece.style.background = 'transparent';
        piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      }

      piece.style.left = (Math.random() * 100) + '%';
      piece.style.top = '-5%';
      piece.style.animationDuration = (2 + Math.random() * 2.5) + 's';
      piece.style.animationDelay = (Math.random() * 1) + 's';
      confettiContainer.appendChild(piece);
      setTimeout(() => piece.remove(), 5000);
    }, i * 15);
  }

  for (let i = 0; i < 50; i++) {
    setTimeout(makeParticle, i * 40);
    setTimeout(makeSakura, i * 60);
  }
}

function closeCakeOverlay() {
  const overlay = document.getElementById('cake-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';
    setTimeout(() => overlay.remove(), 500);
  }
}

// =====================
// LANDING PAGE
// =====================
function openHeart() {
  const btn = document.getElementById('heart-btn');
  const exp = document.getElementById('explosion');
  const opened = document.getElementById('opened-msg');
  const wrap = document.getElementById('ls-wrap');
  if (!btn) return;

  btn.style.display = 'none';
  exp.style.display = 'block';

  const cx = wrap.offsetWidth / 2;
  const cy = wrap.offsetHeight / 2;
  const colors = ['#f9a8c9', '#f472b6', '#fcd34d', '#fff', '#fb7185', '#e879f9', '#c084fc'];

  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'exp-particle';
    const size = 6 + Math.random() * 12;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    exp.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 200;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    setTimeout(() => {
      p.style.transform = `translate(${tx}px, ${ty}px) scale(${0.5 + Math.random()})`;
      p.style.opacity = '0';
    }, 20);
  }

  for (let i = 0; i < 30; i++) {
    setTimeout(makeParticle, i * 50);
    setTimeout(makeSakura, i * 80);
  }

  setTimeout(() => {
    exp.style.display = 'none';
    opened.style.display = 'flex';
  }, 900);
}

// =====================
// KEYBOARD
// =====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
    closeCakeOverlay();
  }
});

// =====================
// INIT
// =====================
window.addEventListener('load', () => {
  initTransition();
  initCake();

  const bg = document.getElementById('particles-bg');
  if (bg) {
    setInterval(makeParticle, 400);
    setInterval(makeSakura, 800);
    for (let i = 0; i < 15; i++) {
      setTimeout(makeParticle, i * 150);
      setTimeout(makeSakura, i * 300);
    }
  }
});
