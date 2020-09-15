// 1、获得或者设定内容 text() 方法
// console.log($('#pid').text()); // 333333
// $('#pid').text('55<b>55</b>55>');// 55<b>55</b>55>
// $('#pid').text(function (i, orjgText) {
//     console.log(i+'-'+orjgText);
//     return 'aaaa';
// });

// 2、获得或者设定HTML html() 方法
// console.log($('#pid').html()); // 33<b>33</b>33
// $('#pid').html('55<b>55</b>55'); // 555555
// $('#pid').html(function (i, orjgText) {
//     console.log(i+'-'+orjgText);
//     return 'aaaa';
// });

// 记忆方法 html能够按照doc的方式输出 而text只能够按照普通文本输出

// 3、获得或者设定表单控件的值 val()
// console.log($('input:first').val());
// $('input:first').val('222');
// $('input:first').val(function (i,origText) {
//     return '222';
// });

// 4、获得或者设定属性，attr()
// console.log($('input:first').attr('type'));
// $('input:first').attr('type','password');
// $('input:first').attr({
//     'type':'password',
//     'value':'123456'
// });

// 5、eval()
// eval('var a = 5');
