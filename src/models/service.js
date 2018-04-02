var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/avantecn");

var service_schema = new Schema({
nombre: String,
text: String,
categoria: Number,
estado: Number,
imagen: String
});

var Service = mongoose.model("Service", service_schema);

module.exports.Service = Service;
