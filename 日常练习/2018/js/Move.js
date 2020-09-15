/**
 * Created by Yg on 2017/6/15.
 */
window.onload = function () {
    var oDiv = document.getElementsByTagName('div');
        oDiv[i].onmouseover = function () {
            startMove();
        };
        oDiv[i].onmouseout = function () {
            startMove();
    };
};
function getStyle(obj,name) {
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = 0;
        //处理透明度问题
        if (attr == 'opacity') {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        }   //Math.round 四舍五入
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (cur == iTarget) {
            clearInterval(obj.timer);
        }
        else {
            //处理透明度问题
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
                obj.style.opacity=(cur+speed)/100;
            }
            else {
                obj.style[arr] = cur + speed + 'px';
            }
        }
    }, 30);
}