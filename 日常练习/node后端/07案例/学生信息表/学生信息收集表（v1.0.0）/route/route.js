// 路由
const getRouter = require('router');
const router = getRouter();
// 学生信息数据库
const Student = require('../model/user');
// 解析post数据
const queryString = require('querystring');
// url解析
const url = require('url');
// 模版引擎
const template = require('art-template');

// 重定向首页
router.get('/', (req, res) => {
    res.writeHead(301, {
        Location: '/list'
    });
    res.end();
});
router.get('/index', (req, res) => {
    res.writeHead(301, {
        Location: '/list'
    });
    res.end();
});
// 添加学生信息
router.get('/add', (req, res) => {
    let html = template('add.art', {});
    res.end(html);
})
// 修改学生信息
router.get('/updata', async (req, res) => {
    const {
        query
    } = url.parse(req.url, true);
    // 根据id查询用户信息
    let result = await Student.findOne({
        _id: query.id
    });
    // 已选中
    let choose = result.direction;
    // 默认选项
    let direction = ["前端", "后端", "全栈", "架构师", "大数据", "UI设计", "产品经理", "AI算法"];
    // 未选中
    let notchoose = [];

    direction.forEach(item => {
        if (!choose.includes(item)) {
            notchoose.push(item);
        }
    })
    let html = template('updata.art', {
        result: result,
        notchoose: notchoose
    });
    res.end(html);
})
// 学生信息列表
router.get('/list', async (req, res) => {
    // 查询学生信息
    let students = await Student.find();

    let html = template('list.art', {
        students: students
    });
    res.end(html);
})
// 删除学生信息
router.get('/delete', async (req, res) => {
    // 获取网址参数
    const {
        query
    } = url.parse(req.url, true);

    await Student.findOneAndDelete({
        _id: query.id
    });
    // 提交完成后进行重定向
    res.writeHead(301, {
        Location: '/list'
    });
    res.end();
})

// 实现学生信息添加
router.post('/add', (req, res) => {
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async () => {
        await Student.create(queryString.parse(formData));
        // 提交完成后进行重定向
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
})
// 修改学生信息
router.post('/updata', (req, res) => {
    // 获取网址参数
    const {
        query
    } = url.parse(req.url, true);

    // 拼接数据
    let formData = '';
    req.on('data', param => {
        formData += param;
    })
    req.on('end', async () => {
        let user = queryString.parse(formData);
        await Student.updateMany({
            _id: query.id
        }, user);
        // 提交完成后进行重定向
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
})

module.exports = router;