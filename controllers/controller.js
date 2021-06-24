const coordinator = require('../coordinators/coordinator');
const tryify = require('../utils/tryify');

module.exports.get_list = async (req, res) => {
    const [data, error] = await tryify(coordinator.get_list(req, res));
    console.log(data, error);
    if (data) {res.json({data});}
    if (error) {res.json({error});}
}

module.exports.get_todo = async (req, res) => {
    console.log('hello')
}

module.exports.post_todo = async (req, res) => {
}

module.exports.put_todo = async (req, res) => {
}

module.exports.patch_todo = async (req, res) => {
} 

module.exports.delete_todo = async (req, res) => {
} 