// AJAX JS原生 JSON
var xmlHttp;

function loadJSONDoc(url) {
    xmlHttp =null;

    // 兼容性，初始化
    if(window.XMLHttpRequest){ // for Chrome, FireFox, IE 7+
        xmlHttp =new XMLHttpRequest();
    }else if(window.ActiveXObject){ // for IE6, 5
        xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 进入正题
    if (xmlHttp!=null){
        xmlHttp.onreadystatechange=stateChange;
        // xmlHttp.onerror()
        xmlHttp.open('POST',url,true);
        // beforeSend()
        xmlHttp.send();
    }
}

// 响应函数
function stateChange() {
    // readyState:
    // 0：请求未初始化
    // 1：服务器已经建立连接TCP
    // 2：请求已接收
    // 3：请求已处理
    // 4：请求已完成
    if(xmlHttp.readyState==4){ // 4: loaded
        if (xmlHttp.status == 200){
            // dataFilter()
            // success()
            var theDiv =document.getElementById('theD');
            theDiv.innerHTML = jsonToHTML(xmlHttp.responseText);
        }else {
            error();
        }
        // complete()
    }
}

// json文件弄进网页里
function jsonToHTML(json) {
    var txt ='<table>';
    // 获取数据
    var data = JSON.parse(json);

    var lines =data['LINE'];

    for (var i =0;i<lines.length; i++){
        var columns =lines[i]['COLUMN'];
        txt += '<tr>';
        txt += '<th>' + columns[0]['text'] + '</th>';
        txt += '<th>' + columns[1]['text'] + '</th>';
        txt += '</tr>';
    }

    txt += '</table>';
    return txt;
}