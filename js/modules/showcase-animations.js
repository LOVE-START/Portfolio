/**
 * Showcase 动画模块
 * 负责页面 GSAP 动画初始化
 */

const ShowcaseAnimations = (function() {

    function init() {
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded');
            document.querySelectorAll('.gallery-item, .related-card').forEach(el => {
                el.style.opacity = '1';
            });
            if (typeof BottomAlignEngine !== 'undefined') {
                BottomAlignEngine.init();
            }
            return;
        }

        gsap.from('.showcase-header', {
            y: -30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });

        gsap.from('.magazine-hero-bg', {
            scale: 1.08,
            opacity: 0,
            duration: 1.4,
            delay: 0.15,
            ease: 'power2.out'
        });

        gsap.from('.magazine-content-wrap', {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 0.35,
            ease: 'power3.out'
        });

        gsap.from('.showcase-sidebar', {
            x: -40,
            opacity: 0,
            duration: 0.9,
            delay: 0.6,
            ease: 'power3.out'
        });

        gsap.from('.showcase-content', {
            y: 30,
            opacity: 0,
            duration: 0.9,
            delay: 0.75,
            ease: 'power3.out'
        });

        gsap.from('.gallery-item', {
            scale: 0.9,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            delay: 0.9,
            ease: 'back.out(1.7)',
            immediateRender: false
        });

        const hasSidebarQRCode = document.querySelector('.sidebar-qrcode');
        if (hasSidebarQRCode) {
            gsap.from('.sidebar-qrcode', {
                y: 20,
                opacity: 0,
                duration: 0.7,
                delay: 1.1,
                ease: 'power2.out'
            });
        }

        gsap.from('.related-card', {
            y: 16,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.1,
            delay: 1.0,
            ease: 'power2.out',
            immediateRender: false,
            onComplete: function() {
                if (typeof BottomAlignEngine !== 'undefined') {
                    BottomAlignEngine.init();
                }
            }
        });
    }

    return {
        init
    };
})();
