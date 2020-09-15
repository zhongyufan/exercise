// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'content-type': 'text/plain'
//     });
//     res.end('Hello,Node.js!');
// });
// server.listen(888, () => {
//     console.log('listening port 888')
// });

// const http = require('http');
// const server = new http.Server();
// server.on('request', (req, res) => {
//     res.writeHead(200, {
//         'content-type': 'text/plain'
//     });
//     res.end('Hello,Node.js!');
// });
// server.listen(777, () => {
//     console.log('listening port 777')
// });

const dns = require('dns');
let domain = 'zhongyufan.club';
dns.resolve(domain, (err, address) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(address);
})