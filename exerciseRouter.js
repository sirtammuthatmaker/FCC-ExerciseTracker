const express = require('express');
const router = express.Router();
const User = require('./models/user');

const controllers = require('./Controllers');

router.get('/users',(req,res)=>{

    res.json({message: "GET API for users working"});

});

router.get('/log',(req,res)=>{

    res.json({message: "GET API for LOG working"});

});

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