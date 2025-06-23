const fs = require('fs');
//调用rename 方法
// fs.rename('./座右铭.txt','./论语.txt',err=>{
//     if(err){
//         console.log('操作失败')
//         return 
//     }
//     console.log('操作成功')
// })

//移动

fs.rename('./data.txt','../资料/data.txt',err=>{
    if(err){
        console.log('操作失败');
        return
    }
    console.log('操作成功')
})
