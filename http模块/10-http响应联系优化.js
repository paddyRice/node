//需求：搭建一个 http 服务，响应一个 4 行 3 列的表格，并且要求表格有隔行换色效果，且点击单元格能高亮显示
const http = require('http');
const fs = require('fs')
//2.创建服务对象
const server = http.createServer((request,response) =>{
    let html = fs.readFileSync(__dirname+'/test.html');
    console.log(html)
    response.end(html);
            
})
server.listen(9000,()=>{
    console.log('服务已经启动 9000')
})