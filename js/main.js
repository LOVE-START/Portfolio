/**
 * 主入口文件 - 编辑式布局版本
 * @module main
 */

import { initAnimations } from './modules/animations.js';
import { initInteractions, initCardInteractions, initNavInteractions } from './modules/interactions.js';
import { initPageTransitions, showDetailPage, goHome } from './modules/page-transitions.js';

class App {
    constructor() {
        this.elements = {
            homePage: null,
            detailPages: [],
            backButtons: [],
            projectCards: [],
            cardLinks: [],
            navItems: []
        };
    }

    cacheElements() {
        this.elements.homePage = document.getElementById("home");
        this.elements.detailPages = document.querySelectorAll(".detail-page");
        this.elements.backButtons = document.querySelectorAll(".back-button");
        this.elements.projectCards = document.querySelectorAll(".project-card");
        this.elements.cardLinks = document.querySelectorAll(".card-link");
        this.elements.navItems = document.querySelectorAll(".nav-item");
    }

    initModules() {
        const { homePage, detailPages, backButtons, projectCards, cardLinks, navItems } = this.elements;

        initAnimations();
        initInteractions(null, backButtons[0]);
        initCardInteractions(projectCards, cardLinks);
        initNavInteractions(navItems);
        initPageTransitions(homePage, detailPages, backButtons);
    }

    start() {
        this.cacheElements();
        this.initModules();
    }
}

function setCurrentYear() {
    const el = document.getElementById('currentYear');
    if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
    setCurrentYear();
    const app = new App();
    app.start();
});