const  fs = require('fs');
//创建文件夹
// fs.mkdir('./html',err=>{
//     if(err){
//         console.log('创建失败')
//         return 
//     }
//     console.log('创建成功')
// })

//创建多层文件件 recursive深度创建
// fs.mkdir('./a/b/c',{recursive:true},err=>{
//     if(err){
//         console.log('创建失败')
//         return
//     }
//     console.log('创建成功')
// })

//读取文件
// fs.readdir('../资料',(err,data)=>{
//     if(err){
//         console.log('读取失败')
//         return;
//     }
//     console.log(data);//得到文件夹下的文件名称 [ '12月10日.mp4', '12月11日.mp4', 'data.txt' ]
// })

//删除文件夹
// fs.rmdir('./html',err=>{
//     if(err){
//         console.log('删除失败')
//         return
//     }
//     console.log('删除成功')
// })

//递归删除文件夹
fs.rm('./a',{recursive:true},err=>{
    if(err){
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})