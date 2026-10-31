/**
 * AKRITI & SURAJ — THE ROYAL WEDDING EXPERIENCE
 * Vanilla JavaScript (ES6+) — Zero Frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initPetalsCanvas();
  initNavigation();
  initMusicPlayer();
  initEnvelopeInteraction();
  initVenueActions();
  initCalendarGenerator();
  initShareAction();
  initScrollEffects();
});

/* =========================================================================
   1. LIVE WEDDING COUNTDOWN (Fixed IST Target)
   Target: 25 November 2026 at 00:00:00 IST
   UTC: 2026-11-24T18:30:00.000Z
   ========================================================================= */
function initCountdown() {
  const targetUtcTime = new Date('2026-11-24T18:30:00.000Z').getTime();

  const daysEl = document.getElementById('cdDays');
  const hoursEl = document.getElementById('cdHours');
  const minutesEl = document.getElementById('cdMinutes');
  const secondsEl = document.getElementById('cdSeconds');
  const timerGridEl = document.getElementById('countdownTimerGrid');
  const statusMsgEl = document.getElementById('countdownStatusMsg');

  function updateCountdown() {
    const now = Date.now();
    const diff = targetUtcTime - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      if (statusMsgEl) statusMsgEl.style.display = 'block';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

/* =========================================================================
   2. AMBIENT FLOATING MARIGOLD & ROSE PETALS
   ========================================================================= */
function initPetalsCanvas() {
  const canvas = document.getElementById('petalsCanvas');
  if (!canvas) return;

  // Check prefers-reduced-motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const maxPetals = window.innerWidth < 768 ? 16 : 28;

  const petalColors = [
    { fill: '#C6A15B', edge: '#E8D5A3' },
    { fill: '#D97706', edge: '#F59E0B' },
    { fill: '#881337', edge: '#BE123C' },
    { fill: '#701F32', edge: '#C6A15B' }
  ];

  for (let i = 0; i < maxPetals; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 7,
      speedY: Math.random() * 0.9 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.45 + 0.35,
      sway: Math.random() * 2 * Math.PI,
      swaySpeed: Math.random() * 0.02 + 0.01
    });
  }

  let isPageVisible = true;
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });

  function render() {
    if (!isPageVisible) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.speedY;
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * 0.6 + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.quadraticCurveTo(p.size * 0.8, -p.size * 0.3, p.size * 0.6, p.size * 0.7);
      ctx.quadraticCurveTo(0, p.size, -p.size * 0.6, p.size * 0.7);
      ctx.quadraticCurveTo(-p.size * 0.8, -p.size * 0.3, 0, -p.size);
      ctx.closePath();

      ctx.fillStyle = p.color.fill;
      ctx.fill();

      ctx.strokeStyle = p.color.edge;
      ctx.lineWidth = 0.6;
      ctx.stroke();

      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* =========================================================================
   3. NAVIGATION & SCROLL HIGHLIGHTING
   ========================================================================= */
function initNavigation() {
  const navbar = document.querySelector('.royal-navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const navAnchors = document.querySelectorAll('.nav-links a');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navAnchors.forEach(anchor => {
      anchor.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navAnchors.forEach(link => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px' }
    );

    sections.forEach(sec => observer.observe(sec));
  }
}

/* =========================================================================
   4. ROYAL MUSIC PLAYER CONTROLLER
   ========================================================================= */
function initMusicPlayer() {
  const audio = document.getElementById('weddingAudio');
  const musicBar = document.getElementById('floatingMusicBar');
  const toggleBtn = document.getElementById('musicToggleBtn');
  const playIcon = document.getElementById('musicPlayIcon');
  const pauseIcon = document.getElementById('musicPauseIcon');
  const statusText = document.getElementById('musicStatusText');
  const volSlider = document.getElementById('volSlider');
  const muteBtn = document.getElementById('musicMuteBtn');
  const volHighIcon = document.getElementById('musicVolHighIcon');
  const muteIcon = document.getElementById('musicMuteIcon');

  if (!audio || !toggleBtn) return;

  let isPlaying = false;
  let targetVolume = 0.65;
  let isMuted = false;
  let fadeInterval = null;

  audio.volume = targetVolume;

  if (volSlider) {
    volSlider.value = Math.round(targetVolume * 100);
    volSlider.addEventListener('input', e => {
      targetVolume = e.target.value / 100;
      if (!isMuted) {
        audio.volume = targetVolume;
      }
      if (targetVolume === 0) {
        setMuteState(true);
      } else if (isMuted) {
        setMuteState(false);
      }
    });
  }

  function setMuteState(muted) {
    isMuted = muted;
    audio.muted = muted;
    if (volHighIcon && muteIcon) {
      if (muted) {
        volHighIcon.style.display = 'none';
        muteIcon.style.display = 'block';
      } else {
        volHighIcon.style.display = 'block';
        muteIcon.style.display = 'none';
      }
    }
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      setMuteState(!isMuted);
      showToast(isMuted ? 'Music Muted' : 'Music Unmuted');
    });
  }

  function startPlayback() {
    if (fadeInterval) clearInterval(fadeInterval);
    audio.volume = 0;

    audio
      .play()
      .then(() => {
        isPlaying = true;
        musicBar.classList.add('playing');
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        statusText.textContent = 'Shehnai Mangal Dhwani';

        // Smooth volume fade-in over 1.2s
        const step = targetVolume / 15;
        fadeInterval = setInterval(() => {
          if (audio.volume + step >= targetVolume) {
            audio.volume = targetVolume;
            clearInterval(fadeInterval);
          } else {
            audio.volume += step;
          }
        }, 80);
      })
      .catch(err => {
        isPlaying = false;
        musicBar.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        statusText.textContent = 'Audio ready';
        showToast('Click play to enjoy the traditional Shehnai ceremony music.');
      });
  }

  function pausePlayback() {
    if (fadeInterval) clearInterval(fadeInterval);

    // Smooth volume fade-out over 0.7s
    const step = audio.volume / 10;
    fadeInterval = setInterval(() => {
      if (audio.volume - step <= 0.05) {
        audio.volume = 0;
        audio.pause();
        audio.volume = targetVolume;
        clearInterval(fadeInterval);
        isPlaying = false;
        musicBar.classList.remove('playing');
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        statusText.textContent = 'Music Paused';
      } else {
        audio.volume -= step;
      }
    }, 70);
  }

  toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback();
    }
  });

  const enterBtn = document.getElementById('btnEnterCelebration');
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      if (!isPlaying) {
        startPlayback();
      }
    });
  }
}

/* =========================================================================
   5. ROYAL INVITATION ENVELOPE INTERACTION
   ========================================================================= */
function initEnvelopeInteraction() {
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const waxSealBtn = document.getElementById('waxSealBtn');

  if (!envelopeWrapper || !waxSealBtn) return;

  function toggleEnvelope() {
    envelopeWrapper.classList.toggle('opened');
    if (envelopeWrapper.classList.contains('opened')) {
      showToast('Invitation Envelope Opened');
    }
  }

  waxSealBtn.addEventListener('click', toggleEnvelope);
}

/* =========================================================================
   6. VENUE INTERACTIONS (Copy Address & Toast)
   ========================================================================= */
function initVenueActions() {
  const copyBtn = document.getElementById('btnCopyAddress');
  const addressText = 'Haripur Baxi Tola, Kaluahi, Madhubani, Bihar – 847229';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addressText).then(() => {
          showToast('Address Copied to Clipboard!');
        }).catch(() => {
          fallbackCopyText(addressText);
        });
      } else {
        fallbackCopyText(addressText);
      }
    });
  }
}

function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('Address Copied to Clipboard!');
  } catch (err) {
    showToast('Haripur Baxi Tola, Kaluahi, Madhubani');
  }
  document.body.removeChild(textArea);
}

/* =========================================================================
   7. ADD TO CALENDAR (.ics Generator)
   ========================================================================= */
function initCalendarGenerator() {
  const calButtons = document.querySelectorAll('.btn-add-calendar');

  calButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Akriti & Suraj Wedding//Royal Invitation//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        'UID:akriti-suraj-wedding-20261124@royalwedding.com',
        'DTSTAMP:20261101T000000Z',
        'DTSTART;VALUE=DATE:20261124',
        'DTEND;VALUE=DATE:20261126',
        'SUMMARY:Akriti & Suraj — The Royal Wedding Celebration',
        'DESCRIPTION:Haldi & Mehendi (24 Nov) and Wedding Ceremony (25 Nov). Host: Uday Kant Jha & Family. We cordially invite you to celebrate this auspicious union.',
        'LOCATION:Haripur Baxi Tola\\, Kaluahi\\, Madhubani\\, Bihar - 847229',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Akriti-Suraj-Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Wedding Event Added to Calendar (.ics)');
    });
  });
}

/* =========================================================================
   8. SHARE INVITATION
   ========================================================================= */
function initShareAction() {
  const shareButtons = document.querySelectorAll('.btn-share-invitation');

  shareButtons.forEach(btn => {
    btn.addEventListener('click', async e => {
      e.preventDefault();

      const shareData = {
        title: 'Akriti & Suraj — The Royal Wedding Celebration',
        text: 'You are cordially invited to celebrate the auspicious wedding of Akriti Kumari & Suraj Jha on 24-25 November 2026 at Madhubani, Bihar.',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {}
      } else {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Invitation Link Copied to Clipboard!');
          });
        } else {
          showToast('Share with family & friends!');
        }
      }
    });
  });
}

/* =========================================================================
   9. SCROLL REVEALS & UTILITIES
   ========================================================================= */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('royalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'royalToast';
    toast.className = 'royal-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
