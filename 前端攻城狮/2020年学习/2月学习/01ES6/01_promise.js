// Promise 对象用于表示一个异步操作的最终完成 (或失败), 及其结果值
// 就是异步啦

// 比较传统的回调方式与promise

// 回调
/* 
    function f(cb) {
        setTimeout(function () {
            cb && cb();
        }, 1000);
    }
    f(function () {
        console.log(1);
        f(function () {
            console.log(2);
            f(function () {
                console.log(3);
                f(function () {
                    console.log(4);
                })
            })
        })
    })
*/
//  --------------------------------------------------
// promise
/* 
    function f() {
        return new Promise(resolve => {
            setTimeout(function () {
                resolve();
            }, 1000);
        })
    }

    f()
        .then(function () {
            console.log(1);
        })
        .then(function () {
            console.log(2);
        }).then(function () {
            console.log(3);
        }).then(function () {
            console.log(4);
        }).then(function () {
            console.log(5);
        })
*/

// 信任问题
// 回调因为某些原因被调用多次，不能保证第三方库什么时候去调用回调什么方式去调用回调
// promise 一但被确定为成功或者失败 就不能再被更改

// 控制反转
// 执行回调的时候我们无法控制，promise全部都是自己编写的流程，可以改善反转控制的问题

// 处理失败的情况
// then(resolve,reject)
// 方式一
// function f(val) {
//     return new Promise((resolve, reject) => {
//         if (val) {
//             resolve({
//                 name: 'xiaoming'
//             }); // 只可以传递一个参数
//         } else {
//             reject('404');
//         }
//     })
// }
/*
    f(false)
        .then((data) => {
            console.log(data.name);
        }, (e) => {
            console.log(e);
        })
*/
// catch 使用实例的catch方法可以捕获错误
// 方式二
/*
    f(true)
        .then(data => {
            console.log(data);
            return f(false); // 可以使用 Promise.reject();
        })
        .then(() => {
            console.log('我永远不会被输出');
        })
        // .then(() => {}, e => {
        //     console.log('failure'); // 如果没有对错误处理才会走到catch
        // })
        .catch(e => {
            console.log(e);
            return f(false); // 如果最后一个catch有错误该怎么办 标准中没有很好的解决方案
        })
*/
// finally
// 不论成功过还是失败 finally中的内容一定执行
/*
    f(true)
    .then(data=>{
        console.log(data);
        return f(false);
    })
    .catch(e=>{
        console.log(e);
        return f(false);
    })
    .finally(()=>{
        console.log(100);
    })
*/

// Promise 的三种状态
// pending 进行中 -> fulfilled 成功
//               -> rejected 失败
// 状态的改变不可逆，一旦决议就不能再修改

// Promise.all 方法可以吧多个 Promise 实例 包装成一个新的 Promise 实例
// promise.all([promise1,promise2]) : promise

// 比如需要多个请求的数据
/*
    function getData1() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第一条数据加载成功');
                resolve('data1');
            }, 1000)
        })
    }

    function getData2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第二条数据加载成功');
                resolve('data2');
            }, 1000)
        })
    }

    function getData3() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('第三条数据加载成功');
                resolve('data3');
            }, 1000)
        })
    }

    function getData4() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log('第四条数据加载成功');
                // resolve('data4');
                // console.log('第四条数据加载失败');
                reject('第四条数据加载失败');
            }, 2000)
        })
    }

    let p = Promise.all([getData1(), getData2(), getData3(), getData4()]);
    p.then(arr => {
        console.log(arr);
    }, e => {
        console.log(e);
    })
*/

// Promise.race([promise1, promise2]) : promise （多个请求，有一个请求有响应就立马执行）
// 与all差不多，区别在于 只要这个数组中只要有一个实例决议了，就会立即返回，而不是等到执行完毕
// 同时 Promise.all 如果传入空数组会决议为成功 Promise.race 则是挂起

// Promise.resolve() Promise.reject()
// 这两个常用来生成已经被决议为失败或者成功的实例
// 可以传输一个Promise实例
// 可以传输一个thenable
// let obj = {
//     then(cb) {
//         console.log('我被执行了');
//         cb('哼');
//     },
//     oth() {
//         console.log('我被抛弃了');
//     }
// }
// // 立即执行then方法
// Promise.resolve(obj).then(data => {
//     console.log(data);
// })
// 而Promise.reject则是不管传什么拿到的都是传进来的值

// 把同步任务转成异步任务
// function createAsyncTask(syncTask) {
//     return Promise.resolve(syncTask).then(syncTask => syncTask());
// }
// createAsyncTask(() => {
//     console.log('我变成异步任务');
//     return 1 + 1;
// }).then(res => {
//     console.log(res);
// })
// console.log('我是同步任务');