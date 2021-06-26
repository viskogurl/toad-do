'use strict';

const coordinator = require('../../../coordinators/todos');
const { tryify, resify } = require('../../../utils/klar');

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
  resify(res, data, error);
};

const postTodo = async (req, res, next) => {
  const todo = req.body;
  const [data, error] = await tryify(coordinator.postTodo(todo));
  resify(res, data, error);
};

const getTodo = async (req, res, next) => {
  const id = req.params.id;
  const [data, error] = await tryify(coordinator.getTodo(id));
  resify(res, data, error);
};

const putTodo = async (req, res, next) => {
  const id = req.params.id;
  const { contents } = req.body;
  const [data, error] = await tryify(coordinator.putTodo(id, contents));
  resify(res, data, error);
};

const patchTodo = async (req, res, next) => {
  const id = req.params.id;
  const { contents } = req.body;
  const [data, error] = await tryify(coordinator.patchTodo(id, contents));
  resify(res, data, error);
};

const deleteTodo = async (req, res, next) => {
  const id = req.params.id;
  const [data, error] = await tryify(coordinator.deleteTodo(id));
  resify(res, data, error);
};
