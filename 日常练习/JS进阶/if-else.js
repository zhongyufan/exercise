let arr = ['red', 'black', 'yellow'];
let ae = arr.every(i => i == 'red');
let as = arr.some(i => i == 'red');
let af = arr.find(i => i == 'red');
let afi = arr.findIndex(i => i == 'red');
console.log('every', ae);
console.log('some', as);
console.log('find', af);
console.log('findIndex', afi);