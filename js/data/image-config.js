/**
 * 图片资源配置文件
 * 统一管理所有图片链接，方便换源
 * 
 * 使用方法：
 * 1. 修改 CDN_BASE 即可全局更换图片源
 * 2. 所有图片引用通过 getImage() 函数获取
 */

const CDN_BASE = 'https://fastly.jsdelivr.net/gh/LOVE-START/Portfolio@main/images/';

const IMAGE_CONFIG = {
    logos: {
        zeroNight: 'zeronightlogo.png',
        course: 'courselogo.png',
        nest: 'nestlogo.png',
        yummy: 'yummylogo.png',
        spot: 'spotlogo.png'
    },

    icons: {
        course: 'course.png',
        nest: 'nest.png',
        yummy: 'yummy.png',
        spot: 'spot.png'
    },

    whiteIcons: {
        course: 'whitecourse.png',
        nest: 'whitenest.png',
        yummy: 'whiteyummy.png',
        spot: 'whitemap.png'
    },

    botanical: {
        leaf1: 'leaf1.png',
        leaf2: 'leaf2.png',
        leaf3: 'leaf3.png',
        leaf4: 'leaf4.png',
        leaf5: 'leaf5.png',
        leaf6: 'leaf6.png',
        leaf7: 'leaf7.png',
        flower1: 'flower1.png',
        flower2: 'flower2.png',
        flower3: 'flower3.png',
        flower4: 'flower4.png'
    },

    hero: {
        main: '2.png',
        visual: '3.png',
        banner: '4.png',
        illustration: '5.png'
    },

    banner: {
        main: 'banner.png'
    },

    autumn: {
        course: 'autumn.png',
        nest: 'autumn1.png',
        yummy: 'autumn2.png',
        spot: 'autumn3.png'
    },

    beautiful: {
        main: 'beautiful.png',
        cat1: 'beautiful2.png',
        cat2: 'beautiful3.png'
    },

    story: {
        scene: 'story2.png'
    },

    cards: {
        qr: 'card1.png',
        toc: 'card2.png',
        envelope: 'card3.png'
    },

    gallery: {
        p1: 'p1.jpeg',
        p2: 'p2.jpg',
        p3: 'p3.jpeg',
        p4: 'p4.png',
        p5: 'p5.png',
        p6: 'p6.png',
        p7: 'p7.png',
        p8: 'p8.png',
        p9: 'p9.png',
        p10: 'p10.png',
        d1: 'd1.png',
        d2: 'd2.png',
        d3: 'd3.png',
        d4: 'd4.png',
        d5: 'd5.png',
        d6: 'd6.png',
        d7: 'd7.png',
        d8: 'd8.png',
        d9: 'd9.png',
        d10: 'd10.png',
        d11: 'd11.png'
    },

    qrcodes: {
        course: 'courseqrcode.png',
        nest: 'nestqrcode.png',
        yummy: 'yummyqrcode.png',
        spot: 'spotqrcode.png'
    },

    decorations: {
        g1: 'g1.png',
        g2: 'g2.png',
        g3: 'g3.png',
        g4: 'g4.png',
        g5: 'g5.png',
        g6: 'g6.png',
        g7: 'g7.png',
        g8: 'g8.png',
        g9: 'g9.png',
        g10: 'g10.png',
        g11: 'g11.png',
        g12: 'g12.png',
        g13: 'g13.png',
        g14: 'g14.png',
        g15: 'g15.png',
        g16: 'g16.png',
        g17: 'g17.png',
        qm1: 'qm1.png',
        qm2: 'qm2.png'
    },

    characters: {
        girlCat: 'grilcat.png',
        zeroNight: 'zeronight.png',
        yiChun: 'yichun.png',
        wuJiYan: 'wujiyan1.png'
    }
};

function getImage(category, key) {
    if (!IMAGE_CONFIG[category]) {
        console.warn(`Image category "${category}" not found`);
        return '';
    }
    if (!IMAGE_CONFIG[category][key]) {
        console.warn(`Image key "${key}" not found in category "${category}"`);
        return '';
    }
    return CDN_BASE + IMAGE_CONFIG[category][key];
}

function getLogo(name) {
    return getImage('logos', name);
}

function getIcon(name) {
    return getImage('icons', name);
}

function getWhiteIcon(name) {
    return getImage('whiteIcons', name);
}

function getBotanical(name) {
    return getImage('botanical', name);
}

function getHero(name) {
    return getImage('hero', name);
}

function getAutumn(name) {
    return getImage('autumn', name);
}

function getBeautiful(name) {
    if (name === 'main') return getImage('beautiful', 'main');
    return getImage('beautiful', name);
}

function getStory(name) {
    return getImage('story', name);
}

function getCard(name) {
    return getImage('cards', name);
}

function getGallery(name) {
    return getImage('gallery', name);
}

function getQrcode(name) {
    return getImage('qrcodes', name);
}

function getDecoration(name) {
    return getImage('decorations', name);
}

function getCharacter(name) {
    return getImage('characters', name);
}

function getAsset(path) {
    return CDN_BASE + path;
}

const IMAGES = {
    base: CDN_BASE,
    config: IMAGE_CONFIG,
    get: getImage,
    getLogo,
    getIcon,
    getWhiteIcon,
    getBotanical,
    getHero,
    getAutumn,
    getBeautiful,
    getStory,
    getCard,
    getGallery,
    getQrcode,
    getDecoration,
    getCharacter,
    getAsset
};
