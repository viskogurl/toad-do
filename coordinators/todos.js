'use strict';

const Todo = require('../models/Todo');
const { tryify, throwify } = require('../utils/klar');
const { v4: uuidv4 } = require('uuid');

/**
 * Gets all todos.
 * @returns An array of todos or throws an error.
 */
module.exports.getTodos = async () => {
    const [data, error] = await tryify(Todo.find({}));
    return data ?? throwify(error);
}

/**
 * Posts a todo.
 * @param {object} todo - Todo object containing a color and contents.
 * @returns An array of todos or throws an error.
 */
module.exports.postTodo = async (todo) => {
    const { color, contents } = todo;
    const [data, error] = await tryify(Todo.create({ todoID: uuidv4(), color, contents }));
    return data ?? throwify(error);
}

/**
 * Gets a single todo.
 * @param {string} id - The ID of the todo to be found.
 * @returns An array of todos or throws an error.
 */
module.exports.getTodo = async (id) => {
    const [data, error] = await tryify(Todo.findOne({ todoID: id }));
    return data ?? throwify(error);
}

/**
 * Replaces a todo with another.
 * @param {string} id - The ID of the string to be replaced.
 * @param {string} color - Color of the new todo.
 * @param {string} contents - Contents of the new todo.
 * @returns An array of todos or throws an error.
 */
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

/**
 * Updates a todo.
 * @param {string} id - The ID of the string to be updated.
 * @param {string} color - Color of the updated todo
 * @param {string} contents - Contents of the updated todo.
 * @returns An array of todos or throws an error.
 */
module.exports.patchTodo = async (id, color, contents) => {
    const todo = (color && contents) ?  { color, contents }
        : color ? { color }
        : { contents };
    const [data, error] = await tryify(Todo.findOneAndUpdate({ todoID: id }, todo, { new: true }));
    return data ?? throwify(error);
} 

/**
 * Deletes a specified todo.
 * @param {string} id - ID of the todo to be deleted.
 * @returns An array of todos or throws an error.
 */
module.exports.deleteTodo = async (id) => {
    const [data, error] = await tryify(Todo.findOneAndDelete({ todoID: id }));
    return data ?? throwify(error);
} 