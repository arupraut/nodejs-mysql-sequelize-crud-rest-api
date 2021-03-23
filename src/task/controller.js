const service = require('./service');
const messages = require('./language');
const { csvConvertor } = require('../../helper/functions')

const controller = {
    list: (req, res, next) => {
        try {
            // throw new Error('I am uncaught.');
            
            // setTimeout(function() {
            //     var err = new Error('Hello') 
            //     throw err 
            // }, 1000)

            // Building search query
            var query = {}
            var where = { $and: [] }
            var order = []
            
            if (req.query.search) {
                where.$or = []
                where.$or.push({ task_title: { $like: `%${req.query.search}%` } })
                where.$or.push({ task_description : { $like: `%${req.query.search}%` }})
            }
            if(req.query.status)
                where.$and.push({ status: req.query.status })
            if(req.query.fromdate)
                where.$and.push({ created_at: { $gte: req.query.fromdate } })
            if(req.query.todate)
                where.$and.push({ created_at: { $lte: req.query.todate } })
            
            if (req.query.order) {
                order.push([req.query.order.split('|')])
            } else {
                order.push(['created_at', 'DESC'])
            }
                
            query.where = where
            query.order = order
            
            service.list(query).then(response => {
                if (req.query.export){
                    let csvData = csvConvertor(response)
                    res.setHeader("Content-Type", "text/csv");
                    res.setHeader("Content-Disposition", "attachment; filename=task.csv");
                    res.status(200).end(csvData);
                }else{
                    res.send(response).end();
                }
            })
            .catch(err => {
                res.send(err).end();
            })
        } catch (err) {
            console.log('Error: L1', err)
            next(err)
        }
    },
    add: (req, res, next) => {
        try {
            let data = {}
            data = req.body
            data.added_by = req.user.id
            data.created_at = Date()
            data.status = 'assigned'
            service.add(data)
                .then(response => {
                    res.send(response).end();
                })
                .catch(err => {
                    res.send(err).end();
                })
        } catch (err) {
            console.log('Error: L1', err)
            next(err)
        }
        
    },
    update: (req, res, next) => {
        try {
            var query = { where: { id: req.params.id, added_by: req.user.id } }
            let data = req.body
            data.updated_at = Date()
            if (data.status == "completed") {
                data.task_completed_at = Date()
                let TODAY_START = new Date().setHours(0, 0, 0, 0);
                let NOW = new Date();
                query.where.created_at = { $gt: TODAY_START, $lt: NOW }
                query.where.status = { $ne: 'deleted' }
            }
            if (data.status == "deleted") {
                res.send({status: false, message: messages.YOU_CANT_DELETE_TASK_FROM_HERE}).end();    
            }
            service.update(data, query)
                .then(response => {
                    if (response[0]==0 && data.status == "completed") {
                        res.send({status: false, message: messages.RECORD_UPDATE_FAILD}).end();
                    } else {
                        res.send({status: true, message: messages.RECORD_UPDATE_SUCCESSFULLY}).end();
                    }
                })
                .catch(err => {
                    res.send({status: false, message: messages.RECORD_UPDATE_FAILD}).end();
                })
        } catch (err) {
            console.log('Error: L1', err)
            next(err)
        }
    },
    delete: (req, res, next) => {
        try {
            let query = { where: { id: req.params.id, added_by: req.user.id, status: 'assigned', status: { $ne: 'completed' } } }
            let data = { status: 'deleted', updated_at: Date() }
            service.update(data, query)
                    .then(response => {
                        if (response[0]==0) {
                            res.send({status: false, message: messages.YOU_CANT_DELETE_TASK}).end();    
                        } else {
                            res.send({status: true, message: `${response[0]} ${messages.RECORD_DELETE_SUCCESSFULLY}`}).end();    
                        }
                    })
                    .catch(err => {
                        res.send({status: false, message: messages.DELETE_OPRATION_FAILD}).end();
                    })
        } catch (err) {
            console.log('Error: L1', err)
            next(err)
        }
    }
}
module.exports = controller;