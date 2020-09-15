/**
 * @method Object.create
 */
// var cat = {
//     say() {
//         console.log('miao~');
//     },
//     jump() {
//         console.log('jump');
//     }
// }
// var tiger = Object.create(cat, {
//     say: { // 数据属性
//         writable: true, // 能否赋值
//         configurable: true, // 能否修改
//         enumerable: true, // 能否枚举
//         value: function () {
//             console.log('roar!');
//         }
//     },
//     bar: { // 访问器属性
//         configurable: false, // 能否修改
//         enumerable: false, // 能否枚举
//         get: function () { return 10 }, // 获取调用
//         set: function (value) {
//             console.log('now set bar', value);
//         } // 设置调用 
//     }
// })
// var anotherCat = Object.create(cat);
// anotherCat.say();
// var anotherTiger = Object.create(tiger);
// console.log(anotherTiger.bar);
// console.log(anotherTiger.bar = 20);
// anotherTiger.say();
/**
 * @method 判定类型
 */
// let arr = new Array();
// console.log(Object.prototype.toString.call(arr));
// console.log(arr instanceof Array);
// console.log(typeof arr);
/**
 * @method 类数组转数组
 */
// test(1, 2, 3, 4);
// function test(a, b, c, d) {
//     console.log(arguments);
//     console.log(Array.from(arguments));
//     console.log([...arguments]);
//     console.log([].concat.apply([], arguments));
// }
/**
 * @class 类
 */
// class People {
//     constructor(height, age) {
//         this.height = height;
//         this.age = age;
//     }
//     get info() {
//         return this.getInfo();
//     }
//     getInfo() {
//         console.log(`今年身高为${this.height},今年${this.age}岁`);
//     }
// }

const { log } = require("console");
const { type } = require("os");

// class PeopleSex extends People {
//     constructor(height, age, sex) {
//         super(height, age);
//         this.sex = sex;
//     }
//     getMoreInfo() {
//         console.log(`今年身高为${this.height},性别${this.sex},今年${this.age}岁`);
//     }
// }

// let boy = new PeopleSex('176cm', '18', '男');
// boy.getMoreInfo();
// boy.getInfo();
// let peo = new People('182cm', '24');
// peo.getInfo();

/**
 * @method Promise
 */
// function runasync(duration) {
//     return new Promise((resolve, reject) => {
//         console.log('b');
//         setTimeout(resolve, duration);
//     })
// }
// console.log('a');
// runasync(1000).then(() => console.log('c'));
/**
 * @async
 */
// function runasync(duration) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     })
// }
// async function foo(name) {
//     await runasync(2000);
//     console.log(name);
// }
// async function foo2() {
//     await foo('a');
//     await foo('b');
// }
// foo2();
/**
 * @method closure 闭包
 */
// function closure() {
//     let save = 'zyf';
//     console.log(save);
//     return function getSave() {
//         console.log(save);
//     }
// }
// closure()();
/**
 * @method function* 生成器函数
 */
// function* generator(i) {
//     yield i;
//     yield i + 10;
// }
// const gen = generator(10);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
/**
 * @method
 * call apply bind
 */
// function foo(a, b, c) {
//     console.log(this);
//     console.log(a, b, c);
// }
// foo.call({}, 1, 2, 3);
// foo.apply({}, [1, 2, 3]);
// foo.bind({}, 1, 2, 3)();
/**
 * @method
 * for await of
 */
// async function* ag() {
//     let i = 0;
//     while (i < 3) {
//         yield i++;
//     }
// }
// (async () => {
//     for await (num of ag()) {
//         console.log(num);
//     }
// })();
/**
 * @name continue 跳出当前继续执行
 */
// let text = '';
// for (let i = 0; i < 10; i++) {
//     if (i > 3 && i < 5) {
//         continue;
//     }
//     text += i;
// }
// console.log(text);