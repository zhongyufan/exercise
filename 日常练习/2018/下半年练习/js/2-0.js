// var iNum = 86;
// document.write('iNum =' + iNum + '<br>');
//
// //八进制
// var oNum = 070;
// document.write('oNum=' + oNum + '<br>');
//
// //十六进制
// var xNum = 0x1f;
// document.write('xNum=' + xNum + '<br>');
//
// //浮点数
// var fNum = 5.01;
// document.write('fNum=' + fNum + '<br>');
//
// // 浮点数，科学计数法
// fNum = 5.61e7;
// document.write('fNum=' + fNum + '<br>');
//
// iNum = Number.MAX_VALUE;
// document.write('iNum=' + iNum + '<br>');
//
// iNum = Number.MIN_VALUE;
// document.write('iNum=' + iNum + '<br>');
//
// iNum = Number.POSITIVE_INFINITY;
// document.write('iNum=' + iNum + '<br>');
//
// iNum = Number.MAX_VALUE*1.1;
// document.write('iNum=' + iNum + '<br>');

// var sToken = "Hello World!";
// document.write('sToken=' + sToken + '<br>');
//
// var sToken2 = sToken.concat(' abc', 'ccc');
// document.write('sToken2=' + sToken2 + '<br>');
//
// document.write('sToken2.length=' + sToken2.length + '<br>');

sToken2 = 'hello world';
var iLength = sToken2.indexOf('o');
// document.write('charAt =' + sToken2.charAt(iLength) + '<br>');
document.write('substring =' + sToken2.substring(0, iLength + 1) + '<br>');

sToken2 = 'abcd abce a234 165426354 dsadsadas';
var iStart = sToken2.indexOf(' '), iEnd;
if (iStart != -1) {
    iEnd = sToken2.indexOf(' ', iStart + 1);
    if (iEnd != -1) {
        document.write('substring=' + sToken2.substring(iStart + 1, iEnd) + '<br>')
    }
}

//boolean
var bCheck = (12 == 2);
document.write('bCheck=' + bCheck + '<br>');

//Finite都是一样的 （isFinite）
//Num 不等于 Num   (isNum)
//undefined 面试必考点
document.write('(undefined === undefined)=' + (undefined == undefined) + '<br>');
document.write('(null === null)=' + (null == null) + '<br>');
document.write('(undefined === null)=' + (undefined == null) + '<br>');




