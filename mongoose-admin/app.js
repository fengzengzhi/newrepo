
//1、引入express模块
const express = require('express')
//2、创建服务器
const app = express();
//静态资源托管
// app.use(express.static('public'));
// app.use(express.static('views'));

//3、配置解析表单数据的中间件
// 解析 url编码
app.use(express.urlencoded({ extended: false }));

//axios传递的post请求 application/json; 
var bodyParser = require("body-parser") 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json())


//4、导入路由模块
const UserRouter = require('./routers/admin'); 
const MenuRouter = require('./routers/menu/menu.js'); 
//5、注册路由模块
app.use('/api', UserRouter);
app.use('/api', MenuRouter);

//6、启动服务
app.listen(8090,()=>{
    console.log('express web正在运行');
})
