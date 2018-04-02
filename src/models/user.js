var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var user_schema = new Schema({
nombre: String,
email: {type: String, unique: true},
password: Number,
estado: Number,
imagen: String,
tel: String,
ciudad: String
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;
