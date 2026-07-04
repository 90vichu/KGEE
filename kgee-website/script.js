// ===== HEADER SCROLL =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== MOBILE MENU =====
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ===== UPDATE ACTIVE NAV LINK =====
function updateActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Update header nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === currentPage || (href === 'index.html' && currentPage === '');
    link.classList.toggle('active', isActive);
  });

  // Update mobile menu links
  mobileMenu.querySelectorAll('a:not(.btn)').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === currentPage || (href === 'index.html' && currentPage === '');
    link.classList.toggle('active', isActive);
  });
}

// Update on load and handle navigation
updateActiveNav();
window.addEventListener('load', updateActiveNav);

// ===== COUNTDOWN TIMER =====
const countdownContainer = document.getElementById('countdown');
if (countdownContainer) {
  const targetDate = new Date('2026-11-19T10:00:00+05:30').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      countdownContainer.innerHTML = '<div style="text-align:center; color:var(--navy); font-weight:700; font-size:1.2rem;">Event Started!</div>';
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const cells = countdownContainer.querySelectorAll('.cd-num');
    if (cells[0]) cells[0].textContent = days.toString().padStart(2, '0');
    if (cells[1]) cells[1].textContent = hours.toString().padStart(2, '0');
    if (cells[2]) cells[2].textContent = minutes.toString().padStart(2, '0');
    if (cells[3]) cells[3].textContent = seconds.toString().padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== NUMBER COUNTERS =====
const countedElements = new Set();
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countedElements.has(entry.target)) {
        countedElements.add(entry.target);
        const target = parseInt(entry.target.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target;
            clearInterval(counter);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 16);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-q').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');

    // Close all other items
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = '0';
      }
    });

    // Toggle current item
    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = '0';
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===== GALLERY LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');

if (lightbox) {
  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => {
      const caption = item.querySelector('.cap')?.textContent || 'Gallery Image';
      lbCaption.textContent = caption;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lbClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// ===== FORM HANDLING =====
function handleForm(formId, msgId) {
  const form = document.getElementById(formId);
  const msg = document.getElementById(msgId);

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      if (msg) {
        msg.style.display = 'block';
      }
      form.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        if (msg) msg.style.display = 'none';
      }, 5000);
    }, 500);
  });
}

// Handle visitor form
handleForm('visitForm', 'visitMsg');

// Handle stall form
handleForm('stallForm', 'stallMsg');

// Handle contact form
handleForm('contactForm', 'contactMsg');

// ===== NEWSLETTER FORM =====
const newsForm = document.getElementById('newsForm');
if (newsForm) {
  newsForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const msgEl = document.getElementById('newsMsg');
    if (msgEl) {
      msgEl.style.display = 'block';
    }
    newsForm.reset();
    
    setTimeout(() => {
      if (msgEl) msgEl.style.display = 'none';
    }, 5000);
  });
}

// ===== SMOOTH PAGE TRANSITIONS =====
document.querySelectorAll('a[href$=".html"]').forEach(link => {
  if (!link.getAttribute('href').startsWith('#') && link.getAttribute('href') !== '#') {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      
      // Check if it's an internal page navigation (not an anchor)
      if (href && href.endsWith('.html')) {
        // Add page exit animation
        document.body.style.opacity = '0.8';
        
        // Small delay for visual feedback
        setTimeout(() => {
          window.location.href = href;
        }, 150);
      }
    });
  }
});

// Reset body opacity on page load
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', e => {
  // Close mobile menu on Escape
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

// ===== ACCESSIBILITY: FOCUS MANAGEMENT =====
const navLinks = document.querySelectorAll('.nav-link, .btn');
navLinks.forEach(link => {
  link.addEventListener('focus', () => {
    link.style.outline = '2px solid #F5A623';
    link.style.outlineOffset = '2px';
  });
  
  link.addEventListener('blur', () => {
    link.style.outline = '';
    link.style.outlineOffset = '';
  });
});

// ===== ENHANCED SCROLL BEHAVIOR =====
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

console.log('KGEE 2026 website loaded successfully');
