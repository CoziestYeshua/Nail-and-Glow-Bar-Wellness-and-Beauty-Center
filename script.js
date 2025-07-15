// Mobile Navigation Toggle
const toggleButton = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const icon = document.getElementById('toggleIcon');

// Toggle mobile navigation visibility with animation
toggleButton.addEventListener('click', () => {
  if (mobileNav.classList.contains('show')) {
    mobileNav.classList.remove('show');
    mobileNav.classList.add('hide');

    mobileNav.addEventListener('animationend', function handleAnimationEnd() {
      mobileNav.classList.remove('hide');
      mobileNav.style.display = 'none';
      mobileNav.removeEventListener('animationend', handleAnimationEnd);
    });

    icon.classList.replace('fa-xmark', 'fa-bars');
  } else {
    mobileNav.style.display = 'flex';
    setTimeout(() => mobileNav.classList.add('show'), 10);
    icon.classList.replace('fa-bars', 'fa-xmark');
  }
});

// Header scroll effect
window.addEventListener("scroll", () => {
  document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 50);
});

// Reset mobile navigation on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileNav.classList.remove('show');
    mobileNav.style.display = 'none';
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
});


  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const images = document.querySelectorAll('.clickable-image');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

