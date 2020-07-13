const Exercise = require("../models/Exercise");
const User = require('../models/user');
const moment = require("moment");


module.exports = function (id, description, duration, date) {

  let parsedDate = moment();
  //check date
  if (date) {
    parsedDate = moment(date);
    console.log("date recieved: " + parsedDate);
  }

  //make exercise object
  const exercise = new Exercise(description,duration,parsedDate);
  
  return new Promise((resolve,reject)=>{
    //see if user exists
    console.log("id recieved: " + id);
    

  });

};
