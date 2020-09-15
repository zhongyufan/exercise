// 冒泡和捕获
// 冒泡类似击鼓传花
// 同一事件，子元素的事件触发后再触发父元素

// 事件捕获：
// 同一事件，先触发父元素，再触发子元素
// IE没有事件捕获

// 冒泡
var dg = document.getElementsByClassName('clsg')[0];
var df = document.getElementsByClassName('clsf')[0];
var ds = document.getElementsByClassName('clss')[0];

// df.addEventListener('click', function () {
//     console.log('df click 冒泡');
// }, false);
// dg.addEventListener('click', function () {
//     console.log('dg click 冒泡');
// }, false);
// ds.addEventListener('click', function () {
//     console.log('ds click 冒泡')
// }, false);
// document.body.addEventListener('click',function () {
//     console.log('body click 冒泡');
// },false);
// ds.addEventListener('click', function () {
//     console.log('ds click 捕获')
// }, true);
// df.addEventListener('click', function () {
//     console.log('df click 捕获');
// }, true);
// dg.addEventListener('click', function () {
//     console.log('dg click 捕获');
// }, true);
// 触发顺序：
// 首先捕获，然后是事件执行，最后是冒泡
// focus，blur，change，submit，reset，select不冒泡

// 阻止和取消 event.stopPropagation
// 阻止默认事件：
// 默认事件：表单提交，a标签的跳转，右键菜单 //与冒泡不同，点谁是谁，去掉缺省行为
// onTYPE：return false // 调用完后使用
// W3C：event.preventDefault()
// IE：event.returnValue=false;

// ds.addEventListener('click', function (e) {
//     console.log('ds click 冒泡');
//     e = e || window.event;
//
//     // if (e.stopPropagation) {
//     //     e.stopPropagation();
//     // } else {
//     //     e.cancelBubble = true;
//     // }
// }, false);
// df.addEventListener('click',function (e) {
//     console.log('df click 冒泡');
//     e =e||window.event;// IE
//     var target =e.target||e.srcElement;// IE
//     console.log(target);
// },false);

// 阻止默认事件，禁用右键
// 1、return false
// document.oncontextmenu = function (e) {
//     console.log('right click');
//     return false;
// };
// 2、 e.stopPropagation()
// document.addEventListener('contextmenu', function (e) {
//     console.log('addEventListener contextmune');
//     e = e || window.event;
//     if (e.preventDefault) {
//         e.preventDefault();
//     } else {
//         e.returnValue = false;
//     }
// }, false);

// var a = document.getElementById('aid');
// a.addEventListener('click', function (e) {
//     console.log('addEventListener click');
//     e = e || window.event;
//     if (e.preventDefault) {
//         e.preventDefault();
//     } else {
//         e.returnValue = false;
//     }
// }, false);



