/**
 * Detail Page Interactive Script
 * 独立的详情页交互脚本
 */

class DetailPage {
    constructor(config) {
        this.config = config;
        this.currentImageIndex = 0;
        this.init();
    }

    init() {
        this.setupGalleryInteraction();
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }

    setupGalleryInteraction() {
        const thumbs = document.querySelectorAll('.gallery-thumb');
        
        thumbs.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                this.setActiveImage(index);
            });

            thumb.addEventListener('mouseenter', () => {
                this.previewImage(index);
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

    previewImage(index) {
        // [MODIFY] 已禁用预览功能，heroImage 不再跟随相册变化
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    if (entry.target.classList.contains('content-detail-card')) {
                        this.animateCardContent(entry.target);
                    }
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll(
            '.detail-sidebar, .detail-center, .detail-right-sidebar, ' +
            '.content-detail-card, .info-card, .related-item'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    animateCardContent(card) {
        const blocks = card.querySelectorAll('.body-block, .highlight-block, .feature-list, .qr-code-section, .contact-section');
        
        blocks.forEach((block, index) => {
            block.style.opacity = '0';
            block.style.transform = 'translateY(15px)';
            block.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
            }, 150 + (index * 100));
        });
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