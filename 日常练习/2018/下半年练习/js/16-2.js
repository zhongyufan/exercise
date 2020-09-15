// AJAX jQuery实现
// 步骤：
// 1、创建XMLHttpRequest对象 初始化
// 2、向服务器发送请求
// 3、响应函数
// 3、响应事件
// 4、Parse JSON数据格式以及更新DOM

$(document).ready(function () {
    $('#theB').click(function () {
        htmlobj = $.ajax({
            type: "get",
            url: "json/data.json",
            async: true,
            dataTypes: 'json',
            success: function (data) {
                // $('#theD').text(JSON.stringify(data));
                // console.log(data);
                $('#theD').append(jsonToHTML(data));
            }
        });
    });
});

function jsonToHTML(json) {
    // 数据多的时候不要这么干
    var table =$('<table/>'); // 创造
    $(json['LINE']).each(function () { // 等价循环
       var tr = $('<tr/>').appendTo(table);
       $(this['COLUMN']).each(function () {
          var th =$('<th/>').html(this['TEXT']).appendTo(tr);
       });
    });

    return table;
}