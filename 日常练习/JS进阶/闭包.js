// 柯里化
let plan = (a) => (b) => console.log(`${a}：${b}`);
plan('name')('zyf');
plan('age')(18);

// in 
let obj = {
    name: 'zyf'
}
console.log('name' in obj);

// symbol
obj.password = Symbol('123456');
console.log(obj.password);

// every 所有值满足 some 存在一个值满足
let arr = [1, 2, 789, 3, 4, 5, 6];
let result = arr.every((i) => i < 500);
console.log(result);
let result1 = arr.some((i) => i < 500);
console.log(result1);

// 扁平化数组
let oneArr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(oneArr.flat().flat().flat());
console.log(oneArr.flat(Infinity));
