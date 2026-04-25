/**
 * 图片初始化脚本
 * 用于静态HTML页面的图片自动替换
 * 在页面加载时自动将 data-img 属性替换为正确的图片链接
 */

const ImageInitializer = {
    init() {
        this.replaceDataImages();
        this.replaceFavicons();
    },

    replaceDataImages() {
        const elements = document.querySelectorAll('[data-img]');
        elements.forEach(el => {
            const config = el.getAttribute('data-img');
            const [category, key] = config.split('.');
            if (category && key && IMAGES.config[category] && IMAGES.config[category][key]) {
                el.src = IMAGES.get(category, key);
            }
        });
    },

    replaceFavicons() {
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon && favicon.hasAttribute('data-favicon')) {
            const key = favicon.getAttribute('data-favicon');
            favicon.href = IMAGES.getLogo(key);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ImageInitializer.init();
});
