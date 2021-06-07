const productControllers = require('../controllers/product.controller');

module.exports = function(app){
    app.post('/api/product', productControllers.createProduct);
    app.get('/api/product', productControllers.allProduct);
    app.get('/api/product/:id', productControllers.getProduct);
    app.put('/api/product/:id/edit', productControllers.updateProduct);
    app.delete('/api/product/:id/delete', productControllers.deleteProduct)

}
