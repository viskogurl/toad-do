const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todoID: {
    type: String,
    required: [true, 'Error adding uuid'],
  },
  color: {
    type: String,
    required: [true, 'Please Enter A Color'],
  },
  contents: {
    type: String,
    required: [true, 'Please Enter A Toad-Do'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
