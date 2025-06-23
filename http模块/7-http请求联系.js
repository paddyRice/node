const http = require('http');
//2.创建服务对象
const server = http.createServer((request,response) =>{
    // console.log('request',request)
    //请求方式
    let {method} = request;
    //请求 url路径
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    response.setHeader('content-type','text/html;charset=utf-8')
    console.log(method,pathname)
    if(method == 'GET'&&pathname == '/login'){
        response.end('登录页面')
    }else if(method == 'GET'&&pathname == '/reg'){
        esponse.end('注册页面')
    }else {
        response.end('not found')
    }

    
})
server.listen(9000,()=>{
    console.log('服务已经启动 9000')
})