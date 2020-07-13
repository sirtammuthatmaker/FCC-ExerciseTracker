const Exercise = require("../models/Exercise");
const moment = require("moment");


module.exports = function (id, description, duration, date) {
  //see if user exists
  console.log("id recieved: " + id);

  let parsedDate = moment();
  //check date
  if (date) {
      parsedDate = moment(date);
    console.log("date recieved: " + parsedDate);
  } else {
    
    console.log("date recieved nothing: " + parsedDate);
  }

  //make exercise object
  // const exercise = new Exercise(description,duration,date);
};
