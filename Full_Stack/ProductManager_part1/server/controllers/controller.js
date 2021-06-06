const { Product } = require('../models/model');

   
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