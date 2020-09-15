async function fn() {
    // throw抛出错误
    // throw '发生错误';
    return 123;
    // await
    // 只出现在异步函数中，暂停异步函数的执行，等待promise对象返回结果后继续

}
fn().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})