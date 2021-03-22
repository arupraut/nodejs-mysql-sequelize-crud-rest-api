const jwt = require('jsonwebtoken');
const language = require('./language');

module.exports = {
    authGuard: (req, res, next) => {
        try {
            var token = null
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                token = req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                token = req.query.token;
            } else {
                return res.send({ status: false, message: language.PROVIDE_TOKEN});
            }
            
            const verificationResponse = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verificationResponse.data;
            next();
        } catch (err) {
            return res.send({ status: false, message: err});
        }   
    }
}