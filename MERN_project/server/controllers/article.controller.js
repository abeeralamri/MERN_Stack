const Article = require('../models/article.model');

module.exports = {

    index: (req, res) => {
        res.json("Welcome to Article API");
    },

    getAll: (req, res) => {
        Article.find()
        .then(allArticles => res.json(allArticles))
        .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Article.findOne({_id: req.params.id})
        .then(pet => res.json(pet))
        .catch( err => res.status(400).json(err))
    },

    create: (req, res) => {
        Article.create(req.body)
        .then( pet => res.json(pet))
        .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        Article.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(updatedArticle => res.json(updatedArticle))
        .catch( err => res.status(400).json(err))
    },
    
    delete: (req, res) => {
        Article.deleteOne({ _id: req.params.id})
            .then(delConfirm => res.json(delConfirm))
            .catch( err => res.status(400).json(err))
    }
}