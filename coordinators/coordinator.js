const Todo = require('../models/Todo');
const tryify = require('../utils/tryify');

module.exports.get_list = async (req, res) => {
    const [data, error] = await tryify(Todo.create(req.body));
    if (data) {
        return data;
    } else {
        return error;
    }
}

module.exports.get_todo = (req, res) => {
}

module.exports.post_todo = async (req, res) => {
}

module.exports.put_todo = async (req, res) => {
}

module.exports.patch_todo = (req, res) => {
} 

module.exports.delete_todo = (req, res) => {
} 