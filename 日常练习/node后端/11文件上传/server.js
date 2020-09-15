const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();

// 文件存储路径
let upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, './uploads/')
		},
		filename: function (req, file, cb) {
			let changeName = (new Date().getTime()) + '-' + file.originalname;
			cb(null, changeName);
		}
	})
});

app.post('/upload/single', upload.single('singleFile'), (req, res) => {
	console.log(req.file);

	req.file ? res.send('上传成功！') : res.send('文件为空，上传失败！')
	// res.json({
	// 	code: "0000",
	// 	type: 'single',
	// 	originalname: req.originalname
	// })
})

app.listen(80);
console.log('服务器已启动');