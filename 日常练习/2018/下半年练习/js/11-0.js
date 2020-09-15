// Date对象
// 1、获取当前时间
// var d1 = new Date();
// console.log(d1);
//
// // 2、数：1970年1月1日起到现在的毫秒数
// console.log(d1.getTime());
// var x = d1.getTime();
// x = x / (1000 * 3600 * 24 * 365);
// console.log(x);
//
// // 3、setFullYear 月份设定0～11，其他不变
// d1.setFullYear(2017, 0, 1);
// console.log(d1);
//
// // 4、有参数的构造函数
// var d2 = new Date(2017, 0, 1);
// console.log(d2);
//
// // 5、GMT 格林尼治时间；UTC 协调世界时间；闰天闰秒
// console.log(d1.toUTCString());
// console.log(d1.toGMTString());
//
// // 6、设定年 setFullYear，getFullYear
// d1.setFullYear(2015);
// console.log(d1);
// d1.setFullYear(d1.getFullYear() + 1);
// console.log(d1);
//
// // 7、设定月（0～11），日
// console.log(d1.getMonth() + 1);
// console.log(d1.getDate());
//
// // 8、设定星期几 星期天0 星期一～六1～6
// console.log(d1.getDay());
//
// // 9、另一种获取毫秒数的办法
// var d3 = Date.parse(d1.toString());
// console.log(d3);
//
// // 10、Date 克隆
// var d4 = new Date(d1);
// console.log(d4);
//
// // 11、比较
// var d5=new Date(2018,0,1);
// var d6=new Date(2017,0,1);
// console.log((d5-d6)/(1000*3600*24));

// 练习1：做一个钟表
// var timer;
//
// function time() {
//     var oDiv = document.getElementById('txt');
//
//     var today = new Date();
//     var hour = to2bit(today.getHours());
//     var minutes = to2bit(today.getMinutes());
//     var seconds = to2bit(today.getSeconds());
//
//     oDiv.innerHTML = hour + ':' + minutes + ':' + seconds;
//     timer = setTimeout('time()', 20);
//
// }
//
// function stopTime() {
//     clearTimeout(timer);
// }
// function to2bit(num){
//     if(num<10){
//         return '0'+num;
//     }else {
//         return ''+num;
//     }
// }
//
// timer = setTimeout('time()', 20);

// 一次
// setTimeout()
// clearTimeout()

// 重复
// setInterval()
// clearInterval()

// 改造成使用setInterval()和clearInterval()
// var timer;
//
// function time() {
//     var oDiv = document.getElementById('txt');
//
//     var today = new Date();
//     var hour = to2bit(today.getHours());
//     var minutes = to2bit(today.getMinutes());
//     var seconds = to2bit(today.getSeconds());
//
//     oDiv.innerHTML = hour + ':' + minutes + ':' + seconds;
//     // timer = setTimeout('time()', 20); // 则没这个问题
//
// }
//
// function stopTime() {
//     clearInterval(timer);
// }
// function to2bit(num){
//     if(num<10){
//         return '0'+num;
//     }else {
//         return ''+num;
//     }
// }
//
// timer = setInterval('time()', 20);// 要在20ms内运行完函数

// 练习2，做一个可以伸长的div
// function long() {
//     var oDiv = document.getElementById('divid');
//
//     for (var i = 0; i < 300; i++) {
//         return i;
//     }
//     oDiv.style.width='200px';
// }
// long();
// window.onload=function () {
//     var oDiv = document.getElementById('div1').style;
//     setInterval(function () {
//         oDiv.width=parseInt(oDiv.width)+1+'px';
//     },20);
// };

// hardcode:所有的常数都是通过直接在代码中“硬写”。
//          后果：一旦需要修改，所有的地方必须同时修改。
// 1、调通demo
// 2、改善

// div的最长长度或者高度
var MAX = 500;
// div的最短或者最矮高度
var EDGE = 20;
// 从EDGE到MAX的长度
var LENGTH = MAX - EDGE;
// 动画刷新的时间间隔（毫秒）
var INTERVAL = 20;
// 从EDGE涨到MAX，或者从MAX小到EDGE的时间（毫秒）
var PERIOD = 500;
// 每次时间间隔应该延长或者缩短的距离
var SPEED = Math.floor((LENGTH / PERIOD) * INTERVAL);

// 顶部,变长阶段
function startLongerTop() {
    var div = document.getElementById('div1');
    var width = Number.parseInt(div.style.width);
    if (isNaN(width)) return;
    if (width < MAX) {
        width += SPEED;
        div.style.width = width + 'px';
        setTimeout('startLongerTop()', INTERVAL);
    } else {
        div.style.width = MAX + 'px';
        setTimeout('startShorterTop()', INTERVAL);
    }
}

// 顶部，变短阶段
function startShorterTop() {
    var div = document.getElementById('div1');
    var width = Number.parseInt(div.style.width);
    if (isNaN(width)) return;
    if (width > EDGE) {
        width -= SPEED;
        div.style.width = width + 'px';
        div.style.left = (MAX - width) + 'px';
        setTimeout('startShorterTop()', INTERVAL);
    } else {
        div.style.width = EDGE + 'px';
        div.style.left = LENGTH + 'px';
        setTimeout('startLongerRight()', INTERVAL);
    }
}


// 右部,变长阶段
function startLongerRight() {
    var div = document.getElementById('div1');
    var height = Number.parseInt(div.style.height);
    if (isNaN(height)) return;
    if (height < MAX) {
        height += SPEED;
        div.style.height = height + 'px';
        setTimeout('startLongerRight()', INTERVAL);
    } else {
        div.style.height = MAX + 'px';
        setTimeout('startShorterRight()', INTERVAL);
    }
}

// 右部，变短阶段
function startShorterRight() {
    var div = document.getElementById('div1');
    var height = Number.parseInt(div.style.height);
    if (isNaN(height)) return;
    if (height > EDGE) {
        height -= SPEED;
        div.style.height = height + 'px';
        div.style.top = (MAX - height) + 'px';
        setTimeout('startShorterRight()', INTERVAL);
    } else {
        div.style.height = EDGE + 'px';
        div.style.top = LENGTH + 'px';
        setTimeout('startLongerBottom()', INTERVAL);
    }
}

// 底部,变长阶段
function startLongerBottom() {
    var div = document.getElementById('div1');
    var width = Number.parseInt(div.style.width);
    if (isNaN(width)) return;
    if (width < MAX) {
        width += SPEED;
        div.style.width = width + 'px';
        div.style.left = (MAX - width) + 'px';
        setTimeout('startLongerBottom()', INTERVAL);
    } else {
        div.style.width = MAX + 'px';
        div.style.left = '0px';
        setTimeout('startShorterBottom ()', INTERVAL);
    }
}

// 底部，变短阶段
function startShorterBottom() {
    var div = document.getElementById('div1');
    var width = Number.parseInt(div.style.width);
    if (isNaN(width)) return;
    if (width > EDGE) {
        width -= SPEED;
        div.style.width = width + 'px';
        setTimeout('startShorterBottom()', INTERVAL);
    } else {
        div.style.width = EDGE + 'px';
        setTimeout('startLongerLeft()', INTERVAL);
    }
}

// 左部,变长阶段
function startLongerLeft() {
    var div = document.getElementById('div1');
    var height = Number.parseInt(div.style.height);
    if (isNaN(height)) return;
    if (height < MAX) {
        height += SPEED;
        div.style.height = height + 'px';
        div.style.top = (MAX - height) + 'px';
        setTimeout('startLongerLeft()', INTERVAL);
    } else {
        div.style.height = MAX + 'px';
        div.style.top = '0px';
        setTimeout('startShorterLeft()', INTERVAL);
    }
}

// 左部，变短阶段
function startShorterLeft() {
    var div = document.getElementById('div1');
    var height = Number.parseInt(div.style.height);
    if (isNaN(height)) return;
    if (height > EDGE) {
        height -= SPEED;
        div.style.height = height + 'px';
        setTimeout('startShorterLeft()', INTERVAL);
    } else {
        div.style.height = EDGE + 'px';
        setTimeout('startLongerTop()', INTERVAL);
    }
}


setTimeout('startLongerTop()', INTERVAL);




















