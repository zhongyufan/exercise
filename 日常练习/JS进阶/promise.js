/*
 * @Author: your name
 * @Date: 2020-07-15 11:09:55
 * @LastEditTime: 2020-11-25 11:14:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /日常练习/JS进阶/promise.js
 */
console.log(1);
let test = new Promise((resolve, reject) => {
    let num = 100;
    console.log(num);
    setTimeout(() => {
        if (num > 100) {
            resolve(num > 100)
        } else {
            reject('num未超过100')
        }
    }, 3000);
})
console.log(2);
test.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
console.log(3);