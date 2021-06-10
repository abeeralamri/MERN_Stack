const mongoose = require('mongoose');
const Validator = require('mongoose-unique-validator');

const PetShelterrSchema = new mongoose.Schema({
    PetName: {
        type : String,
        required : [true, 'The name is required '],
        minlength: [3, "Name must be at least 3 chartacters"],
        unique: true
       
    },
    PetType: {
        type: String,
        required : [true, 'The name is required '],
        minlength: [3, "Type must be at least 3 chartacters"],

    }, 
    desc : {
        type : String,
        required : [true, 'The name is required '],
        minlength: [3, "Description must be at least 3 chartacters"],
      
    },

    skill_1 : {
        type : String,
      
    },
    skill_2 : {
        type : String,
      
    },
    skill_3 : {
        type : String,
      
    }
}, {timestamps:true}); 
PetShelterrSchema.plugin(Validator, {message : "The name is already taken"})
module.exports.Pet = mongoose.model('Pet' , PetShelterrSchema);
