//1、导入模块
const mongoose = require('mongoose');
//2、连接数据库 mongodb://user:pass@localhost:port/database
mongoose.connect('mongodb://admin:123456@localhost:27017/adminDB?authSource=admin')
.then(()=>{
    console.log('连接成功');
}).catch(err=>{
    console.log('连接失败');
});

module.exports = mongoose;