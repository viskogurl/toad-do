'use strict';

const Todo = require('../models/Todo');
const tryify = require('../utils/tryify');

module.exports.getTodos = async () => {
    const [data, error] = await tryify(Todo.find({}));
    if (data) { return data; }
    else { throw new Error(error); }
}

module.exports.postTodo = async (todo) => {
    const [data, error] = await tryify(Todo.create(todo));
    if (data) { return data; }
    else { throw new Error(error); }
}

module.exports.getTodo = (req, res) => {
}

module.exports.putTodo = async (req, res) => {
}

module.exports.patchTodo = (req, res) => {
} 

module.exports.deleteTodo = (req, res) => {
} 