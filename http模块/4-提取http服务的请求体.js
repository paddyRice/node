const http = require('http');
const server = http.createServer((request,response)=>{
    //1.声明一个变量
    let body = ''
    //2.绑定data事件
    request.on('data',chunk=>{
        body+=chunk
    })
    //3.绑定end事件
    request.on('end',()=>{
        console.log('body',body);
        response.end('hello http');
    })
  
    

    response.setHeader('content-type','text/html;charset=utf-8')
   

})

//监听端口，启动服务
server.listen(3000,()=>{
    console.log('服务已经启动')
})