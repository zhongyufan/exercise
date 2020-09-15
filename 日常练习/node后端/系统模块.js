// const fs = require('fs');

// 读取文件
// fs.readFile('./helloword.js', 'utf-8', (err, doc) => {
//     if (err == null) {
//         console.log(doc);
//     }
// })

// 写入文件
// const time = new Date();
// const content = `在${time}写入一句话，内容为我操`;
// fs.writeFile('./test.txt', content, (err, doc) => {
//     if (err != null) {
//         console.log(err);
//         return;
//     }
//     console.log('写入成功');
// })

const path = require('path');
let finialPath = path.join(__dirname, 'itcast', 'a', 'b', 'c.css');
console.log(finialPath);