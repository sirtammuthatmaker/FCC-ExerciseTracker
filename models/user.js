const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    count: {type: Number},
    username: {type: String},
    log: {type: Array}

});

module.exports = mongoose.model('User',userSchema);