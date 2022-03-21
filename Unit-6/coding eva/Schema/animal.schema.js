
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  status: Boolean,
  subTask: String,
});
module.exports=todoSchema 
