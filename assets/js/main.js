document.addEventListener('DOMContentLoaded', () => {
  // Auto-detect landscape images in carousel
  const carouselImages = document.querySelectorAll('.polaroid-carousel-item img');
  carouselImages.forEach(img => {
    img.addEventListener('load', function() {
      if (this.naturalWidth > this.naturalHeight) {
        this.closest('.polaroid-carousel-item').classList.add('landscape');
      }
    });
    // If image is already loaded
    if (img.complete && img.naturalWidth > img.naturalHeight) {
      img.closest('.polaroid-carousel-item').classList.add('landscape');
    }
  });

  // Easter egg: flip polaroid after 5 fast taps/clicks
  const heroPolaroid = document.querySelector('.polaroid-hero .polaroid');
  if (heroPolaroid) {
    let tapCount = 0;
    let tapTimer = null;
    let lastTapTime = 0;
    const TAP_TIMEOUT = 4000; // Reset count after 4 seconds of inactivity (more forgiving)
    const DOUBLE_TAP_DELAY = 500; // Time window for double tap detection

    // Function to handle tap/click
    const handleTap = (e) => {
      const currentTime = new Date().getTime();
      const tapInterval = currentTime - lastTapTime;

      // Check for double-tap to flip back
      if (tapInterval < DOUBLE_TAP_DELAY && tapInterval > 0 && heroPolaroid.classList.contains('flipped')) {
        // Double tap detected on flipped polaroid - flip back
        heroPolaroid.classList.remove('flipped');
        tapCount = 0;
        if (tapTimer) {
          clearTimeout(tapTimer);
          tapTimer = null;
        }
        lastTapTime = currentTime;
        return;
      }

      // Increment tap count
      tapCount++;
      lastTapTime = currentTime;

      // Clear existing timer
      if (tapTimer) {
        clearTimeout(tapTimer);
      }

      // Set timer to reset count
      tapTimer = setTimeout(() => {
        tapCount = 0;
      }, TAP_TIMEOUT);

      // Flip after 5 taps
      if (tapCount === 5) {
        heroPolaroid.classList.add('flipped');
        tapCount = 0;
        if (tapTimer) {
          clearTimeout(tapTimer);
          tapTimer = null;
        }
      }
    };

    // Touch event for mobile - use touchstart for more responsive feel
    let touchHandled = false;
    heroPolaroid.addEventListener('touchstart', (e) => {
      touchHandled = true;
      handleTap(e);
    }, { passive: true });

    // Click event for desktop (and prevent duplicate firing after touch)
    heroPolaroid.addEventListener('click', (e) => {
      if (touchHandled) {
        e.preventDefault();
        touchHandled = false;
        return;
      }
      handleTap(e);
    });

    // Double-click to flip back (desktop)
    heroPolaroid.addEventListener('dblclick', (e) => {
      heroPolaroid.classList.remove('flipped');
      tapCount = 0;
      if (tapTimer) {
        clearTimeout(tapTimer);
        tapTimer = null;
      }
    });
  }

  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // Close nav on link click (mobile)
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Contact form submission to Google Sheets
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalBtnText = submitBtn.textContent;

      // Disable button and show loading state with animated heart
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="heart-loading">💗</span>Sending...';

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        dietary: document.getElementById('dietary').value,
        hotelInterest: document.getElementById('hotel-interest').value
      };

      try {
        // Create URL-encoded form data
        const params = new URLSearchParams();
        params.append('name', formData.name);
        params.append('email', formData.email);
        params.append('address', formData.address);
        params.append('dietary', formData.dietary);
        params.append('hotelInterest', formData.hotelInterest);

        const response = await fetch('https://script.google.com/macros/s/AKfycbxLUU1_FcPKdCoBLE3F6s7Ir0xYDScCKIke7f2plu9_mLxToGcGGH60FIbv9442tFhM/exec?' + params.toString(), {
          method: 'GET',
          redirect: 'follow'
        });

        if (response.ok) {
          // Show success message
          formMessage.textContent = 'Thank you! Your information has been submitted successfully.';
          formMessage.style.display = 'block';
          formMessage.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
          formMessage.style.border = '1px solid rgba(16, 185, 129, 0.3)';
          formMessage.style.color = '#10b981';

          // Reset form
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }

      } catch (error) {
        console.error('Form error:', error);
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again or email us directly.';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        formMessage.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        formMessage.style.color = '#ef4444';
      } finally {
        // Re-enable button and restore original text
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
});