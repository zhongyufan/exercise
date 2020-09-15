// Asynchronous JavaScript and XML
// 特点：
// 不刷新页面
// 从服务器拉取数据
// 使用JS动态修改DOM
// JSON和DOM操作的结合

// 步骤：
// 1、创建XMLHttpRequest对象 初始化
// 2、向服务器发送请求
// 3、响应函数
// 3、响应事件
// 4、获取TXT数据格式以及更新DOM

// AJAX JS原生实现
// XML 了解即可 目前很少使用
var xmlHttp;

function loadXMLDoc(url) {
    xmlHttp = null;

    if (window.XMLHttpRequest) {//XMLHttpRequest is a API // code for IE7,Firefox,Opera,Chrome,etc
        xmlHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject('Microsoft.XMLHTTP')) {
        // ActiveX -> COM
        // 列出所有接口 拥有一个接口去查所有接口 加入了计数器 是最早的内存管理思想
        // IE6, IE5
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // config HTTP Object
    if (xmlHttp != null) {
        // config event to response function 作为响应函数
        xmlHttp.onreadystatechange = stateChange;

        xmlHttp.open('GET', url + '?t=' + Math.random(), true);
        // open() method: GET/POST
        //                GET: 将参数放在URL后面，使用&和?的方式拼写
        //                     http://www.taobao.com?key1=value1&key2=value
        //                     局限：最长2048
        //                          特殊字符需要编码(urlencode)
        //                          有可能会被缓存
        //                          '?t='+Math.random() 数不对浏览器无法缓存
        //                POST：先发HTTP头，再发送参数，参数被放在后续的数据包中，没有长度限制，不会缓存

        // true，异步：调用返回，数据包来的时候会触发事件
        // false，同步

        xmlHttp.send();
    } else {
        console.log('ERROR, xmlHttp init failed.')
    }
}

// Response function
function stateChange() {
    if (xmlHttp.readyState == 4) {// 4: 'loaded'
        if (xmlHttp.status == 200) {// 200: OK
            var theDiv = document.getElementById('theD');
            // 测试
            // theDiv.innerText = xmlHttp.responseText;
            // console.log(strTmp);
            theDiv.innerHTML = xmlToHTML(xmlHttp.responseXML);
        } else {
            console.log('Error: when retrieving XML data:' + xmlHttp.statusText);
        }
    }
}

// parse XML 制造
function xmlToHTML(xml) {
    var strTmp = '<table>';
    var lines = xml.getElementsByTagName('LINE');
    for (var i = 0; i < lines.length; i++) {
        var columns = lines[i].getElementsByTagName('COLUMN');

        strTmp += '\n\r\t<tr>';
        strTmp += '\n\r\t\t<th>' + columns[0].childNodes[0].nodeValue + '</th>';
        strTmp += '\n\r\t\t<th>' + columns[1].childNodes[0].nodeValue + '</th>';
        strTmp += '\n\r\t</tr>';
    }
    strTmp += '\n\r<table>';

    return strTmp;
}

// 以下为同步调用（不推荐）
// var xmlHttp;
//
// function loadXMLDoc(url) {
//     xmlHttp = null;
//
//     if (window.XMLHttpRequest) { // code for IE7,Firefox,Opera,Chrome,etc
//         xmlHttp = new XMLHttpRequest();
//     } else if (window.ActiveXObject('Microsoft.XMLHTTP')) {
//         // ActiveX -> COM
//         // 列出所有接口 拥有一个接口去查所有接口 加入了计数器 是最早的内存管理思想
//         // IE6, IE5
//         xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
//     }
//
//     // config HTTP Object
//     if (xmlHttp != null) {
//         // config event to response function 作为响应函数
//         // xmlHttp.onreadystatechange = stateChange; 同步死等 不调用响应函数
//
//         xmlHttp.open('GET', url + '?t=' + Math.random(), false);
//         xmlHttp.send();
//
//         var theDiv =document.getElementById('theD');
//         // theDiv.innerText=xmlHttp.responseText;
//         theDiv.innerHTML=xmlToHTML(xmlHttp.responseXML);
//     } else {
//         console.log('ERROR, xmlHttp init failed.')
//     }
// }
//
//
// // parse XML 制造
// function xmlToHTML(xml) {
//     var strTmp = '<table>';
//     var lines = xml.getElementsByTagName('LINE');
//     for (var i = 0; i < lines.length; i++) {
//         var columns = lines[i].getElementsByTagName('COLUMN');
//
//         strTmp += '\n\r\t<tr>';
//         strTmp += '\n\r\t\t<th>' + columns[0].childNodes[0].nodeValue + '</th>';
//         strTmp += '\n\r\t\t<th>' + columns[1].childNodes[0].nodeValue + '</th>';
//         strTmp += '\n\r\t</tr>';
//     }
//     strTmp += '\n\r<table>';
//
//     return strTmp;
// }
