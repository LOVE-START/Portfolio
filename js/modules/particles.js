/**
 * 粒子效果模块 - 负责创建和管理粒子动画
 * @module particles
 */

/**
 * 粒子类型配置
 */
const PARTICLE_TYPES = ['heart', 'star', 'circle'];

/**
 * 粒子颜色配置
 */
const PARTICLE_COLORS = ['#FFD1DD', '#FFEEF5', '#FFF6E5', '#FFE6EE', '#FFDFD3'];

/**
 * 创建单个粒子
 * @param {number} index - 粒子索引
 * @returns {HTMLElement} 粒子DOM元素
 */
function createSingleParticle(index) {
    const particle = document.createElement("div");
    const type = PARTICLE_TYPES[Math.floor(Math.random() * PARTICLE_TYPES.length)];
    
    particle.className = `particle ${type}`;
    
    particle.style.left = `${50 + (Math.random() - 0.5) * 60}%`;
    particle.style.top = `${50 + (Math.random() - 0.5) * 30}%`;
    
    const size = 8 + Math.random() * 25;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    if (type === 'circle') {
        const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
        particle.style.backgroundColor = color;
        particle.style.opacity = 0.4 + Math.random() * 0.4;
    }
    
    particle.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    return particle;
}

/**
 * 为粒子添加动画效果
 * @param {HTMLElement} particle - 粒子元素
 */
function animateParticle(particle) {
    gsap.to(particle, {
        x: (Math.random() - 0.5) * window.innerWidth * 0.7,
        y: -window.innerHeight * 0.6 - Math.random() * 100,
        rotation: Math.random() * 720 - 360,
        opacity: 0,
        duration: 1 + Math.random() * 2,
        ease: "power2.out",
        onComplete: () => {
            particle.remove();
        }
    });
}

/**
 * 创建粒子效果
 * @description 生成多个粒子并执行飞散动画
 * @param {number} count - 粒子数量，默认15
 */
export function createParticles(count = 15) {
    for (let i = 0; i < count; i++) {
        const particle = createSingleParticle(i);
        document.body.appendChild(particle);
        animateParticle(particle);
    }
}
