let a = [1, 2, 3, 4];
let b = [4, 5, 6, 7];

// 合成数组
let c = a.concat(b);
console.log('合成数组为:'+c);

// 去重
let d = [...new Set(a.concat(b))];
let d1 = a.concat(b.filter(i => !a.includes(i)));
let d2 = Array.from(new Set(a.concat(b)));
console.log('去重/并集为:' + d);
console.log('去重/并集为:' + d1);
console.log('去重/并集为:' + d2);

// 交集 (每个a都被执行一次函数，函数为b中是否存在a中的任意值)
let e = a.filter(i => b.includes(i));
let e1 = Array.from(new Set(a.filter(i => new Set(b).has(i))));
console.log('交集为:' + e);
console.log('交集为:' + e1);

// 差集（属于a不属于b的差集）
let f = (a.concat(b)).filter(i => a.includes(i));
console.log('差集为:' + f);

