(function () {
    'use strict'
    // 获取html
    var docEl = document.documentElement,
        //  查找meta标签
        viewportEl = document.querySelector('meta[name="viewport"]'),
        // 没有获取到dpr 默认为1
        dpr = window.devicePixelRatio || 1,
        maxWidth = 540,
        minWidth = 320;

    // 保证dpr 只有 1， 2， 3
    dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);

    // 记录dpr值 maxwidth值 minwidth值
    docEl.setAttribute('data-dpr', dpr);
    docEl.setAttribute('max-width', maxWidth);
    docEl.setAttribute('min-width', minWidth);

    // 缩放比 (用来解决1px边框问题)
    var scale = 1 / dpr,
        content = 'width=device-width, initial-scale=' + scale + ',maximum-scale=' + scale +
        ',minimum-scale=' + scale + ',user-scalable=no';

    // 如果有就替换
    if (viewportEl) {
        // 写了就改content
        viewportEl.setAttribute('content', content);
    } else {
        // 没有写就创建写一个
        viewportEl = document.createElement('meta');
        viewportEl.setAttribute('name', 'viewport');
        viewportEl.setAttribute('content', content);
        document.head.appendChild(viewportEl);
    }
    // 初始化来一次
    setRemUnit();
    // 每次触发来一次
    window.addEventListener('resize', setRemUnit);

    function setRemUnit() {
        var ratio = 46.875;
        var viewWidth = docEl.getBoundingClientRect().width || window.innerWidth;

        // 将变动范围限制在 maxWidth 和 minWidth 之间 如果值为0 则没有限制
        if (maxWidth && (viewWidth / dpr > maxWidth)) {
            viewWidth = maxWidth * dpr;
        } else if (minWidth && (viewWidth / dpr < minWidth)) {
            viewWidth = minWidth * dpr;
        }
        docEl.style.fontSize = viewWidth / ratio + 'px';
    }
})();