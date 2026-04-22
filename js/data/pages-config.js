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
        overview: '「南苑Course」可以轻松查看每节课程与详情 记录笔记 设置上课提醒 查询成绩考试与学分 同班同学 查找空教室自习 还能生成专属课表卡片当壁纸 用精心的设计温暖你的心 希望在每一次打开的时候 都能让学习这件事变得更顺一点 更可爱一点 也更属于你一点点 ♥',
        highlight: '是你 让南苑Course的存在变得更加完整与浪漫',
        features: ['实时课表查询与自习室', '课程提醒与成绩查询', '课堂笔记与同班同学'],
        footerTags: ['WeChat Mini Program', '2025']
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
        qrcodeImage: 'images/nestqrcode.png',
        qrcodeHint: 'experience it now',
        contactInSidebar: true,
        accentColor: 'green',
        gallery: [
            { type: 'image', src: 'images/p10.png', alt: 'Nest Preview 1', label: '01' },
            { type: 'image', src: 'images/p5.png', alt: 'Nest Preview 2', label: '02' },
            { type: 'image', src: 'images/p6.png', alt: 'Nest Preview 3', label: '03' }
        ],
        overview: '「南苑Nest」，发现校园里每一个有趣的社团 在这里找到同频的好友 一起疯 一起追逐热爱 让大学生活更加精彩纷呈闪闪发光',
        highlight: '这一次 我想和你们一起 完成这个伟大而浪漫的奇迹',
        features: ['社团信息展示', '活动报名与提醒', '招新系统管理'],
        footerTags: ['WeChat Mini Program', '2026']
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
        qrcodeImage: 'images/yummyqrcode.png',
        qrcodeHint: 'experience it now',
        contactInSidebar: true,
        accentColor: 'orange',
        gallery: [
            { type: 'image', src: 'images/p7.png', alt: 'Yummy Preview 1', label: '01' },
            { type: 'image', src: 'images/p8.png', alt: 'Yummy Preview 2', label: '02' },
            { type: 'image', src: 'images/p9.png', alt: 'Yummy Preview 3', label: '03' }
        ],
        overview: '「南苑Yummy」期待和你一起，把校园里的每一处烟火气，化作回忆里的最温暖画映。一份图鉴，一段故事，一起走过校园里最美好的日子。',
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
        qrcodeImage: 'images/spotqrcode.png',
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
    course: { icon: 'course', desc: '课表管理', leafImage: 'images/leaf1.png', specimenNo: 'I' },
    nest: { icon: 'nest', desc: '社团探索', leafImage: 'images/flower2.png', specimenNo: 'II' },
    yummy: { icon: 'yummy', desc: '美食图鉴', leafImage: 'images/leaf5.png', specimenNo: 'III' },
    spot: { icon: 'spot', desc: '校园地图', leafImage: 'images/flower3.png', specimenNo: 'IV' }
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
