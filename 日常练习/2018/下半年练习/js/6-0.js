// 数组中的成员函数 数组特有

// slice(iStart[,iEnd]) i-整数 []-可有可无 :节选数组中的一段,原数组不受影响
// slice(iStart,iEnd) 从start开始，到end结束，start显示，end不显示
//正数0正数(第一个可以使用的元素)，负数1倒数(最后一个不可以使用的元素）
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// console.log('[slice]' + arr.slice(6));//从第六个开始
// console.log('[slice]' + arr.slice(6).join('.'));
//
// console.log('[slice]' + arr.slice(-3));//倒数后三个
//
// console.log('[slice]' + arr.slice(2, 5));
// console.log('[slice]' + arr.slice(-7, 5));


// splice(iIndex[, iHowmany][, item1][, item2][, item3]...)
// 原数组受到影响
// 从iIndex开始删除元素，删除数量由iHowmany决定
// item1 要插入的元素 位置: 删除的地方

// var arr1=arr.splice(6);
// console.log('[splice]' + arr);
// console.log('[splice]' + arr1);
//
// arr=[0,1,2,3,4,5,6,7,8];
// arr1=arr.splice(-3);
// console.log('[splice]' + arr);
// console.log('[splice]' + arr1);
//
// arr=[0,1,2,3,4,5,6,7,8];
// arr1=arr.splice(2,3);
// console.log('[splice]' + arr);
// console.log('[splice]' + arr1);
//
// arr=[0,1,2,3,4,5,6,7,8];
// arr1=arr.splice(-7,3);
// console.log('[splice]' + arr);
// console.log('[splice]' + arr1);
//
// arr=[0,1,2,3,4,5,6,7,8];
// arr1=arr.splice(2,3,-1,-2,-3,-4);
// console.log('[splice]' + arr);//0,1,-1,-2,-3,-4,5,6,7,8
// console.log('[splice]' + arr1);

// delete
// 只删除元素，位置长度不变
// var arr=[0,1,2,3,4,5,6,7,8];
// console.log('[delete]' + arr);
// delete arr[4];
// console.log('[delete]' + arr);// 0,1,2,3,,5,6,7,8

// 二维数组
// var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// matrix = [];
// matrix[0] = [1, 2, 3];
// matrix[1] = [4, 5, 6];
// matrix[2] = [7, 8, 9];

// 三维数组
// var cubic = [];
// cubic[0] = [];
// cubic[0][0] = [1, 2, 3];
// cubic[0][1] = [4, 5, 6];
// cubic[0][2] = [7, 8, 9];
// cubic[1] = [];
// cubic[1][0] = [10, 11, 12];
// cubic[1][1] = [13, 14, 15];
// cubic[1][2] = [16, 17, 18];
// cubic[2] = [];
// cubic[2][0] = [19, 20, 21];
// cubic[2][1] = [22, 23, 24];
// cubic[2][2] = [25, 26, 27];
//
// console.log(matrix[1][1]);
// console.log(cubic[1][1][1]);

//内存问题
//值类型: number string Boolean undefined null
//引用类型: array function object
// 栈（后进先出） 堆（没规则，随便取用）
// 两大块内存，栈内存和堆内存
//值类型比较简单，直接进栈
//引用类型无法确定需要多少内存空间，只能进堆内存
//var a=5;key是变量名，value是5
//var arr=[];value是[]地址（引用）
//两个var 都放在栈内存，但是[]内数据存放在堆内存


// var a = 5;
// var b = a;
// var arr = [];
// var arr1 = arr;
// var s = 'abc';
// var a = [];


//当代码运行到栈内变量的作用域以外时，变量将被摧毁
//如果变量被摧毁，相应的引用数-1
//或者是变量被赋值，指向其他值变量或者引用变量，相应的引用数-1
//两个内存都有地址
//栈内存
// ST001:a,HP002
// ST002:arr,HP001
// ST003:s,'abc'
// ST004:b,5
// ST005:arr1,HP001
// ST006:

//堆内存
//所有堆内存中的对象，有一个引用计数
//GC 垃圾收集，内存回收机制
// 内存达限时，回收启动
// 时间过长时，回收启动
// 引用数为0的释放
// HP001:[]
// HP002:[]
// HP003:
// HP004:

// 内存泄露
// 循环引用

// var a1 = [];
// var a2 = [];
//
// a1[0] = a2;
// a2[0] = a1;
//栈内存 （内存大小值确定）
// ST001:
// ST002:
// ST003:
// ST004:
// ST005:
// ST006:

//堆内存
// HP001:[HP002],(1)
// HP002:[HP001],(1)
// HP003:
// HP004:
// 永远无法被释放 且无法控制


//如何清空一个数组
// 方法一 length
// var arr = [1, 2, 3];
// console.log(arr);
// arr.length = 0;
// console.log(arr);
// 方法二 splice
// console.log(arr);
// arr.splice(0);
// console.log(arr);
// 方法三 []
// console.log(arr);
// arr = [];
// console.log(arr);
// 方法三相比前两个方法，能够让堆内存被回收

// 已知一个数组，内部数字都是number，有重复元素
// 程序：生成新数组去重
// 方法一
var x = [1, 3, 4, 5, 1, 3, 2, 1, 2, 4];

var y = [];
// x循环
// for (var i = 0; i < x.length; i++) {
//     //判断当前元素是否与y内元素重复，重复跳过
//     for (var j = 0; j < y.length; j++) {
//         if (x[i] === y[j]) {
//             break;
//         }
//     }
//     //不重复push
//     if (j >= y.length) {
//         y.push(x[i]);
//     }
// }
// console.log(x);
// console.log(y);

//时间复杂度 与X的元素成正比
//x.length N
//  0+1+2+3+..(N-1)=N(N-1)/2 计算数量级为²
// O(N²)

// 方法二
// x排序，不用每次翻找y
// x.sort();
// for (var i = 0; i < x.length; i++) {
//     if (y.length == 0 || y[y.length - 1] !== x[i]) {
//         y.push(x[i]);
//     }
// }
// console.log(y);
// 时间复杂度 生成Y的时间复杂度O（N） X排序复杂度O（N*logN）堆排序
// 基于比较的排序，比如堆排序 时间复杂度为O（N*logN）
// 方法三

// var arrMap = [];
// for (var i = 0; i < x.length; i++) {
//     arrMap[x[i]] = true;
// }
// // for（in） 没设定的不会加载出来
// for(var j in arrMap){
//    y.push(+j);
// }
// console.log(y);
// 取决于arrMap[]的时间复杂度
//      logN => N*logN  ----------二叉树
//      1    => N       ----------哈希表

// SQL 关系型数据库MySQL B+树 ---------查询速度 logN
// No-SQL REDIS memcache 大哈希表------查询速度 1 (大的内存空间换速度)

// 已知一个数组，number，字符串，boolean，去重？

// 方法1.使用=== 判断，方法一适用
// 方法2.轮询数组，用typeof把number，string，boolean分开
//          三个排序，归并三个数组
// 方法3.轮询数组，用typeof把number，string，boolean分开
//          三个map，归并三个数组