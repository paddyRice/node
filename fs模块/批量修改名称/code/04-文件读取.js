const fs = require('fs');
//读取文件
fs.readFile('./观书有感.txt',(err,data)=>{
    if(err){
        console.log('读取失败')
        return
    }
    console.log(data)//是个buff数据需要用toString()转换一下
    console.log(data.toString())

})