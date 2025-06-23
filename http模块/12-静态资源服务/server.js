const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((request,response)=>{
    if(request.method != "GET"){
        response.statusCode = 405;
        response.end('<h1>405 请求方式不正确</h1>')
        return
    }
    //获取 url的路径
    let {pathname} = new URL(request.url,'http://127.0.0.1');
    let root = __dirname + '/page'
    let filePath = root+pathname
    fs.readFile(filePath,(err,data)=>{
        response.setHeader('content-type','text/html;charset=utf-8');
        if(err){
            console.log(err);
            switch(err.code){
                case 'ENOENT':
                    response.statusCode = 404;
                    response.end('<h1>404 not found</h1>')
                case 'EPERM':
                    response.statusCode = 403;
                    response.end('<h1>403 禁止访问</h1>')
            }
          
            response.statusCode = 500;
            response.end('读取失败');
            return
        }
        //获取文件后缀名
        let ext = path.extname(filePath).slice(1);
        // console.log(ext)
        response.end(data)
        
    })
})
server.listen(9000,()=>{
    console.log('服务已经启动。。。')
})