// AJAX JS原生 XML
var xmlHttp;

function loadXMLDoc(url) {
    xmlHttp =null;

    // 兼容性
    if(window.XMLHttpRequest){ // for Chrome, FireFox, IE 7+
        xmlHttp =new XMLHttpRequest();
    }else if(window.ActiveXObject){ // for IE6, 5
        xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
    }

    // 进入正题
    if (xmlHttp!=null){
        xmlHttp.onreadystatechange=stateChange;
        xmlHttp.open('GET',url,true);// true 异步
        xmlHttp.send();
    }
}

function stateChange() {
    if(xmlHttp.readyState==4){ // 4: loaded
        if (xmlHttp.status == 200){
            var theDiv =document.getElementById('theD');
            theDiv.innerHTML = xmlToHTML(xmlHttp.responseXML);
        }
    }
}

// json文件弄进网页里
function xmlToHTML(xml) {
    var txt ='<table>';
    var lines =xml.getElementsByTagName('LINE');

    for (var i =0;i<lines.length; i++){
        var columns =lines[i].getElementsByTagName('COLUMN');
        txt += '<tr>';
        txt += '<th>' + columns[0].childNodes[0].nodeValue + '</th>';
        txt += '<th>' + columns[1].childNodes[0].nodeValue + '</th>';
        txt += '</tr>';
    }

    txt += '</table>';
    return txt;
}