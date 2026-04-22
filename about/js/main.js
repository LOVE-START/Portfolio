/**
 * About Course Page - Main JavaScript
 * Handles interactive elements and user interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    initFilterButtons();
    initCloseButtons();
    initScrollAnimations();
});

/**
 * Initialize filter button click handlers
 * Toggles active state on filter buttons
 */
function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

/**
 * Initialize close button functionality
 * Removes illustration card when close button is clicked
 */
function initCloseButtons() {
    const closeBtns = document.querySelectorAll('.close-btn');

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.illustration-card');
            if (card) {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                card.style.transition = 'all 0.3s ease';

                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
}

/**
 * Initialize scroll-based animations
 * Adds fade-in effect to elements as they enter viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .illustration-card, .info-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Add animation class styles dynamically
 */
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(styleSheet);
