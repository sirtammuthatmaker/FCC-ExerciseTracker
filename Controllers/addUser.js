const User = require("../models/user");

module.exports = function (username) {
  return new Promise((resolve, reject) => {
    User.exists({ name: username }).then((res) => {
      if (res === true) {
        
        reject("User name exists");
      } else {
        const newUser = new User({ count: 0, name: username, log: [] });
        

        newUser
          .save()
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
    
  });
};
