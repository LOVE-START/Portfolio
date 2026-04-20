/**
 * 页面切换模块 - 编辑式布局版本
 * @module page-transitions
 */

let elements = {
    homePage: null,
    detailPages: [],
    backButtons: []
};

export function initPageElements(homePage, detailPages, backButtons) {
    elements.homePage = homePage;
    elements.detailPages = Array.from(detailPages || []);
    elements.backButtons = Array.from(backButtons || []);
}

export function showDetailPage(projectId) {
    const targetPage = document.getElementById(`detail-${projectId}`);
    if (!targetPage || !elements.homePage) return;

    elements.homePage.style.opacity = "0";
    elements.homePage.style.pointerEvents = "none";

    setTimeout(() => {
        elements.detailPages.forEach(page => {
            page.classList.remove('active');
            page.classList.add('hidden');
        });

        targetPage.classList.remove('hidden');

        requestAnimationFrame(() => {
            targetPage.classList.add('active');
            targetPage.scrollTop = 0;
        });
    }, 300);
}

export function goHome() {
    if (!elements.homePage) return;

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('nav-item-active'));
    const allNav = document.querySelector('.nav-item[data-filter="all"]');
    if (allNav) allNav.classList.add('nav-item-active');

    elements.detailPages.forEach(page => {
        page.classList.remove('active');
    });

    setTimeout(() => {
        elements.detailPages.forEach(page => {
            page.classList.add('hidden');
        });

        elements.homePage.style.opacity = "1";
        elements.homePage.style.pointerEvents = "auto";
    }, 250);
}

export function initPageTransitions(homePage, detailPages, backButtons) {
    initPageElements(homePage, detailPages, backButtons);

    document.addEventListener('showDetail', (e) => {
        showDetailPage(e.detail.projectId);
    });

    if (backButtons) {
        backButtons.forEach(btn => {
            btn.addEventListener('click', goHome);
        });
    }
}