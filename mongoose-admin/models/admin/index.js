var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//定义emp的Schema
var userSchema = new Schema({
    id: Number,
    username: String,
    pwd: String,
    createDate:  { type: Date, default: Date.now },
    isDel: Number
});

//使用schema创建模型
const UserModel = mongoose.model('user',userSchema);
//暴露Model
module.exports = UserModel;
