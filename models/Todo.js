const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: [true, 'Please enter a todo'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
