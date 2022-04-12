const express = require('express');
const router = express.Router();
const mongoose = require(process.cwd()+'/mogobase');
const userModel = require(process.cwd()+'/models/admin');


//登录
router.post('/v1/login',async(req,resp)=>{
    let postData = req.body;
    console.log(postData);
    try{
        const user = await userModel.findOne(postData);
        if(user != null ){
            resp.send({
                status:200,
                msg:'登录成功',
                data:postData
            })
        }else{
            resp.send({
                status:500,
                msg:'用户名密码有误',
                data:postData
            })
        }
    }catch(error){
        resp.send({
            status:500,
            msg:'查询',
            data:postData
        })
        console.log(error);
    }
})

//分页查询所有用户   分页参数传递，必须有pageSize  pageIndex
router.get('/v1/user',async(req,res)=>{
    //接收get参数
    let getData = req.query;
    console.log(getData);
    try {
       let result = await userModel.find(getData).skip((getData.pageIndex-1)*getData.pageSize)
       .limit(parseInt(getData.pageSize));
        res.send({result:{
            status:200,
            msg:'分页查询成功',
            data:result
        }})
    }catch(ex) {
        res.send({
            status:500,
            msg:'分页查询失败',
            data:ex
        })
    }
}) 
//根剧编号查询
router.get('/v1/user/:gid',async(req,res)=>{
    //接收post参数
    let getData = req.params;
    console.log(getData);
    try {
       let result = await userModel.findOne(getData);
        res.send({
            status:0,
            msg:'查询成功',
            data:result
        })
    }catch(ex) {
        res.send({
            status:1,
            msg:'查询失败',
            data:ex
        })
    }
})
//暴露路由
module.exports = router