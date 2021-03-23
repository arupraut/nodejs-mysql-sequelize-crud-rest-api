const db = require('../../config/database');
const language = require('./language');
const Task = db.auth;

const service = {
    get: (query) => {
        return new Promise( (resolve, reject) => {
            Task.findAll({ ...query })
                .then(resolve)
                .catch(reject)
        })
    },
    add: (data) => {
        return new Promise( (resolve, reject) => {
            Task.create({ ...data })
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = service;