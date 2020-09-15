// var jsonhttp;
//
// function loadJSONDoc(url) {
//     var jsonhttp = null;
//     if (window.XMLHttpRequest) {
//         jsonhttp = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         jsonhttp = new ActiveXObject('Microsoft.XMLHTTP');
//     }
//     if (jsonhttp != null) {
//         jsonhttp.onreadystatechange = stateChange;
//         jsonhttp.open('GET', url + '?=t' + Math.random(), true);
//         jsonhttp.send();
//     }
// }
//
// function stateChange() {
//     if (jsonhttp.readyState == 4) {
//         if (jsonhttp.status == 200) {
//             var oDiv=document.getElementById('theD');
//             oDiv.innerHTML= jsonToHTML()
//         }
//     }
// }
//
// function jsonToHTML(jsonString) {
//     var strTmp='<table>';
//     var json=JSON.parse(jsonString);
//     var lines = json['LINE'];
//     for(var i=0;i<lines.length;i++){
//         var count=lines[i]['COLUMN'];
//         strTmp += '<tr>';
//         strTmp+='<th>'+count[0]['TEXT']+'</th>';
//         strTmp+='<th>'+count[1]['TEXT']+'</th>';
//         strTmp +='</tr>';
//     }
//     strTmp+='</table>';
//     return strTmp;
// }

var jsonhttp;

function onladJSONDoc(url) {
    var jsonhttp = null;
    if (window.XMLHttpRequest) {
        jsonhttp = window.XMLHttpRequest();
    } else if (window.ActiveXObject) {
        jsonhttp = window.ActiveXObject('Microsoft.XMLHTTP');
    }
    if (jsonhttp != null) {
        jsonhttp.onreadystatechange = stateChange;
        jsonhttp.open('GET', url + '?=t' + Math.random(), true);
        jsonhttp.send();
    }
}

function stateChange() {
    if (jsonhttp.readyState == 4) {
        if (jsonhttp.status == 200) {
            var oDiv = document.getElementById('theD');
            oDiv.innerHTML = jsonToHTML();
        }
    }
}

function jsonToHTML() {
    var strTmp = '<table>';
    var json = JSON.parse(jsonString);
    var lines = json['LINE'];
    for (var i = 0; i < lines.length; i++) {
        var count = lines[i]['COLUMN'];
        strTmp += '<tr>';
        strTmp += '<th>' + count[0]['TEXT'] + '</th>';
        strTmp += '<th>' + count[1]['TEXT'] + '</th>';
        strTmp += '</tr>';
    }
    strTmp += '</table>';
    return strTmp;
}