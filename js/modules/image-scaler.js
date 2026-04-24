/**
 * 图片缩放模块
 * 实现图片自由缩放与右侧内容高度对齐
 * 图片不能缩小到小于容器，拖拽时不会露出背景
 */

const ImageScaler = (function() {

    const CONFIG = {
        minScale: 1.0,
        maxScale: 3.0,
        scaleStep: 0.1,
        debounceDelay: 100,
        transitionDuration: 300,
        heightOffset: 20
    };

    let isInitialized = false;
    let resizeObserver = null;
    let currentScale = 1;
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let imageOffset = { x: 0, y: 0 };
    let activeImage = null;
    let activeContainer = null;
    let containerSize = { width: 0, height: 0 };

    /**
     * 测量右侧内容区域高度
     */
    function measureRightContent() {
        const rightCards = document.querySelector('.bms-right-cards');
        if (!rightCards) return null;

        const rect = rightCards.getBoundingClientRect();
        return {
            element: rightCards,
            height: rect.height,
            top: rect.top
        };
    }

    /**
     * 测量左侧图片容器
     */
    function measureLeftImage() {
        const leftIllustration = document.querySelector('.bms-left-illustration');
        if (!leftIllustration) return null;

        const img = leftIllustration.querySelector('.bli-img');
        const rect = leftIllustration.getBoundingClientRect();

        return {
            element: leftIllustration,
            image: img,
            height: rect.height,
            width: rect.width,
            top: rect.top
        };
    }

    /**
     * 计算并应用高度对齐
     */
    function alignHeight() {
        const rightMetrics = measureRightContent();
        const leftMetrics = measureLeftImage();

        if (!rightMetrics || !leftMetrics) return;

        const topDiff = rightMetrics.top - leftMetrics.top;
        const targetHeight = rightMetrics.height + CONFIG.heightOffset;

        if (topDiff > 0) {
            leftMetrics.element.style.marginTop = `${topDiff}px`;
        }

        leftMetrics.element.style.height = `${targetHeight}px`;

        containerSize = {
            width: leftMetrics.width,
            height: targetHeight
        };

        fitImageToContainer(leftMetrics.image, leftMetrics.element);
    }

    /**
     * 图片适应容器（cover 模式，确保完全覆盖）
     */
    function fitImageToContainer(img, container) {
        if (!img || !container) return;

        const containerRect = container.getBoundingClientRect();
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;

        if (!naturalWidth || !naturalHeight) return;

        containerSize = {
            width: containerRect.width,
            height: containerRect.height
        };

        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.transition = `transform ${CONFIG.transitionDuration}ms ease`;
    }

    /**
     * 计算当前缩放下的最大允许偏移量
     */
    function getMaxOffset() {
        if (!activeContainer) return { x: 0, y: 0 };

        const scaledWidth = containerSize.width * currentScale;
        const scaledHeight = containerSize.height * currentScale;

        const maxOffsetX = Math.max(0, (scaledWidth - containerSize.width) / 2);
        const maxOffsetY = Math.max(0, (scaledHeight - containerSize.height) / 2);

        return { x: maxOffsetX, y: maxOffsetY };
    }

    /**
     * 限制偏移量在允许范围内
     */
    function clampOffset(offset) {
        const maxOffset = getMaxOffset();

        return {
            x: Math.max(-maxOffset.x, Math.min(maxOffset.x, offset.x)),
            y: Math.max(-maxOffset.y, Math.min(maxOffset.y, offset.y))
        };
    }

    /**
     * 缩放图片
     */
    function scaleImage(delta) {
        if (!activeImage) return;

        const newScale = Math.max(
            CONFIG.minScale,
            Math.min(CONFIG.maxScale, currentScale + delta)
        );

        if (newScale === currentScale) return;

        currentScale = newScale;

        imageOffset = clampOffset(imageOffset);

        applyTransform();
    }

    /**
     * 应用变换
     */
    function applyTransform() {
        if (!activeImage) return;

        activeImage.style.transform = `translate(${imageOffset.x}px, ${imageOffset.y}px) scale(${currentScale})`;
    }

    /**
     * 重置缩放
     */
    function resetScale() {
        currentScale = CONFIG.minScale;
        imageOffset = { x: 0, y: 0 };
        applyTransform();
    }

    /**
     * 处理滚轮缩放
     */
    function handleWheel(e) {
        if (!activeImage) return;

        e.preventDefault();

        const delta = e.deltaY > 0 ? -CONFIG.scaleStep : CONFIG.scaleStep;
        scaleImage(delta);
    }

    /**
     * 处理拖拽开始
     */
    function handleDragStart(e) {
        if (!activeImage || currentScale <= CONFIG.minScale) return;

        isDragging = true;
        dragStart = {
            x: e.clientX - imageOffset.x,
            y: e.clientY - imageOffset.y
        };

        activeImage.style.cursor = 'grabbing';
        activeImage.style.transition = 'none';
    }

    /**
     * 处理拖拽移动
     */
    function handleDragMove(e) {
        if (!isDragging || !activeImage) return;

        e.preventDefault();

        const rawOffset = {
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        };

        imageOffset = clampOffset(rawOffset);

        applyTransform();
    }

    /**
     * 处理拖拽结束
     */
    function handleDragEnd() {
        if (!activeImage) return;

        isDragging = false;
        activeImage.style.cursor = currentScale > CONFIG.minScale ? 'grab' : 'default';
        activeImage.style.transition = `transform ${CONFIG.transitionDuration}ms ease`;
    }

    /**
     * 处理双击重置
     */
    function handleDoubleClick() {
        resetScale();
    }

    /**
     * 绑定事件
     */
    function bindEvents(container, img) {
        container.addEventListener('wheel', handleWheel, { passive: false });
        container.addEventListener('mousedown', handleDragStart);
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        container.addEventListener('dblclick', handleDoubleClick);

        img.addEventListener('load', () => {
            fitImageToContainer(img, container);
        });
    }

    /**
     * 解绑事件
     */
    function unbindEvents(container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('mousedown', handleDragStart);
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        container.removeEventListener('dblclick', handleDoubleClick);
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

        const container = document.querySelector('.bms-left-illustration');
        const img = container?.querySelector('.bli-img');

        if (!container || !img) return;

        activeContainer = container;
        activeImage = img;
        currentScale = CONFIG.minScale;

        setTimeout(alignHeight, 100);

        resizeObserver = new ResizeObserver(debounce(alignHeight, CONFIG.debounceDelay));

        const rightCards = document.querySelector('.bms-right-cards');
        if (rightCards) {
            resizeObserver.observe(rightCards);
        }
        resizeObserver.observe(container);

        window.addEventListener('resize', debounce(alignHeight, CONFIG.debounceDelay));

        bindEvents(container, img);

        img.style.cursor = 'default';
        img.style.transformOrigin = 'center center';
        img.style.userSelect = 'none';
        img.style.draggable = 'false';

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

        if (activeContainer) {
            unbindEvents(activeContainer);
        }

        window.removeEventListener('resize', alignHeight);

        activeContainer = null;
        activeImage = null;
        isInitialized = false;
    }

    /**
     * 手动触发对齐
     */
    function refresh() {
        alignHeight();
    }

    /**
     * 设置缩放比例
     */
    function setScale(scale) {
        currentScale = Math.max(CONFIG.minScale, Math.min(CONFIG.maxScale, scale));
        imageOffset = clampOffset(imageOffset);
        applyTransform();
    }

    /**
     * 获取当前缩放比例
     */
    function getScale() {
        return currentScale;
    }

    return {
        init,
        destroy,
        refresh,
        scaleImage,
        setScale,
        getScale,
        resetScale,
        alignHeight,
        CONFIG
    };
})();

if (typeof window !== 'undefined') {
    window.ImageScaler = ImageScaler;
}
