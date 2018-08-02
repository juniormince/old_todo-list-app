const router = require('express').Router();

const Task = require('../models/task.schema');

router.get('/', (req, res) => {
    Task.find({})
        .then((databaseResults) => {
            res.send(databaseResults);
        })
        .catch((error) => {
            console.log('error in find', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    Task.create(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in create', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    Task.findByIdAndRemove(req.query._id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in delete query', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    Task.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in update query', error);
            res.sendStatus(500);
        });
});

module.exports = router;