const Koa = require('Koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');

app.use(async (ctx) => {
    ctx.set('Cache-Control', 'public');
    ctx.type = 'html';
    ctx.body = fs.readFileSync('./index.html');
})

app.listen('8888');