// 此题仅需要在原数组中修改
// 1、先找出最大值并且调换位置
// 2、然后重复执行
let html = "";
let arr = [1, 4, 7, 9, 2, 5, 3, 8, 6];
for (let i = 0; i < arr.length - 1; i++) {
    // 是否进行了位置交换
    let done = true;
    // 先找出最大的数字并且扔到最后
    for (let j = 0; j < arr.length - i - 1; j++) {
        // 进行位置交换
        if (arr[j] > arr[j + 1]) {
            let max = arr[j];
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            // 位置交换了
            done = false;
            console.log('当前调整最大值为：' + max + '=>' + arr);
        }
    }
    if (done) {
        break;
    }
}