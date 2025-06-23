const fs = require('fs');
//2.创建读取流对象
const rs = fs.createReadStream('../资料/12月10日.mp4');
//3.绑定data事件，chunk 快儿
rs.on('data',chunk=>{
    console.log(chunk.length)
})
//4.end 可选事件
rs.on('end',()=>{
    console.log('读取完成')
})