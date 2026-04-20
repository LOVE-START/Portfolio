/**
 * 底部对齐引擎
 * 智能计算并调整侧边栏与内容区域的底部对齐
 */

const BottomAlignEngine = (function() {
    
    const CONFIG = {
        minGap: 8,
        maxGap: 32,
        minQRCodeSize: 100,
        maxQRCodeSize: 160,
        debounceDelay: 100
    };

    let isInitialized = false;
    let resizeObserver = null;
    let rafId = null;

    /**
     * 测量容器尺寸
     */
    function measure() {
        const sidebar = document.querySelector('.sidebar-sticky');
        const content = document.querySelector('.showcase-content');
        
        if (!sidebar || !content) return null;

        const sidebarRect = sidebar.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();

        const sidebarBottom = sidebarRect.top + sidebarRect.height;
        const contentBottom = contentRect.top + contentRect.height;
        const bottomDiff = contentBottom - sidebarBottom;

        return {
            sidebar: {
                element: sidebar,
                height: sidebarRect.height,
                bottom: sidebarBottom
            },
            content: {
                element: content,
                height: contentRect.height,
                bottom: contentBottom
            },
            bottomDiff: bottomDiff
        };
    }

    /**
     * 计算当前子元素间距信息
     */
    function getGapInfo(container) {
        const children = Array.from(container.children);
        if (children.length < 2) return { count: 0, totalAdjustable: 0 };

        let count = 0;
        let totalAdjustable = 0;

        children.forEach((child, i) => {
            if (i < children.length - 1) {
                const currentGap = parseFloat(getComputedStyle(child).marginBottom) || 0;
                const canIncrease = CONFIG.maxGap - currentGap;
                const canDecrease = currentGap - CONFIG.minGap;
                count++;
                totalAdjustable += Math.max(canIncrease, canDecrease);
            }
        });

        return { count, totalAdjustable };
    }

    /**
     * 一次性精确对齐
     */
    function align() {
        if (rafId) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() => {
            const metrics = measure();
            if (!metrics) return;

            const diff = metrics.bottomDiff;
            if (Math.abs(diff) < 0.5) return;

            const sidebar = metrics.sidebar.element;
            const children = Array.from(sidebar.children);
            const gapInfo = getGapInfo(sidebar);

            let remaining = diff;

            if (diff > 0 && gapInfo.count > 0) {
                const gapIncrease = diff / gapInfo.count;
                let appliedByGap = 0;

                children.forEach((child, i) => {
                    if (i < children.length - 1) {
                        const currentGap = parseFloat(getComputedStyle(child).marginBottom) || 0;
                        const newGap = Math.min(currentGap + gapIncrease, CONFIG.maxGap);
                        child.style.marginBottom = `${newGap}px`;
                        appliedByGap += (newGap - currentGap);
                    }
                });

                remaining = diff - appliedByGap;

                if (remaining > 0) {
                    const qrcodeImg = sidebar.querySelector('.qrcode-image');
                    if (qrcodeImg) {
                        const currentSize = qrcodeImg.offsetWidth;
                        const maxSize = CONFIG.maxQRCodeSize;
                        const sizeIncrease = Math.min(remaining, maxSize - currentSize);
                        if (sizeIncrease > 0) {
                            qrcodeImg.style.width = `${currentSize + sizeIncrease}px`;
                            qrcodeImg.style.height = `${currentSize + sizeIncrease}px`;
                            remaining -= sizeIncrease;
                        }
                    }
                }
            } else if (diff < 0 && gapInfo.count > 0) {
                const absDiff = Math.abs(diff);
                const gapDecrease = absDiff / gapInfo.count;
                let appliedByGap = 0;

                children.forEach((child, i) => {
                    if (i < children.length - 1) {
                        const currentGap = parseFloat(getComputedStyle(child).marginBottom) || 0;
                        const newGap = Math.max(currentGap - gapDecrease, CONFIG.minGap);
                        child.style.marginBottom = `${newGap}px`;
                        appliedByGap += (currentGap - newGap);
                    }
                });

                remaining = diff + appliedByGap;

                if (remaining < 0) {
                    const qrcodeImg = sidebar.querySelector('.qrcode-image');
                    if (qrcodeImg) {
                        const currentSize = qrcodeImg.offsetWidth;
                        const minSize = CONFIG.minQRCodeSize;
                        const sizeDecrease = Math.min(Math.abs(remaining), currentSize - minSize);
                        if (sizeDecrease > 0) {
                            qrcodeImg.style.width = `${currentSize - sizeDecrease}px`;
                            qrcodeImg.style.height = `${currentSize - sizeDecrease}px`;
                            remaining += sizeDecrease;
                        }
                    }
                }
            }

            if (Math.abs(remaining) > 0.5) {
                const currentPadding = parseFloat(getComputedStyle(sidebar).paddingBottom) || 0;
                sidebar.style.paddingBottom = `${Math.max(0, currentPadding + remaining)}px`;
            }
        });
    }

    /**
     * 防抖函数
     */
    function debounce(fn, delay) {
        let timer = null;
        return function(...args) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    /**
     * 初始化
     */
    function init() {
        if (isInitialized) return;

        const container = document.querySelector('.magazine-content-wrap');
        if (!container) return;

        setTimeout(align, 100);

        resizeObserver = new ResizeObserver(debounce(align, CONFIG.debounceDelay));

        const sidebar = document.querySelector('.sidebar-sticky');
        const content = document.querySelector('.showcase-content');

        if (sidebar) resizeObserver.observe(sidebar);
        if (content) resizeObserver.observe(content);
        resizeObserver.observe(container);

        window.addEventListener('resize', debounce(align, CONFIG.debounceDelay));

        isInitialized = true;
    }

    /**
     * 销毁
     */
    function destroy() {
        if (resizeObserver) {
            resizeObserver.disconnect();
            resizeObserver = null;
        }
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        window.removeEventListener('resize', align);
        isInitialized = false;
    }

    return {
        init,
        align,
        destroy,
        CONFIG
    };
})();
