/**
 * Showcase 渲染模块
 * 负责页面 HTML 模板渲染
 */

const ShowcaseRenderer = (function() {
    
    const PLACEHOLDER_STYLES = {
        'placeholder': 'background: linear-gradient(145deg, #FAFAF8, #F2F0EC); color: var(--color-text-faint);',
        'placeholder-warm': '',
        'placeholder-green': 'background: linear-gradient(145deg, #EDF5ED, #DCECD8); color: var(--color-accent-green);',
        'placeholder-green-light': 'background: linear-gradient(145deg, #F5FAF5, #E8F4E8); color: var(--color-accent-green);',
        'placeholder-orange': 'background: linear-gradient(145deg, #FDF6EE, #F5E6D2); color: var(--color-accent-orange);',
        'placeholder-orange-light': 'background: linear-gradient(145deg, #FFF9F0, #F5EBD8); color: var(--color-accent-orange);',
        'placeholder-blue': 'background: linear-gradient(145deg, #EDF2F7, #DDE6EF); color: var(--color-accent-blue);',
        'placeholder-blue-light': 'background: linear-gradient(145deg, #F5F8FC, #E8EFF8); color: var(--color-accent-blue);'
    };

    function getAccentColorVars(color) {
        return ACCENT_COLORS[color] || {};
    }

    function renderTopBrandBar() {
        return `
    <div class="top-brand-bar">
        <h1 class="brand-full-name">M-KOCO</h1>
    </div>`;
    }

    function renderHeader(currentPage) {
        const navLinks = NAV_ITEMS.map(item => {
            if (item.id === currentPage) return '';
            return `<span class="nav-sep">·</span>
            <a href="${item.href}" class="nav-link">${item.label}</a>`;
        }).join('');

        return `
    <header class="showcase-header">
        <div class="showcase-brand">
            <span class="brand-mark">✦</span>
            <h1 class="brand-name">M-KOCO</h1>
            <span class="brand-divider">·</span>
            <span class="brand-sub">Mini Programs Collection</span>
        </div>
        <nav class="showcase-nav">
            <a href="index.html" class="nav-link nav-back">
                ${SVG_ICONS.back}
                Back
            </a>
            ${navLinks}
        </nav>
        <div class="header-actions">
            <a href="https://20040319.xyz/index/" target="_blank" class="action-btn-outline">Homepage</a>
        </div>
    </header>`;
    }

    function renderGalleryItem(item, index) {
        if (item.type === 'image') {
            return `
                    <div class="gallery-item${index === 0 ? ' gallery-active' : ''}">
                        <img src="${item.src}" alt="${item.alt}" class="gallery-img">
                        <div class="gallery-overlay">
                            <span class="gallery-num">${item.label}</span>
                        </div>
                    </div>`;
        }

        const style = PLACEHOLDER_STYLES[item.type] || '';
        const icon = SVG_ICONS[item.icon] || '';

        return `
                    <div class="gallery-item">
                        <div class="gallery-placeholder${item.type === 'placeholder-warm' ? ' gallery-placeholder-warm' : ''}"${style ? ` style="${style}"` : ''}>
                            ${icon}
                            <span>${item.label}</span>
                        </div>
                        <div class="gallery-overlay">
                            <span class="gallery-num">${item.num}</span>
                        </div>
                    </div>`;
    }

    function renderSidebar(config) {
        const galleryItems = config.gallery.map((item, index) => renderGalleryItem(item, index)).join('');

        let sidebarExtra = '';

        if (config.showQRCode) {
            sidebarExtra = `
                <div class="qrcode-section sidebar-qrcode">
                    <p class="qrcode-title">SCAN TO EXPERIENCE</p>
                    <div class="qrcode-container">
                        <img src="${config.qrcodeImage}" alt="小程序码" class="qrcode-image">
                    </div>
                    <p class="qrcode-hint">${config.qrcodeHint}</p>
                </div>`;
        }

        return `
        <aside class="showcase-sidebar">
            <div class="sidebar-sticky">
                <div class="gallery-label">
                    <span class="label-icon">◈</span>
                    <span>GALLERY</span>
                </div>
                
                <div class="gallery-grid">
                    ${galleryItems}
                </div>

                <div class="sidebar-meta">
                    <div class="meta-tag">
                        <span class="meta-label">Category</span>
                        <span class="meta-value">${config.category}</span>
                    </div>
                    <div class="meta-tag">
                        <span class="meta-label">Status</span>
                        <span class="meta-value ${config.statusClass}">● ${config.status}</span>
                    </div>
                </div>
                ${sidebarExtra}
            </div>
        </aside>`;
    }

    function renderContent(config) {
        const accent = getAccentColorVars(config.accentColor);
        const hasAccent = !!config.accentColor;

        let extraContent = '';

        if (!config.showQRCode) {
            extraContent = `
            <div class="qrcode-section">
                <p class="qrcode-title">COMING SOON</p>
                <div class="qrcode-container" style="min-width: 220px; min-height: 220px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #FAFAF8, #F2F0EC);">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 12px; color: var(--color-text-faint);">
                        ${SVG_ICONS.qrcode}
                        <span style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 1px;">即将上线 · STAY TUNED</span>
                    </div>
                </div>
                <p class="qrcode-hint">敬请期待，精彩即将呈现</p>
            </div>`;
        }

        const labelStyle = hasAccent ? ` style="color: ${accent.label};"` : '';
        const highlightStyle = hasAccent ? ` style="background: linear-gradient(135deg, ${accent.highlight}, ${accent.highlight.replace('0.06', '0.02')}); border-left-color: ${accent.border};"` : '';
        const highlightIconStyle = hasAccent ? ` style="color: ${accent.label};"` : '';
        const bulletStyle = hasAccent ? ` style="color: ${accent.bullet};"` : '';

        const featuresHtml = config.features.map(f => `
                            <li class="feature-item">
                                <span class="feature-bullet"${bulletStyle}>→</span>
                                <span>${f}</span>
                            </li>`).join('');

        return `
        <article class="showcase-content">
            
            <div class="content-header">
                <div class="header-decor-line"></div>
                <h2 class="content-title">${config.contentTitle}</h2>
                <p class="content-subtitle">${config.contentSubtitle}</p>
            </div>

            <div class="content-card">
                <div class="card-decor-top">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                </div>
                <h3 class="card-heading">ABOUT THIS PROJECT</h3>
                
                <div class="card-body">
                    <div class="body-section">
                        <h4 class="section-label"${labelStyle}>Overview</h4>
                        <p class="section-text">
                            ${config.overview}
                        </p>
                    </div>

                    <div class="body-section body-section-highlight"${highlightStyle}>
                        <div class="highlight-icon"${highlightIconStyle}>♡</div>
                        <p class="section-text section-text-accent">
                            ${config.highlight}
                        </p>
                    </div>

                    <div class="body-section">
                        <h4 class="section-label">Features</h4>
                        <ul class="feature-list">
                            ${featuresHtml}
                        </ul>
                    </div>
                </div>

                <div class="card-footer-meta">
                    <span class="footer-tag">${config.footerTags[0]}</span>
                    <span class="footer-divider">·</span>
                    <span class="footer-tag">${config.footerTags[1]}</span>
                </div>
            </div>

            ${extraContent}
        </article>`;
    }

    function renderVisual(config) {
        return `
        <figure class="showcase-visual">
            <div class="visual-frame">
                <img src="${config.visualImage}" alt="${config.name} Illustration">
            </div>
        </figure>`;
    }

    function renderRelatedSection(currentPage) {
        const relatedItems = NAV_ITEMS.filter(item => item.id !== currentPage);

        const cardsHtml = relatedItems.map((item, index) => {
            const cardConfig = RELATED_CARDS_CONFIG[item.id];
            const icon = SVG_ICONS[cardConfig.icon];
            const leafImage = cardConfig.leafImage || '';
            const specimenNo = cardConfig.specimenNo || (index + 1).toString();

            return `
            <a href="${item.href}" class="related-card">
                <div class="related-card-inner">
                    <span class="specimen-icon-bg">${icon}</span>
                    <span class="specimen-tag">No. ${specimenNo}</span>
                    <div class="specimen-body">
                        <h4 class="specimen-title">${item.label}</h4>
                        <p class="specimen-desc">${cardConfig.desc}</p>
                    </div>
                    ${leafImage ? `<img src="${leafImage}" alt="" class="specimen-leaf" />` : ''}
                </div>
            </a>`;
        }).join('');

        return `
    <section class="showcase-related">
        <h3 class="related-heading">
            <span class="related-heading-icon">❧</span>
            <span class="related-heading-text">RELATED SPECIMENS</span>
            <span class="related-contact">Wechat: Zero__Night · Email: candy_night@163.com</span>
        </h3>
        <div class="related-grid">${cardsHtml}</div>
    </section>`;
    }

    function renderFooter() {
        return `
    <footer class="showcase-footer">
        <p>&copy; NFU Mini Programs · Built with ♥ by Zero__Night</p>
    </footer>`;
    }

    function renderPage(pageId) {
        const config = PAGES_CONFIG[pageId];
        if (!config) {
            console.error(`Page config not found for: ${pageId}`);
            return '';
        }

        document.title = config.title;

        let html = `<div class="showcase-page">`;

        if (config.showTopBrandBar) {
            html += renderTopBrandBar();
        }

        html += renderHeader(pageId);

        html += `
    <main class="showcase-main">
        <div class="magazine-hero-bg">
            <img src="${config.heroImage}" alt="${config.name} Illustration" style="object-position: ${config.heroPosition};" />
        </div>
        <div class="magazine-hero-overlay"></div>
        <div class="magazine-content-wrap">`;

        html += renderSidebar(config);
        html += renderContent(config);
        html += renderVisual(config);

        html += `
        </div>
    </main>`;

        html += renderRelatedSection(pageId);
        html += renderFooter();
        html += `</div>`;

        return html;
    }

    return {
        renderPage,
        renderHeader,
        renderSidebar,
        renderContent,
        renderRelatedSection,
        renderFooter
    };
})();
