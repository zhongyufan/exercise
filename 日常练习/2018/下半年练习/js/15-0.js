window.onload = function () {
// 事件
// 事件是JS引擎内置的、预先定义的函数变量
// 事件有可能由浏览器触发，也可能由用户触发
// 当事件触发时，JS引擎会按照一定的规则调用这些变量中的函数。
// 事件可编程。

// 事件绑定
//      onTYPE=function (e) {...}
//          优点：兼容性好
//          缺点：过于古老，只能绑定一个函数，等同于写在DOM上的attribute
//     eventTarget.addEventListener(TYPE,function,false)
//          优点：可以绑定多个函数，同一函数只能绑定一次
//          缺点：IE9及以下不支持
//     element.attachEvent(onTYPE,function)
//          优点：可以绑定多个函数，同一函数可以绑定多次
//          缺点：IE only
//表单事件：https://www.runoob.com/jsref/dom-obj-event.html

    // 1、onTYPE
    var d = document.getElementById('theD');
    // d.onclick=function () {
    //     console.log('我被点击了');
    // };
    // d.onclick=function () {
    //     console.log('我又被点击了');
    // };

    // 2、addEventListener
    // d.addEventListener('click',function () {
    //     console.log('我被点击了');
    // });
    // d.addEventListener('click',function () {
    //     console.log('我又被点击了');
    // });
    // 3、attachEvent
    // 在chrome里面，this指向当前相应元素
    // 在IE里面，this指向window
    // chrome不支持
    // function divclick(){
    //     console.log('我被被被');
    // }
    // d.attachEvent('onclick',function () {
    //     divclick.call(d)
    // })
    //
    // 练习，写一个可以同时兼容IE和Chrome的点击函数
    // 1.函数方式
    // function addEvent(elmt, type, func) {
    //     if(elmt.addEventListener){
    //         elmt.addEventListener(type,func,false);
    //     }else if(elmt.attachEvent){ //IE
    //         elmt.attachEvent('on'+type+function () {
    //             func.call(elmt);
    //         });
    //     }else {
    //         elmt['on'+type]=func;
    //     }
    // }
    // function divclick() {
    //     console.log('我又要被点击');
    // }
    // addEvent(d,'click',divclick);
    //
    // 2.Element.prototype
    // Element.prototype.addEvent = function (type, fnc) {
    //     var elmt = this;
    //     if (elmt.addEventListener) {
    //         elmt.addEventListener(type, fnc);
    //     } else if (elmt.attachEvent) {
    //         elmt.attachEvent('on' + type, function () {
    //             fnc.call(elmt);
    //         })
    //     }else {
    //         elmt['on'+type]=fnc;
    //     }
    // };
    // function divclick() {
    //     console.log('你说什么呢？ 第五次练习');
    // }
    // d.addEvent('click',divclick);
    //

// 解绑定事件
//     onTYPE = null
//     eventTarget.removeEventListener(TYPE, function)
//     IE9及以下不支持
//     element.detachEvent(onTYPE, function)
//     IE only
    //
    // 1、onTYPE
    // var btn=document.getElementById('btn');
    // d.onclick = function () {
    //     console.log('我被点击了');
    // };
    // btn.onclick=function () {
    //     d.onclick=null;
    // }
    //
    // 2、remove
    // d.addEventListener('click', divclick, false);// 保持一致
    // function divclick() {
    //     console.log('我又被点击了');
    // }
    // var btn = document.getElementById('btn');
    // btn.addEventListener('click', function () {
    //     d.removeEventListener('click', divclick, false);// 保持一致
    // }, false)
    //
    // 3、detachEvent('on'+type,fnc)
};