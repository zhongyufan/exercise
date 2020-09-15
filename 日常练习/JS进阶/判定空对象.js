let obj = { name: 'zyf' };

function empty(obj) {
    // 老版本
    // Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj) === '{}'
    return obj && Object.keys(obj).length > 0 && obj.constructor === Object;
}

vmodel