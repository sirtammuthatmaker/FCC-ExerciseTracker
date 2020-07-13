const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    description: {type: String},
    duration: {type: Number},
    date: {type: String}
});

module.exports = mongoose.model("Exercise",exerciseSchema);