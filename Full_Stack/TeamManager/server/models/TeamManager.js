const mongoose = require('mongoose');

const TeamManagerSchema = new mongoose.Schema({
    TeamName: {
        type : String,
        required : [true, 'The name is required '],
        minlenght: [2, 'Name must be at least 2 characters in lenght']
    },
    Postion: {
        type: String,

    }, 
    status : {
        type : Number,
        type : Number,
        type : Number
    }
}, {timestamps:true}); 

module.exports.Player = mongoose.model('Player' , TeamManagerSchema);
