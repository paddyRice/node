const http = require('http');
const server = http.createServer((request,response)=>{
    //实例化url 的对象
   let url = new URL(request.url,'http://127.0.0.1');
    //输出路径
    //console.log(url.pathname)
    
    //输出查询字符串
    console.log(url.searchParams.get('keyword'))

    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('url new');

})

//监听端口，启动服务
server.listen(3000,()=>{
    console.log('服务已经启动')
})