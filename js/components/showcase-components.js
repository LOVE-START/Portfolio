/**
 * Showcase Page Components
 * 公共组件系统 - 用于所有详情页面
 */

const ShowcaseComponents = (function() {
    const SVG_ICONS = {
        back: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
        arrowRight: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
        arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>',
        arrowRightNav: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>',
        calendar: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>',
        home: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>',
        coffee: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        mapPin: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        qrcode: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>',
        galleryCalendar: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>',
        galleryLayers: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
        galleryMapPin: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        galleryNavigation: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
        galleryMonitor: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
        galleryChart: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>',
        galleryMessage: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
        galleryUsers: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
        galleryStar: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    };

    const PAGES = {
        course: {
            id: 'course',
            name: 'NFUCourse',
            title: 'NFUCourse - 南苑课表 | M-KOCO',
            heroImage: 'images/4.png',
            heroPosition: 'right center',
            visualImage: 'images/3.png',
            contentTitle: 'NFUCOURSE',
            contentSubtitle: '南苑课表 · 陪伴你走过最美好的大学时光',
            category: 'Schedule',
            status: 'Online',
            statusClass: 'meta-value-live',
            showTopBrandBar: true,
            showQRCode: true,
            qrcodeImage: 'https://nfu2006.asia/miniprogram.jpg',
            qrcodeHint: '微信扫一扫，立即体验',
            contactInSidebar: true,
            gallery: [
                { type: 'image', src: 'images/p1.jpeg', alt: 'Course Preview 1', label: '01' },
                { type: 'image', src: 'images/p2.jpg', alt: 'Course Preview 2', label: '02' },
                { type: 'image', src: 'images/p3.jpeg', alt: 'Course Preview 3', label: '03' }
            ],
            overview: '在微信搜索小程序「南苑Course」就可以使用啦！这是一个专为南苑学子打造的课表管理工具，帮你轻松掌握每一节课的安排，从清晨到傍晚，记录校园生活的每一个美好瞬间。',
            highlight: '希望南苑课表能陪伴你走过最美好最温暖的大学时光。如果你有什么好的设计想法或功能建议，超级欢迎与我分享哦！',
            features: ['实时课表查询与展示', '课程提醒与时间管理', '简洁优雅的用户界面'],
            footerTags: ['WeChat Mini Program', '2024']
        },
        nest: {
            id: 'nest',
            name: 'NFUNest',
            title: 'NFUNest - 南苑社团 | M-KOCO',
            heroImage: 'images/4.png',
            heroPosition: '66.67% center',
            visualImage: 'images/3.png',
            contentTitle: 'NFUNEST',
            contentSubtitle: '南苑社团 · 发现校园里每一个有趣的灵魂',
            category: 'Community',
            status: 'Coming Soon',
            statusClass: 'meta-value-live',
            showTopBrandBar: true,
            showQRCode: true,
            qrcodeImage: 'https://nfu2006.asia/miniprogram.jpg',
            qrcodeHint: '微信扫一扫，立即体验',
            contactInSidebar: true,
            accentColor: 'green',
            gallery: [
                { type: 'placeholder-green', icon: 'home', label: 'Home', num: '01' },
                { type: 'placeholder-green-light', icon: 'galleryUsers', label: 'Community', num: '02' },
                { type: 'placeholder-warm', icon: 'galleryStar', label: 'Activities', num: '03' }
            ],
            overview: '南苑社团探索平台，发现校园里每一个有趣的社团活动。在这里找到志同道合的朋友，一起追逐热爱，让大学生活更加精彩纷呈。',
            highlight: '社团生活是大学最美好的回忆之一。希望通过这个平台，能让更多同学找到属于自己的那个"家"，认识一群志趣相投的伙伴。',
            features: ['社团信息浏览与搜索', '活动报名与提醒功能', '社团成员互动社区'],
            footerTags: ['WeChat Mini Program', 'In Development']
        },
        yummy: {
            id: 'yummy',
            name: 'NFUYummy',
            title: 'NFUYummy - 南苑美食 | M-KOCO',
            heroImage: 'images/4.png',
            heroPosition: '33.33% center',
            visualImage: 'images/3.png',
            contentTitle: 'NFUYUMMY',
            contentSubtitle: '南苑美食 · 用味蕾记录生活的点滴幸福',
            category: 'Food Guide',
            status: 'Coming Soon',
            statusClass: 'meta-value-live',
            showTopBrandBar: true,
            showQRCode: true,
            qrcodeImage: 'https://nfu2006.asia/miniprogram.jpg',
            qrcodeHint: '微信扫一扫，立即体验',
            contactInSidebar: true,
            accentColor: 'orange',
            gallery: [
                { type: 'placeholder-orange', icon: 'coffee', label: 'Food Map', num: '01' },
                { type: 'placeholder-orange-light', icon: 'galleryChart', label: 'Ratings', num: '02' },
                { type: 'placeholder-warm', icon: 'galleryMessage', label: 'Reviews', num: '03' }
            ],
            overview: '南苑美食图鉴，探索校园里的每一处美味角落。从食堂到周边小吃，用味蕾记录大学生活的点滴幸福，每一份美食都值得被记住。',
            highlight: '美食是生活中最治愈的存在。希望这个小程序能帮你发现校园里的隐藏美味，让每一餐都成为期待，而不仅仅是果腹。',
            features: ['校园美食地图与导航', '真实用户评价与评分', '个性化美食推荐'],
            footerTags: ['WeChat Mini Program', 'In Development']
        },
        spot: {
            id: 'spot',
            name: 'NFUSpot',
            title: 'NFUSpot - 南苑地图 | M-KOCO',
            heroImage: 'images/4.png',
            heroPosition: 'left center',
            visualImage: 'images/4.png',
            contentTitle: 'NFUSPOT',
            contentSubtitle: '南苑地图 · 一键探索校园每个角落',
            category: 'Map & Navigation',
            status: 'Coming Soon',
            statusClass: 'meta-value-live',
            showTopBrandBar: true,
            showQRCode: true,
            qrcodeImage: 'https://nfu2006.asia/miniprogram.jpg',
            qrcodeHint: '微信扫一扫，立即体验',
            contactInSidebar: true,
            accentColor: 'blue',
            gallery: [
                { type: 'placeholder-blue', icon: 'galleryMapPin', label: 'Campus Map', num: '01' },
                { type: 'placeholder-blue-light', icon: 'galleryNavigation', label: 'Navigation', num: '02' },
                { type: 'placeholder-warm', icon: 'galleryMonitor', label: 'Buildings', num: '03' }
            ],
            overview: '南苑地图小程序，一键探索校园每个角落，再也不会迷路。教学楼、食堂、图书馆、宿舍楼，想去哪里都能找到，让校园生活更加便捷。',
            highlight: '迷路是新生最常遇到的困扰。希望这个小程序能成为你在校园里的贴心向导，让你轻松找到每一个目的地，不再为找路而烦恼。',
            features: ['交互式校园地图浏览', '智能路径规划与导航', '建筑详情与设施查询'],
            footerTags: ['WeChat Mini Program', 'In Development']
        }
    };

    const NAV_ITEMS = [
        { id: 'course', href: 'course.html', label: 'Course' },
        { id: 'nest', href: 'nest.html', label: 'Nest' },
        { id: 'yummy', href: 'yummy.html', label: 'Yummy' },
        { id: 'spot', href: 'spot.html', label: 'Spot' }
    ];

    const RELATED_CARDS_CONFIG = {
        course: { icon: 'calendar', iconBg: 'linear-gradient(145deg, #FDF2F2, #F5E0E0)', color: 'var(--color-primary)', desc: '课表管理' },
        nest: { icon: 'home', iconClass: 'related-icon-green', desc: '社团探索' },
        yummy: { icon: 'coffee', iconClass: 'related-icon-orange', desc: '美食图鉴' },
        spot: { icon: 'mapPin', iconClass: 'related-icon-blue', desc: '校园地图' }
    };

    function getAccentColorVars(color) {
        const colors = {
            green: { label: 'var(--color-accent-green)', highlight: 'rgba(122, 158, 122, 0.06)', border: 'var(--color-accent-green-light)', bullet: 'var(--color-accent-green-light)' },
            orange: { label: 'var(--color-accent-orange)', highlight: 'rgba(212, 149, 106, 0.06)', border: 'var(--color-accent-orange-light)', bullet: 'var(--color-accent-orange-light)' },
            blue: { label: 'var(--color-accent-blue)', highlight: 'rgba(107, 142, 175, 0.06)', border: 'var(--color-accent-blue-light)', bullet: 'var(--color-accent-blue-light)' }
        };
        return colors[color] || {};
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

        const placeholderStyles = {
            'placeholder': 'background: linear-gradient(145deg, #FAFAF8, #F2F0EC); color: var(--color-text-faint);',
            'placeholder-warm': '',
            'placeholder-green': 'background: linear-gradient(145deg, #EDF5ED, #DCECD8); color: var(--color-accent-green);',
            'placeholder-green-light': 'background: linear-gradient(145deg, #F5FAF5, #E8F4E8); color: var(--color-accent-green);',
            'placeholder-orange': 'background: linear-gradient(145deg, #FDF6EE, #F5E6D2); color: var(--color-accent-orange);',
            'placeholder-orange-light': 'background: linear-gradient(145deg, #FFF9F0, #F5EBD8); color: var(--color-accent-orange);',
            'placeholder-blue': 'background: linear-gradient(145deg, #EDF2F7, #DDE6EF); color: var(--color-accent-blue);',
            'placeholder-blue-light': 'background: linear-gradient(145deg, #F5F8FC, #E8EFF8); color: var(--color-accent-blue);'
        };

        const style = placeholderStyles[item.type] || '';
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
                </div>

                <div class="contact-section sidebar-contact">
                    <div class="contact-card">
                        <span class="contact-label">Wechat</span>
                        <span class="contact-value">Zero__Night</span>
                    </div>
                    <div class="contact-card">
                        <span class="contact-label">Email</span>
                        <span class="contact-value">candy_night@163.com</span>
                    </div>
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
            const bgGradient = hasAccent ? `background: linear-gradient(135deg, ${accent.highlight}, ${accent.highlight.replace('0.06', '0.02')});` : '';
            const borderColor = hasAccent ? accent.border : '';

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
            </div>

            <div class="contact-section">
                <div class="contact-row">
                    <div class="contact-card">
                        <span class="contact-label">Wechat</span>
                        <span class="contact-value">Zero__Night</span>
                    </div>
                    <div class="contact-card">
                        <span class="contact-label">Email</span>
                        <span class="contact-value">candy_night@163.com</span>
                    </div>
                </div>
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
        
        const cardsHtml = relatedItems.map(item => {
            const cardConfig = RELATED_CARDS_CONFIG[item.id];
            const icon = SVG_ICONS[cardConfig.icon];
            
            let iconHtml;
            if (cardConfig.iconClass) {
                iconHtml = `<div class="related-card-icon ${cardConfig.iconClass}">${icon}</div>`;
            } else {
                iconHtml = `<div class="related-card-icon" style="background: ${cardConfig.iconBg}; color: ${cardConfig.color};">${icon}</div>`;
            }

            return `
            <a href="${item.href}" class="related-card">
                ${iconHtml}
                <h4 class="related-card-title">${item.name}</h4>
                <p class="related-card-desc">${cardConfig.desc}</p>
                <span class="related-card-link">
                    View
                    ${SVG_ICONS.arrowRight}
                </span>
            </a>`;
        }).join('');

        return `
    <section class="showcase-related">
        <div class="related-header">
            <h3 class="related-title">MORE WORKS</h3>
            <div class="related-nav">
                <button class="related-arrow" aria-label="Previous">
                    ${SVG_ICONS.arrowLeft}
                </button>
                <button class="related-arrow" aria-label="Next">
                    ${SVG_ICONS.arrowRightNav}
                </button>
            </div>
        </div>

        <div class="related-grid">
            ${cardsHtml}
        </div>
    </section>`;
    }

    function renderFooter() {
        return `
    <footer class="showcase-footer">
        <p>&copy; 2024 NFU Mini Programs · Built with ♥ by Zero__Night</p>
    </footer>`;
    }

    function renderPage(pageId) {
        const config = PAGES[pageId];
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

    function initAnimations() {
        if (typeof gsap === 'undefined') {
            console.warn('GSAP not loaded');
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
            ease: 'back.out(1.7)'
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

            gsap.from('.sidebar-contact .contact-card', {
                y: 15,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 1.2,
                ease: 'power2.out'
            });
        }

        gsap.from('.related-card', {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
            delay: 1.3,
            ease: 'power2.out'
        });
    }

    return {
        renderPage,
        initAnimations,
        PAGES,
        SVG_ICONS
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = ShowcaseComponents;
}
