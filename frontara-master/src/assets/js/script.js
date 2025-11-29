// Scroll Animation Handler
class ScrollAnimator {
    constructor() {
        this.animateElements = document.querySelectorAll('.animate-on-scroll');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.checkPosition());
        this.checkPosition(); // Run initially
    }

    checkPosition() {
        const triggerBottom = window.innerHeight * 0.8;

        this.animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('show');
            } else {
                element.classList.remove('show');
            }
        });
    }
}

// Navigation Menu Handling (Future scalability for mobile responsiveness)
class Navbar {
    constructor() {
        this.navLinks = document.querySelector('.nav-links');
        this.setupListeners();
    }

    setupListeners() {
        // Placeholder: future implementation for mobile menu
    }
}

// Initialize all app functionalities
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimator();
    new Navbar();
});
