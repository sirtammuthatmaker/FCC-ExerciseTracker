const User = require("../models/user");


module.exports = function () {
  return new Promise((resolve, reject) => {
    //Get all users
    const users = User.find();
    

    users.then((result) => {
      
      //Check if users exists
      if (result.length === 0) {
        throw new Error("No Users exists");
      } else {
        resolve(result);
      }
    })
    .catch(err => reject(err));
  });
};
