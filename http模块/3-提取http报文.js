const http = require('http');
const server = http.createServer((request,response)=>{
    //获取请求方式
    // console.log(request.method);//获取请求方式
    // console.log(request.url);//获取请求地址
    // console.log(request.headers);//获取请求头
    

    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('中文');

})

//监听端口，启动服务
server.listen(3000,()=>{
    console.log('服务已经启动')
})