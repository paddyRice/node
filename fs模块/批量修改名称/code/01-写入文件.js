const fs = require('fs');
fs.writeFile('./座右铭.txt','择其善者而从之，择期不删而改之',err=>{
    if(err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})