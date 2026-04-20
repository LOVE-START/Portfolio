/**
 * 动画模块 - 背景效果动画
 * @module animations
 */

export function animateGlowParticles() {
    const glowParticles = document.querySelectorAll('.glow-particle');
    
    glowParticles.forEach((particle, index) => {
        gsap.set(particle, {
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
            opacity: 0.2 + Math.random() * 0.5
        });
        
        gsap.to(particle, {
            x: `random(-100, 100)`,
            y: `random(-50, 50)`,
            scale: `random(0.8, 1.2)`,
            opacity: `random(0.4, 0.7)`,
            duration: 10 + index * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 1.5
        });
    });
}

export function animateDynamicGlow() {
    const dynamicGlow = document.querySelector('.dynamic-glow');
    if (!dynamicGlow) return;
    
    gsap.to(dynamicGlow, {
        backgroundSize: "250% 250%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    gsap.to(dynamicGlow, {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}

export function animateBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    if (bubbles.length === 0) return;
    
    gsap.to(bubbles, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(15, 25)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 2
    });
}

export function initAnimations() {
    animateGlowParticles();
    animateDynamicGlow();
    animateBubbles();
}