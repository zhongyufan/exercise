let arr = [1, 2, 3, 'z', 'y', 'f'];

// 数组 -> 字符串 （不改变原数组）
console.log(arr.toString());

// 数组 -> 字符串连接 （不改变原数组）
console.log(arr.join('*'));

// 删除最后一个元素 （改变原数组）
console.log(arr.pop());

// 最后添加一个元素 （改变原数组）
console.log(arr.push('f'));

// 删除第一个元素 其他元素索引向前位移 （改变原数组）
console.log(arr.shift());

// 开头添加一个元素 其他元素索引向后位移（改变原数组）
console.log(arr.unshift(1));


// console.log(arr.splice(4));
// console.log(arr);

// console.log(arr.slice(3));
// console.log(arr.filter(item => {
//     console.log('arritem is ' + item)
// }));
console.log('------------');

arr = [1, 2, 3, 4, 5];
arr.filter(item => {
    // console.log(item >= 4);
    return item >= 4;
})
console.log('------------');
arr.map(item => {
    // console.log(item);
    return item >= 4;
})
console.log('------------');
arr.reduce((item, next) => {
    console.log(item + next);
    return item + next;
});
console.log('------------');






