/**
 * 页面配置数据
 * 各详情页的内容配置
 */

const PAGES_CONFIG = {
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
        qrcodeHint: 'experience it now',
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
        qrcodeHint: 'experience it now',
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
        qrcodeHint: 'experience it now',
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
        qrcodeHint: 'experience it now',
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

const ACCENT_COLORS = {
    green: { 
        label: 'var(--color-accent-green)', 
        highlight: 'rgba(122, 158, 122, 0.06)', 
        border: 'var(--color-accent-green-light)', 
        bullet: 'var(--color-accent-green-light)' 
    },
    orange: { 
        label: 'var(--color-accent-orange)', 
        highlight: 'rgba(212, 149, 106, 0.06)', 
        border: 'var(--color-accent-orange-light)', 
        bullet: 'var(--color-accent-orange-light)' 
    },
    blue: { 
        label: 'var(--color-accent-blue)', 
        highlight: 'rgba(107, 142, 175, 0.06)', 
        border: 'var(--color-accent-blue-light)', 
        bullet: 'var(--color-accent-blue-light)' 
    }
};
