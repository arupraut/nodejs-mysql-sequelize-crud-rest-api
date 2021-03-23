const db = require('../../config/database');
const language = require('./language');
const Task = db.task;

const service = {
    list: (query) => {
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
    },
    update: (data, query) => {
        return new Promise( (resolve, reject) => {
            Task.update(data, query)
                .then(resolve)
                .catch(reject)
        })
    }
}

module.exports = service;