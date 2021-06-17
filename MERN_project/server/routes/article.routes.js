const ArticleController = require('../controllers/article.controller');

module.exports = app => {
    app.get('/api', ArticleController.index);
    app.get('/api/articles', ArticleController.getAll);
    app.get('/api/articles/:id', ArticleController.getOne);
    app.post('/api/articles/new', ArticleController.create);
    // app.put('/api/pets/update/:id', ArticleController.update);
    app.delete('/api/articles/delete/:id', ArticleController.delete);
};