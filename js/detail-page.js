/**
 * Detail Page Interactive Script
 * 详情页交互脚本
 */

class DetailPage {
    constructor(config) {
        this.config = config;
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        this.setupGalleryInteraction();
        this.setupHoverEffects();
    }

    setupGalleryInteraction() {
        const thumbs = document.querySelectorAll('.gallery-thumb');
        
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                this.setActiveImage(index);
            });
        });

        if (thumbs.length > 0) {
            this.setActiveImage(0);
        }
    }

    setActiveImage(index) {
        const thumbs = document.querySelectorAll('.gallery-thumb');

        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });

        this.currentImageIndex = index;
    }

    setupHoverEffects() {
        const relatedItems = document.querySelectorAll('.related-item');
        
        relatedItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.addRippleEffect(item);
            });
        });

        const contactCards = document.querySelectorAll('.contact-card');
        
        contactCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-2px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }

    addRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(180, 160, 140, 0.15);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
            pointer-events: none;
            z-index: 0;
        `;

        element.appendChild(ripple);

        requestAnimationFrame(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
            ripple.style.opacity = '0';
        });

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

function initDetailPage(pageConfig) {
    return new DetailPage(pageConfig);
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.detailPageConfig) {
        initDetailPage(window.detailPageConfig);
    }
});

window.DetailPage = DetailPage;
window.initDetailPage = initDetailPage;
