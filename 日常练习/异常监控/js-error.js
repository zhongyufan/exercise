/**
 * 假设报错
 */
// setTimeout(() => {
//     console.log('1-begin');
//     error
//     console.log('1-end');
// });
// setTimeout(() => {
//     console.log('2-begin');
//     console.log('2-end');
// });

/**
 * 使用 Try catch 捕获同步错误
 */
// setTimeout(() => {
//     try {
//         console.log('1-begin');
//         error
//         console.log('1-end');
//     } catch (e) {
//         console.log('catch', e);
//     }
// })

/**
 * 函数中错误没有被捕获，错误会上抛
 */
// function f() {
//     console.log('1-begin');
//     error
//     console.log('1-end');
// }
// setTimeout(() => {
//     try {
//         f()
//     } catch (e) {
//         console.log('catch', e);
//     }
// })

function f() {
    console.log('1-begin');
    error
    console.log('1-end');
}
window.onerror = (...args) => {
    console.log('onerror:',args);
}
setTimeout(() => {
    f();
})
