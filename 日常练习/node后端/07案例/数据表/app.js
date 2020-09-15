const http = require('http');
const url = require('url');
const querystring = require('querystring');

require('./model/index');
const User = require('./model/user');

// 引入模版引擎
const template = require('art-template');
const path = require('path');
// 模版绝对路径
const views = path.join(__dirname, 'view', 'index.art');
template(views, {

})

// 开启服务器
const app = http.createServer();

app.on('request', async (req, res) => {
    const method = req.method;
    const {
        pathname,
        query
    } = url.parse(req.url, true);

    if (method == 'GET') {
        // 呈现用户列表页面
        if (pathname == '/list') {
            // 查询用户信息
            let users = await User.find();

            let list = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>
<body>
	<div class="container">
		<h6>
			<a href="add" class="btn btn-primary">添加用户</a>
		</h6>
		<table class="table table-striped table-bordered">
			<tr>
				<td>用户名</td>
				<td>年龄</td>
				<td>爱好</td>
				<td>邮箱</td>
				<td>操作</td>
            </tr>
            `;

            users.forEach(item => {
                list += `
            <tr>
                    <td> ${item.name} </td>
                    <td> ${item.age} </td> 
                    <td> `
                item.hobbies.forEach(item => {
                    list += `<span> ${item} </span>`;
                })
                list += `</td>
                <td> ${item.email}</td>
                <td>
                  <a href = "/remove?id=${item.id}" class = "btn btn-danger btn-xs" > 删除 </a>
                  <a href = "/modify?id=${item.id}" class = "btn btn-success btn-xs" > 修改 </a>
                </td>
            </tr>`
            })
            list += `</table>
	</div>
</body>
</html>`;
            res.end(list);
        } else if (pathname == '/add') {
            let add = `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3>添加用户</h3>
		<form form method = "POST"
		action = "add">
			<div class="form-group">
				<label>用户名</label>
				<input name="name" type="text" class="form-control" placeholder="请填写用户名">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input name="password" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input name="age" type="text" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input name="email" type="email" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>
					<label class="checkbox-inline">
						<input type="checkbox" value="足球" name="hobbies"> 足球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="篮球" name="hobbies"> 篮球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="敲代码" name="hobbies"> 敲代码
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="抽烟" name="hobbies"> 抽烟
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="喝酒" name="hobbies"> 喝酒
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" value="烫头" name="hobbies"> 烫头
					</label>
				</div>
			</div>
			<button type="submit" class="btn btn-primary">添加用户</button>
		</form>
	</div>
</body>

</html>`;
            res.end(add);
        } else if (pathname == '/modify') {
            // 根据id查询用户信息
            let user = await User.findOne({
                _id: query.id
            });
            // 爱好数据组
            let hobbies = ['吃饭', '睡觉', '打豆豆', '足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'];
            let modify = `<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>用户列表</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
</head>

<body>
	<div class="container">
		<h3>修改用户</h3>
		<form form method = "POST"
		action = "/modify?id=${user._id}" >
			<div class="form-group">
				<label>用户名</label>
				<input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
			</div>
			<div class="form-group">
				<label>年龄</label>
				<input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>邮箱</label>
				<input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
			</div>
			<div class="form-group">
				<label>请选择爱好</label>
				<div>
                `;
            // 遍历所有的爱好是否存在
            hobbies.forEach(item => {
                if (user.hobbies.includes(item)) {
                    modify += `
                    <label class = "checkbox-inline" >
                        <input type = "checkbox"
                    value = "${item}"
                    name = "hobbies" checked> ${item} </label>
                    `
                } else {
                    modify += `
                    <label class = "checkbox-inline" >
                        <input type = "checkbox"
                    value = "${item}"
                    name = "hobbies"> ${item} </label>
                    `
                }
            })
            modify += `</div>
			</div>
			<button type="submit" class="btn btn-primary">修改用户</button>
		</form>
	</div>
</body>
</html>`;
            res.end(modify);
        } else if (pathname == '/remove') {
            await User.findOneAndDelete({
                _id: query.id
            });
            res.writeHead(301, {
                Location: '/list'
            })
            res.end();
        }
    } else if (method == 'POST') {
        if (pathname == '/add') {
            // 接受用户提交的信息
            let formData = '';
            req.on('data', Param => {
                formData += Param;
            })
            req.on('end', async () => {
                let user = querystring.parse(formData);
                // 将用户提交的信息添加到数据库中
                await User.create(user);
            })
            // 提交完成后进行重定向
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        } else if (pathname == '/modify') {
            // 接受用户提交的信息
            let formData = '';
            req.on('data', Param => {
                formData += Param;
            })
            req.on('end', async () => {
                let user = querystring.parse(formData);
                // 将用户提交的信息添加到数据库中
                await User.updateOne({
                    _id: query.id
                }, user);
            })
            // 提交完成后进行重定向
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        }
    }

    res.end('ok');
});

app.listen(3000);
console.log('服务器已启动');

// 当用户访问/list时，将所有的用户信息查询出来
// 1、实现路由功能
// 2、呈现用户列表内容
// 3、从数据库中获取数据

// 修改用户信息
// 1、增加页面路由，呈现页面
//  1.1、提交修改 将用户ID传递到当前页面
//  1.2 从数据库中查询当前用户信息 将用户信息展示在当前页面
// 2、实现用户修改
//  2.1 指定表单的提交地址以及请求方式
//  2.2 接受客户端传递过来的修改信息 找到用户 更新用户信息