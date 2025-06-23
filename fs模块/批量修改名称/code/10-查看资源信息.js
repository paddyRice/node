const fs = require('fs');
//stat 方法   status 

fs.stat('../资料/12月10日.mp4', (err, data) => {
    if (err) {
        console.log('操作失败')
        return;
    }
    console.log(data);
    //isFile()
    console.log(data.isFile())//是否是一个文件
    console.log(data.isDirectory());//是否是一个文件夹
})