// jQuery DOM元素的添加和删除

// 元素的添加和删除
// append() 给自己认一个干小儿子
// prepend() 给自己认一个干大儿子
// after()  给自己找了一个弟弟
// before() 给自己找了一个哥哥

// 创建元素 三种方式
// 1、HTML (效能最高)
var txt1 = '<p>p1</p>';
// 2、jQuery
var txt2 = $('<p></p>').text('p2');
// 3、JS原生
var txt3 = document.createElement('p');
txt3.innerHTML = 'p3';

var txt4 = '<p>p4</p>';

$('div:eq(1)').after(txt1);
$('div:eq(1)').before(txt2);
$('div:eq(1)').append(txt3);
$('div:eq(1)').prepend(txt4);

// remove() 自杀
// $('p:contains(p1)').remove();
// $('p').remove(':contains(p1)');

// empty() 父亲大义灭亲
// $('div:eq(1)').empty();

// CSS操作
// // addClass
// $('p:contains(p1)').addClass('cls1');
// // removeClass
// $('p:contains(p1)').removeClass('cls1');
//
// $('button').click(function () {
//     $('p:contains(p2)').toggleClass('cls1'); // 一下有一下没有
// });

// CSS 操作DOM
// 操作一个
// $('p:contains(p1)').css('background-color','green');

// 操作多个
// 1、 推荐
// $('p:contains(p2)').css('background-color','pink').css('color','white');
// 2、
// $('p:contains(p2)').css({
// //     'background-color':'pink',
// //     'color':'white'
// // });

