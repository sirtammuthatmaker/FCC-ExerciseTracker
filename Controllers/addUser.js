const User = require("../models/user");

module.exports = function (username) {
  return new Promise((resolve, reject) => {
    //Check if user exists
    if (User.exists({ name: username })) {
      reject("User name exists");
    } else {
      const newUser = new User({ count: 0, name: username, log: [] });

      newUser
        .save()
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    }
  });
};
