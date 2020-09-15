// 步骤：
// 1、创建XMLHttpRequest对象 初始化
// 2、向服务器发送请求
// 3、响应函数
// 3、响应事件
// 4、Parse JSON数据格式以及更新DOM

var jsonhttp;

function loadJSONDoc(url) {
    jsonhttp = null;
    if (window.XMLHttpRequest) {
        jsonhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    if (jsonhttp != null) {
        jsonhttp.onreadystatechange = stateChange;
        jsonhttp.open('GET', url + '?t=' + Math.random(), true);
        jsonhttp.send();
    }
}

function stateChange() {
    if (jsonhttp.readyState == 4) {
        if (jsonhttp.status == 200) {
            var theDiv = document.getElementById('theD');
            // theDiv.innerText =jsonhttp.responseText;
            // console.log(jsonToHTML(jsonhttp.responseText));
            theDiv.innerHTML=jsonToHTML(jsonhttp.responseText);
        }
    }
}

function jsonToHTML(jsonString) {
    var strTmp = '<table>';
    var json = JSON.parse(jsonString);
    var lines = json['LINE'];
    for (var i = 0; i < lines.length; i++) {
        var columns = lines[i]['COLUMN'];
        strTmp += '\n\r\t<tr>';
        strTmp += '\n\t\t\t<th>'+columns[0]['TEXT']+'</th>';
        strTmp += '\n\t\t\t<th>'+columns[1]['TEXT']+'</th>';
        strTmp += '\n\r\t</tr>';
    }
    strTmp += '\n\r<table>';
    return strTmp;
}