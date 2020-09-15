// // *变量类型
// // *变量计算

// (function() {
//   // 值类型
//   var a = 100;
//   var b = a;
//   a = 200;
//   console.log(b);

//   var c = "123";
//   var d = c;
//   c = "456";
//   console.log(d);

//   // 引用类型 深拷贝 浅拷贝 的来源 (对象、数组、函数)
//   // 都指向引用地址
//   var e = {
//     boy: 1
//   };
//   var f = e;
//   e.boy = 2;
//   f.boy = 4;
//   console.log(f);
//   console.log(e);
// })();

// // 值类型
// console.log(typeof 123);
// console.log(typeof "abc");
// console.log(typeof true);
// console.log(typeof undefined);
// // 引用类型
// console.log(typeof function() {});
// console.log(typeof Symbol());
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);

// (function() {
//   // *4种判断Object办法
//   var a = new Date();
//   console.log(typeof a);
//   console.log(Object.prototype.toString.call(a));
//   console.log(a.constructor);
//   console.log(a instanceof Object);

//   //拓展 实现一个 instanceof
//   function instance(object, type) {
//     // 判断是否为null / undefined ？
//     if (object == null || object == undefined) {
//       return false;
//     }
//     // 判断function
//     else if (
//       typeof object === "function" &&
//       object.prototype.__proto__ === type.prototype
//     ) {
//       return true;
//     }
//     // 判断原型是否一致
//     else if (object.__proto__ === type.prototype) {
//       return true;
//     }
//     // 判断构造函数
//     else if (object.__proto__.__proto__ === type.prototype) {
//       return object.__proto__.constructor + "...true";
//     }
//     return false;
//   }
// })();

// (function() {
//   // *强制类型转换
//   // *字符串拼接、== 运算符、if 语句、逻辑运算

//   console.log(100 + 10);
//   console.log(100 + "10");
//   console.log(100 == "100");
//   console.log(0 == "");
//   console.log(null == undefined);

//   console.log(true && true);
//   console.log(true && false);
//   console.log(false && true);
//   console.log(false && false);

//   console.log(true || true);
//   console.log(true || false);
//   console.log(false || true);
//   console.log(false || false);

//   console.log(!null);
//   console.log(!!null);

//   console.log(!undefined);
//   console.log(!!undefined);

//   //* 何时使用 === 何时使用 ==
//   // 双等号先进行类型转换，再比较；三等号直接比较
/**
 * 判断a是否为null或undefined
 * const obj ={x:100}
 * if(obj.a == null){}
 * obj.a == null 相当于 obj.a === null(false) || obj.a === undefined (ture)
 * 当a不存在的时候，返回ture
 * 当a存在的时候，返回false
 *
 * 当a不存在，obj.a -> undefined == null -> true 两个false为true
 */
// const obj = { x: 100 };
// if (obj.a == null) {
//   obj.x = 200;
// }

//   var obj = {
//     a: 1
//   };
//   // obj.a == null -> true 没有值得时候为ture，有值得时候为false
//   if (obj.a == null) {
//     // 这里相当于 obj.a === null || obj.a === undefined 的简写
//     // jQuery推荐写法
//   }

//   console.log(null == null);
//   console.log(null == undefined);
//   console.log(undefined == undefined);
//   console.log(null === null);
//   console.log(null === undefined);
//   console.log(undefined === undefined);
// })();

// (function() {
//   // JS中的内置函数
//   Object;
//   Array;
//   Boolean;
//   Number;
//   String;
//   Function;
//   Date;
//   RegExp;
//   Error;
//   // __proto__ -> 隐式原型  prototype -> 显式原型
//   // *1、值类型、构造函数会生成一个__proto__  __proto__下的__proto__  指向 Object的原型
//   // *2、Object 除外，生成的__proto__ 指向 Object的原型
//   // *3、函数会生成一个原型，原型的__proto__ 指向 Object的原型
//   // *   函数还会生成一个__proto__与Oject的__proto__相同
//   // *function -> __proto__             =   Object -> __proto__
//   // *         -> prototype.__proto__   =          -> prototype

//   // JSON 的两个方法
//   // JSON.parse() -> 用于将一个 JSON 字符串转换为 JavaScript 对象
//   // JSON.stringify() -> 用于将 JavaScript 对象转换为 JSON 字符串
// })();

// var a = new Object();
// var b = new Array();
// var c = new Boolean();

// var a1 = 123;
// var b1 = "abc";
// var c1 = true;

// var a2 = {};
// var b2 = [];

// var a = [];
// console.log(a instanceof Array);
// console.log(Object.prototype.toString.call(a));
// console.log(a.constructor);

// var c = { name: "zhongyufan" };
// var b = { age: "21" };
// b.prototype.c = c;
// console.log(b);

// 1、所有的引用类型都具有对象特性，可以自由拓展属性
// 2、所有的引用类型都有一个__proto__属性，属性值是一个普通的对象
// 3、所有的函数都有一个prototype属性，属性值是一个普通的对象
// 4、所有的引用类型的__proto__属性都指向它的构造函数的 prototype属性值
// 5、当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__中寻找

// new一个对象的过程
// 1、创建一个新对象
// 2、this指向这个新对象
// 3、执行代码，对this赋值
// 4、返回this

// JS基础语法
// JS-Web-API
// 开发环境
// 运行环境

// 函数是特殊的引用类型，但不用于存储数据，所以没有拷贝、复制的说法
// 函数也可以当做函数类型 值类型、引用类型、函数类型

/**
 * 深拷贝，需要利用递归
 */

// let result = {
//   age: 21,
//   name: "zhongyufan",
//   address: {
//     city: "foshan",
//     home: "jiaxin"
//   },
//   arr: [1, 2, 3, 4, 5]
// };

// let obj = clone(result);

// var b;
// function clone(obj) {
//   // 判断是不是对象
//   if (typeof obj !== "object" || obj == null) {
//     return obj;
// ?抛出的obj为什么到result去了
//   }
//   // 判断是对象还是数组
//   var result;
//   if (obj instanceof Array) {
//     result = [];
//   } else {
//     result = {};
//   }
//   // 遍历对象
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // 递归调用查询所有的值
// * for in 循环对象的时候是按照{}为一块，这样子一块一块循环
//       result[key] = clone(obj[key]);
//     }
//   }
//   return result;
// }

/**
 * truly 变量 -> !!a === true
 * falsely 变量 -> !!a === false
 * -- 0 | NaN | '' | null | undefined | false 是falsely，其它的都是truly变量
 * 经过两步分运算
 */

// class 类
// constructor

// class Student {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }
//   sayHi() {
//     console.log(`姓名${this.name},学号${this.number}`);
//   }
// }
// var a = new Student('zhongyufan', 21).sayHi();
// var b = new Student('zyf', 21).sayHi();
// var c = new Student('lisi', 21).sayHi();
// var d = new Student('fuwu', 21).sayHi();

// 继承
// extends
// super
// class People {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     console.log(`${this.name} 吃东西`);
//   }
// }

// class Student extends People {
//   constructor(name, number) {
//     super(name);
//     this.number = number;
//   }
//   sayHi() {
//     console.log(`姓名${this.name},学号${this.number}`);
//   }
// }

// var a = new Student('zhongyufan', 21).sayHi();
// var b = new Student('zyf', 21).eat();
// var c = new Student('lisi', 21).eat();
// var d = new Student('fuwu', 21).sayHi();
// -----------------------------------
// class 的原型关系
// 1、 每个class都有显示原型 prototype
// 2、 每个实例都有隐式原型 __proto__
// 3、 实例的 __proto__ 指向对应 class 的 prototype

// 原型链
// console.log(Student.prototype.__proto__);
// console.log(People.prototype);
// console.log(Student.prototype.__proto__ === People.prototype);

// * 原型 与 原型链 的个人见解
/**
 * 儿子通过隐式原型获得父亲的原型
 * 父亲的属性通过原型被儿子继承
 * 原型链就是指这么一条关系链，好比如你欠债了没钱还，咋办？
 * 这时候就要去找你父亲，结果你父亲也没有，咋办？
 * 这时候就要去找你爷爷，结果你爷爷也没有，咋办？
 * 这时候就要去找你曾祖父，结果你曾祖父已经入土了，这时候就返回 null
 */

/*
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length;
    this.selector = selector;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false);
    })
  }
}
// 插件 
jQuery.prototype.dia = function (info) {
  alert(info);
}
// "造轮子" 复写
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展新方法
}
*/

let aLink;
for (let i = 0; i < 10; i++) {
  aLink = document.createElement("a");
  aLink.innerHTML = i + "<br>";
  aLink.addEventListener("click", e => {
    e.preventDefault();
    // console.log(e.target.innerText);
    alert(i);
  });
  document.documentElement.appendChild(aLink);
}

// 全局作用域
// 函数作用域
// 块级作用域

// 闭包
// 1、函数作为参数被传递
// 2、函数作为返回值被返回

// function create() {
// 函数作为返回值被返回
//   let a = 100;
//   return function () {
//     console.log(a);
//   }
// }
// const fn = create();
// const a = 200;
// fn();
// -----------
// 函数作为参数被传递
// function print(fn) {
//   const a = 200;
//   fn();
// }
// const a = 100;
// function fn() {
//   console.log(a);
// }
// print(fn);

// 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找
//      不是在执行的地方！

// this
/**
 * this的使用场景
 * 1、作为普通函数
 * 2、使用 call 和 apply (直接调用) bind(返回一个新函数)
 * 区别： 第一个参数都是 this 的指向对象
 * call 的参数是直接放进去的，
 * apply 的所有参数都必须放在一个数组，
 * bind 除了返回是函数以外和 call 一致
 * 3、作为对象方法被调动
 * 4、在class方法中调用
 * 5、箭头函数
 *
 * this 是在函数执行的时候确认的，不是在函数定义的时候确认的
 * => 箭头函数的this（在函数创建的时候绑定的）永远是获取上级作用域的this
 */
// const sex = {
//   age: 18,
//   sayHi() {
//     console.log(this); // {age: 18, sayHi: ƒ, wait: ƒ}
//   },
//   wait() {
//     setTimeout(function () {
//       console.log(this); // Window
//     }, 100);
//   }
// }

// const sex = {
//   age: 18,
//   sayHi() {
//     console.log(this); // {age: 18, sayHi: ƒ, wait: ƒ}
//   },
//   wait() {
//     setTimeout(() => {
//       console.log(this); // {age: 18, sayHi: ƒ, wait: ƒ}
//     }, 100);
//   }
// }

// 手写bind
Function.prototype.bind1 = function() {
  // 传参不限制，将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);

  // 获取this（数组第一项）
  const t = args.shift();

  // 这里的this 指向调用的函数 fn1
  const _this = this;

  // 返回一个函数
  return function() {
    // console.log(this); 这里的this 指向 Window
    return _this.apply(t, args);
  };
};

// function fn1(a, b, c) {
//   console.log('this', this);
//   console.log(a, b, c);
//   return 'this is fn1'
// }

// const fn2 = fn1.bind1({
//   x: 100
// }, 10, 20, 30);
// console.log(fn2());

Function.prototype.bind1 = function() {
  const agr = Array.prototype.slice.call(arguments);
  const tis = agr.shift();
  const _this = this;

  return function() {
    return _this.apply(tis, agr);
  };
};

Function.prototype.apply1 = function() {
  const agr = Array.arguments[0].slice().join();
  // const _this = this;
  // return function () {
  //   return _this.call(agr);
  // }
  return () => {
    return this.call(agr);
  };
};

Function.prototype.call1 = function() {
  const agr = arguments[0];
  return () => {
    this.bind(agr)();
  };
};

// function fn1(a, b, c) {
//   console.log('this', this);
//   return 'this is fn1'
// }

// const fn2 = fn1.call1({
//   x: 100
// }, 10, 20, 30);
// console.log(fn2());

// 闭包的应用
// 隐藏数据，只提供API

// 做一个简单的cache工具
function createCache() {
  const data = {}; // 闭包中的数据，被隐藏，不被外界访问
  return {
    set: function(key, val) {
      data[key] = val;
    },
    get: function(key) {
      return data[key];
    }
  };
}
// 暴露出set、get 方法对data进行访问
const c = createCache();
c.set("a", 100);
console.log(c.get("a"));
// 直接访问会报错
console.log(data.a);

// 闭包
// 访问函数局部变量
// 优点：
// 1、有利于封装
// 2、可以访问局部变量
// 缺点：
// 1、内存占用
// 2、内存泄露
function a() {
  var one = 10;
  return function() {
    one++;
    alert(one);
  };
}
a()();
// 递归
// 自己调用自己
function b(num) {
  if (num <= 1) return 1;
  return num + arguments.callee(num - 1);
}
console.log(b(100));
