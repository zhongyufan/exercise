/**
 * 放置网页地址和图片文件夹路径
 */

//  爬取的网址
const url = "https://antv.vision/zh";
const path = require('path');
const imgDir = path.join(__dirname, 'img');

module.exports.url = url;
module.exports.imgDir = imgDir;