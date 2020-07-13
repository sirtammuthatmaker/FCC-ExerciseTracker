const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    count: {type: Number},
    name: {type: String},
    log: {type: Array}

});

module.exports = mongoose.model('User',userSchema);