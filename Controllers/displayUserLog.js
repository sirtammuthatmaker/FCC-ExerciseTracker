const User = require('../models/user');
const { isValidObjectId } = require('mongoose');
const { use } = require('../exerciseRouter');
const moment = require('moment');
module.exports = function (userId,from,to) {
  return new Promise((resolve, reject) => {
    //check if ID valid

    if (isValidObjectId(userId)) {
      User.findById(userId)
        .then((user) => {
          if (user) {

            if(from || to) {
            //parsedates and search
            if(!from) {from = moment(0)}
            const logs = Array.from(user.log);
            const filteredLogs = logs.filter((log) => {
              if((moment(log.date,"ddd MMM DD YYYY") >= moment(from)) && (moment(log.date,"ddd MMM DD YYYY") <= moment(to)) ) {
                return true;
              } else {
                return false;
              }
            });
            

            const queriedLog = user;
            queriedLog.log = filteredLogs;
            queriedLog.count = filteredLogs.length;

            resolve(queriedLog);
          }
          
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
