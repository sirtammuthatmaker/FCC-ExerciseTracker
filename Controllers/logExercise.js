const Exercise = require("../models/Exercise");
const User = require("../models/user");
const moment = require("moment");
const { isValidObjectId } = require("mongoose");

module.exports = function (id, description, duration, date) {
  let parsedDate = moment();
  //check date
  if (date) {
    parsedDate = moment(date);
    console.log("date recieved: " + parsedDate);
  }

  //make exercise object
  const exercise = new Exercise(description, duration, parsedDate);

  return new Promise((resolve, reject) => {
    //check if ID valid

    if (isValidObjectId(id)) {
      User.findById(id)
        .then((user) => {
          if (user) {
            //manipulate user data
            user.log.push(exercise);
            ++user.count;
            user.save();
            resolve({
              _id: user._id,
              username: user.name,
              date:exercise.date,
              duration: exercise.duration,
              description: exercise.description
            });
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
