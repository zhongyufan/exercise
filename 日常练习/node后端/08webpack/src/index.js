// 随便写
import xxx from './xxx';

// 开启HMR功能则进行下一步监听
if (module.hot) {
    // 监听xxx文件变化，一旦变化执行回调函数，其他模块不会重新构建
    module.hot.accept('./xxx', () => console.log('回凋函数'));
}

/**
 * 性能优化-codesplit-代码分割
 * 方式三
 * 通过js代码，让某个文件单独打包成一个chunk
 * import动态导入语法
 */
import(/* webpackkChunkName:'xxx' */'./xxx')
    .then((res)=>{console.log(res)})
    .catch((err) => { console.log(err) });

/**
 * 性能优化-lazyloading-懒加载 文件需要使用才加载
 * 在callback中进行
 * webpackPrefetch:true - 预加载 提前加载JS文件，等其他资源加载完毕，浏览器空闲了，再偷偷加载资源
 * 预加载兼容性差，慎用
 */
onclick = function () { 
    import(/* webpackkChunkName:'xxx',webpackPrefetch:true */'./xxx')
    .then((res)=>{console.log(res.xxx)});
}
 
// 注册serviceWorker
// 处理兼容性问题
/*
   1、eslint 不认识window全局变量，需要修改package.json配置
   "eslintConfig": {
        "extends": "airbnb-base",
        "env": {
            "browser":true // 支持浏览器全局变量
        }
    }
    2、sw代码必须运行在服务器上
    --> nodejs
    --> npm i serve -g｜ serve -s build 启动服务器

 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(() => {
                console.log('sw注册成功')
            })
            .catch((err) => {
                console.log('sw注册失败'+err);
            });
    })
}