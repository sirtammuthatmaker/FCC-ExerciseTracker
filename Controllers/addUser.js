const User = require("../models/user");

module.exports = function (username) {
  return new Promise((resolve, reject) => {
    User.exists({ username: username }).then((res) => {
      if (res === true) {
        
        reject("User name exists");
      } else if (username === ''){
        reject("Enter valid username!");
      }
      else {
        const newUser = new User({ count: 0, username: username, log: [] });
        

        newUser
          .save()
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
    
  });
};
