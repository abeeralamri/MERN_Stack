const ProductController = require('../controllers/controller');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
}