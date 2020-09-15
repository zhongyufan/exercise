const request = require('request');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const analyze = require('./analyze');

function start() {
    request(config.url, (err, res, body) => {
        console.log('start');
        if (!err && res) {
            console.log('start');
            analyze.findImg(body, downLoad);
        }
    })
}

function downLoad(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    console.log(i);
    console.log("ext---" + ext);
    console.log("imgUrl---" + imgUrl);
    console.log("path---" + path.join(config.imgDir, i + '.' + ext));
    if (imgUrl != "" && (ext === "svg" || ext === "png" || ext === "jpg" || ext === "jpeg" || ext === "gif" || ext === "svg")) {
        request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir, i + '.' + ext)), {
            'encoding': 'utf8'
        });
    }
}

start();