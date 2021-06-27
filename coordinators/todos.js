'use strict';

const Todo = require('../models/Todo');
const { tryify, throwify } = require('../utils/klar');
const { v4: uuidv4 } = require('uuid');

module.exports.getTodos = async () => {
    const [data, error] = await tryify(Todo.find({}));
    return data ?? throwify(error);
}

module.exports.postTodo = async (todo) => {
    const { color, contents } = todo;
    const [data, error] = await tryify(Todo.create({ todoID: uuidv4(), color, contents }));
    return data ?? throwify(error);
}

module.exports.getTodo = async (id) => {
    const [data, error] = await tryify(Todo.findOne({ todoID: id }));
    return data ?? throwify(error);
}

module.exports.putTodo = async (id, color, contents) => {
    const todo = {
        todoID: uuidv4(),
        color,
        contents,
        date: new Date().toISOString()
    };
    const [data, error] = await tryify(Todo.findOneAndReplace({ todoID: id }, todo, { new: true }));
    return data ?? throwify(error);
}

module.exports.patchTodo = async (id, color, contents) => {
    const todo = (color && contents) ?  { color, contents }
        : color ? { color }
        : { contents };
    const [data, error] = await tryify(Todo.findOneAndUpdate({ todoID: id }, todo, { new: true }));
    return data ?? throwify(error);
} 

module.exports.deleteTodo = async (id) => {
    const [data, error] = await tryify(Todo.findOneAndDelete({ todoID: id }));
    return data ?? throwify(error);
} 