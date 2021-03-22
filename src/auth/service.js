const db = require('../../config/database');
const language = require('./language');
const Task = db.auth;

const service = {
    get: (query) => {
        try {
            return new Promise( (resolve, reject) => {
                Task.findAll({ ...query })
                    .then(resolve)
                    .catch(reject)
            })
        } catch (err) {
            console.log('Error: L2', err)
        }
    },
    add: (data) => {
        try {
            return new Promise( (resolve, reject) => {
                Task.create({ ...data })
                    .then(resolve)
                    .catch(reject)
            })
        } catch (err) {
            console.log('Error: L2', err)
        }
    }
}

module.exports = service;