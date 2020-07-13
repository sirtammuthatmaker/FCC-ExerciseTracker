const User = require('../models/user');

module.exports = function(username) {

    return new Promise((resolve, reject)=>{

        const newUser = new User({count:0,name:username,log:[]});
        console.log(newUser);
        newUser.save()
        .then(result=>resolve(result))
        .catch(err => reject(err));

    })
    
}