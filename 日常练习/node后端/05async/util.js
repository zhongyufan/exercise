const fs = require('fs');
// 改造现有异步函数的api 让其返回promise对象
const promisify = require('util').promisify;
// 调用promisify方法改造现有的异步api
const readFile = promisify(fs.readFile);

// 读取文件如何使用await 使用util
// promisify(fs.readFile) // 返回一个新方法

async function run() {
    let r1 = await readFile('./async.js');
    let r2 = await readFile('./async.js');
    let r3 = await readFile('./async.js');
    console.log(r1);
    console.log(r2);
    console.log(r3);
}
run();