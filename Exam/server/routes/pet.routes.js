const PetsControllers = require('../countrollers/pet.countroller');

module.exports = function(app)  {
    app.get('/', PetsControllers.AllPet);
    app.get('/pets/:id', PetsControllers.OnePet);
    app.post('/pets/new', PetsControllers.createPet);
    app.delete('/pets/delete/:id', PetsControllers.DeletePet);
    app.put('/pets/edit/:id', PetsControllers.updatePet);

}