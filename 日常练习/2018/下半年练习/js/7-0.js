// 函数的定义

// 功能，就是把数组求和

x = [1, 2, 3, 4, 5, NaN, undefined, null, 'abc'];
// 所给参数不符合要求的处理方法:
// 第一，发现不合格，拒绝服务，保证自己的代码不崩溃。
// 第二，发现不合格，把合格的部分处理，返回。


//函数的声明
// function <函数名>([形参:形式上的参数]){
//     函数体
// }
// 函数可以有形参，也可以没有
// 函数可以有返回值，也可以没有，没有返回undefined
// function sum(arr) {
//     var iRet = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) == 'number') {
//             if (!isNaN(arr[i]) && isFinite(arr[i])) {
//                 iRet += arr[i];
//             }
//         }
//     }
//     return iRet;
// }
// console.log(sum(x));

//12345，54321，函数实现
// function reverseNumber(num) {
//     if (typeof num != 'number') {
//         return '';
//     }
//     if (!isFinite(num) || isNaN(num)) {
//         return '';
//     }
//     return +num.toString().split('').reverse().join('');
//     // tmp =tmp.reverse();
//     // tmp =tmp.join('');
//     // return +tmp;
// }
//
//
// console.log(reverseNumber(12345));

// 函数表达式
// (function f() {})
// var f=function ff() {};
// ff(a,function fff(){},b);
var f = function (x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * arguments.callee(x - 1);//阶乘 arguments.callee 充单自己
    }
};
console.log(f(5));

// 5*f(4);
//      4*f(3);
//          3*f(2);a
//              2*f(1);
//                      1;
// 5！= 5 * 4 * 3 * 2 * 1;

// 函数声明与函数表达式的区别:
// 函数表达式在系统里面查不到定义

// 函数可以作为参数传递给另外一个函数
// function f1(f) {
//     console.log(f);
//     console.log(f());
// }
// // f2()是函数声明
// function f2() {
//     console.log('I am f2()');
// }
//
// f1(f2);
//
// // f3()是函数表达式
// var f3=function (){
//   console.log('I am f3()');
//   return'f3 say hello!';
// };
//
// f1(f3);

// 立即执行函数 只可以用一次，完成后GC清理
// 可以是
// var a=(function (){
//     console.log('I am f3()');
//     return'f3 say hello!';
// })();
// console.log(a);
// 甚至是
// console.log((function (x) {
//     console.log('I am f3()');
//     return 'f3 say hello to ' + x + '!';
// })('zhongyufan'));

// var x = 5;
// var y = 6;
//
// function exchange(a, b) {
//     var c = a;
//     a = b;
//     b = c;
// }
// exchange(x,y);
// console.log(x + ' ' + y);
// 函数退出 变量摧毁 值类型是复制 无法交换 引用可以交换
// 栈内存
// ST001:x,5
// ST002:y,6
// ST003:
// ST004:
// ST005:
// ST006:
//
// 堆内存
// HP001:
// HP002:
// HP003:
// HP004:

// var x = [5];
// var y = [6];
//
// function exchange(a, b) {
//     var c = a[0];
//     a[0] = b[0];
//     b[0] = c;
// }
// exchange(x,y);
// console.log(x + ' ' + y);
//函数退出 变量摧毁 值类型是复制 无法交换
//栈内存
// ST001:x,HP001
// ST002:y,HP002
// ST003:
// ST004:
// ST005:
// ST006:
//
// 堆内存
// HP001:[6],(1)
// HP002:[6],(1)
// HP003:
// HP004:

// 嵌套
// 重复的过程要提炼出函数
// function hypotenuse(a, b) {
//     // function square(x) {
//     //     return x * x;
//     // }
//     var square=function (x) {
//         return x*x;
//     };
//     return Math.sqrt(square(a) + square(b));
// }
//
// console.log(hypotenuse(3,4));

// 函数的调用
// 1、函数的方式
// 2、作为方法
// var obj = {
//     add: function (a, b) {
//         return a + b;
//     }
// };
// 等价于
// var obj = {};
// obj.add = function (a, b) {
//     return a + b;
// };
// console.log(obj.add(1, 2));
// console.log(obj['add'](1, 2));

// 3、构造函数
// var arr = new Array();

// 4、间接调用
//    间接调用和直接调用唯一的区别是可以绑定this指针
// //    如果不考虑this，这三种调用方式完全一样
// function hypotenuse(a, b) {
//     return Math.sqrt(a*a + b*b);
// }
// this.hypotenuse(3,4);
// hypotenuse.call(this,3,4);
// hypotenuse.apply(this,[3,4]);

// 形参和实参
// 形参和实参是不一样的，数量，类型都可以不一样
// 形参和实参会绑定，动态关联
// function foo(a,b,c) { //abc是形参
//     console.log(foo.length);
//     console.log(arguments);//arguments是实参数组
// }
// foo(1);
// foo(1,2,3,4,5,6);

// 递归
function foo(i) {
    if (i < 0) return;
    console.log('begin:' + i);
    foo(i - 1);
    console.log('end:' + i);
}

foo(2);
// //栈内存
// ST001:i,2
// ST002:i,1
// ST003:i,0
// ST004:
// ST005:
// ST006:
//
// 堆内存
// HP001:
// HP002:
// HP003:
// HP004:

// 递归的例子
// 有一行台阶，阶数为N，一次可以走1步，2步，3步，一共有多少走法
function step(n) {
    switch (n) {
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 4;
            break;
        default:
            return (step(n - 3) + step(n - 2) + step(n - 1));
            break;
    }
    return '';
}
console.log(step(5));
