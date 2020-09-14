// 来 看下什么叫回调地狱
// $.get(url1, (data1) => {
//     console.log(data1);
//     $.get(url2, (data2) => {
//         console.log(data2);
//         $.get(url3, (data3) => {
//             console.log(data3);
//             // ...
//         })
//     })
// })

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url,
//             success(data) {
//                 resolve(data)
//             },
//             error(err) {
//                 reject(err)
//             }
//         })
//     })
// }
// getData(url1).then(data1 => {
//     console.log(data1);
//     return getData(url2);
// }).then(data2 => {
//     console.log(data2);
//     return getData(url3);
// }).then(data3 => {
//     console.log(data3);
//     return getData(url4);
// }).then(data4 => {
//     console.log(data4);
// }).catch(err => console.error(err));

// 异步加载图片

// function getData(url) {
//     return new Promise((resolve, reject) => {
//         const img = document.createElement('img');
//         img.onload = () => {
//             resolve(img);
//         }
//         img.onerror = () => {
//             const err = new Error(`图片加载失败${url}`)
//             reject(err);
//         }
//         img.src = url;
//     })
// }

// getData('http://youimg1.c-ctrip.com/target/tg/242/806/187/9dcd6cea7ef048bfa395d3e2d1976027.jpg').then(img => {
//     document.body.appendChild(img)
// }).catch(err => console.error(err));