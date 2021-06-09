const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [3, "Name must be at least 3 chartacters"]

    },
   

}, {timestamps:true});

module.exports.Author = mongoose.model('Author', AuthorSchema)

