const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
// 根据当前的请求路径分析出请求资源的类型
const mime = require('mime');

const app = http.createServer();

app.on('request', (req, res) => {
    // 获取用户请求路径
    let {
        pathname
    } = url.parse(req.url);

    // 如果输入 / 将重定向首页
    pathname = pathname == '/' ? '/default.html' : pathname;

    // 将用户请求路径转换成服务器绝对路径
    let realPath = path.join(__dirname, 'public', 'src', pathname);

    //  存储静态资源的类型
    let type = mime.getType(realPath);

    // 读取文件
    fs.readFile(realPath, (error, result) => {
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            });
            res.end('文件读取失败');
            return;
        }
        res.writeHead(200, {
            // 告诉服务器读取的资源类型
            'content-type': type
        });
        res.end(result);
    })
});

app.listen(3000);
console.log('服务器启动成功');