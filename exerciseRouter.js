const express = require('express');
const router = express.Router();

const controllers = require('./Controllers');

router.get('/users',(req,res)=>{

    
    let users = controllers.getUsers();
    
    users
     .then(users => res.json(users))
    .catch(err => {
        res.status(404).json({error: err});
    });
    

});

router.get('/log',(req,res)=>{

    res.json({message: "GET API for LOG working"});

});

//Add New User
router.post('/new-user',(req,res)=>{
    
    let newUser = controllers.addUser(req.body.username);
    newUser
    .then(result => {
        res.status(201).json({_id:result._id, username:result.name});

    })
    .catch(err => res.send(err));

});

//Add Exercise
router.post('/add',(req,res)=>{
    res.json({message: "POST API for New Exercise working"});
    

});

module.exports =router;