//需求：搭建一个 http 服务，响应一个 4 行 3 列的表格，并且要求表格有隔行换色效果，且点击单元格能高亮显示
const http = require('http');
//2.创建服务对象
const server = http.createServer((request,response) =>{

    response.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td{
            padding: 20px 40px;
        }
             table tr:nth-child(odd){
            background: blue;
        }
        table tr:nth-child(even){
            background: green;
        }
        table,td{
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <table border="1">
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td></tr>
         <tr><td></td><td></td><td></td></tr>
    </table>
     <script>
        let tds = document.querySelectorAll('td');
        tds.forEach(item=>{
            item.onclick = function(){
                this.style.background = "#000"
            }
        })
    </script>
</body>
</html>`);
            
})
server.listen(9000,()=>{
    console.log('服务已经启动 9000')
})