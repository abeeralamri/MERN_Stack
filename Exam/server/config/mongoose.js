const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Pet_Shelter', {
    useNewUrlParser : true,
    useUnifiedTopology:true
})
 
    .then(() => console.log('Connect to the database: Pet Shelter'))
    .catch((err) => console.log("Didn't successfully connect", err));

