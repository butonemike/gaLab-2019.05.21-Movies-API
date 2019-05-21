var Performer = require('../../models/performer');

module.exports = {
    getAllPerformers,
    getOnePerformer,
    createPerformer,
    updatePerformer,
    deletePerformer
};

function getAllPerformers(req, res) {
    Performer.find({})
    .then(function(performers) {
        res.status(200).json(performers);
    });
}  

function getOnePerformer(req, res) {
    Performer.findById(req.params.id)
    .then(function(performer) {
        res.status(200).json(performer);
    });
}

function createPerformer(req, res) {
    Performer.create(req.body)
    .then(function(performer) {
        res.status(201).json(performer);
    });
}

function updatePerformer(req, res) {
    Performer.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(function(performer) {
        res.status(200).json(performer);
    })
}

function deletePerformer(req, res) {
    Performer.findByIdAndDelete(req.params.id)
    .then(function(performer) {
        res.status(200).json(performer);
    });
}

