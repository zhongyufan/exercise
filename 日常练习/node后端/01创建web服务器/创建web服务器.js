// 引用系统模块
const http = require('http');
// url处理模块
const url = require('url');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求的时候
app.on('request', (req, res) => {
    // 响应状态码 响应头信息
    res.writeHead(200, {
        // 响应内容类型
        'content-type': 'text/plain;charset=utf-8'
    });
    // true 将查询参数解析成对象
    let {
        query,
        pathname
    } = url.parse(req.url, true)
    console.log(query);
    console.log(pathname);

    // 响应
    if (req.method == 'GET') {
        res.end('GET,欢迎光临');
    } else {
        res.end('POST,欢迎光临');
    }
    // 获取请求地址 req.url
    // console.log(req.url);
    // 获取请求报文
    // console.log(req.headers);
})
// 监听3000端口
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');