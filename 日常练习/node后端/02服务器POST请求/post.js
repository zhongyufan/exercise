const http = require('http');
// 处理请求参数模块
const querystring = require('querystring');
// 网站服务器对象
const app = http.createServer();
app.on('request', (req, res) => {
    // data 当请求参数传递的时候发出data事件
    // end 当参数传递完成的时候发出end事件
    let postParams = '';
    req.on('data', data => {
        postParams += data;
    })
    req.on('end', () => {
        console.log(querystring.parse(postParams));
    })
    res.end('Ok');
})
// 监听
app.listen(3000);
console.log('启动成功');