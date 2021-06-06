const { Product } = require('../models/model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
module.exports.createProduct = (request, response) => {
    const { title, price, desc } = request.body;
    Product.create({
        title,
        price,
        desc,

    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (req, res) => {
    Product.find({})
        .then(product => res.json(product))
        .catch(err => res.json(err))
};

module.exports.getProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}