const User = require('../models/user');
const { isValidObjectId } = require('mongoose');

module.exports = function (userId) {
  return new Promise((resolve, reject) => {
    //check if ID valid

    if (isValidObjectId(userId)) {
      User.findById(userId)
        .then((user) => {
          if (user) {
            resolve(user);
          } else {
            throw new Error("Id not found!");
          }
        })
        .catch((err) => {
          reject(err.message);
        });
    } else {
      reject("ID is invalid!");
    }
  });
};
