const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/product", { useMongoClient : true });

const Schema = mongoose.Schema;

const simpanSchema = new Schema({
    id: String
});

const simpan = mongoose.model("simpan", simpanSchema);

module.exports = simpan;