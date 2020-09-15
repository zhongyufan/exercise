let obj = {};

Object.defineProperty(obj, 'name', {  // defineProperties 可定义多个
    /**
     * 数据属性
     */
    value: 'zhongyufan',
    // 只读
    writable: false,
    // 枚举
    enumerable: false,
    // 删除
    configurable: false,
});

let person = {
    name: 'zyf',
    age: 18,
    happy: ['games', 'code', 'sleep'],
    say: function () {
        console.log('My name is ' + this.name);
    }
}
let newAge = 21;
Object.defineProperty(person, 'age', {
    /**
     * 访问器属性 [get set] [value writable] 不可以同时设置
     */
    // 读取
    get: function () {
        return '今年我：' + newAge +'岁';
    },
    // 设置
    set: function (val) {
        newAge = val;
    },
    // 枚举
    enumerable: true,
    // 删除
    configurable: true,
})
// console.log(person.age = 40);
// console.log(person.age);

// 控制数组属性
let arr = [1,2,3,4,5];
Object.defineProperty(arr, "length", {
    value: 40,
    // 只读
    writable: false,
    // 枚举
    enumerable: false,
    // 删除
    configurable: false,
})


// Proxy
const handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : 37;
    }
};
const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;
console.log(p.a, p.b);
console.log(p.c);
console.log('a' in p);



