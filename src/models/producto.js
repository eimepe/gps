var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/avantecn");

var producto_schema = new Schema({
nombre: String,
text: String,
categoria: Number,
estado: Number,
imagen: String,
precio: String,
cantidad: String
});

var Producto = mongoose.model("Producto", producto_schema);

module.exports.Producto = Producto;
