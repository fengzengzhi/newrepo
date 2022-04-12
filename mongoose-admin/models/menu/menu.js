var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//定义emp的Schema
var menuSchema = new Schema({
    id: Number,
    icon: String,
    menuName: String,
    path:String,
    isDel:Number,
    children:[
        {
            id: Number,
            icon: String,
            menuName: String,
            path:String,
            children:{}
        }
    ]
            
});

//使用schema创建模型
const MenuModel = mongoose.model('menu',menuSchema);
//暴露Model
module.exports = MenuModel;