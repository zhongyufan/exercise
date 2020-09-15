// DOM
// Document Object Model
// 元素是一种节点
// document对象
console.log(window.document);

// document.getElementById();//一个id
// IE8一下浏览器，id不区分大小写，同时还会匹配name属性

// document.getElementsByClassName();// 用于class
//
// document.getElementsByTagName(); // 用于标签
// document.getElementsByName();只对部分元素有效，from，表单元素，img，iframe


// document.querySelector(); // 返回第一个指定定css选择器的元素


// document.querySelectorAll();返回所有

// DOM Node树
// 遍历DOM tree
// function GoThrough(node, x) {
//     if (node.childNodes != undefined) {
//         for (var i = 0; i < node.childNodes.length; i++) {
//             var a = node.childNodes[i];
//             var s = a.nodeType + '-' + a.nodeName + '-' + a.nodeValue+'-';
//             console.log(x + s);
//             if (a.attributes != undefined && a.attributes.length != 0) {
//                 var attr = '{attr:}';
//                 for (var j = 0; j < a.attributes.length; j++) {
//                     var b = a.attributes[j];
//                     attr += b.nodeType + '-' + b.nodeName + '-' + b.nodeValue;
//                 }
//                 attr += '}';
//                 console.log(x + attr);
//             }
//             GoThrough(a, x + '\t');
//         }
//     }
// }
//
// GoThrough(document, '');

function getChildren(element) {
    var children = [];
    if (element.childNodes != undefined) {
        for (var i = 0; i < element.childNodes.length; i++) {
            var a = element.childNodes[i];
            if (a.nodeType == 1) {
                children.push(a);
            }
        }
    }
    return children;
}

console.log(getChildren(document.body));













