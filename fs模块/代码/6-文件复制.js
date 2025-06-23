//复制 资料 中的一个视频文件 

const fs =  require('fs')
const process = require('process');//node的内置模块，可以查看占用内存空间
// let data = fs.readFileSync('../资料/12月10日.mp4');
// fs.writeFileSync('./12月10日.mp4',data)


//方法二：使用流式复制
//创建读取流对象
const rs = fs.createReadStream('../资料/12月10日.mp4');
//创建写入的流对象
const ws = fs.createWriteStream('../资料/12月11日.mp4');

//绑定data事件
rs.on('data',chunk=>{
    ws.write(chunk);
})
// rs.on('end',()=>{
    // console.log(process.memoryUsage())
// }) 

rs.pipe(ws);//把读取流交给写入流，pipe管道的意思