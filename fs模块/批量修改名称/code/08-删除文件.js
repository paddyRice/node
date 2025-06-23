const fs = require('fs');

// fs.unlink('./观书有感.txt',err=>{
//     if(err){
//         console.log('删除失败')
//         return 
//     }
//     console.log('删除成功')
// })


//第二种方法 调用rm方法 14.4版本  rmSync
fs.rm('./论语.txt',err=>{
    if(err){
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})