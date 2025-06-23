const fs = require('fs')

// 相对路径 创建一个html文件
// fs.writeFileSync('./index.html','i love you')

//绝对路径 ’全局变量' 保存的是：所在文件的所在目录的绝对路径
// console.log(__dirname + '/index.html')
fs.writeFileSync(__dirname + '/index.html', 'love')