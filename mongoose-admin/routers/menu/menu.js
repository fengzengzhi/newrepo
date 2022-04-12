const express = require('express');
const router = express.Router();
const mongoose = require(process.cwd()+'/mogobase');
const menuModel = require(process.cwd()+'/models/menu/menu.js');


//查询菜单
router.get('/v1/menu',async(req,resp)=>{
    try{
        const result = await menuModel.find();
        console.log(result);
        resp.send({
            status:200,
            msg:'菜单查询成功',
            data:result
        })
    }catch(err){
        resp.send({
            status:500,
            msg:'菜单查询失败',
            data:err
        })
    }
})

//暴露路由
module.exports = router