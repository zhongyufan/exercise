// 显示相关
function f() {
    console.log('点我干嘛？');
}

$(function () {
    $('#show').click(function () {
        $('p:eq(0)').show(600, f);
    });
    $('#hide').click(function () {
        $('p:eq(0)').hide(600, f);
    });
    // toggle 等于显示隐藏合体
    $('#toggle').click(function () {
        $('p:eq(0)').toggle(600, f);
    });
    $('#fadein').click(function () {
        $('p:eq(0)').fadeIn(600, f);
    });
    $('#fadeout').click(function () {
        $('p:eq(0)').fadeOut(600, f);
    });
    $('#fadetoggle').click(function () {
        $('p:eq(0)').fadeToggle(600, f);
    });
    $('#slidedown').click(function () {
        $('p:eq(0)').slideDown(600, f);
    });
    $('#slideup').click(function () {
        $('p:eq(0)').slideUp(600, f);
    });
    $('#slidetoggle').click(function () {
        $('p:eq(0)').slideToggle(600, f);
    });
});

// 方法链 chaining
// 是一种jQuery的技术，允许在相同的元素上运行多条jQuery命令，一条接一条
// 因此，浏览器可以不必查询同一个元素
// 如果需要链接一个动作，只需要简单的追加动作即可
