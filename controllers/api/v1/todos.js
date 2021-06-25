'use strict';

const coordinator = require('../../../coordinators/todos');
const tryify = require('../../../utils/tryify');

module.exports = (router) => {
  router.get('/', getTodos);
  router.post('/', postTodo);
  router.get('/:id', getTodo);
  router.put('/:id', putTodo);
  router.patch('/:id', patchTodo);
  router.delete('/:id', deleteTodo);
};

const getTodos = async (req, res, next) => {
  const [data, error] = await tryify(coordinator.getTodos());
  if (data) {
    res.status(200).json({ data });
  } else {
    res.status(400).json({ "errors": String(error.message) });
  }
};

const postTodo = async (req, res, next) => {
  const todo = req.body;
  const [data, error] = await tryify(coordinator.postTodo(todo));
  if (data) {
    res.status(200).json({ data });
  } else {
    res.status(400).json({ "errors": String(error.message) });
  }
};

const getTodo = async (req, res, next) => {
  console.log('getTodo');
};

const putTodo = async (req, res, next) => {
  console.log('putTodo');
};

const patchTodo = async (req, res, next) => {
  console.log('patchTodo');
};

const deleteTodo = async (req, res, next) => {
  console.log('deleteTodo');
};
