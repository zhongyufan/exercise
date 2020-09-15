// // div的最长长度或者高度
// var MAX = 500;
// // div的最短或者最矮高度
// var EDGE = 20;
// // 从EDGE到MAX的长度
// var LENGTH = MAX - EDGE;
// // 从EDGE涨到MAX，或者从MAX小到EDGE的时间（毫秒）
// var PERIOD = 500;
//
//
// var div = $('div#div1');
//
// function startAnimation() {
//     div.animate({width: MAX + 'px'}, PERIOD, 'linear');
//     div.animate({width: EDGE + 'px', left: LENGTH + 'px'}, PERIOD, 'linear');
//     div.animate({height: MAX + 'px'}, PERIOD, 'linear');
//     div.animate({height: EDGE + 'px', top: LENGTH + 'px'}, PERIOD, 'linear');
//     div.animate({width: MAX + 'px', left: '0px'}, PERIOD, 'linear');
//     div.animate({width: EDGE + 'px'}, PERIOD, 'linear');
//     div.animate({height: MAX + 'px', top: '0px'}, PERIOD, 'linear');
//     div.animate({height: EDGE + 'px'}, PERIOD, 'linear',startAnimation);
// }
//
// startAnimation();


function truncate(str, num) {
    // 请把你的代码写在这里
    if (str.length > num &&num>3) {
        return str.slice(0, num - 3) + "...";
    }
    else if (num <= 3) {
        return str.slice(0, num) + "...";
    }
}

truncate("A-", 1);
