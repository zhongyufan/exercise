//用console.log调试程序
//
// var obj = {};
//
// document.write(obj);
// console.log(obj);

// typeof
var x = 1;
console.log('[typeof] x' + typeof (x));// number
// console.log('[typeof] iX' + typeof x);

x = 'abc';
console.log('[typeof] x' + typeof (x));//string

x = true;
console.log('[typeof] x' + typeof (x));//boolean

x = null;
console.log('[typeof] x' + typeof (x));//object

x = undefined;
console.log('[typeof] x' + typeof (x));//undefined

var x2;
console.log('[typeof] x' + typeof (x));//undefined

//隐式类型转换
var sNum = '2';
var iNum = 2;
var ret = sNum + iNum;
console.log('[隐式类型转换]' + typeof ret);
var ret = sNum - iNum;
console.log('[隐式类型转换]' + typeof ret);

//显式类型转换
// Number(); 把数转换成数 不是数就返回NaN
var iNum = Number(false);
console.log('[Number()] =' + iNum);

iNum = Number(true);
console.log('[Number()] =' + iNum);

iNum = Number(undefined);// NaN
console.log('[Number()] =' + iNum);
// undefined == null (true)
iNum = Number(null);//0
console.log('[Number()] =' + iNum);

iNum = Number('10');
console.log('[Number()] =' + iNum);

iNum = Number('1.5');
console.log('[Number()] =' + iNum);

iNum = Number('1.5.3');
console.log('[Number()] =' + iNum);

iNum = Number('');
console.log('[Number()] =' + iNum);
// false,null,'' =>0; undefined=> NaN; 不是数=>NaN
// {} == '[object Ibject]' // true

// parseInt() 读音(怕 s in)//parse,parser
var iNum = parseInt('1234');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('1234a');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('1.5.3');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('100px');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('a1234');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('a1234', 16);
console.log('[parseInt()] =' + iNum);

//0x--- 16进制 c/c++;---h 16进制 汇编语言;
iNum = parseInt('0xA0');
console.log('[parseInt()] =' + iNum);

//0--- 8进制 c/c++; js中以0开头表示8进制无效
iNum = parseInt('070');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('1.1E5');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('123.9');
console.log('[parseInt()] =' + iNum);

iNum = parseInt('A0', 16);
console.log('[parseInt()] =' + iNum);

iNum = parseInt('70', 8);
console.log('[parseInt()] =' + iNum);

iNum = parseInt(undefined);
console.log('[parseInt()] =' + iNum);

iNum = parseInt(null);
console.log('[parseInt()] =' + iNum);

iNum = parseInt(false);
console.log('[parseInt()] =' + iNum);

//如何记忆Number()和parseInt()的区别;
//Number本质上可以转化为数字，parseInt是看上去像数字
//1、Number可以，parseInt不可以：flase,null,''
//2、Number不可以，parseInt可以：数字开头掺杂其他
//3、都不可以，undefined，字母开头的字符串

//parseFloat();
var fNum = parseFloat('10');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('10.00');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('10.5');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('1.5.3');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat(' 1.7 ');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('1.5aaa');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('1.1E5');
console.log('[parseFloat]=' + fNum);

fNum = parseFloat('1.1E5aaa');
console.log('[parseFloat]=' + fNum);
//parseFloat()与parseInt()的区别
//parseFloat()支持小数点 科学计数法

//isNaN() 调用Number()
console.log('[isNaN] =' + isNaN(NaN));
console.log('[isNaN] =' + isNaN('aaa'));
console.log('[isNaN] =' + isNaN(undefined));
console.log('[isNaN] =' + isNaN(null));
console.log('[isNaN] =' + isNaN('1234'));
console.log('[isNaN] =' + isNaN(''));

//转换为字符串
// 隐式类型转换

var sToken = '' + 2;
console.log('[隐式类型转换]' + typeof (sToken));

sToken = '' + null;
console.log('[隐式类型转换]' + typeof (sToken));

sToken = '' + undefined;
console.log('[隐式类型转换]' + typeof (sToken));

sToken = '' + true;
console.log('[隐式类型转换]' + typeof (sToken));

sToken = '' + false;
console.log('[隐式类型转换]' + typeof (sToken));

//显示类型转换
//String()
var sToken = String(2);
console.log('[String]' + typeof (sToken) + ' ' + sToken);

sToken = String(null);
console.log('[String]' + typeof (sToken) + ' ' + sToken);

sToken = String(undefined);
console.log('[String]' + typeof (sToken) + ' ' + sToken);

sToken = String(true);
console.log('[String]' + typeof (sToken) + ' ' + sToken);

//toString()
var iNum03 = 80;
sToken = iNum03.toString(); // 80.toString()不可以
console.log('[String]' + typeof (sToken) + ' ' + sToken);

var iNum03 = 80;
sToken = iNum03.toString(16);
console.log('[String]' + typeof (sToken) + ' ' + sToken);

sToken = true.toString(); //null undefined 不可以
console.log('[String]' + typeof (sToken) + ' ' + sToken);

//如果有一个二进制的字符串，怎么变成16进制的字符串

var sString = '10101001';
var nNum = parseInt(sString, 2);
if (!isNaN(nNum)) {
    console.log(nNum.toString(16));
}

//布尔
//隐式类型转换
var bVar = !0;
console.log('[隐式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = !1;
console.log('[隐式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = !1000;//0与非0的区别
console.log('[隐式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = !!1000;
console.log('[隐式类型转换]' + typeof (bVar) + ' ' + bVar);

//显式类型转换
var bVar = !Boolean(0);//等价于！0
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = Boolean(1000);
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = Boolean(undefined);
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = Boolean(null);
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = Boolean(NaN);
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

bVar = Boolean('');
console.log('[显式类型转换]' + typeof (bVar) + ' ' + bVar);

//数组
//JS的数组是弱类型
var arr = [];
var arr1 = [0, 1, 2, 3];

var arr2 = [0, 1, , 3];
var arr3 = [, , ,];

var arr4 = [0, 'accc', undefined, null, true, {}];

//如何访问数组元素；
console.log(arr1[1]);
console.log(arr4[3]);

//如果一个下标位置原来不存在，会添加，如果必须，还会增加length
arr[3] = 5;
console.log(arr2);
arr2[2] = 2;
console.log(arr2);
//覆盖
arr2[0] = 'ab';
console.log(arr2);

//数组的长度
console.log(arr.length);

// 使用构造函数方式生成数组

arr = new Array();//等价于arr=[];
arr1 = new Array(0, 1, 2, 3);//等价于 arr1=[0,1,2,3];
arr3 = new Array(4);// 等价于 [,,,];

//稀疏数组\矩阵
var larr = new Array(10000);
larr[3] = 5;
larr[1.5] = 7;//不报错
// 可以将数组当作map使用，key - value

var a4 = [];
a4['China'] = '满汉全席';
a4['American'] = '火鸡';
a4['France'] = '法国';
console.log(a4);

//如何判断一个变量是数组？
var arr = [];
console.log(typeof (arr));
console.log(arr.constructor.name == 'Array');//判断是否是数组constructor.name

//三种轮询数组的方法
arr = [0, 1, 2, 3, 4, 5];
arr['China'] = '满汉全席';
// for(i) for能打印出undefined 加字符串不影响数组长度
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// for(in) in只能打印出数组全部内容
for (var i in arr) {
    console.log(arr[i]);
}
// for(i)按照数组的方式改动数组，for(in)使用map的方式返回所有非稀疏节点的key.
// forEach(f),返回所有数字且非稀疏的节点的value
arr.forEach(function (x) {
    console.log(x);
});

// concat() 把两个数组连接起来
var arr = [3, 2, 1];
var arr2 = [4, 5, 6];

var arr3 = arr.concat(arr2);
console.log(arr3);

// join() 为数组添加分隔符
console.log(arr3.join('-'));

// sort() 数字 对数组的值进行排序 会改变原来的数组
arr3 = [1, 5, 3, 2, 9, 4, 0, 8];
arr3.sort();
console.log(arr3);

// sort() 字符串
arr3 = ['bbb', 'aaa', 'Ccc'];
arr3.sort();
console.log(arr3);
// ASCII码 0 30h，A 41H，a 61H

//栈 后进先出
//进栈 push 出栈 pop

// push-pop 尾进尾出
var arr = ['a', 'b', 'c'];
console.log(arr.join(','));
arr.push('z');
console.log(arr.join(','));
console.log(arr.pop());
console.log(arr.join(','));

// unshift头进 shift头出
var arr = ['a', 'b', 'c'];
console.log(arr.join(','));
arr.unshift('z');
console.log(arr.join(','));
console.log(arr.shift());
console.log(arr.join(','));

// 队列 先进先出 queue
// 尾进头出
var arr = ['a', 'b', 'c'];
console.log(arr.join(','));
arr.push('z');
console.log(arr.join(','));
console.log(arr.shift());
console.log(arr.join(','));
//头进尾出
var arr = ['a', 'b', 'c'];
console.log(arr.join(','));
arr.unshift('z');
console.log(arr.join(','));
console.log(arr.pop());
console.log(arr.join(','));