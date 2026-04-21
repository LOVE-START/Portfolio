/**
 * 交互模块 - 编辑式布局版本
 * @module interactions
 */

export function addRippleEffect(button) {
    if (!button) return;
    
    button.addEventListener("click", function(e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size/2}px`;
        ripple.style.top = `${e.clientY - rect.top - size/2}px`;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

export function initCardInteractions(cards, cardLinks) {
    if (!cards || cards.length === 0) return;

    cards.forEach(card => {
        card.addEventListener("click", function(e) {
            if (e.target.closest('.card-link')) return;
            const projectId = this.dataset.project;
            if (projectId) {
                window.location.href = `${projectId}.html`;
            }
        });
    });

    if (cardLinks && cardLinks.length > 0) {
        cardLinks.forEach(link => {
            link.addEventListener("mouseenter", function() {
                gsap.to(this.querySelector('svg'), {
                    x: 4,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            link.addEventListener("mouseleave", function() {
                gsap.to(this.querySelector('svg'), {
                    x: 0,
                    duration: 0.25,
                    ease: "power2.out"
                });
            });
        });
    }
}

export function initNavInteractions(navItems) {
    if (!navItems || navItems.length === 0) return;

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            const filter = this.dataset.filter;

            navItems.forEach(n => n.classList.remove('nav-item-active'));
            this.classList.add('nav-item-active');
        });
    });
}

export function initInteractions(learnMoreBtn, backBtn) {
    if (learnMoreBtn) addRippleEffect(learnMoreBtn);
    if (backBtn) {
        if (backBtn instanceof NodeList) {
            backBtn.forEach(btn => addRippleEffect(btn));
        } else {
            addRippleEffect(backBtn);
        }
    }
}