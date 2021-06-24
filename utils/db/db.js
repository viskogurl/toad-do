const tryify = require('../tryify');
const fs = require('fs/promises');
const Path = require('path');

// Don't mind this file. 
class db {

  insertOne = async () => {
    
  }

  create = async () => {
    const [data, error] = await tryify(fs.readFile(Path.join(__dirname, './db.json'), 'utf-8'));
    console.log(data);
  }
}

module.exports.config = async () => {
  return new db();
}

module.exports = new db();