// Math 对象

// 常数
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
//
// // 方法
// // 绝对值
// console.log(Math.abs(-5));
// // 三角函数
// console.log(Math.sin(Math.PI/3));
// console.log(Math.cos(Math.PI/3));
// console.log(Math.tan(Math.PI/3));
// // 反三角函数
// console.log(Math.asin(1));
// console.log(Math.acos(1));
// console.log(Math.atan(1));
// console.log(Math.atan2(1,1));// (x,y)
// // 四舍五入
// console.log(Math.round(13.4));
// console.log(Math.round(13.5));
// console.log(Math.floor(13.5));  // 向下取整
// console.log(Math.ceil(13.2));   // 向上取整
// // 指数和对数
// console.log(Math.exp(2));
// console.log(Math.log(25));
// console.log(Math.pow(2,4));//平方
// console.log(Math.sqrt(4)); //平方根
// // 求最大值最小值
// console.log(Math.max(1,23,4,0,5,6,7,88));
// console.log(Math.min(1,23,4,0,5,6,7,8));
// // 随机数
// console.log(Math.random()); //0~1之间的均匀分布
// console.log(Math.random());
// console.log(Math.random());
// // Math object
// console.log(Math.valueOf());
//
// Math.myValue=0.5; // 不推荐

// 写一个函数，将数字转化为中文的大写形式，返回字符串，数字不超过1亿，小数点保留后两位。

// 中间如果有0.要补“零”
// 后面有0，不补
// 万到百之间，千位为0，补零
// 角分

// 分开整 和不整

// var CHNCHAR = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
//
// // 仟万
// function transfer(x) {
//     var str = '';
//     if (typeof (x) != 'number' || isNaN(x) || x > 100000000) return str;
//     // 拉出所有数
//     var iWan = Math.floor(x / 10000);
//     var i1 = Math.floor(x - iWan * 10000);
//     var iJF = Math.round(x * 100) % 100;
//     var iJ = Math.floor(iJF / 10);
//     var iF = iJF % 10;
//
//     if (iWan != 0) {
//         str += transferS(iWan) + '万';
//     }
//     // 1020,3345
//     // 1023,0345
//     // 1023,0000
//     // 1020,0000
//     // 以上都要加零 只有在万位不是0，千位不是0的情况下不用加零
//     if (!(iWan % 10 != 0 && Math.floor(i1 / 1000))) {
//         if (i1 != 0 && iWan != 0) {
//             str += CHNCHAR[0];
//         }
//     }
//     // 0
//     if (i1 != 0) {
//         str += transferS(i1);
//     }
//
//     if (i1 != 0) {
//         str += transferS(i1);
//     }
//     if (str != '') {
//         str += '元';
//         if (iJ != 0 || iF != 0) {
//             if (iF != 0) {
//                 str += CHNCHAR[iJ] + '角';
//             }
//             if (iF != 0) {
//                 str += CHNCHAR[iF] + '分';
//             }
//         } else {
//             str += '整';
//         }
//     } else {
//         if (iJ != 0 || iF != 0) {
//             if (iF != 0) {
//                 str += CHNCHAR[iJ] + '角';
//             }
//             if (iF != 0) {
//                 str += CHNCHAR[iF] + '分';
//             }
//         } else {
//             str += '零元整';
//         }
//     }
//
//     return str;
// }
//
// // 千位
// function transferS(x) {
//     var str = '';
//     if (typeof (x) != 'number' || isNaN(x) || x > 10000) return str;
//     x = Math.floor(x);
//
//     var i1 = x % 10;
//     var iT = Math.floor(x / 10) % 10;
//     var iH = Math.floor(x / 100) % 10;
//     var iS = Math.floor(x / 1000) % 10;
//
//     if (iS != 0) {// 千位不为零
//         str += CHNCHAR[iS] + '仟';
//         if (iH != 0) {// 千位不为零，百位不为零
//             str += CHNCHAR[iH] + '佰';
//             if (iT != 0) {// 千位不为零，百位不为零，十位不为零
//                 str += CHNCHAR[iT] + '拾';
//                 if (i1 != 0) {// 千位不为零，百位不为零，十位不为零,个位不为零
//                     str += CHNCHAR[i1];
//                 } // 千位不为零，百位不为零，十位不为零,个位为零，什么都不用做 such as: 1230
//             } else if (i1 != 0) {// 千位不为零，百位不为零，十位为零，个位不为零
//                 str += CHNCHAR[0] + CHNCHAR[i1];
//             }
//         } else {// 千位不为零，百位为零
//             if (iT != 0) {// 千位不为零，百位为零,十位不为零 102X
//                 str += CHNCHAR[0] + CHNCHAR[iT] + '拾';
//                 if (i1 != 0) {// 千位不为零，百位为零，十位不为零,个位不为零 such as:1034
//                     str += CHNCHAR[i1];
//                 }
//             } else {// 千位不为零，百位为零,十位为零
//                 if (i1 != 0) {// 千位不为零，百位为零,十位为零,个位不为零
//                     str += CHNCHAR[0] + CHNCHAR[i1];
//                 }
//             }
//         }
//     } else { // 千位为零
//         if (iH != 0) {// 千位为零，百位不为零
//             str += CHNCHAR[iH] + '佰';
//             if (iT != 0) {// 千位为零，百位不为零，十位不为零
//                 str += CHNCHAR[iT] + '拾';
//                 if (i1 != 0) {// 千位为零，百位不为零，十位不为零,个位不为零 such as: 234
//                     str += CHNCHAR[i1];
//                 } // 千位为零，百位不为零，十位不为零,个位为零，什么都不用做 such as: 230
//             } else if (i1 != 0) {// 千位为零，百位不为零，十位为零，个位不为零 such as: 204
//                 str += CHNCHAR[0] + CHNCHAR[i1];
//             }
//         } else {// 千位为零，百位为零
//             if (iT != 0) {// 千位为零，百位为零,十位不为零 2X
//                 str += CHNCHAR[iT] + '拾';
//                 if (i1 != 0) {// 千位为零，百位为零，十位不为零,个位不为零 such as:24
//                     str += CHNCHAR[i1];
//                 }
//             } else {// 千位为零，百位为零,十位为零
//                 if (i1 != 0) {// 千位为零，百位为零,十位为零,个位不为零 4
//                     str += CHNCHAR[i1];
//                 } else {// 千位为零，百位为零,十位为零，个位为零
//                     str += CHNCHAR[0];
//                 }
//             }
//         }
//     }
//     return str;
// }

// 测试千位：
// console.log(transferS(1234));
// console.log(transferS(1230));
// console.log(transferS(1204));
// console.log(transferS(1200));
// console.log(transferS(1034));
// console.log(transferS(1030));
// console.log(transferS(1004));
// console.log(transferS(1000));
// console.log(transferS(123));
// console.log(transferS(120));
// console.log(transferS(103));
// console.log(transferS(100));
// console.log(transferS(25));
// console.log(transferS(20));
// console.log(transferS(3));
// console.log(transferS(0));

// 测试万位：
// console.log(transfer(12345678));
// console.log(transfer(12305678));
// console.log(transfer(12340678));
// console.log(transfer(12340678.51));
// console.log(transfer(12340678.01));
// console.log(transfer(12340678.50));
// console.log(transfer(5678));
// console.log(transfer(0.47));
// console.log(transfer(0));

// 卧槽 这么 qnmgb的题目
// 做法：分析题目
// 1、切割四位 千位做一个函数
// 2、万位做一个函数 万位内的千位直接引用千位的函数
// 3、小数位的判断全部扔给万位，每四位差不多一致

// 正则表达式（正则语言，与上下文无关）有限自动状态机
// 人类语言 上下文语言 （数学之美）
// 词法分析相关 考虑使用正则表达式
// 可以拆开成一个一个小问题
// -----------------基础使用-----------------------
// 1、正则表达式如何使用 正则表达式类 RegExp(exp,param)
// var regExp = new RegExp('[0-9]+', 'g'); //正整数
// [ ]指代一个字符，里面的字符表示这个被指代的字符的选择范围
// + 前面的字符，重复1次或者1次以上

// 参数：g global，全局
// var str1 = '123123123a1234';
// console.log(str1.match(regExp));
// 在match这个函数里，g.匹配所有的字符串
// 没有g，匹配第一个，然后停止

// 2、直接量
//      用两个撇斜杠，/expression/param
//      String对象的match
// console.log(str1.match(/[0-9]+/g));
// console.log(str1.match(/\d+/g));
// console.log(str1.match(/123/g));// 123,123,123,123
// console.log(str1.match(/(123)+/g));

// RegExp对象的test方法
// var regExp2 = /[0-9]+/g;
// console.log(typeof (regExp2));
// console.log(regExp2.test(str1));
// ----------------正则表达式详解------------------
// 1、简单类：
//        单词本身[]
// var str = 'hello world!';
// console.log(str.match(/hello/g));
// 2、范围类
//        [ ]指代一个字符，内部指出字符的范围
//        [0123456789] [0-9] [a-z] [A-Z]
//        十六进制：[0-9a-fA-F]
// 3、负向类
//        [^0-9]不能是数字，排除数字（^）
// str = '4517;ah782;Bz553';
// console.log(str.match(/[0123456789]/g));
// console.log(str.match(/\d/g));
// console.log(str.match(/[0-9]/g));
// 匹配字符串中的两位数
// console.log(str.match(/[0-9][0-9]/g));
// 4、量词 一个前面单位出现的次数
// {n} 出现n次
// console.log(str.match(/[0-9]{4}/g));
// console.log(str.match(/[0-9]+?/g));
// {m,n} 至少m次，至多n次
// {m,} 至少m次，至多不限
// ?    0次或者1次      ={0,1}
// +    1次或者多于1次   ={1,}
// *    0次或者多于0次   ={0,}
// 贪婪量词：? + * 找到匹配的最大串
// 惰性量词：*? +? 找到匹配的最小串

// 找到所有的16进制数
// console.log(str.match(/[\da-fA-F]+/g)); //贪婪
// console.log(str.match(/[\da-fA-F]+?/g)); //惰性
// console.log(str.match(/[^\da-fA-F]+?/g)); //匹配所有不是的
// str = 'abbbaabbbaaabbb1234';
// console.log(str.match(/.*bbb/g));//贪婪
// console.log(str.match(/.*?bbb/g));//惰性

// 5、通配符 预定义类
// .  = [^\n\r] 除了回车换行以外，都可以匹配
// \d = [0-9] 数字
// \D = [^0-9] 非数字
// \w = [a-zA-Z_0-9] 数字字母下划线
//  变量名：/[a-zA-Z_]\w*/
// \W = [^a-zA-Z_0-9] 非数字字母下划线
// \s = [\t\n\x0B\f\r] 空格或者空白
// \S 非空格或者空白
// 零宽
// \b 表示边界（两个字符中间的位置）一边是\w,另一边是\W
// \B 非边界
// ^  开始
// document.getElementById  结束

// var str = 'a====s===b';
// console.log(str.match(/.\b./g));
// console.log(str.match(/^./g));
// console.log(str.match(/.$/g));
// console.log(str.match(/a/g));

//6、分组 一个正则表达式不但可以对整个匹配进行操作，还可以对其中的 子串/分组/() 进行匹配，分组
// (pattern) 匹配pattern，同时捕获结果，自动设定组号
// \1 RegExp.$1：反向引用
//（?<name>pattern）  匹配pattern，同时捕获结果，设定name为组名
// k<name>调用：反向引用

// str = 'mom and add';
// console.log(str.match(/mom( and add)?/g));// ( and add)分组
// console.log(RegExp.$1);

// str = 'word excel excel hello world world';
// console.log(str.match(/(\b[a-zA-Z]+\b)\s+\1/));
// console.log(str.match(/(?<n1>\b[a-zA-Z]+\b)\s+\k<n1>/));

// console.log(RegExp.lastMatch);
// console.log(RegExp.$1);

// 零宽(负向)先行\后行断言
// var str='reaaa;rcaaa=bbb=;';
// // 寻找两个字符，两个字符后面以分号结尾 零宽先行断言
// console.log(str.match(/.{2}(?=;)/g));
// // 寻找四个字符，以ea开头 零宽后行断言
// console.log(str.match(/(?<=ea).{4}/g));
// // 寻找三个字母，不以分号结尾 零宽负向后行断言
// console.log(str.match(/[a-z]{3}(?!;)/g));
// // 寻找不以re开头的三个字母 负向先行断言
// console.log(str.match(/(?!re)[a-z]{3}/g));

// 7、或|
// str = 'var    aaa;';
// str2='function        f(){}';
//
// console.log(str.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/));
// console.log(str2.match(/^var\s+[a-zA-Z]\w*;|^function\s+[a-zA-Z]\w*\s*\(\)\{\}/));

// 8、练习题
// 匹配手机号 1开头，第二位是34579，11位，130-0000-0000/ 13000000000 3、4 和7、8之间可能有-，也可能没有
// str='142-3234-4124';
// console.log(str.match(/1[3-579][0-9]*[-0-9]{9}/g));
// var regExp2=/^1[34579]\d-?\d{4}-?d{4}$/;

// 匹配一个信箱
// 字母，数字，下划线，- . @ xxx.xxx.xxx(字母数字下划线)

// var regExp2 =/\w{9}@\w{2}.[a-z]{3}/g;
// str='495241088@qq.com';
// console.log(str.match(regExp2));

// var regExp2 =/^[\w\-\.]+@[\w\-]+(\.[a-zA-Z]{2,5}){1,3}$/g;
// console.log(str.match(regExp2));

// 匹配整数 正整数 19，-5，+45
// var regExp2=/^[+-]?\d+$/g;
// str='1999';
// console.log(str.match(regExp2));
// str='-1';
// console.log(str.match(regExp2));
// str='+0';
// console.log(str.match(regExp2));
// str='wo';
// console.log(str.match(regExp2));

// 匹配浮点数 兼容整数，小数 0.35 -1.7 科学计数法 小数E整数
// var regExp2=/^[+-]?\d+(\.\d+)?([Ee][+-]?\d+)?$/g;
// str='100';
// console.log(str.match(regExp2));
// str='-0.47';
// console.log(str.match(regExp2));
// str='1.2E5';
// console.log(str.match(regExp2));
// str='-3e8';
// console.log(str.match(regExp2));

// 匹配中国字
// var regExp2=/^[\u4e00-\u9fa5\uff0c\u3002]+$/g;
// str='弱小和无知不是生存的障碍，傲慢才是';
// console.log(str.match(regExp2));

// 9、String支持的正则函数：search()
// search(regExp) 直接量和对象，返回整数开始的位置，-1表示没找到
str = 'I word site excel world ok chrome match ok excel word';
// 找world
// console.log(str.search(/\bworld\b/));
// g: search 不支持全局搜索，忽略参数g 同时忽律regexp的lastIndex(找到顺着往下走)

// 10、match(regexp) 直接量和对象，没有g返回数组，0表示匹配的最大串，其他是分组的子串 index：最大串开始的位置 input：原始的串
// 有g 返回数组，所有匹配的最大串，但是没有分组的子串，index input 无效
// console.log(str.match(/\bexcel\b/));
// console.log(str.match(/\bexcel\b/g));

// 11、replace(regexp/substr,replacement)
//     regexp 直接量、对象 substr 子串
//     replacement 替换进去的串，或者函数 $1~$99分组,$&代表子串 $' 子串右侧

// 把小写的word变成大写的WORD
// console.log(str.replace(/\bword\b/, 'WORD'));// 局部
// console.log(str.replace(/\bword\b/g, 'WORD'));// 全局
// console.log(str.replace('word', 'WORD'));// 只替局部
// 匹配单词1-单词2模式，然后变成单词2-单词1
// str = 'aaaa-bbbb  cc-ddd';
// console.log(str.replace(/([a-z]+)-([a-z]+)/g, '$2-$1'));
// console.log(str.replace(/([a-z]+)-([a-z]+)/g, replace));
// function replace(match, p1, p2, offset, str) {
//     console.log(match, p1, p2, offset, str);
//     var sRet = '';
//     for (var i = 0; i < p2.length; i++) {
//         sRet += String.fromCharCode(p2.charCodeAt(i) + 1);
//     }
//     sRet += '=';
//     for (var i = 0; i < p1.length; i++) {
//         sRet += String.fromCharCode(p1.charCodeAt(i) + 1);
//     }
//     return sRet;
// }

// 12、split(separator,how many) 把字符串切成数组
//           separator 正则，字符串，可选
//           how many  最大长度
// console.log(str.split(/\s+/));
// console.log(str.split(/\s+/,4));
// console.log(str.split(''));

// 13、RegExp test() true 是否匹配
// console.log(/\bword\b/.test(str));

// 14、RegExp exec(string) 返回数组 找不到null
// 没g，数组的0位是最大匹配串，后面是分组，index是开始匹配的位置，input是原串
// 有g，lastIndex中放入子串结束位置的下一位，每次调用后移
// var regExp2 = /\bword\b/g;
// regExp2.lastIndex = 6;
// var aRst = regExp2.exec(str);
// console.log(aRst);
// console.log(regExp2.lastIndex);

// 练习：做一个Date的format函数
// var d1 = new Date();
// // console.log(d1.format('yyyy年mm月dd日 hh时'));
// // yyyy年mm月dd日-hh:mm:ss
// Date.prototype.format = function (fmt) {
//     var obj = {
//         'M+': this.getMonth() + 1,
//         'd+': this.getDate(),
//         'h+': this.getHours(),
//         'm+': this.getMinutes(),
//         's+': this.getSeconds()
//     };
//     if (/(y+)/.test(fmt)) {
//         var year = this.getFullYear().toString();
//         if (RegExp.lastMatch.length <= year.length) {
//             year = year.substr(-RegExp.lastMatch.length);
//         }
//         fmt = fmt.replace(RegExp.lastMatch, year);
//     }
//     for (var k in obj) {
//         var r = new RegExp( k );
//         if (r.test(fmt)) {
//             var x = obj[k].toString();
//             if (RegExp.lastMatch.length > x.length) {
//                 //补零
//                 x = '000000' + x;
//                 x = x.substr(-RegExp.lastMatch.length);
//             }
//             fmt = fmt.replace(RegExp.lastMatch, x);
//         }
//     }
//     return fmt;
// };
// console.log(d1.format('yyyy年mm月dd日 hh时'));


















