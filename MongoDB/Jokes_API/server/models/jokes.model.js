const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	joke : String,

});

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;