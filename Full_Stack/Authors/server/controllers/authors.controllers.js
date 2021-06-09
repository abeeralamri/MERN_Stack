const {Author} = require('../models/Author');

module.exports = {
    createAuthor : (req, res) => {
        Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
    },

    allAuthor : (req, res) => {
        Author.find({})
        .then(allAuthor => res.json(allAuthor))
        .catch(err => res.status(400).json(err));
    },


    editAuthor : (req, res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
    },

    DeleteAuthor : (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(delAuthor => res.json(delAuthor))
        .catch(err => res.status(400).json(err));
    }
}