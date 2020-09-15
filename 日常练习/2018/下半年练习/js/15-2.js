// 事件委托
// 什么是事件委托？
// 利用事件冒泡，在父节点上响应事件，而不是在子节点上响应事件
// 优点：
// 性能更高
// 灵活，不需要大量操作element

// var ul = document.getElementById('uid');
// ul.addEventListener('click', function (e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement;
//     target.innerHTML = target.innerHTML + 'click';
//     console.log(target.innerHTML);
//     console.log(target);
// }, false);

// var lis=ul.getElementsByTagName('li');
// for(var i=0;i<lis.length;i++){
//     lis[i].addEventListener('click',function () {
//         this.innerHTML +='click';
//         console.log(this.innerHTML);
//     },false);
// }

// 实验： 做一个可以拖拽的小方块 三步 按下 移动 松开
// 1、mousedown 确定鼠标相对于div的位置
// 2、当鼠标移动时，mousemove通过程序保证div相对于鼠标的位置不变实现拿住的效果
// 3、当鼠标抬起时，mouseup，当下div

function bindEvent(obj) {
    if (typeof (obj) == 'string') {
        obj = document.getElementById(obj);
    }
    obj.oIndex = obj.style.zIndex;// 先保存obj当前的zindex

    obj.addEventListener('mousedown', function (e) {
        e = e || window.event;
        this.style.zIndex=1000;
        this.style.cursor='move';
        // 计算x，y，是鼠标相对于div的位置
        // e.clientX是鼠标相对于屏幕上角的位置
        // obj.offsetLeft是div相对于body上角的位置
        var x = e.clientX - obj.offsetLeft;
        var y = e.clientY - obj.offsetTop;
        console.log(x + '-' + y);

        function whenMouseMove(e) {
            e = e || window.event;
            obj.style.left = e.clientX - x + 'px';
            obj.style.top = e.clientY - y + 'px';
        }

        document.addEventListener('mousemove', whenMouseMove, false);

        function whenMouseUp() {
            document.removeEventListener('mousemove', whenMouseMove, false);
            document.removeEventListener('mouseup', whenMouseUp, false);
            obj.style.zIndex=obj.oIndex;
            obj.style.cursor='normal';
        }

        document.addEventListener('mouseup', whenMouseUp, false);
    }, false);
}

bindEvent('id1');
bindEvent('id2');
