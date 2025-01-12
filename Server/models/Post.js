const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  number: {type:Number, require: false},
  profession: { type: String, required: true },
  longtext: String,
  writer: String,
  edition: String,
});

module.exports = mongoose.model("Post", postSchema);
