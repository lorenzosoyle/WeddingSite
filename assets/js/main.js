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

  // Easter egg: tap or click polaroid to flip it
  const heroPolaroid = document.querySelector('.polaroid-hero .polaroid');
  if (heroPolaroid) {
    // Single click/tap to toggle flip
    heroPolaroid.addEventListener('click', () => {
      if (heroPolaroid.classList.contains('flipped')) {
        heroPolaroid.classList.remove('flipped');
      } else {
        heroPolaroid.classList.add('flipped');
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
        dietary: document.getElementById('dietary').value
      };

      try {
        // Create URL-encoded form data
        const params = new URLSearchParams();
        params.append('name', formData.name);
        params.append('email', formData.email);
        params.append('address', formData.address);
        params.append('dietary', formData.dietary);

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