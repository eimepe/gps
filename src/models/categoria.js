var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/avantecn");

var categoria_schema = new Schema({
nombre: String,
estado: Number,
imagen: String,
});

var Categoria = mongoose.model("Categoria", categoria_schema);

module.exports.Categoria = Categoria;
