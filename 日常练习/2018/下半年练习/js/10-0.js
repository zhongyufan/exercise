// 类数组
// 1、有下标，有length，有push和splice，就是一个类数组
// 2、既可以当数组用，也可以当对象用
// 3、DOM里面的数组都是类数组
// var arr=[1,2,3];
// var obj={
//     '0':1,
//     '1':2,
//     '2':3,
//     'length':3,
//     'push':Array.prototype.push,
//     'splice':Array.prototype.splice
// };
// arr.push(4);
// obj.push(4);

// var obj={
//     '2':'a',
//     '3':'b',
//     'length':2,
//     'push':Array.prototype.push,
//     'splice':Array.prototype.splice
// };
// obj.push('c'); // push只会往length后面压，不管有没有东西
// obj.push('d');
// console.log(obj);

// function fa(x) {
//     var aaa=0;
//     function fb(x) {
//         if(x>0){
//             return fb(x-1);
//         }else {
//             aaa++;
//             return aaa;
//         }
//     }
//     if(x>0){
//         return fa(x-1);
//     }else{
//         return fb;
//     }
// }
// var fb1=fa(0);
// console.log(fb1());//1
//
// var fb2=fa(1);
// console.log(fb2());//1
// console.log(fb1());//2
// console.log(fb1());//3
// console.log(fb1());//4
// console.log(fb2());//2 哇这题目真的恶心 x都没给 审题审题

// String对象
// 构造函数
// 成员函数
// // String()和string
// var str = String(12345);
// console.log(typeof (str));
// str.a = 5;
// // // 为什么不会报错的原因？
// // // var tmp =new String(str);
// // // tmp.a=5;
// // // tmp 摧毁了
// console.log(str.a);
// // // var tmp1 =new String(str);
// // // 访问tmp1.a
// // // tmp1 摧毁了

// var objString = new String(12345);
// console.log(objString);
// objString.a = 5;
// console.log(objString.a);

// String 可以用数组的方式访问
// for(var i in objString){
//     console.log(objString[i]);
// }
// // 结果与上面一致，但是使用了六次包装类  不要用字符串的方式调用数组
// for(var i in str){
//     console.log(str[i]);
// }
// String()的函数
// indexOf() 查找第一个子串的位置，从0开始
// var sToken = new String('hello world!');
// var l = sToken.indexOf('o');
// console.log(l);
// // charAt()，返回当前位置的字符
// console.log(sToken.charAt(l));
// // substring()，取一个子串 没有用小驼峰命名规则，历史遗留问题
// console.log(sToken.substring(0, l + 1));
// // replace()替换
// console.log(sToken.replace('o', 'a'));// hella world! why? 涉及正则（严格遵守规则的表达式）
// console.log(sToken.replace(/o/g, 'a'));// hella warld!

// // 特殊字符
// str = '--\'--\"--\\--\t--';
// console.log(str);
// // 回车
// str='a\r\n'+'b\r\n'+'c';
// str1='a\r\nb\r\nc';
// console.log(str);
// console.log(str1);
// //  \r 0x0d CR carrage return 回车
// //  \n 0x0a LF line feed      换行
// // 1、文件都是一行的，\r\n 字符表示好换行，编辑器为了照顾人类的感受
// // 2、为什么有CR，LF的区别 打字机遗留的原因 回车代表回到行首，换行代表下一行
// // 3、window和Unix、Linux里面表示回车的字符不一样
// //   window：     \r\n
// //   Unix\Linux:  \n
// //   Mac:         \r

// str='\u6211';
// console.log(str);

// toUpperCase();
// str = 'aaaa';
// console.log(str.toUpperCase());// AAAA
// // toLowerCase
// str = 'BBBB';
// console.log(str.toLowerCase());// bbbb
//
// // trim 去除空格  \t table
// str = '  aaaa bbbb\t';
// console.log('-'+str+'-');
// console.log('-'+str.trimLeft( )+'-');
// console.log('-'+str.trimRight()+'-');
// console.log('-'+str.trim()+'-');


// 编码与解码
// 编码：用户输入字符。计算机记录对应二进制的值
// 解码：计算机根据记录的二进制值，显示成人类可以认识的字符图像


// 字符集（Charset）
// 字符编码(Character Encoding)；字符集的编解码规则
// 常用字符集：
// ASCII字符集（科学家的玩具 基础）American Standard Code for Information Interchange 美国标准信息交换码 128个 缺点：太小
// GB字符集族：(GB 国标)
//      GB2312(收录6763汉682字符、太小、字节长度变长)、GBK(兼容GB2312、兼容Big5、兼容ASCII)、GB18030(兼容GBK、兼容GB2312、兼容Big5、兼容ASCII 2\4个字节 GB18030 占用了4个字节)
// Unicode字符集族：(世界上任何字符都用2\4字节表示)
//      UTF-8(ASCII 1字节 其他用2～6字节 不兼容GB系列)、UTF-16（兼容USC-2，同时包含了部分UCS-4，用2\4个字节表示）、UTF-32
// UCS字符集族：（不常用）
//      UCS-2（固定两个字节表示所有字符。不兼容ASCII字符，ASCII字符在UCS-2中使用两个字节表示）、UCS-4（固定四个字节表示所有字符。不兼容ASCII字符，ASCII字符在UCS-2中使用四个字节表示，也不兼容UCS-2、UTF-16,但是兼容UTF-32）
// 乱码-浏览器通常遵循UCS-2,支持部分UTF-16属性 但是网页通常使用UTF-8，少数情况用GBK，文件的字符集和处理程序的字符集不相符时会乱码

// HTTP协议
// HTTP Request&Response
// Resp:Content-Type(服务器返回的字符集)
// Rqst:Accept-Charset（请求服务器的字符集）
// meta:HTML的字符集
// Content-Type优先级高于meta
// 解决乱码：
// （最优）文本文件使用统一字符集，正确填写meta，服务器Content-Type不设定字符集
// （次优）正确填写meta，服务器Content-Type不设定字符集

// 练习一，编写一个方法，求一个字符串的长度
//          GB2312 字母数字一个字节，中文两个字节
// function getByets(str) {
//     var num=0;
//     for(var i=0;i<str.length;i++){
//         if(str.charCodeAt(i)>127){
//             num+=2;
//         }else{
//             num++;
//         }
//     }
//     return num;
// }
// console.log(getByets('abc'));
// console.log(getByets('今天天气真好'));

// decode GBK转UTF-8
// var arrUint8 = new Uint8Array([206, 210]);
// var decoder = new TextDecoder('gbk');
// document.write(decoder.decode(arrUint8));
//
// arrUint8 = new Uint8Array([230, 136, 145]);
// decoder = new TextDecoder('utf-8');
// document.write(decoder.decode(arrUint8));
//
// encode 将文字转回编码
// var str='我';
// var encoder=new TextEncoder('utf-8');
// document.write(encoder.encode(str));

// JSON（这老哥取代了AJAX）
// JSON指的是JavaScript对象表示法（JavaScript Object Notation）
// JSON对象
// {}中书写（Object 串行化（变成字符串传输，基础）、持久化（放入数据库））
// 名称/值对，"key"："value"
// JSON数组
// []中书写，对象间，用逗号分隔


// // JSON 字符串
// var strJSON = '{"name":"Albad",\n' + '"age":25}';
// console.log(strJSON);
//
// // string 变成 JSON
// // 1、eval() 你自己产生一个string 当作JS脚本，交由JS引擎运行
// var strJSON2= '('+strJSON+')';
// console.log(strJSON2);
// var obj1=eval(strJSON2);
//
// // 2、JSON.parse()
// var obj2= JSON.parse(strJSON);
//
// // 3、$().parseJSON()
// // var obj3=jQuery.parseJSON(strJSON); //jQ库有问题
//
// // JSON 变成 string
// // 1、JSON.stringify()
// var strJSON3=JSON.stringify(obj1);
// console.log(strJSON3);
//
// //2、jQuery.toJSON()
// var strJSON4=jQuery.toJSON(obj1);
// console.log(strJSON4);

// 练习1 把一张九九乘法表放入JSON，然后解析
// var oNNTable={};
// for(var i=1;i<=9;i++){
//     var line=[];
//     for(var j=1;j<=i;j++){
//         var str=i+'*'+j+'='+(i*j);
//         line.push(str);
//     }
//     alert(line+i);
//     oNNTable[i-1]=(line);
// }
// var sNNTable=JSON.stringify(oNNTable);
//
// var jsonTable=JSON.parse(sNNTable);
// for(var x in jsonTable){
//     var line=jsonTable[x];
//     for(var y in line){
//         var text=line[y];
//         console.log(text);
//     }
// }

// 练习2 把一张学生成绩单放入JSON，然后解析（学生信息包括name，birthday，gender，class，{course，scale}）

// var oStdTable = {};
// oStdTable.students = [];
// var student = {
//     'name': '小明',
//     'birthday': '1988-03-21',
//     'class': '一班',
//     'scale': [{
//         'course': '语文',
//         'scale': 92
//     }, {
//         'course': '数学',
//         'scale': 97
//     }]
// };
// oStdTable.students.push(student);
// var student = {
//     'name': '小绿',
//     'birthday': '1998-04-21',
//     'class': '一班',
//     'scale': [{
//         'course': '语文',
//         'scale': 90
//     }, {
//         'course': '数学',
//         'scale': 91
//     }]
// };
// oStdTable.students.push(student);
// var student = {
//     'name': '小红',
//     'birthday': '1958-03-22',
//     'class': '二班',
//     'scale': [{
//         'course': '语文',
//         'scale': 97
//     }, {
//         'course': '数学',
//         'scale': 99
//     }]
// };
// oStdTable.students.push(student);
//
// var sStudTable=JSON.stringify(oStdTable);
// console.log(sStudTable);
//
// var jsonTable=JSON.parse(sStudTable);
// for(var x in jsonTable.students){
//     console.log(jsonTable.students[x].name);
//     console.log(jsonTable.students[x].birthday);
//     console.log(jsonTable.students[x].class);
//
//     var scales=jsonTable.students[x].scale;
//     for(var y in scales){
//         console.log(' '+scales[y].course+':'+scales[y].scale);
//     }
// }

// JSON（一种数据结构） 可以将 JavaScript 对象中表示的一组数据转换为字符串，然后就可以在网络或者程序之间轻松地传递这个字符串，并在需要的时候将它还原为各编程语言所支持的数据格式
