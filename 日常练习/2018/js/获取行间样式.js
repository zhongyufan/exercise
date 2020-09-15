/**
 * Created by Yong on 2017/6/2.
 */
function getStyle(obj,name) {
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj,false)[name];
    }
}