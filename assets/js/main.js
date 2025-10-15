document.addEventListener('DOMContentLoaded', () => {
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

      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        dietary: document.getElementById('dietary').value
      };

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwMVe3HwWSneZtqEs3wpZEVBVi8YLQUIHlKaP9UoQJXJKL9igNzvEBbA_PTBdw5PyXysA/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        // Show success message
        formMessage.textContent = 'Thank you! Your information has been submitted successfully.';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        formMessage.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        formMessage.style.color = '#10b981';

        // Reset form
        contactForm.reset();

      } catch (error) {
        // Show error message
        formMessage.textContent = 'Oops! Something went wrong. Please try again or email us directly.';
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
        formMessage.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        formMessage.style.color = '#ef4444';
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      }
    });
  }
});