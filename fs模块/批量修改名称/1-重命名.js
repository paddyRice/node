const fs = require('fs')
//读取code文件夹
const files = fs.readdirSync('./code')
console.log(files)
files.forEach(item,index=>{
    let data  = item.split('-');
    let [num,name] = data;
    if(+num<10){
        num = '0'+num
    }
    let newName = num+'-'+name
    fs.renameSync(`./code/${item}`,`./code/${newName}`)
})