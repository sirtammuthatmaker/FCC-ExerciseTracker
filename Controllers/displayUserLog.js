const User = require("../models/user");
const { isValidObjectId } = require("mongoose");
const moment = require("moment");

module.exports = function (userId, from, to, limit) {
  return new Promise((resolve, reject) => {
    //check if ID valid

    if (isValidObjectId(userId)) {
      User.findById(userId)
        .then((user) => {
          if (user) {
              if (!from) {
                from = moment(0);
              } else if (!to) {
                to = moment();
              }
              const logs = Array.from(user.log);
              let filteredLogs = logs.filter((log) => {
                if (
                  moment(log.date, "ddd MMM DD YYYY") >= moment(from) &&
                  moment(log.date, "ddd MMM DD YYYY") <= moment(to)
                ) {
                  return true;
                } else {
                  return false;
                }
              });
              
              //sort logs in latest first order
              filteredLogs = filteredLogs.sort((logA,logB) =>{
                return moment(logB.date, "ddd MMM DD YYYY") - moment(logA.date, "ddd MMM DD YYYY")
              })


              //check for limit query
              if (limit) {
                filteredLogs = filteredLogs.slice(0, limit);
              }

              const queriedLog = {
                _id: user.id,
                username: user.name,
                log: filteredLogs,
                count: filteredLogs.length,
              };
              
              resolve(queriedLog);
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
