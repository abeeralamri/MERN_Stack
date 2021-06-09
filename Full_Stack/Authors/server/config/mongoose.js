const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/author', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connect to the database: Author"))
    .catch((err) => console.log("Didn't successfully connect", err));
