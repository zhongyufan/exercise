// 对象
// 对象的创建
// object与数组相近，表现形式不一样

// var obj1 = {};
// var obj2 = new Object();
// 两个都可使用，且没有差别

// json文件 以逗号结尾，最后一项没有逗号
// function语句 以分好结尾，每一行都有
// var objBook = {
//     name: 'Book Name', // 原始成员
//     pageNumber: 300,
//     author: { // 引用成员
//         firstname: 'aaa',
//         lastname: 'bbb'
//     },
//     query: function () { // 成员函数
//         console.log('query');
//     },
//     addPage:function () {
//         this.pageNumber++;
//         console.log('addPage');
//     }
// };

// console.log(++objBook.pageNumber);
// objBook.query();
// // 等价于
// objBook['query']();

// 对象属性可以增删改查
// 增加属性
// var obj = {};
// obj.a = 'aaa';
// obj['b'] = 'bbb';
// obj.f1 = function () {
//     console.log('ffffff');
// };
//
// function f2() {
//     window.aa = 5;
//     // 等价于
//     aa = 5;
// };
// f2();
// alert(aa);

// 删除属性
// 查询属性
// 1. in
// console.log(('a' in obj));
// // 2. hasOwnProperty
// console.log(obj.hasOwnProperty('a'));
//
// // delete
// delete obj.a;
// console.log(('a' in obj));
// console.log(obj.hasOwnProperty('a'));
//
// var arr = [];
// arr['a'] = 'c';
// delete arr['a'];
// console.log(arr);

// 修改属性
// obj.a = 123;
//
// // 枚举
// for (var p in obj) {
//     console.log(p);
// }
//
// obj.a
// obj.toString();
// obj.prototype
// toString()挂在obj底下原型上 继承关系
// 能够枚举的都是自己的 不能枚举的都是继承来的

// propertyIsEnumerable检测能不能枚举
// console.log(obj.propertyIsEnumerable('a'));
// console.log(obj.propertyIsEnumerable('toString()'));

// JavaScript核心点: 函数 对象 数组 构造函数 预编译 dom 事件 ajax

// 构造函数
// 需要一种函数能够每次以相同的方式构造对象，同时改动这个函数，所有的对象都能跟着改变。

// 构造函数特点 名称以大写字母开头（约定俗成）

// function Student(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }
//
// var std = new Student('zhongyufan', 20, 'male');
//
// // 等价于
// function Student2(name, age, gender) {
//     var object = {};
//     object.name = name;
//     object.age = age;
//     object.gender = gender;
//
//     return object;
// }
//
// var std2 = Student2('zhongyufan', 20, 'male');

// 强类型语言更接近机器端，弱类型语言更接近人类语言
// 弱类型将慢慢取代强类型语言

// 三种命名规格:
// 匈牙利命名规则：
//              属性+类型+对象描述
//              属性：成员变量 m_ 静态成员 s_ 常量 c_ 普通 <没有> ...
//              类型：整形 i，数组 a，字符串 str
//              对象描述：单词+单词...，首写字母大写
// 小驼峰命名规则：
//              对象描述
//              第一个单词的首字母小写，其他单词首字母大写
// 大驼峰命名规则：
//              对象描述
//              所有单词首字母大写

// 包装类
// var n1 = 123;
// var n2 = new Number(123);
//
// console.log(typeof (n1));// number
// console.log(typeof (n2));// object
//
// // 不影响使用
// var n3 = n1 + n2;
// console.log(n3);
//
// var s1 = 'aaa';
// var s2 = new String('aaa');
//
// console.log(typeof (s1));// string
// console.log(typeof (s2));// object
//
// var b1 = true;
// var b2 = new Boolean(true);
//
// console.log(typeof (b1));// boolean
// console.log(typeof (b2));// object
//
// var arr = [1, 2, 3, 4];
// arr.length = 2;
// console.log(arr); // [1,2]
//
// // 包装类的隐式调用
//
// // 任何一个原始类型是不具备调用一个东西的能力，不具备函数
// // 能调用不报错 调用的不是自己的 ，引擎做隐式转换
// var str = '1234';
// // str.length = 2;
// // 隐式类型转换 不出现在栈内
// var strTmp=new String(str);
// strTmp.length=2;
// // strTmp摧毁
// console.log(str); // 1234
//
// var iNum = 123;
// iNum.toString();
// 小写字母开头，系统不希望用于构造函数
// 大写字母开头，属于构造函数
// 包装类就是 系统帮你包装好

// 预编译
// JavaScript引擎三大步骤，预编译（第一次\前置扫描），解释执行（第二次扫描）第一次扫描只看声明，第二次扫描再运行

// 脚本的预编译
// 1、（没有var的变量，都不是变量声明，全部认为是window的全局变量，不参与预编译）
// console.log(aa); //undefined
// var aa = 5;
// console.log(aa); //5

// 2、（即使在函数中，aa（aa=5;）也是全局变量，是运行时，不是定义时）
// function test1() {
//     a = 5;
// }
// console.log(a); // 报错
// test2();
// function test2() {
//     a = 5;
// }
// console.log(a); // 5

// 3、（脚本中，所有变量声明在脚本的预编译阶段完成，所有变量的声明与实际的书写位置无关）
// console.log(aa); //undefined
// var aa = 5;
// console.log(aa); //5

// 4、（脚本中，所有函数声明，在脚本的预编译阶段完成，所有函数的声明与实际的书写位置无关）
// console.log(xixi);
// function xixi() {
//     console.log('h1');
// }

// 5、（脚本中，如果变量与函数同名，函数将覆盖变量）
// console.log(xixi);
// var xixi=123;
// function xixi() {
//     console.log('h1');
// }

// 6、（脚本中，只有函数能够覆盖变量，变量无法覆盖函数）
// console.log(xixi);
// function xixi() {
//     console.log('h1');
// }
// var xixi=123;

// 7、（脚本中，后面的函数声明会覆盖前面的函数声明，并且忽略参数）
// xixi(1);
// console.log(xixi);
// function xixi(a) {
//     console.log('haha1');
// }
// function xixi(a, b) {
//     console.log('hahha2');
// }


//   创建全局对象GO（window）（上下文）
//   加载脚本文件
//   预编译：
//       找出所有的变量声明，按照变量名加入全局对象，如果已经存在，忽略。（不运行赋值）
//       找出所有的函数声明，按照函数名加入全局对象，如果已经存在同名变量或者函数，替换。
//       非声明不予理睬
//   解释执行


// 函数调用的预编译
//     创建活动对象AO（Active Object）（上下文）
// 1、（函数中，所有变量声明在函数的预编译阶段完成，所有变量的声明与实际的书写位置无关）
// function f() {
//     console.log(aa); //undefined
//     var aa = 5;
//     console.log(aa); //5
// }
// f();

// 2、（函数中，所有函数声明，在函数的预编译阶段完成，所有函数的声明与实际的书写位置无关）
// function f() {
//     console.log(xixi);
//     function xixi() {
//         console.log('h1');
//     }
// }
// f();

// 3、（函数中，如果变量与函数同名，函数将覆盖变量）
// function f(){
//     console.log(xixi);
//     var xixi=123;
//     function xixi() {
//         console.log('h1');
//     }
// }
// f();

// 4、（函数中，只有函数能够覆盖变量，变量无法覆盖函数）
// function f() {
//     console.log(xixi);
//     function xixi() {
//         console.log('h1');
//     }
//     var xixi = 123;
// }
// f();


// 5、（函数中，后面的函数声明会覆盖前面的函数声明，并且忽略参数）
// function f() {
//     console.log(xixi);
//     function xixi(a) {
//         console.log('haha1');
//     }
//     function xixi(a, b) {
//         console.log('hahha2');
//     }
// }
// f();

// 6、（当函数预编译后，遇到需要访问的变量或者函数，优先考虑自己AO中定义的变量和函数，如果找不到，才会在其定义的上一层AO中寻找，直到到达GO）
// var scope='global';
// function t() {
//     console.log(scope); //undefined
//     var scope='local';
//     console.log(scope); //local
// }
// t();
// console.log(scope); //global

// console.log(scope);//undefined
// var scope='global';
// function t() {
//     var scope='t-local';
//     function t2() {
//         console.log(scope);//undefined
//         var scope='t2-local';
//         console.log(scope);//t2-local
//     }
//     t2();
//     console.log(scope);//t-local
// }
// t();
// console.log(scope);//global

// function test(x, x) {
//     console.log(x);//function x() {}
//     x = 5;
//     console.log(arguments);// [12,5]
//     function x() {}
// }
// test(12, 13);
// test-AO:
// arguments:[12,13]
// x-(arguments[1]):13
// x-(arguments[1]):function
// x-(arguments[1]):5
// arguments:[12,5]

// b = 'cba';
// function a(a, a) {
//     console.log(a);//function a()
//     console.log(b);//undefined
//     var b = 'abc';
//
//     a();
//
//     function a() {
//         console.log(a);//function a()
//         console.log(b);//abc
//     }
// }
// a(5, 10);

// var str = 'aaa';
// str += 1;
// var test = typeof (str);
// if (test.length == 6) {
//     test.newproperty = 'string';
// }
// console.log(test.newproperty);//undefined

// var x = 1, y = z = 0;
//
// function add(n) {
//     return n = n + 1;
// }
//
// y = add(x);
//
// function add(n) {
//     return n = n + 3;
// }
//
// z = add(x);
// alert(y)
// 问x，y，z的值 // 1,4,4

// 哪个可以输出：[1,2,3,4,5]
// function foo(x) {
//     console.log(arguments);
//     return x;
// }
// foo(1,2,3,4,5);
// function foo(x) {
//     console.log(arguments);
//     return x;
// }[1,2,3,4,5] //无法输出
// function foo(x) {
//     console.log(arguments);
//     return x;
// }(1,2,3,4,5); //函数声明不可以生成立即执行函数

// function test(x,y,a) {
//     arguments[2]=10;
//     alert(a);
// }
// test(1,2,3); //10

// GO:
// this:window
// a:function
// b:'cba'
//
// a-AO:
// arguments:[5,10]
// a-arguments[1]:10
// b:undefined
// this:window
//
// a-AO:
// arguments:[5,function]
// a-arguments[1]:function
// b:undefined
// this:window
//
// a-AO:
// arguments:[5,function]
// a-arguments[1]:function
// b:undefined
// this:window


//     预编译：
//      scope chain （作用域链）
//      初始化arguments
//      初始化形参，将arguments中的值赋值给形参
//      找出所有的变量声明，按照变量名加入AO，如果已经存在，忽略。
//      找出所有的函数声明，按照函数名加入AO，如果已经存在同名变量或者函数，替换。
//      this初始化
//     解释执行



