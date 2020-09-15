// // 1、展开操作符
// var ea = ['1', '2', '3'];
// console.log(...ea);
// // 2、for..of
// const eb = ['1', '2', '3'];
// for (const item of eb) {
//     console.log('for..of:' + item);
// }
// ;
// // 3、includes('string') 搜索功能 区分大小写
// const ec = ['aa', 'Bb', 'cC', 'DD'];
// console.log('includes():' + ec.includes('DD'));
// // 4、some(function) 核心思想与includes一致 用于检查有无
// const ed = [12, 24, 34];
// console.log('es5-some():' + ed.some(function (e) {
//     return e >= 13;
// }));
// console.log('es6-some():' + ed.some((e) => e >= 18));
// // 5、every 核心思想与some一致，但是遇到不满足条件的即返回false
// console.log('es5-every():' + ed.every(function (e) {
//     return e >= 13;
// }));
// console.log('es6-every():' + ed.every((e) => e >= 13));
// // 6、filter 检验通过的放到新数组
// const ee = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log('es5-filter():' + ee.filter(function (e) {
//     return e >= 3;
// }));
// console.log('es6-filter():' + ee.filter((e) => e >= 3));
// // 7、map 与filter一样 但是可以修改元素 都不回改动原数组
// const ef = [200, 300, 400, 500];
// console.log('es5-map():' + ef.map(function (e) {
//     return e * 1.26;
// }));
// console.log('es6-map():' + ef.map((e) => e * 1.26));
// // 8、reduce() 将数组融合
// const eg = [11, 231, 4, 15, 432, 6, 547, 564, 8, 5678];
// console.log('es5-reduce():' + eg.reduce(function (a, b) {
//     return a + b;
// }));
// console.log('es6-reduce():' + eg.reduce((a, b) => a + b));
//
// console.log(Math.abs(0.1+0.2-0.3)<=Number.EPSILON);

// let a = '1';
// a-=0;
// console.log(typeof a);
// let a = '1';
// console.log(typeof Number(a));

// let a = Symbol('my symbol');
//
// let b = new Object;
// b[Symbol.iterator] = function () {
//     let c = 0;
//     return {
//         next: function () {
//             return {
//                 value: c++,
//                 done: c > 10
//             }
//         }
//     }
// }
// for(let v of b)
//     console.log(v);

// console.log(parseInt("100"));
// var d = '1';
// var e = Object(d);
// console.log(typeof e);
// var f = String(e);
// console.log(typeof f);
// var a =new String('hello');
// var a =new String('123');
// console.log(a);
// console.log(Object.prototype.toString.call(Object()));

// 重学前端之06 面向对象还是基于对象
// let o1 = {
//     a: 1,
//     f(){
//         console.log(this.d);
//     }
// };
//
// console.log(typeof (o1.f));
// ------- 尝试定义属性
// var z = {a: 1};
// z.b = 2;
// Object.defineProperty(z, 'b', { writable: false, enumerable: false, configurable: true})
// console.log(Object.getOwnPropertyDescriptor(z, 'a'))
// console.log(Object.getOwnPropertyDescriptor(z, 'b'))
// z.b = 3;
// console.log(z.b);
// console.log(Object.getOwnPropertyDescriptor(z, 'b'))
// ------- 尝试定义访问器
// var z ={get a() {
//     return 2;
//     }}
// console.log(z.a);

// 重学前端之07 我们真的需要模拟类吗？
// var cat ={
//     say(){
//         console.log('meow~');
//     },
//     jump(){
//         console.log('jump');
//     }
// }
// var tiger =Object.create(cat,{
//     say:{
//         value:function () {
//             console.log('roar!');
//         }
//     }
// })
//
// var anotherCat =Object.create(cat);
// console.log(anotherCat.say());
// var anotherTiger = Object.create(tiger);
// console.log(anotherTiger.say());

// var o = new Object;
// var n = new Number;
// var s = new String;
// var b = new Boolean;
// var d = new Date;
// var arg = function(){ return arguments }();
// var r = new RegExp;
// var f = new Function;
// var arr = new Array;
// var e = new Error;
// console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));

// var o = { [Symbol.toStringTag]: "MyObject" }
// console.log(o + "");

function c1(){
    this.p1 = 1;
    this.p2 = function(){
        console.log(this.p1);
    }
}
var o1 = new c1;
o1.p2();

function c2(){
}
c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
    console.log(this.p1);
}
var o2 = new c2;
o2.p2();