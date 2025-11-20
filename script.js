// ==========================================
// Talk OCD - Website JavaScript
// ==========================================

// ==========================================
// Mobile Menu Toggle
// ==========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// Smooth Scrolling for Navigation Links
// ==========================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('#navbar').offsetHeight;
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - navHeight - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// Navbar Background on Scroll
// ==========================================
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(30, 77, 92, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(30, 77, 92, 0.1)';
    }
});

// ==========================================
// Scroll-to-Top Button (Optional Enhancement)
// ==========================================
// You can add a scroll-to-top button later if desired

// ==========================================
// Animation on Scroll (Optional Enhancement)
// ==========================================
// Fade in elements as they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all blocks for animation
const animatedElements = document.querySelectorAll('.about-block, .ocd-block, .living-block, .stigma-block, .resource-card');

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// Log Message (For Testing)
// ==========================================
console.log('Talk OCD website loaded successfully!');
