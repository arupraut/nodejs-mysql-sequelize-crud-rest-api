const service = require('./service');
const messages = require('./language');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');

const controller = {
    login: (req, res) => {
        try {
            let query = {}
            query = req.body
            let password = query.password
            delete query.password
            service.get({where: query})
                .then(response => {
                    if(!bcrypt.compareSync(password, response[0].password))
                        res.send({ status: false, message: messages.RECORD_NOT_FOUND }).end();
                    
                    let token = jwt.sign({
                                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                                    data: {id: response[0].id, email: response[0].email}
                                }, process.env.JWT_SECRET);
                    res.send({status: true, token: token}).end();
                })
                .catch(err => {
                    res.send(err).end();
                })
        } catch (err) {
            console.log('Error: L1', err)
        }
        
    },
    registration: (req, res) => {
        try {
            let data = req.body
            data.created_at = Date()
            data.password = bcrypt.hashSync(data.password, salt);
            service.add(data)
                    .then(response => {
                        res.send({status: true, message: messages.RECORD_ADDED_SUCCESSFULLY}).end();
                    })
                    .catch(err => {
                        res.send(err).end();
                    })
        } catch (err) {
            console.log('Error: L1', err)
        }
        
    }
}
module.exports = controller;