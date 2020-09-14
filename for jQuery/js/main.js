// 第一课，瀑布流
// $(window).load(function () {
// //     AJAX-> records
//     var records = [{
//         'src': '1.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '2.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '3.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '4.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '5.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '6.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '7.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '8.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '9.jpg',
//         'title': 'This is a title.'
//     }, {
//         'src': '10.jpg',
//         'title': 'This is a title.'
//     }];
//     // 初始化
//     // 1 DOM已经有.box元素
// // 2 将.box放到对应的位置
//     PBL('wrap', 'box');
// // 3 页面滚动到底部添加新的.box元素
// // 4 将新增的.box元素放在对应的位置
//     $(document).scroll(function () {
//         if (getCheck('wrap', 'box'))
//             var $wrap = $('#wrap');
//         jQuery.each(records, function (i, record) {
//             var str = '<div class="box">' +
//                 '        <div class="info">' +
//                 '            <div class="pic"><img src="img/' + record.src + '" alt=""></div>' +
//                 '            <div class="title"><a href="#">' + record.title + '</a></div>' +
//                 '        </div>' +
//                 '    </div>';
//             $wrap.append(str);
//         });
//         PBL('wrap', 'box');
//     });
// });
//
//
// function PBL(wrap, box) {
//     // get #wrap and box
//     var $wrap = $('#' + wrap);
//     var $boxes = $wrap.find('.' + box);
//     // get screen show 列数
//     var boxWidth = $boxes.eq(0).outerWidth(false);
//     var screenWidth = $(window).width();
//
//     var columns = Math.floor(screenWidth / boxWidth);
//     if (columns > 3) {
//         columns = 3;
//     }
//     $wrap.width(boxWidth * columns);
//     // 循环得到的所有 box ，按照瀑布流排列 数组记录每一列的高度，每次往最短的列增box 如果没有图片，只是记录高度]
//     var everyH = [];
//     var len = $boxes.length
//     for (var i = 0; i < len; i++) {
//         if (i < columns) {
//             everyH[i] = $boxes.eq(i).outerHeight(false);
//         } else {
//             var minH = Math.min.apply(null, everyH);
//             var minIndex = getIndex(minH, everyH);
//             placeBox($boxes.eq(i), minH, Math.floor($boxes.eq(minIndex).position().left), i);
//             everyH[minIndex] += $boxes.eq(i).outerHeight(false);
//         }
//     }
// }
//
// function getIndex(minH, everyH) {
//     for (index in everyH) {
//         if (everyH[index] == minH) {
//             return index;
//         }
//     }
// }
//
// function getCheck(wrap, box) {
//     var documentHeight = $(window).height();
//     var scrollHeight = $(window).scrollTop();
//     return documentHeight + scrollHeight >= getLastH(wrap, box) ? true : false;
// }
//
// function getLastH(wrap, box) {
//     var $wrap = $('#' + wrap);
//     var $boxes = $wrap.find('.' + box);
//
//     return $boxes.last().position().top + $boxes.last().outerHeight(false);
// }
//
// var getStartNum = 0; // 请求加载数据的开始位置
// function placeBox($box, top, left, index) {
//     if (getStartNum >= index) return;
//     $box.css({
//         'position': 'absolute',
//         'top': top,
//         'left': left,
//         'opacity': '0'
//     })
//     $box.stop().animate({
//         'opacity': '1'
//     }, 999);
//     getStartNum = index;// 更新请求数据的条数位置
// }


// 第二课，jQuery API
// DOM
// javascript写法
// ------------------------------------------------------
// var btn = document.getElementById('button1');
// var btns =document.getElementsByName('button1');
// var btn =btns[0];
// var btn =document.querySelector('#button1');
// if (btn != null) {
//     btn.addEventListener('click',function (e) {
//         e = e || window.event;
//         var target = e.target || e.srcElement;
//         alert(target.value);
//     })
//     btn.onclick = function (e) {
//         if (e != null) {
//             alert(e.target);
//         }
//         e = e || window.event;
//         var target = e.target || e.srcElement;
//         alert(target.value);
//     }
// }
// jQuery写法
// ------------------------------------------------------
// 1、jQuery('XXX'),or $('XXX') 其实是工厂函数，jQuery类型的原型对象
// --返回的是jQuery对象==本质是==>是封装了DOM对象的类数组
// --使用jQuery或者$工厂函数查询id为button1的按钮，封装在jQuery对象里，并可以查看jQuery对象的结构。
// var $btn = $('#button1');
// console.log($btn);
// 2、使用jQuery的简化版API，为$btn绑定单击事件：把事件相关的兼容性问题全部包装在jQuery的极简化版API中
// $btn.click(function (e) {
//     alert(e);
//     if (e != null) {
//         alert(e.target);
//     }
//     var $btn = $(e.target);
//     console.log($btn);
// })
// $btn.on('click',function (e) {
//     var $btn=$(this);
//     console.log($btn);
// })
// var $btn = $('#button1').on('click',function (e) { //链式操作
//     var $btn=$(this);
//     console.log($btn);
// });
// 对象
// 如何使用jQuery工厂函数构造jQuery对象。
//         jQuery对象的特点：
//             1、封装了DOM对象
//             2、使用极简化的API
//             3、类数组对象
// ------------------------------------------------------
// var $btn1 = jQuery('#button1');
// var $btn2 = $('#button1');
// var btn3 = $btn2[0];
// var $btn3 = $(btn3);
// 原型
// ------------------------------------------------------
// function f() {
// }
// var v = new f();
// ------------------------------------------------------
// new 的时候只能通过__proto__传入值。
// 想要让方法、属性挂到主干上，就要通过__proto__
// 底层通过使用__proto__ 上层才能访问到
// 自我理解
// 每一个函数都有原型，以及一个__proto__, 同时 new 的时候可以得到函数prototype下的属性，方法。
// init()是一个函数，因此有prototype和__proto__，如果这个时候加个 new 的话，那么通过__proto__，可以将init()的所有方法数值返回到jQuery顶层上。
// 也就是说jQuery.__proto__ = jQuery.prototype.init.__proto__
//
// __proto__传给上层__proto__
// 底层添加 上层访问 可以
// 上层添加 底层访问 可以
// prototype传prototype
// 底层添加 上层访问 可以
// 上层添加 底层访问 可以
// jQuery中：
// 底层__proto__添加 上层prototype访问 不可以
// 底层prototype添加 上层__proto__访问 不可以
// prototype添加 __proto__访问 可以
// __proto__添加 prototype访问 可以
//
// jQuery的源码
// jQuery的初始化
// 1、定义了一个立即执行函数（减少命名污染）function(window, noGlobal)
// 2、在立即执行函数内部，初始化对象：jQuery，是一个函数
// 3、jQuery挂载到window对象上，同时占用jQuery和$
// 4、jQuery返回函数jQuery.prototype.init的执行结果，init是Sizzle的调用者。
// 5、init()返回类数组
// 6、jQuery.prototype.init.prototype = jQuery.prototype
// ------------------------------------------------------
// var f1 = function (global, factory) {
//     factory(global);
// }
// var f2 = function (window, noGlobal) {
//     var jQuery = function (selector, context) {
//         return new jQuery.fn.init(selector, context);
//     };
//     jQuery.fn = jQuery.prototype = {};
//     var init = jQuery.fn.init = function (selector, context, root) {
//         if (selector.nodeType) {
//             this.context = this[0] = selector;
//             this.length = 1;
//             return this;
//         }
//         return this;
//     }
//     init.prototype = jQuery.fn;
//     if (!noGlobal) {
//         window.jQuery = window.$ = jQuery;
//     }
//     return jQuery;
// }
// f1(typeof window !== 'undefined' ? window : this, f2)
// 避免全局变量的污染
// ------------------------------------------------------
// (function (global, factory) {
//     factory(global);
// })(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
//     var jQuery = function (selector, context) { //L71
//         return new jQuery.fn.init(selector, context);
//     };
//     jQuery.fn = jQuery.prototype = {
//         length:0, //L192
//         push:function () {},//L171
//         splice:function () {}//L172
//     };
//     var init = jQuery.fn.init = function (selector, context, root) {
//         if (selector.nodeType) {//L2958
//             this.context = this[0] = selector;
//             this.length = 1;
//             return this;
//         }
//         return this;
//     }
//     init.prototype = jQuery.fn;//L2982
//     if (!noGlobal) {
//         window.jQuery = window.$ = jQuery;
//     }
//     return jQuery;// L11007
// })


// 第二课，选择器上
// ------------------------------------------------------
// jQuery 构造函数 即 工厂函数 即jQuery 和 $
// jQuery 的原型函数 即 jQuery.fn  init.prototype = jQuery.fn = jQuery.prototype
// jQuery 封装DOM  jQuery不等于 DOM类型
// jQuery 是封装了DOM Element的类数组
// jQuery函数的三个特点：类数组的自动遍历，读vs写使用同名函数，函数的链式调用
// ------------------------------------------------------
// 基本选择器
// #id
// $('#div1').css('background-color', '#0F0');
// .class
// $('.cls1').css('background-color','#0f0');
// tag
// $('div').css('background-color','#0f0');
// 逗号分割并列多个选择器，表示并集，即满足选择器1 or 满足选择器2
// $('div,input').css('background-color','#0f0');
// 无分隔的多个选择器，表示交集，即满足选择器1 and 选择器2 (最好是不同类型)
// $('div.cls1').css('background-color','#0f0');
// DOM Elment
// $('#div1').click(function () {
//     var $this =$(this);
//     $this.css('background-color','#0f0');
// });
// ------------------------------------------------------
// 类数组的自动遍历
// 对jQuery对象调用函数，等价于对类数组中的所有元素进行遍历操作，相当于循环。
// $('.cls2').css('background-color','#0f0');
// ------------------------------------------------------
// 读vs写使用同名的函数 不带参数即读，带参数即写
// jQuery 里面只有函数 ，不要用DOM
// $('#div1').css('background-color','#0F0');
// console.log($('#div1').css('background-color'));
// ------------------------------------------------------
// DOM里面什么能改？
// 内容，属性，样式
// 内容：innerHTML, textContent, value
// 属性：标准属性，状态属性（只有一个属性名没有值）（disabled, checked, selected）
// 样式：CSS
// innerHTMl ==> html()
// $('#div1').html('<div>inner Div</div>');
// console.log($('#div1').html());
// textContent ==> text()
// $('#div1').text('<div>inner Div</div>');
// console.log($('#div1').text());
// value ==> val()
// $('#btn').val('others!');
// console.log($('#btn').val());
// ------------------------------------------------------
// getAttribute, setAttribute ==> attr()
// console.log($('#btn').attr('type'));
// $('#btn').attr('type','text');
// ------------------------------------------------------
// checked, disabled, selected ==> prop()
// console.log($('#cnb').prop('checked'));
// $('#cnb').prop('checked', false);
// ------------------------------------------------------
// 链式调用（仅限于css，且要当前的this是一样的）
// 没问题，但是太蠢
// var $div1=$('#div1')；
// $div1.css('background-color','#0f0');
// $div1.css('border','2px solid red');
// 简写一
// var $div1=$('#div1')
//     .css('background-color','#0f0')
//     .css('border','2px solid black');
// 简写二
// var $div1=$('#div1').css({
//     'background-color':'#0f0',
//     'border':'2px solid black'
// });
// ------------------------------------------------------
// 层级选择器
// 空格 > + ~
// 空格分隔：存在某个祖先的，后代节点（处理的时候是从底往上找）
// $('#div1 .cls1').css('background-color','#0f0');
// > 儿子节点
// 通常用于在重复的结构中，提取相对应位置的元素
// $('#div1>div>.cls1').css('background-color','#0f0');
// + 兄弟节点
// 通常用于在重复结构中，提取对应位置的元素
// $('.cls1+div').css('background-color','#0f0');
// ~ 存在某个 同辈节点的所有兄弟 (只有jQuery支持)
// 通常用于表头和后续同级单元的处理。
// $('#div1~div').css('background-color','#0f0');
// ------------------------------------------------------
// css支持的选择器 jQuery都支持， jQuery支持的，css不一定支持
// ------------------------------------------------------
// 伪类
// 第一个，最后一个
// :first 所选出的一组元素中的第一个
// $('div:first').css('background-color','#0f0');
// :first-child 其父亲的第一个孩子元素都会被选出来，才不管你是哪个父亲
// $('div:first-child').css('background-color','#0f0');
// :last 所选出的一组元素中的最后一个
// $('div:last').css('background-color','#0f0');
// 非
// :not
// $('div:not(.cls1)').css('background-color','#0f0');
// $('div.cls1:not(.cls2)').css('background-color','#0f0');
// ------------------------------------------------------
// 等于，小于，大于
// :eq(0~)
// :lt(0~)
// :gt(0~)
// $('div:eq(3)').css('background-color','#0f0');
// $('div:lt(3)').css('background-color','#ff0');
// $('div:gt(3)').css('background-color','#fff');
// 连续的过滤操作
// $('div:gt(2):lt(2)').css('background-color','#fff');
// 偶数 奇数
// :even :odd
// $('div:even').css('background-color','#fff');
// $('div:odd').css('background-color','#ff0');
// 四不同色
// $('div:even:even').css('background-color','#fff');
// $('div:odd:even').css('background-color','#ff0');
// $('div:even:odd').css('background-color','#000');
// $('div:odd:odd').css('background-color','#f0f');
// ------------------------------------------------------
// :header
// $(':header').css('color','red');


// 第二课，选择器下
// 属性选择器
// ------------------------------------------------------
// 练习
// $(function () {
//     // 1. 第一个li的左上和左下设定为圆角
//     $('#controlGroup>li:first').css('border-radius','5px 0 0 5px');
//     // 2. 最后一个li的右上和右下设定为圆角
//     $('#controlGroup>li:last').css('border-radius','0 5px 5px 0');
//     // 3，除最后一个以外的li的右边框去掉，宽度设为0
//     // $('#controlGroup>li:not(:last)').css('border-right','0');
//     // $('#controlGroup>li:not(:last-child)').css('border-right','0');
//     $('#controlGroup>li:lt(3)').css('border-right','0');
// });
// ------------------------------------------------------
// jQuery 支持 [attribute!=value] css 不支持
// $(function () {
// 选择a属性的div元素，无论何值
//  $('div[a]').css('background-color','#0FF');
// ------------------------------------------------------
// 可用，不推荐，性能慢
// $('div[id]').css('background-color','#0FF');
// $('div[class]').css('background-color','#0FF');
// ------------------------------------------------------
// 拥有某个属性的元素，并且属性值等于vaule
// $('div[a=v1]').css('background-color','#0FF');
// $('div[a=v2]').css('background-color','#0FF');
// ------------------------------------------------------
// 拥有某个属性的元素，但属性值不等于value，或者不含有这个属性
// $('div[a!=v1]').css('background-color','#0FF');
// 拥有某个属性的元素，但属性值不等于value
// $('div[a][a!=v1]').css('background-color','#0FF');
// ------------------------------------------------------
// 拥有某个属性的元素，属性值以value开头
// $('div[a^=v]').css('background-color','#0FF');
// ------------------------------------------------------
// 拥有某个属性的元素，属性值以value结尾
// $('div[a$=1]').css('background-color','#0FF');
// ------------------------------------------------------
// 拥有某个属性的元素，属性值包含value
// $('div[a*=1]').css('background-color','#0FF');
// ------------------------------------------------------
// 需要元素同时满足多个属性选择器，并列中间不能有空格
// ------------------------------------------------------
// 练习一，有a属性，但是没有b属性
// $('div[a]:not([b])').css('background-color','#0FF');
// 练习二，有a属性，但是属性值不等于v1
// $('div[a][a!=v1]').css('background-color','#0FF');
// $('div[a]:not([a=v1])').css('background-color','#0FF');
// 练习三，有a属性，但是不能以1结尾
// $('div[a]:not([a$=1])').css('background-color','#0FF');
// 练习四，a，b 有且只有其中一个属性
// $('div[a]:not([b]),div[b]:not([a])').css('background-color','#0FF');
// $('div:not([a][b])').css('background-color','#0FF');
// });
// ------------------------------------------------------
// $(function () {
// 元素的伪类
// 父子关系
// :first-child（所有的第一个）
// $('ul>li:first-child').css('background-color','#0FF');
// :last-child
// $('ul>li:last-child').css('background-color','#0FF');
// :first-of-type (所有子元素的第一个)
// $('ul>div:first-of-type').css('background-color','#0FF');
// :last-of-type
// ------------------------------------------------------
// 区别记忆 :first(选择出来的所有的第一个)，:first-child（当前的树的第一个有就有没有就没有），:first-of-type（无论如何都选出第一个来）
// ------------------------------------------------------
// :nth-child 从1开始数 odd,even,an+b都可以用
// $('ul>div:nth-child(2)').css('background-color','#0FF');
// :nth-last-child
// $('ul>div:nth-last-child(2)').css('background-color','#0FF');
// :nth-type
// :nth-last-type
// :only-child（相当于独生子女）
// // $('ul>*:only-child').css('background-color','#0FF');
// :only-of-type（每家每户的独生子女）
// $('ul>*:only-of-type').css('background-color','#0FF');
// })
// ------------------------------------------------------
// $(function () {
// 内容伪类
// 是否包含文本和元素。
// :empty css唯一支持的 (不含有子元素或者文字的元素)
// $('ul>div:empty').html('HELLO WORLD!');
// :parent（含有自元素或者含有文字的元素）
// $('ul>div:parent').html('HELLO WORLD!');
// :contains(text)（含有给定文本的元素）
// $('ul>div:contains(a)').html('HELLO WORLD!');
// ------------------------------------------------------
// :has(selector)（含有选择器所匹配的元素）
// $('ul:has(div)').html('HELLO WORLD!');
// ------------------------------------------------------
// 练习一，找到所有不含li的ul
// $('ul:not(:has(li))').css('background-color','#0FF');
// 练习二，找到所有含有div但是不含li的ul
// $('ul:has(div):not(:has(li))').css('background-color','#0FF');
// });
// ------------------------------------------------------
// 用于去掉点击# 刷新
// e.preventDefault();
// $(function () {
//     $('#control>div[data-trigger=open]').click(function (e) {
//         var $li =$('#control ul li');
//         if (parseInt($li.css('height')) > 0) {
//             $li.css({
//                 'height': 0,
//                 'opacity': 0
//             });
//         } else {
//             $li.css({
//                 'height': 40,
//                 'opacity': 1
//             });
//         }
//     });
// });
// $(function () {
//     var $li = $('#control ul li');
//     $('#control').mouseover(function (e) {
//         $li.css({
//             'height': 40,
//             'opacity': 1
//         });
//     }).mouseout(function (e) {
//         $li.css({
//             'height': 0,
//             'opacity': 0
//         });
//     });
// });
// ------------------------------------------------------
// $(function () {
// DOM筛选API 不是选择器   同级
// .parent() 获得父亲节点 ==> parentNode
//     $('#div2').parent().css('background-color','#f1c40f');
// ------------------------------------------------------
// .children() 获得所有子节点 ==> children
// .first() .last() .eq(i|-i)
//     $('#containerDiv').children().first().css('background-color','#f1c40f');
//     $('#containerDiv').children().last().css('background-color','#f1c40f');
//     $('#containerDiv').children().eq(2).css('background-color','#f1c40f');
//     $('#containerDiv').children().eq(-2).css('background-color','#f1c40f');
// ------------------------------------------------------
// .next() ==> .nextElementSibling
//     $('#div2').next().css('background-color','#f1c40f');
// .nextall()
//     $('#div2').nextAll().css('background-color','#f1c40f');
// .prev() 之前
//     $('#div2').prev().css('background-color','#f1c40f')
// .prevall()
//     $('#div2').prevAll().css('background-color','#f1c40f');
// .siblings()
//     $('#div2').siblings().css('background-color','#f1c40f');
//     .children(selector)  子元素
//     .find(selector)      所有后代元素
// $('#containerDiv').children('.cls1').css('background-color','#f1c40f');
// $('#containerDiv').find('.cls1').css('background-color','#f1c40f');
// });
// ------------------------------------------------------
// $(function () {
// 表单选择器
// 大部分直接使用即可
//     console.log($(':input'));
//     :text 选择的是[type=text]
//     ......
//     :button指 input button 和button
//     :hidden 选择的是input[type=hidden] 以及所有不可见的元素（看不见vs不可见）
//     不可见：压根就没在 layout\Rendering渲染tree上（虽然在DOM tree）
//          type=hidden displya:none head,meta,title,script,style...
//     看不见：透明的，但是占了layout\Rendering渲染tree的位置
//          visibility:hidden
//          opacity:0
//     console.log($(':hidden'));
// :visible 于hidden 相反
// console.log($(':visible'));
// :enabled :disabled
// :checked :selected
// 练习
//     var $others=$(':input:not(:checkbox)');
//     $('#yes').click(function () {
//         $others.prop('disabled',!$(this).prop('checked'));
//     })
// });


// 第三课，Sizzle
// 什么是Sizzle 即是css选择器
// 主流程 就是从入口进入，然后开始解析选择器的名字（打散），基于上一步进行分析并且编译，编译的内容是匹配函数，把散碎的匹配函数组成一个大的匹配函数，然后再运行，最后能够完成选择器的功能
// 总体结构和API
// 选择器表达式
// 设计思路
// jQuery入口
// Sizzle入口
// 解析Selector
// 编译函数
// 参数中使用了selector，expr 的都是入口 使用了Sizzle
// jQuery(selector[,context])
// jQuery.fn.find(expr) 注意，不是jQuery.find
// jQuery.fn.filter(expr) 注意，不是jQuery.filter


// 第四课，选择器调优
// 1、尽量使用css支持的选择器，少使用css不支持仅jQuery支持的选择器
// 执行效率不是一个数量级的
// $('input[type=text]') css支持
// $(':text') css不支持
// 2、尽可能使用#id 尽可能从#id使用find以及filter
// $('#div1').find('ul>li') 更快
// $('#div1>ul>li')
// 3、尽可能避免使用*
// $('li.cls1,div.cls1') or $('li, div').filter('.cls1') 比 $('*.cls1')快
// 4、尽量可能不要直接使用Class选择器，使用Tag+Class选择器的方式
// $('div li.cls1) 比 $('div .cls1')快
// 5、层级关系中，能使用>时尽量不要使用空格，能使用+尽量不使用~
// $('div>ul') 比 $('div ul')快
// 6、尽可能的缓存jQuery对象，而不是反复调用Sizzle ，也就是弄个变量存着
// ------------------------------------------------------
// DOM操作
// 操作css 直接操作css是比较笨重的方式，更好的方式是操作class
// $(select).css();
// 操作class 添加Class、知道是否某个Class已经存在、删除Class
// $(select).addClass();
// $(select).removeClass();
// $(select).hasClass();
// $(select).toggleClass();
// $(function () {
// 写法一
// var $btn= $('body>input[type=button]');
// $btn.click(function () {
//     if($btn.hasClass('down')){
//         $btn.removeClass('down');
//     }else{
//         $btn.addClass('down');
//     }
// })
// 写法二
// var $btn= $('body>input[type=button]');
// $btn.click(function () {
//     $btn.toggleClass('down');
// });
// });
// ------------------------------------------------------
// $(function () {
//     var $al=$('html>body>div');
//     $('#btn').click(function () {
//       $al.toggleClass('in');
//    });
//     var $a2=$('html>body>div>span');
//     $a2.click(function () {
//         $('html>body>div').toggleClass('in');
//     })
//
// });
// ------------------------------------------------------
// $(function () {
//     //给a标签绑定单击事件
//     $('a[data-toggle=tab]').click(function (e) {
//         var $li = $(e.target).parent();
//         if(!$li.hasClass('active')){
//             $li.addClass('active').siblings('.active').removeClass('active');
//         }
//     });
// });
// ------------------------------------------------------
// $(function (e) {
// index 的第一种用法，当前jQuery对象在其同辈的位置
// console.log($('#l1').index());
// 第二种用法，参数jQuery对象，或者参数DOM对象在前面jQuery对象中集合中的位置
// console.log($('ul>li').index($('#l1')));
// console.log($('ul>li').index(document.getElementById('l1')));
// 第三种用法，参数是选择器字符串，返回前面jQuery对象在后面选择器选出集合中的位置。
// console.log($('#l1').index('ul>li'));
// 这是jQuery一个很明显的特点，一句话就可以使用三种方法。
//     const LIWIDTH = 80;
//     var $box=$('.box');
//     $('.tabs>li>a').click(function (e) {
//         var i = $(e.target).parent().index();
//         //          a           li      index
//        $box.css('left', LIWIDTH * i);
//     });
// 获得所有的a标签
// 根据a标签，获得对应的父亲li标签
// 要知道父亲li标签所在li标签中的位置
// 因此使用index函数
// });
// ------------------------------------------------------
// 添加、删除DOM元素
// 创建元素
// var $elem=$('<p>123</p>');
// // 把新建的元素添加到DOM Tree
// $('parent').append($elem);// 之前
// $('parent').prepend($elem);// 之后
// $('parent').before($elem); // 中间之前
// $('parent').after($elem); // 中间之后
// // 删除元素
// $('parent').remove();
// ------------------------------------------------------
// $(function (e) {
//     // 1、找到按钮，绑定单击事件
//     // 2、创建一个新的div，颜色随机，灰色，然后append
//     var $div = $('.container');
//     $('#btn').click(function (e) {
//         // jQuery 创建新元素，多行字符串时
//         // 除了在最后一个以外，每行结尾都加\
//         // var $block = $('<div class="block">\n' +
//         //     '        <span class="close">x</span>\n' +
//         //     '    </div>')
//         // es6中，支持使用``括起来
//         var $block = $(`<div class="block">
//                  <span class="close">x</span>
//               </div>`);
//         var r = parseInt(Math.random() * 256);
//         var g = parseInt(Math.random() * 256);
//         var b = parseInt(Math.random() * 256);
//
//         $block.css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
//         // 不推荐 每个都绑定事件
//         // $block.find('.close').click(function (e) {
//         //     $(e.target).parent().remove();
//         // });
//
//         $div.prepend($block);
//     });
//     // 推荐使用 冒泡  is(selector\jQuery对象\DOM对象)函数
//     $div.click(function (e) {
//        var $close =$(e.target);
//        if($close.is('.close')){
//            $close.parent().remove();
//        }
//        e.stopPropagation(); // 停止冒泡
//     });
// });
// ------------------------------------------------------
// 替换，克隆DOM元素
// 替换：
// jQuery对象.replaceWith(jQuery对象)
// jQuery对象.replaceWith(DOM对象)
// 克隆：
// 浅克隆：jQuery对象.clone()，只克隆样式和属性，不克隆行为
// 深克隆：jQuery对象.clone(true)，克隆样式、属性、行为
// ------------------------------------------------------
// $(function (e) {
//     $('#list').click(function (e) {
//         var $div = $(e.target);
//         if($div.is('.block')){
//             // $('#chosen>.block').replaceWith($div);// 这个是剪切粘贴
//             // $('#chosen>.block').replaceWith($div.clone()); //这个是复制粘贴
//             $('#chosen>.block').replaceWith($div.clone(true)); //这个深克隆
//         }
//     });
//     $('#list>.block').click(function (e) {
//         console.log(e.target);
//     });
// });


// 第五课，事件操作
// 事件绑定
// 原生js只有3种
// 1、onclick，已经淘汰的使用方式，jQuery中没有对应的实现。 后面的绑定的事件会覆盖前面的事件。
// var btn =document.getElementById('btn');
// btn.onclick=function () {
//     console.log(111);
// }
// 2、addEventListener，绑定事件，不互相覆盖
// var btn =document.getElementById('btn');
// btn.addEventListener('click',function (e) {
//     console.log(222);
// });
// btn.addEventListener('click',function (e) {
//     console.log(222);
// });
// jQuery 我们使用 bind 来实现上面的功能
// $('#btn').bind('click', function (e) {
//     console.log(111);
// }).bind('click', function (e) {
//     console.log(222)
// });
// removeEventListener：fn必须是声明的，不然不知道要删除哪个 unbind()
// document.getElementById('btn').addEventListener('click',function (e) {
//     console.log(444);
// })

// var f2 = function (e) {
//     console.log(111);
// }
// $('#btn').bind('click', f2);
//
// $('#btnr').bind('click',function (e) {
//     $('#btn').unbind('click', f2);
// });
// // unbind('事件名')：没绑定所有的事件名中声明的事件。
//     $('#btn').bind('mouseover',function (e) {
//         console.log(333);
//     })
// $('#btn').unbind('click'); // 所有的click事件都被删除

// 神奇  getEventListene() 在JS中看不见，仅在console中可用
// 然后 jQuery 也学console 将你bind的事件也记住，因此可以unbind 但是如果是自带的话 那就没有办法删掉哦

// unbind()：解绑定所有的事件
// $('#btn').unbind();

// unbind('事件名 事件名')：解绑指定的多个事件
// $('#btn').unbind('click mouseover');

// 3、 one 触发一次的事件
// 第一种方法
// var btn = document.getElementById('btn');
// function f1(e) {
//     console.log(111);
//     btn.removeEventListener('click', f1);
// }
// btn.addEventListener('click', f1)
// 第二种方法
// var btn = document.getElementById('btn');
// btn.addEventListener('click', function (e) {
//    console.log(111);
//    btn.removeEventListener('click',arguments.callee);
// });
// arguments.callee 指的是自己本身
// jQuery的方法
// $('#btn').one('click',function () {
//    console.log(111);
// });

// 4、冒泡
// 冒泡就是底层点击，上层都会触发
// var div1=document.getElementById('div1');
// div1.addEventListener('click',function (e) {
//     if(e.target.getAttribute('class')=='b1'){
//         console.log(111);
//     }
// });
// jQuery 使用方法 live\die 这个1.7之前 为什么被废除，因为绑在doc上，会让事件树拉的很长

// 父元素的jQuery对象.delegate('子元素的选择器'，'事件名'，fn)
// 1、在delegate的参数fn内，不用再去找e.target，可以直接使用this，因为jQuery在调用fn以前，this已经指向了e.target
// 2、通过子元素的选择器的方式，即可筛选目标子元素，不需要自己用if+is来判断。
// $('#div1').delegate('.b1', 'click', function (e) {
//     console.log(this, e.target, 111);
// })
// .undelegate() 的五种使用方式
// 1、.undelegate('选择器'，'事件名'，fn)
// function f1(e) {
//     console.log(111);
// }
// $('#div1').delegate('#btn','click',f1);
// $('#btnr').bind('click',function (e) {
//     $('#div1').undelegate('#btn','click',f1);
// })

// 2、.undelegate('选择器'，'事件名') //删掉所有的函数
// function f2(e) {
//     console.log(222);
// }
// $('#div1').delegate('#btn','click',f2);
// $('#btnr').bind('click',function (e) {
//     $('#div1').undelegate('#btn','click');
// })

// 3、.undelegate('事件名')// 不管选择器 挂着就去掉
/*function f3(e) {
    console.log(333);
}
$('#div1').delegate('#btn','click',f3);
$('#btnr').bind('click',function (e) {
    $('#div1').undelegate('click');
})*/

// 4、.undelegate('名字空间')
// $('#div1').delegate('#btn','click.namespace1',f4);
// .namespace1 能删掉这个
// $('#div1').undelegate('.namespace1');

// 5、.undelegate() 在指定事件类型时，可以有多个，空格分隔
// $('#div1').undelegate('#btn','click dblcick');
// 知识点：bind vs delegate
// 1、bind直接绑定目标元素，delegate绑定目标元素的父元素
// 2、如果目标元素很多，那么bind会给每个目标元素绑定事件，会浪费内存，而delegate只会在父元素上绑定一个事件
// 3、新增元素，是否可以自动的获得事件 bind：不可以，新增元素必须再次绑定事件，无法自动获取      delegate：可以，只要是在父元素下，无论调用delegate的时候新增元素是否已经添加事件，都能获得事件处理函数。


// 第五种，on (对应使用，不然很乱，比如bind\unbind一起)
// bind\delegate -> on
//  on('事件名'，fn)\on('事件名','选择器'，fn)
// unbind\undelegate -> off
// function f1(e) {
//     console.log(111);
// }
//
// function f2(e) {
//     console.log(222);
// }
//
// var $btn = $('#btn');
// $btn.on('click', f1).on('click', f2);
// $('#btnr').on('click',function (e) {
//    $btn.off('click');
// });
// unbind\undelegate -> off
//
// var $div1=$('#div1');
// $div1.on('click','#btn',f1).on('click','#btn',f2);
// $('#btnr').on('click',function (e) {
//    $div1.off('click');
// });

// 第六种，.事件名  可以使用unbind删掉
// $('#btn').click(function (e) {
//     console.log(111);
// });
// $('#btnr').click(function (e) {
//    $('#btn').unbind('click');
// });


// 页面加载完成
// DOMContentLoaded：仅DOM内容加载完成
// 1、包括HTML、JS
// 2、发生在前
// 3、什么时候使用？ 只要代码不依赖于HTML和JS以及外的其他资源（CSS、图片...），就可以使用
// 原生
// [Webkit]:document.addEventListener('DOMContentLoaded',fn)
// [IE]:    document.attachEvent('onreadystatechange',fn)
// jQuery
// [1] $('document').ready(fn)
// [2] $().ready(fn)
// [3] $(fn)
// $(function () {
//     alert('window load is triggered!');
// })

// load,window.onload：DOM内容以及资源全部加载完成
// 1、包括：HTML，JS，CSS，图片...
// 2、发生后
// 3、什么时候使用？ 如果代码需要访问CSS中的信息或者图片信息，我们必须等待全部加载完成 //L8974
// [Wekit]:window.addEventListener('load',fn)
// [IE]:window.attachEvent('onload',fn)
// jQuery
// $(windiw).load(fn)
// $(window).load(function () {
//     alert('window load is triggered!');
// })


// mouseover JS原生事件，一旦进入子元素范围，也视为移出，子元素会触发事件冒泡
// mouseenter jQuery事件，进入子元素，不视为移出，子元素的事件冒泡会被阻塞

// 就是这个b 特别烦人， 进出子元素都会触发
// $('#d1').mouseover(function (e) {
//     console.log('[IN]' + e.target.id);
// }).mouseout(function (e) {
//     console.log('[OUT]' + e.target.id);
// });

// 这个就可以阻塞掉冒泡 只会出父辈
// $('#d1').mouseenter(function (e) {
//     console.log('[IN]' + e.target.id);
// }).mouseleave(function (e) {
//     console.log('[OUT]' + e.target.id);
// });

// 3、用hover 代替 mouseenter 和 mouseleave
/*$('#d1').hover(
    function (e) {
    console.log('[IN]' + e.target.id);
},
    function (e) {
    console.log('[OUT]' + e.target.id);
});*/

// $('#d1').hover(function (e) {
//    $(e.target).toggleClass('hover');
// });


// 模拟事件触发
// .trigger()
// .事件
// $(function () {
//     var $Bs = $('input:lt(3)');
//     $Bs.click(function (e) {
//         console.log($(e.target).val());
//     });
//
//     // 1、模拟触发事件$(...).trigger('事件名')
//     // $('input:eq(3)').click(function (e) {
//     //     $Bs.trigger('click');
//     // });
//     // 2、$(...).事件名() 触发事件
//     $('input:eq(3)').click(function (e) {
//         $Bs.click();
//     });
// });


// 动画
// jQuery 提供了三种简单动画：
// 显示、隐藏
// 向上滑动、向下滑动
// 淡入、淡出
// jQuery提供的动画都是比较low的
// 1、show hide <--> if-is 搭配使用

// $(function (e) {
// 默认，不带参数的动画：diaplay：none|block
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     if($div1.is(':hidden')){
//         $div1.show();
//     }else{
//         $div1.hide();
//     }
// });
// 带两个参数：1、动画持续事件ms 2、callback，用于动画结束时调用
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     var bg = '#F00'
//
//     if ($div1.is(':hidden')) {
//         $div1.show(1000, function () {
//             bg =$div1.css('background-color');
//             $div1.css('background-color','#0ff');
//         });
//     }else {
//         $div1.hide(1000,function () {
//             $div1.css('background-color',bg);
//         });
//     }
// });
// show/hide/if/is --> toggle
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     var bg = '#F00';

// $div1.toggle(500,function () {
//     if (!$div1.is(':hidden')) {
//         // bg =$div1.css('background-color');
//         // $div1.css('background-color','#0ff');
//     }else {
//         // $div1.css('background-color',bg);
//     }
// })
// $div1.toggle();
// });

// slideDown slideUp slideToggle
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     var bg = '#F00'
//
//     if ($div1.is(':hidden')) {
//         $div1.slideDown(1000, function () {
//             bg = $div1.css('background-color');
//             $div1.css('background-color', '#0ff');
//         });
//     } else {
//         $div1.slideUp(1000, function () {
//             $div1.css('background-color', bg);
//         });
//     }
// });
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     $div1.slideToggle();
// });

// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     var bg = '#F00'
//
//     if ($div1.is(':hidden')) {
//         $div1.fadeIn(1000, 'linear',function () {
//             bg = $div1.css('background-color');
//             $div1.css('background-color', '#0ff');
//         });
//     } else {
//         $div1.fadeOut(1000, function () {
//             $div1.css('background-color', bg);
//         });
//     }
// });
// $('#btn').click(function (e) {
//     var $div1 = $('#div1');
//     $div1.fadeToggle();
// });
// });

// 基础jQuery动画的缺点：
// 1、效果很low，而且没有办法改动，无法维护和定制
// 2、底层的技术是用定时器实现的，效率是比较低的，与CSS的transition比（中间不能断，jQuery可以改）
// 基础jQuery什么时候用？（恰当的选择，完成相应的任务，才重要）
// 1、Demo的时候可以使用
// 2、外包程序（不舍得给钱的人，第一版的软件没有什么利润）

// Class+Transition 实现show-hide
// 步骤都是类似的：
// 1、定义起始class
// 2、定义终止class
// 3、在起始class内部设定transition
// 4、把起始class放在target上
// （相当于终止的class覆盖起始class的CSS）
// 5、调用toggleClass（终止class）

// $(function (e) {
//     $('#btn').click(function (e) {
//         var $div1 = $('#div1');
//         $div1.one('transitionend',function () {
//             console.log('transitionend!');
//         });
//         $div1.toggleClass('fadeCenter');
//     });
// });

// 手风琴例子
// 1、初始化，所有的.content都折叠
//     $(function () {
//         $('.content').hide();
//         $('#accordion').on('click','.title',function (e) {
//             $(this).next().slideDown(100).siblings('.content').slideUp(100);
//         });
//     });
//
// $(function () {
//         $('#accordion').on('click','.title',function (e) {
//             $(this).next().addClass('in') // click show
//                 .siblings('.content').removeClass('in'); // other hide
//         });
//     });

// animate(css{支持多样式，且并行运行},time,callbacks)
// css只支持单个数据的css值，不支持颜色动画
// animate vs class+transition
// 1、效率低 2、不支持颜色 3、可以中断停止
// 1、灵活性：animate可以停止，Transition不可以
// 2、效率：animate效率低，Transition效率高
// 3、支持的全面性：animate不支持颜色过渡，Transition支持颜色过渡


// 被打断的时候，会执行下一个动画，stop只是打断当前的动画
// animate：是将动画的任务通过定时器的方式放在队列里
// stop：如果有多个动画，当前的动画被打断，后面的动画会继续运行
//          stop(ture) 停止动画，并清空队列
//
// 并行动画和串行动画 （拆解动画，把事情分解成步骤，一步一步来实现）
// 并行：多个CSS属性同时改变
// 串行：针对同一批元素，当有多个动画的时候，后面的动画必须等待前面的动画完成以后才能执行


// $(function (e) {
//     var $div1 = $('#div1');
//     $('#startBtn').click(function (e) {
//         $div1.animate({
//             width: 400
//         },5000);
//         //     .animate({// 串行
//         //     width: 200
//         // },5000);
//     });
//     $('#stopBtn').click(function (e) {
//         $div1.stop();
//     });
// })


// 类数组操作
// 类数组
// jQuery对象就是类数组，可以直接当数组使用，但是用函数使用比较优雅
// get()
// console.log($('#list>li').get(2));
// console.log($('#list>li').get()); //$(...).get() 返回一个包含所有DOM元素的原始JS数组

// $(...).size()
// console.log($('#list>li').size());

// each() va jQuery.each()
// $(...).each(callback(i,elem)：将类数组内的数据填入callback作为参数，依次调用，等效于for循环
// $('#list>li').each(function (i, elem) {
//     var num = parseInt($(elem).html());
//     console.log(num + 10);
// });
// $.each(obj,callback)：将obj内的数据填入callback，作为参数，依次调用。
// var list = [1, 2, 3, 4, 5];
// $.each(list, function (i, elem) {
//     console.log(elem);
// })
// 区别： $(...).each(callback(i,elem)是挂载jQuery原型上的，jQuery.fn（只有jQuery对象可以应用）
//        $.each(obj,callback)是挂在jQuery函数上的（空手套白狼，直接使用，任何地方任何人都可以调用）

// index() 参考前面的课程
// console.log($('#list>li').index());

// 练习：分数低于60分的，颜色变红，背景变黄
// $('#list>li').each(function (i, elem) {
//     var $li = $(elem);
//     var num = parseInt($li.html());
//     if (num < 60) {
//         $li.css({
//             'color':'red',
//             'background':'yellow'
//         })
//     }
// });

// 插件：为了重用，将反复出现的功能、函数以及CSS样式封装起来的程序
// jQuery UI：
// UI交互
// 效果
// widget
// theme