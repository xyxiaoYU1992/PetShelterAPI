var mongoose = require("mongoose");
var petsSchema = mongoose.Schema({
	id: {type: Number, require: true, unique: true},
    name: { type: String, require: true, unique: true },
    type: { type: String, require: true },
    breed:{ type: String, require: true},
    //createdAt: {type: Date, default: Date.now },
    location: String,
    latitude: Number,
    longitude: Number
});

var Pets = mongoose.model("Pets", petsSchema);
module.exports = Pets;