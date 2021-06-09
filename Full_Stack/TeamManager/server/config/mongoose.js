const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/team', {
    useNewUrlParser : true,
    useUnifiedTopology:true
})
 
    .then(() => console.log('Connect to the database: Team Manager'))
    .catch((err) => console.log("Didn't successfully connect", err));

