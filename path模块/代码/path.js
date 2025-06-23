const fs = require('fs');
const path= require('path')

console.log(path.resolve(__dirname+'/index.html'))

//parse 解析路径，获取路径的信息
console.log(__filename)//__filename文件的绝对路径
let str = '/Users/liujiansen/Documents/node/练习/path模块/代码/path.js '
console.log(path.parse(str))