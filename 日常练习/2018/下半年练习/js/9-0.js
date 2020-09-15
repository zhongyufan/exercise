// 作用域链接[[scope]]
// 外部对内部可见
// var scope = 'g';
// function t() {
//     console.log(scope);
//     // var scope='1';
//     console.log(scope);
// }
// t();

// 内部对外部不可见
// var scope = 'g';
// function t() {
//     var scope = '1';
// }
// t();
// console.log(scope);//报错

// 内部优先
var scope = 'g';
function t() {
    console.log(scope);
    var scope='1';
    console.log(scope);
}
t();

// JS的作用域，都是函数级别的
// var scope='g';
// if(true){
//     var scope='1';
//     console.log(scope);
// }
// console.log(scope);// 1 1

// for(var i=0;i<10;i++){
//
// }
// console.log(i);

// 执行环境（execution context）
// 全局执行环境（Global Object）
// 函数执行环境（Activation Object）


// 闭包
// 有些时候，函数退出后AO并没有被摧毁
// c、c++ 没有作用域链，因此可以直接理解为栈问题

// 为什么？
// 因为使用的时候拷贝了Scope Chain，调用的时候会让引用数+1
// 查找的时候通过作用域链查找，不是固定存放

// EC指向栈，而栈又指向GO（堆），找到GO后才在GO里面查询
// 栈 （Scope Chain事实上不在栈里面，暂且认为在栈里面）
// ST001:GEC-SC:HP001
// ST002:
// ST003:
// ST004:
// ST005:
// ST006:
//
//
// // 堆
// HP001:[HP002-(GO)](1)
// HP002:GO:{this:window,g:'g',fa:function {[HP002]-(GO)}}-(GO)(1)
// HP003:
// HP004:
// HP005:
// HP006:


// 第二次 复制父辈的Scope Chain
// 每一次都会产生独立的作用域链
// 找东西顺着作用域链从栈顶往下找

// 栈 （Scope Chain事实上不在栈里面，暂且认为在栈里面）
// ST001:GEC-SC:HP001
// ST002:faEC-SC:HP003
// ST003:fbEC-SC:HP005
// ST004:
// ST005:
// ST006:
//
//
// // 堆
// HP001:GEC-SC:
//              [HP002-(GO)](1)
// HP002:GO:
//              {this:window,g:'g',fa:function{{[HP002-(GO)]}}-(GO)(3)// 动用了两次 引用数增加2
// HP003:fbEC-SC:
//              [HP002-(GO),HP004-(fa-AO)](1)
// HP004:fa-AO:
//              {this:window,a:'a',fb:function{[HP002-(GO),HP004-(fa-AO)](1)}}(2)
// HP005:fbEC-SC:
//              [HP002-(GO),HP004-(fa-AO),HP006-(fb-AO)](1)
// HP006:fb-AO:
//              {this.window,b:'b'}(1)

// 摧毁
// 层层摧毁
// 栈 （Scope Chain事实上不在栈里面，暂且认为在栈里面）
// ST001:
// ST002:
// ST003:
// ST004:
// ST005:
// ST006:
//
//
// // 堆
// HP001:
// HP002:
// HP003:
// HP004:
// HP005:
// HP006:

// 函数多次调用时，产生不同的AO
// function fa() {
//     console.log(a);
//     var a = 100;
//     a++;
// }
// fa();
// fa();
// fa();
// SC同时产生自己的AO，而拷贝SC的位置与被调用的关系无光

// 函数递归调用时，产生不同的AO
// 函数预编译的时候Scope Chain是同级的，就算是嵌套函数Scope Chain也是同级 都会拷贝父辈 独立且找不到
// 与C、C++不一样的地方
// function fa(x) {
//     if(x>2){
//         var a =100;
//         a++;
//         fa(x-1);
//     }
//     return 0;
// }
// fa(3);

// 除了函数还有with、object可以影响作用域链
// 生成新的with variable object，放在作用域链表顶端
// var name=1;
// var person={
//     name:2
// };
// with(person){
//     console.log(name);
// }// with 能够实现内部优先

// 作用域应用注意要点
// 效率：
// 尽量少使用靠近上层的变量，多使用自己的局部变量
// 重名：
// 尽量不要使用相同的变量名
// 避免函数名与变量名一样

// 疑问一 函数摧毁后 为何不会AO并 没有被摧毁
// 函数退出以后AO是否一定被释放？不一定 闭包就不会被摧毁
// function outer() {
//     var scope='outer';
//     function inner() {
//         return scope;// 返回scope同时摧毁Scope Chain，但是scope的值被保留
//     }
//     return inner; // 返回inner同时拷贝父函数的Scope Chain
//     // return 但是scope并没有被摧毁
//     // 与GO一起存活
// }
// var fn=outer();
// console.log(fn());// outer
// 函数的AO通过Scope Chain相互连接起来，使得函数体内的变量都可以保存在函数的AO，这样的特性被称为“闭包”
// 闭包的危险：内存泄露

// 闭包的应用：
// 实现公有变量
// 累加器 能够知道哪儿调用了
// function add() {
//     var count=0;
//     function addAction() {
//         count++;
//         console.log(count);
//         return count;
//     }
//     return addAction;
// }
//
// var myAdd=add();
// myAdd();
// myAdd();
// myAdd();


// 储存存储结构
// function add() {
//     var count = 0;
//     function addAction() {
//         count++;
//         console.log(count);
//         return count;
//     }
//     function clearAction() {
//         count = 0;
//         console.log(count);
//         return count;
//     }
//     return [addAction, clearAction];
// }
// var myAdd=add();
// myAdd[0]();
// myAdd[0]();
// myAdd[0]();
// myAdd[0]();
// myAdd[1]();
// myAdd[0]();
// myAdd[0]();

// 鼓励使用方法，不鼓励直接操作变量
// function counter() {
//     var count = 0;
//     var adder = {
//         addAction: function () {
//             count++;
//             console.log(count);
//             return count;
//         },
//         clearCount: function () {
//             count = 0;
//             console.log(count);
//             return count;
//         }
//     };
//     return adder;
// }
// // 模块化操作 只能操作count 通过count控制adder
// var myCounter=counter();
// myCounter.addAction();
// myCounter.addAction();
// myCounter.addAction();
// myCounter.addAction();
// myCounter.clearCount();
// myCounter.addAction();
// myCounter.addAction();
//
// // 从新开始
// var myCounter2=counter();
// myCounter2.addAction();
// 模块化开发，全部使用闭包，不允许使用公有变量
// 软工规定的思路：第一，尽量避免错误，第二，如果错误不可避免，让错误更早的暴露

// 封装，不要把数据暴露给不希望的操作
// 封装，实现属性私有化

// 练习一
// function outer() {
//     var num=100;
//     function add() {
//         num++;
//         console.log(num);
//     }
//     return add;
// }
// var fn=outer();
// fn();// 101
// fn();// 102
// fn();// 103
//
// var fn2=outer();
// fn2();// 101

// 练习二
// function outer() {
//     var result = new Array();
//     for (var i = 0; i < 2; i++) {// i 作用域是整个函数 但for外提示undefined
//         result[i] = function () {
//             return i;
//         }
//     }
//     return result;
// }
// var fn = outer();
// console.log(fn[0]());// 2
// console.log(fn[1]());// 2

// outer()声明：脚本的scope chain -> copy[GO]，生成自己的：[GO,outer-AO]
// result[0]=function () {}:outer()的scope chain -> [GO,outer-AO],没运行
// result[1]=function () {}:outer()的scope chain -> [GO,outer-AO],没运行
// result[0]=function () {}:outer()的scope chain -> [GO,outer-AO],生成自己的scope chain-> [GO,outer-AO,f-AO]
// result[1]=function () {}:outer()的scope chain -> [GO,outer-AO],生成自己的scope chain-> [GO,outer-AO,f-AO]

// 想要的效果 0：0/1：1
// function outer() {
//     var result = new Array();
//     for (var i = 0; i < 2; i++) {// i 作用域是整个函数 但for外提示undefined
//         result[i] = function (x) {
//             function f2() {
//                 return x;
//             }
//             return f2;
//         }(i);
//     }
//     return result;
// }
// var fn = outer();
// console.log(fn[0]());// 0
// console.log(fn[1]());// 1
// 解这种问题的思路
// 1、一定要使用立即执行函数
// 2、立即执行函数内部，再声明函数

// outer()声明：脚本的sc copy[GO]，生成自己的：[GO,outer-AO]

// 立即执行函数
// 优点
// 用完立即释放，减少内存压力
// 1、只有函数表达式可以，函数声明不可以。
// 2、函数表达式中的名字不会被放在GO或者AO中。

// var f=function fact(x) {
//     if(x<=1)return 1;
//     else return x*fact(x-1);
// };
// console.log(f(4));

// var f=function (x) {
//     if(x<=1)return 1;
//     else return x*arguments.callee(x-1);
// }(4);
// console.log(f);

// 三种写法都ok
// var f=(function (x) {...})(4); // 最推荐的写法
// var f=(function (x) {...})(4));
// var f=function (x) {...}(4);


// this用法：
// 1、脚本中，this初始化为window
// console.log(this);

// 2、在普通函数中，this初始化为window
// function f() {
//     console.log(this);
// }
// f(); 等价于 window.f()；

// 3、在object调用的函数中，this被指定为object，谁调用指向谁。
// var obj = {
//     name: 'a',
//     f2: function (x,y) {
//         console.log(this);
//     }
// };
//
// obj.f2(1,2);
// var f=obj.f2;
// f();

// 4、call\apply中，this可以被指定为第一参数
// var obj = {
//     name: 'a',
//     f2: function (x,y) {
//         console.log(this);
//     }
// };
//
// var arr=[];
//
// obj.f2(1,2);
// var f=obj.f2;
// f.call(obj,1,2);
// f.apply(obj,[1,2]);

// 5、在new的构造函数中，this被指向正在创建的对象
// function F() {
//     console.log(this);
// }
// var obj = new F();

// 6、with


// 练习
// var name='The window';
// var object={
//     name:'my object',
//     getNameFunc:function () {
//         return function () {
//             return this.name;
//         };
//     },
//     getNameFunc2:function () {
//         return this.name;
//     }
// }; object
// console.log(object.getNameFunc()()); //The window
// console.log(object.getNameFunc2());  //my

// window是缺省，this要有所指

// var i=1;
// var obj={
//     i:2,
//     f:function () {
//         console.log(this.i);
//     }
// };
//
// var f2=obj.f;
// f2();//1
// obj.f();//2
//
// var obj2 = {
//     i: 3,
//     f: function (ff) {
//         ff();
//     },
//     f2: function () {
//         function fff() {
//             console.log(this.i);
//         }
//
//         return fff;
//     }
// };
// obj2.f(obj.f); // 1
// obj2.f = obj.f;
// obj2.f();      // 3
// obj2.f2()();   // 1