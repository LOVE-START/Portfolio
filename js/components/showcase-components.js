/**
 * Showcase Components 入口文件
 * 整合渲染模块和动画模块
 */

const ShowcaseComponents = (function() {

    function renderPage(pageId) {
        return ShowcaseRenderer.renderPage(pageId);
    }

    function initAnimations() {
        ShowcaseAnimations.init();
    }

    return {
        renderPage,
        initAnimations,
        PAGES: PAGES_CONFIG,
        SVG_ICONS
    };
})();
