var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//定义emp的Schema
var empSchema = new Schema({
    id: Number,
    icon: String,
    empName: String,
    isDel:Number,
    children:[
        {
            id: Number,
            icon: String,
            mempName: String,
            children:{}
        }
    ]
            
});

//使用schema创建模型
const MenuModel = mongoose.model('menu',menuSchema);
//暴露Model
module.exports = MenuModel;