// jQuery
// 选择器（精髓）
// jQuery选择器允许对HTML元素组或者单个元素进行操作
// jQuery选择器基于id，类（class属性），类型（Tag），属性（Attr），属性值等进行查找或者选择HTML元素
// jQuery是基于已有的CSS选择器，除此之外，还自定义了一些选择器
// jQuery中所有的选择器都以$开头
// window.onload = function () {
// 1、基础选择器：
// * 表示匹配所有
// $('*').css('background-color','red');
// 匹配标签
// $('div').css('background-color','red');
// , 表示或
// $('div,p').css('background-color','red');
// # 匹配id
// $('#id01,#id02').css('background-color','red');
// . 匹配class
// $('.class01,.class02').css('background-color','red');

// 1、基础选择器
// * 表示匹配所有
//   匹配标签
// ， 表示或
//

// 2、层次选择器
// 直接或者间接后代选择
// $('div p').css('background-color', 'red');
// 直接后代选择
// $('div>p').css('background-color','red');
// 邻接或者不邻接的后续选择
// 同个父亲，亲兄弟，除掉老大
// $('p~p').css('background-color','red');
// 邻接的后续选择
// $('p+p').css('background-color','red');

// 3、基本过滤选择
//     $('div:first').css('background-color','red');
//     $('div:last').css('background-color','red');
//     $('div:not(.class01)').css('background-color','red');
//     $('div:not(.class01,.class02)').css('background-color','red');
//     $('div:even').css('background-color','red');// 奇数
// $('div:odd').css('background-color','green');// 偶数
// $('div:eq(0)').css('background-color','blue');// eq表示下标等于几
// $('div:gt(2)').css('background-color','blue');// gt表示下标大于几
// $('div:lt(2)').css('background-color','red');// lt表示下标小于几
// $(':header').css('background-color','red');// :表示一类

// 可以拿出动画
// function animateDiv() {
//     $('div:eq(0)').animate({width:'20%'},'slow');
//     $('div:eq(0)').animate({width:'100%'},'slow',animateDiv);
//
// }
// animateDiv();
// $(document).ready(function () {
//     $('#theB').click(function () {
//         $(':animated').css('background','yellow');
//     });
// });

// $('div:nth-child(3n)').css('background-color','red');// 同个父亲，任何child都进行排序 然后 每3个中的最后一个染色， 3n+1 表示每3个中第一个染色 如果不符合过滤器的要求则不染色
// $('div:nth-of-type(3n)').css('background-color','red');//同父亲，只在过滤器中进行排序 后进行染色

// 4、可见性过滤选择器
// display:none 或者 input type=hidden 不可见，而且在流文档中没有占位置
// visibility:hidden 或者 opacity:0 不可见，但是占位置
// $(':hidden').css('display','block');
// $('div:visible').css('background-color','red');

// 5、内容过滤器
// 包含文本字符
// $('div:contains(\'3\')').css('background-color','red');// 包括就染色
// 空的
// $('div:empty').text(123);
// 包含子元素或者文本
// $('div:parent').css('background-color','red');
// 包含子元素
// $('div:has(p)').css('background-color','red');

// 6、属性过滤选择器
// 带有属性的
// $('div[myAttr]').css('background-color','red');
// 带有属性并且符合属性值
// $('div[myAttr=\'a11\']').css('background-color','red');
// 不带有属性，或者带有属性并且不合符属性值
// $('div[myAttr!=\'a11\']').css('background-color','red');
// 带有属性，但是不符合属性值
// $('div').filter('[myAttr]').filter('[myAttr!=\'a11\']').css('background-color','red');
// $('div[myAttr][myAttr!=\'a11\']').css('background-color','red');
// 属性值以xxx开头
// $('div[myAttr^=\'a1\']').css('background-color','red');
// 属性值以xxx结尾
// $('div[myAttr$=\'22\']').css('background-color','red');
// 属性值包括xxx
// $('div[myAttr*=\'1\']').css('background-color','red');

// 7、表单过滤器
// $(':input').css('display','none');

// $(':text').css('display','none');
// $(':password').css('display','none');
// $(':radio').css('display','none');
// $(':checkbox').css('display','none');
// $(':submit').css('display','none');
// $(':reset').css('display','none');
// $(':button').css('display','none');
// $(':image').css('display','none');
// $(':file').css('display','none');
// $(':enabled').css('display','none'); // 典型例子 获取短信验证码
// $(':disabled').css('display','none');


// $(document).ready(function () {
//    $('button:contains(\'f1\')').click(function () {
//        alert($(':selected').val());
//    }) ;
//
//    $('button:contains(\'f2\')').click(function () {
//       alert($(':checked').val());
//    });
// });

// 事件（提升一般）jQuery 将事件兼容性适配解决了
// onload  vs.  ready()
// onload和ready()不可以混用
// ready()三种写法
// 1、
// $(document).ready(function () {
//     console.log('ready1');
// });
// // 2、
// $().ready(function () {
//     console.log('ready2');
// });
// // 3、
$(function () {
    // $('div:first').click(function () {
    //    console.log(1);
    // });
    // $('div:eq(0)').dblclick(function () {
    //    console.log(2);
    // });
    // $('div:first').mouseenter(function () {
    //     console.log(1);
    // });
    // $('div:first').mouseleave(function () {
    //     console.log(2);
    // });
    // $('div:first').hover(function () {
    //     $(this).css('background-color','red');
    // },function () {
    //     $(this).css('background-color','black');
    // });
    // focus 控件
    // $(':button:first').focus(function () {
    //     $(this).css('background-color','red');
    // });
    // $(':button:first').blur(function () {
    //     $(this).css('background-color','black');
    // });

    // bind
    // 1、可以用更加优雅的方式给一个元素绑定多个事件，以Object的方式
    // $(':button:first').bind({
    //     focus:function () {
    //         $(this).css('background-color','red');
    //     },
    //     blur:function () {
    //         $(this).css('background-color','black');
    //     }
    // 2、可以用于传递参数
    // function handler(a) {
    //     console.log(a.data.msg);
    // }
    // $(':button:first').bind('focus', {msg: 'hello'}, handler);

    // key
    // $(':button:first').keydown(function (e) {
    //     var keys = e.which;
    //     console.log('keydown'+keys);
    // });
    //
    // $(':button:first').keyup(function (e) {
    //     var keys = e.which;
    //     console.log('keyup'+keys);
    // });
    // $(':button:first').keypress(function (e) {
    //     var keys = e.which;
    //     console.log('keypress'+keys);
    // });

    // 事件委托 delegate
    // $('div').delegate('p','click',function (e) {
    //     console.log(e.target);
    // });

    // on
    // on -> bind
    // $(':button:first').on({
    //     focus: function () {
    //         $(this).css('background-color', 'red');
    //     },
    //     blur: function () {
    //         $(this).css('background-color', 'black');
    //     }
    // });
    // on -> bind 传递参数
    // function handler(a) {
    //     console.log(a.data.msg);
    // }
    //
    // $(':button:first').on('focus', {msg: 'hello'}, handler);
    // on -> delegate
    // $('div').on('click','p',function (e) {
    //     console.log(e.target);
    // });

    // .live() .die() .size() .toggle() 不用了


});


// };
