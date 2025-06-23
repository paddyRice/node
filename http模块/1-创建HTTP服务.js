const http = require('http');
const server = http.createServer((request,response)=>{
    // response.end('hello worldaaaa');
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('中文');

})

//监听端口，启动服务
server.listen(3000,()=>{
    console.log('服务已经启动')
})