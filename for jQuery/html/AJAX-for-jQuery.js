
$(function () {
    $('#btn').click(function () {
        //1、$.ajax GET JSON 厉害之处
        //      必须指定的url，type，success
        //      success调用时所给的参数data，其类型是根据服务器返回的Content-Type类型自动进行转换
        //          如果没有设定或者设定为text，那么data是string类型
        //          如果设定为application/json，那么data是json object
        $.ajax({
            url:'./data.json',

            // type:'get',
            // 3、$.ajax POST JSON
            type:'post',

            // async:true 默认就是true
            // dataType:'json', // 如果Content-Type没有设定，我们也可以通过设定dataType来实现
            success: function(data){
                $('#theD').append(jsonToHTML(data));
                // jsonToHTML(data);
            }
        });

        // 2、$ajax GET XML
        //      必须指定的url，type，success
        // $.ajax({
        //     url:'./data.xml',
        //     type:'get',
        //     // dataType:'xml',
        //     success: function(data){
        //         $('#theD').append(xmlToHTML(data));
        //     }
        // });
    });
});

// parse JSON
function jsonToHTML(json) {
    // console.log(typeof json);
    var $table =$('<table></table>');

    $(json['LINE']).each(function () {
       var $tr=$('<tr></tr>').appendTo($table);
       $(this['COLUMN']).each(function () {
           var $th=$('<th></th>').html(this['text']).appendTo($tr);
       })
    });
    return $table;
}

// parse XML
// function xmlToHTML(xml) {
//     var $table =$('<table></table>');
//
//     $(xml).find('LINE').each(function () {
//        var $tr=$('<tr></tr>').appendTo($table);
//        $(this).find('COLUMN').each(function () {
//            var $th=$('<th></th>').html($(this).html()).appendTo($tr);
//        })
//     });
//     return $table;
// }


