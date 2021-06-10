const {Pet} = require('../models/PetShelter');


module.exports = {
    createPet : (req, res) => {
        Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
    },
   
    AllPet : (req, res) => {
        Pet.find({})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
    },
    OnePet : (req, res) =>{

        Pet.findOne({_id : req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
    }, 

    DeletePet : (req, res) => {
        Pet.deleteOne({_id : req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));

    },
    updatePet : (req, res) => {
        Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
    },
    
}