const xlsx = require('xlsx');
const fs = require('fs');

const excelData = fs.readFileSync('./alipay.csv');

const XLSX = xlsx.read(excelData, {
    type: 'buffer',
    cellHTML: false
})

// 获取表名
const name = XLSX.SheetNames[0];

let worksheet = XLSX.Sheets[name];
console.log(worksheet['A6']);