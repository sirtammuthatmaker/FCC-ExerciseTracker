
const express = require('express')

const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const router = require('./exerciseRouter');

require('dotenv').config();

const cors = require('cors')

const app = express()



mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=>{
    console.log("Connection Success!");
})
.catch((error)=>{
    console.log("Connection failed:  "+error);
});

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});




// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})


app.use('/api/exercise',router);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

//https://glitch.com/~canyon-spangled-clipper