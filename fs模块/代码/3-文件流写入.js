const fs = require('fs');
//创建写入流对象
const ws = fs.createWriteStream('./观书有感.txt');
//write
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问渠那得清如许\r\n')
ws.write('为有源头活水来\r\n')

//关闭通道
// ws.close();