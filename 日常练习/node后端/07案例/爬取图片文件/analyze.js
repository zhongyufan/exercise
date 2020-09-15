/**
 * 存储分析DOM的方法
 */

const cheerio = require('cheerio');

function findImg(dom, callback) {
    let $ = cheerio.load(dom);
    console.log($('img'));
    $('img').each((i, elem) => {
        callback(elem.attribs.src, i);
    })
}

module.exports.findImg = findImg;