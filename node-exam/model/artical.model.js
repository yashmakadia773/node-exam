// models/article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // other fields as needed
});

let artical =  mongoose.model('Article', articleSchema);
module.exports = artical