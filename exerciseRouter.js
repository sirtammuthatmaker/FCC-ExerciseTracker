const express = require('express');
const router = express.Router();

const controllers = require('./Controllers');

//Get all users
router.get('/users',(req,res)=>{

    
    let users = controllers.getUsers();
    
    users
     .then(users => res.json(users))
    .catch(err => {
        res.send(err.message);
    });
    

});

//Display User Log
router.get('/log',(req,res)=>{

    
    
    const userLog = controllers.userLog(req.query.userId,req.query.from, req.query.to, req.query.limit);

    userLog
     .then(logs => {res.status(200).json(logs)})
     .catch(err => res.send(err));

});

//Add New User
router.post('/new-user',(req,res)=>{
    
    let newUser = controllers.addUser(req.body.username);
    newUser
    .then(result => {
        res.status(201).json({_id:result._id, username:result.username});

    })
    .catch(err => res.send(err));

});

//log exercise
router.post('/add',(req,res)=>{
    
    //Retrieve form data and recieves a PROMISE
    const addedExercise = controllers.logExercise(req.body.userId,req.body.description,req.body.duration,req.body.date);

    addedExercise.then((result)=>{
        res.json(result);
    })
    .catch(err => {
        res.send(err);
    })

});

module.exports =router;