const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  number: { type: Number, required: true },
  user_img: String,
  user_name: String,
  profession: String,
  longtext: String,
  bookimg: String,
  bookname: String,
  edition: String,
  writer: String,
  prise: String,
  icon: String,
  randomUsers: String,
  noOfCards: String,
  classes: String,
  Background: String,
  nextw: String,
  nexth: String,
  pding: String,
});

module.exports = mongoose.model("Post", postSchema);
