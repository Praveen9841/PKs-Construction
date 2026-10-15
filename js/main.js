/**
 * XTRA Construction 2 – Master Interactive Logic
 * Features: Sticky Navigation, Mobile Drawer, Filterable Gallery,
 * Testimonials Carousel, Quote Form Validation, Modals, Back-to-Top
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ================= 1. STICKY HEADER & SCROLL SPY ================= */
  const header = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], footer[id]');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header sticky styling
    if (scrollPos > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll spy navigation highlight
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================= 2. MOBILE DRAWER NAVIGATION ================= */
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ================= 3. SEARCH MODAL POPUP ================= */
  const searchTrigger = document.getElementById('searchTrigger');
  const searchModal = document.getElementById('searchModal');
  const closeSearchModal = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('siteSearchInput');

  function openSearch() {
    searchModal.classList.add('active');
    setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
  }

  function closeSearch() {
    searchModal.classList.remove('active');
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (closeSearchModal) closeSearchModal.addEventListener('click', closeSearch);

  /* ================= 4. VIDEO MODAL POPUP ================= */
  const openVideoBtn = document.getElementById('openVideoModal');
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const videoIframe = document.getElementById('videoIframe');
  const html5Video = document.getElementById('html5Video');
  const toggleYoutubeBtn = document.getElementById('toggleYoutubeBtn');
  const toggleHtml5Btn = document.getElementById('toggleHtml5Btn');
  const fileProtocolNotice = document.getElementById('fileProtocolNotice');
  const defaultVideoSrc = "https://www.youtube.com/embed/TPyXCFmG2Ws?autoplay=1";

  // Check if running on local file system (file://) where YouTube blocks iframe embeds with Error 153
  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol && fileProtocolNotice) {
    fileProtocolNotice.style.display = 'block';
  }

  function setPlayerMode(mode) {
    if (mode === 'html5') {
      if (videoIframe) {
        videoIframe.style.display = 'none';
        videoIframe.src = "";
      }
      if (html5Video) {
        html5Video.style.display = 'block';
        html5Video.currentTime = 0;
        html5Video.play().catch(() => {});
      }
      if (toggleHtml5Btn) toggleHtml5Btn.classList.add('active');
      if (toggleYoutubeBtn) toggleYoutubeBtn.classList.remove('active');
    } else {
      if (html5Video) {
        html5Video.pause();
        html5Video.style.display = 'none';
      }
      if (videoIframe) {
        videoIframe.style.display = 'block';
        videoIframe.src = defaultVideoSrc;
      }
      if (toggleYoutubeBtn) toggleYoutubeBtn.classList.add('active');
      if (toggleHtml5Btn) toggleHtml5Btn.classList.remove('active');
    }
  }

  if (toggleYoutubeBtn) {
    toggleYoutubeBtn.addEventListener('click', () => setPlayerMode('youtube'));
  }
  if (toggleHtml5Btn) {
    toggleHtml5Btn.addEventListener('click', () => setPlayerMode('html5'));
  }

  function openVideo() {
    if (!videoModal) return;
    videoModal.classList.add('active');
    // If opened via local file protocol, default to HTML5 player so video works immediately
    if (isFileProtocol) {
      setPlayerMode('html5');
    } else {
      setPlayerMode('youtube');
    }
  }

  function closeVideo() {
    if (!videoModal) return;
    videoModal.classList.remove('active');
    if (videoIframe) videoIframe.src = "";
    if (html5Video) {
      html5Video.pause();
      html5Video.currentTime = 0;
    }
  }

  if (openVideoBtn) openVideoBtn.addEventListener('click', openVideo);
  if (closeVideoModal) closeVideoModal.addEventListener('click', closeVideo);

  // Close modals on clicking overlay background or Esc key
  [searchModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          if (videoIframe) videoIframe.src = "";
          if (html5Video) {
            html5Video.pause();
            html5Video.currentTime = 0;
          }
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeVideo();
      closeDrawer();
    }
  });

  /* ================= 5. PORTFOLIO FILTER TABS ================= */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* ================= 6. TESTIMONIALS SLIDER ================= */
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoPlay();
  });

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoPlay();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showSlide(idx);
      resetAutoPlay();
    });
  });

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 5500);
  }

  function resetAutoPlay() {
    clearInterval(slideInterval);
    startAutoPlay();
  }

  // Initial call
  showSlide(0);
  startAutoPlay();

  /* ================= 7. QUOTE REQUEST FORM VALIDATION ================= */
  const quoteForm = document.getElementById('quoteForm');
  const fullName = document.getElementById('fullName');
  const emailAddr = document.getElementById('emailAddr');
  const phoneNum = document.getElementById('phoneNum');
  const projectDetails = document.getElementById('projectDetails');
  const formToast = document.getElementById('formToast');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const detailsError = document.getElementById('detailsError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Full Name Validation
      if (!fullName.value.trim()) {
        fullName.classList.add('invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        fullName.classList.remove('invalid');
        nameError.classList.remove('visible');
      }

      // Email Validation
      if (!validateEmail(emailAddr.value.trim())) {
        emailAddr.classList.add('invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailAddr.classList.remove('invalid');
        emailError.classList.remove('visible');
      }

      // Phone Validation
      if (!phoneNum.value.trim() || phoneNum.value.trim().length < 7) {
        phoneNum.classList.add('invalid');
        phoneError.classList.add('visible');
        isValid = false;
      } else {
        phoneNum.classList.remove('invalid');
        phoneError.classList.remove('visible');
      }

      // Project Details Validation
      if (!projectDetails.value.trim() || projectDetails.value.trim().length < 5) {
        projectDetails.classList.add('invalid');
        detailsError.classList.add('visible');
        isValid = false;
      } else {
        projectDetails.classList.remove('invalid');
        detailsError.classList.remove('visible');
      }

      // Successful Submission
      if (isValid) {
        const submitBtn = document.getElementById('submitQuoteBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>SEND REQUEST</span> <i class="fa-solid fa-arrow-right"></i>';
          formToast.classList.add('active');
          quoteForm.reset();

          setTimeout(() => {
            formToast.classList.remove('active');
          }, 6000);
        }, 1000);
      }
    });
  }

});
