// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonial-card');
const prevButton = document.querySelector('.testimonial-nav .prev');
const nextButton = document.querySelector('.testimonial-nav .next');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  });
  testimonials[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

nextButton.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Simulate form submission
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  setTimeout(() => {
    // Show success message
    contactForm.innerHTML = `
      <div style="text-align: center; padding: 2rem;">
        <div style="color: #059669; font-size: 2rem; margin-bottom: 1rem;">✓</div>
        <h3 style="color: #1f2937; margin-bottom: 0.5rem;">Thank You!</h3>
        <p style="color: #6b7280;">Your message has been received. We'll get back to you soon!</p>
      </div>
    `;
  }, 1500);
});