const {Product} = require('../models/Product');

module.exports = {
    createProduct : (req, res) =>{
         
        Product.create(req.body)
        .then(product => (res.json(product)))
        .catch(err => (res.json(err)));
    },

    allProduct : (req, res) =>{
        Product.find({})
        .then(product => res.json(product))
        .catch(err =>res.json(err))
    },

    getProduct : (req, res) =>{
        Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
    }, 

    updateProduct : (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.json(err))
    },
    deleteProduct : (req, res) =>{
        Product.deleteOne({_id: req.params.id})
        .then(removeProduct => (res.json(removeProduct)))
        .catch(err => (res.json(err)))
    }
}