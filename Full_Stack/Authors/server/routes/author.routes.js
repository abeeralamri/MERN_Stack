const AuthorController = require('../controllers/authors.controllers');

module.exports = function(app) {
    app.post('/new', AuthorController.createAuthor);
    app.get('/', AuthorController.allAuthor);
    app.put('/edit/:id', AuthorController.editAuthor);
    app.delete('/delete/:id', AuthorsControllers.DeleteAuthor)

}