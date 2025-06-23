const http = require('http');
//1.导入url模块
const url = require('url')
const server = http.createServer((request,response)=>{
    //2.解析url
    // console.log(request.url)
    let res = url.parse(request.url,true)
    // console.log(res)
    //路径
    // console.log(res.pathname)
    //查询字符串
    console.log(res.query.keyword)


    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('url');

})

//监听端口，启动服务
server.listen(3000,()=>{
    console.log('服务已经启动')
})