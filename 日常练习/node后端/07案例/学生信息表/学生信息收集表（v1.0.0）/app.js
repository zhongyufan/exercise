const http = require('http');
require('./model/connect');
const router = require('./route/route');
const template = require('art-template');
const path = require('path');
const serveStatic = require('serve-static');
const dateformat = require('dateformat');


// 设置模版的根目录
template.defaults.root = path.join(__dirname, 'view');
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;
// 静态资源访问服务
const serve = serveStatic(path.join(__dirname, 'public'));

const app = http.createServer();
app.on('request', (req, res) => {
    serve(req, res, () => {});
    router(req, res, () => {});
})
app.listen(80);
console.log('服务器启动成功');