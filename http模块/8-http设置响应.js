const http = require('http');
//2.创建服务对象
const server = http.createServer((request,response) =>{
    response.statusCode = 200;//设置状态码 
    //设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    //响应体
    response.write('love');
    //end方法只能执行一个
    response.end();
    
})
server.listen(9000,()=>{
    console.log('服务已经启动 9000')
})