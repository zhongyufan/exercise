// 原型、用处
// 原型链
// DOM继承树
// DOM增删补
// 每个函数都内置一个属性，Prototype 原型
// Prototype 是对象
// 如果一个对象是通过new产生的，那么这个对象将有缺省的属性，_proto_，这个属性指向（引用）函数的原型。
// 内部属性，能不改就不改

// Prototype
// 凡是函数都有属性Prototype
// 凡是函数构造的对象都有属性__proto__
// prototype,_proto_,都指向同一对象

// var obj = {};
// var obj2 = new Object();
//
// console.log(obj2.__proto__);
// console.log(Object.prototype);
// console.log(obj2.__proto__ === Object.知识精英);

// 不是只有大写字母开头的函数具备这个特性
// function f() {
//
// };
// var o3=new f();
// // console.log(f.prototype);
// // console.log(o3.__proto__);
// // console.log(o3.__proto__===f.prototype);
//
// // Prototype的用法：生成的对象将获得Prototype的属性和方法
// var pt = f.prototype;
// pt.abc = '123';
// pt.sayHello123 = function () {
//     console.log('hello!');
// };
// // console.log(o3.abc);
// // o3.sayHello123();
//
// o3.abc='456'; // 仅仅是改写了自己的abc
// console.log(o3.abc);
//
// // 虽然两个都指向同一对象，但是不建议这么做
// // o3.__proto__.abc='456';
// // console.log(o3.abc);
//
// delete o3.abc;
// console.log(o3.abc);
//
// // f.prototype.abc='789';// 只能在这里改
//
// var o4=new f();
// console.log(o4.abc);
// // o4.sayHello123();

// 原型链
// 从对象开始__proto__可以一直指向null
// 上层会覆盖下层 上层有 都可以使用


// 一层的继承
// function Grand() {
//
// }
//
// function Father() {
//
// }
//
// var g = new Grand();
// Father.prototype = g;
// Father.prototype.constructor = Father;
//
// var f = new Father();

//f.__proto__.__proto__.__proto__.__proto__ //null


// 多层继承
// function Grand() {
//
// }
//
// function Father() {
//
// }
//
// var g = new Grand();
// Father.prototype = g;
// Father.prototype.constructor = Father;
//
// function Son() {
//
// }
//
// var f = new Father();
// Son.prototype = f;
// Son.prototype.constructor = Son;
//
// var s = new Son();

// getElementById()、getElementsByName()仅在 document.prototype上

// getElementsByTagName(); getElementsByName(); querySelector(); querySelectorAll(); 在document.prototype和Element.prototype

// document.prototype 上，有body 和head 属性
// document.prototype 上，有documentElement属性（<html>）

// Node
// EventTarget
// Object -> EventTarget -> Node -> Document -> HTMLDocument
//                                           -> XMLDocument
//                               -> Element  -> ...
//                               -> Attr
//                               -> CharacterData -> Text
//                                                -> Comment
// 参考文献：http://w3help.org/zh-cn/causes/SD9024


// DOM 增删替
// var p = document.createElement('p');
// var txt =document.createTextNode('aaaa');
// p.appendChild(txt);
// console.log(p);
// document.body.appendChild(p);
//
// // appendChild 父亲元素把儿子元素放在所有当前儿子元素的最后
//
// // insertBefore(x,y) x指的是插什么，y指的是插再哪个前面
// var p2 = document.createElement('p');
// var txt2 =document.createTextNode('bbbb');
// p2.appendChild(txt2);
// document.body.insertBefore(p2,p);
//
// // // 删除 removeChild 父亲删除儿子 但是只是从tree摘下来，并没有扔掉
// // document.body.removeChild(p2);
// //
// // // 删除 彻底扔掉
// // p2.remove();
//
// // 替换 replace 父亲替换儿子
// var p3 = document.createElement('p');
// var txt3 =document.createTextNode('cccc');
// p3.appendChild(txt3);
// document.body.replaceChild(p3,p2);

// 练习
// var p =document.getElementById('pid');
// var stg =document.createElement('strong');
// var str =document.createTextNode('Hey,it is new line!');
// stg.appendChild(str);
// p.appendChild(stg);
//
// var cmt = document.createComment('###Comment');
// p.insertBefore(cmt,stg);

// element.innerHTML
// node.innerText 有标记会转译
// node.textContent

// p.innerHTML='<a href="http://www.taobao.com">淘宝</a>';
// p.innerText='<a href="http://www.taobao.com">淘宝</a>';
// p.textContent='<a href="http://www.taobao.com">淘宝</a>';

// element.setAttribute()
// element.getAttribute()

// console.log(p.getAttribute('class'));
// p.setAttribute('class','cls2')
// console.log(p.getAttribute('class'));


// BOM (Browser Object Model)
// window
// Screen
// Location
// Navigator
// 弹窗
// cookie

// window
// var w = window.innerWidth
//     || document.documentElement.clientWidth // IE 8,7,6,5
//     || document.body.clientWidth;
// console.log(w);
// var h = window.innerHeight
//     || document.documentElement.clientHeight
//     || document.body.clientHeight;
// console.log(h);
//
// var ws = screen.availWidth;
// var hs = screen.availHeight;
// console.log(ws);
// console.log(hs);

// screen 返回屏幕大小
// inner 返回窗口大小

// location
// console.log(location.hostname);
// console.log(location.pathname);
// console.log(location.port);
// console.log(location.protocol);
// console.log(location.href); // 上边四个都是分解href
// location.assign('http://www.taobao.com'); // 会跳转淘宝

// navigator 得到浏览器的信息
// 网景倒闭时候开源的Mozilla Chrome拿过来用
// console.log(navigator.appCodeName);
// console.log(navigator.appName);
// console.log(navigator.appVersion); // 内核
// console.log(navigator.cookieEnabled); // 是否允许
// console.log(navigator.platform); // 什么系统
// console.log(navigator.userAgent);



























