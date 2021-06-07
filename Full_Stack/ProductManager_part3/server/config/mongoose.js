const mongoose = require('mongoose');


mongoose.connect(`mongodb://localhost/product`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Connected to Mongo Database: Product`))
    .catch( err => console.log("Didn't successfully connect...", err));