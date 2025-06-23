const fs = require('fs');
fs.appendFile('./座右铭.txt',',几天天气很好，洗衣服',err=>{
    if(err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})
//换行
fs.appendFile('./座右铭.txt','\r\n温故而知新',err=>{
    if(err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})