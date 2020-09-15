// //if
//
// var iScore = 70;
// if (iScore >= 60) {
//     document.write('[if] U r good student!!!!<br>');
// }
//
// var iScore = 75;
// if (iScore >= 90 && iScore <= 100) {
//     document.write('优');
// }
// else if (iScore >= 75) {
//     document.write('良');
// }
// else if (60 <= iScore) {
//     document.write('中');
// }
// else if (60 > iScore) {
//     document.write('差');
// }
//
// //switch
// var day = 8, x;
//
// switch (day) {
//     case 0:
//         x = "星期天";
//         break;
//     case 1:
//         x = "星期一";
//         break;
//     case 2:
//         x = "星期三";
//         break;
//     default:
//         x = "Error";
//         break;
// }
// document.write(x);
//
// // for
// for (var i = 0; i < 20; i++) {
//     //document.write('[for]' + i + '<br>');
// }
//
// i = 0;
// for (; i < 20;) {
//     //document.write('[for]' + i + '<br>');
//     i++;
// }
//
// // do while
// i = 0;
// do {
//     //document.write('[for]' + i + '<br>');
//     i++;
// }
// while (i < 20);
//
// i = 0;
// while (i < 20) {
//     if (i == 10) {
//         break;
//     }
//     //document.write('[for]' + i + '<br>');
//     i++;
// }
//
// i = 0;
// while (i < 20) {
//     if (i == 10) {
//         i++;
//         continue;
//     }
//     //document.write('[for]' + i + '<br>');
//     i++;
// }

// var b1 = false;
// var b2 = false;
// var b3 = false;
// var count = 0;
// for (var i = 1; i <= 50000; i++) {
//     b1 = false;
//     b2 = false;
//     b3 = false;
//     if (i % 7 == 5) {
//         b1 = true;
//     }
//     if (i % 13 == 7) {
//         b2 = true;
//     }
//     if (i % 17 == 13) {
//         b3 = true;
//     }
//     if (b1 && b2 && b3) {
//         document.write('[50000以内]' + i + '<br>');
//         count++;
//     }
//     if (count >= 5) {
//         break;
//     }
// }


// var count = 0;
// for (var i = 1; i <= 50000; i++) {
//     if (i % 7 == 5 && i % 13 == 7 && i % 17 == 13) {
//         document.write('[50000以内]' + i + '<br>');
//         count++;
//         if (count >= 5) {
//             break;
//         }
//     }
// }

//计算阶层 10！= 10 * 9 * 8 ~ 1;

// var iRet = 1;
// var n = 100;
// for (var i = n; i >= 1; i--) {
//     if (!isFinite(iRet)) {
//         // document.write('[阶乘] break <br>');
//         break;
//     }
//     iRet *= i;
// }
// document.write('[阶乘]' + iRet + '<br>');

//1累加到100
// var iRet = 0;
// var n = 100; //限制n的大小
// for (var i = 1; i <= n; i++) {
//         iRet += i;
// }
// document.write('[累加]' + iRet + '<br>');

/// 5的n次幂
// var iRet = 1;
// // var n = 100;
// // var di = 5;
// // for (var i = 0; i < n; i++) {
// //     if(!isFinite(iRet)){
// //         break;
// //     }
// //     iRet *= di;
// // }
// // document.write('[n次幂]'+iRet+'<br>')

// 习题:
// 50000以内 % 7 = 5   % 13 = 7  % 17 = 13
// 计算阶层 10！= 10 * 9 * 8 ~ 1
// 1累加到100
// 5的n次幂

// 50000以内 % 7 = 5   % 13 = 7  % 17 = 13
var count = 0;
for (var i = 0; i <= 50000; i++) {
    if (i % 7 == 5 && i % 13 == 7 && i % 17 == 13) {
        document.write('[50K以内]' + i + '<br>');
        count++;
        if (count >= 5) {
            break;
        }
    }
}

// 计算阶层 10！= 10 * 9 * 8 ~ 1
var num = 1;
var n = 10;
for (var i = n; i >= 1; i--) {
    if (!isFinite(num)) {
        document.write('[阶乘] break <br>');
        break;
    }
    num *= i;
}
document.write('[阶乘]' + num + '<br>');

// 1累加到100
var num = 0;
var n = 100;
for (var i = num; i <= n; i++) {
    num += i;
}
document.write('[累加]' + num + '<br>');

// 5的n次幂
var num = 1;
var n = 10000;
var di = 5;
for (var i = 0; i < n; i++) {
    if(!isFinite(num)){
        break;
    }
    num*=di;
}
document.write('[5的n次幂]'+num+'<br>');














