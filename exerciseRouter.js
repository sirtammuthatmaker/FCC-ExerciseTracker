const express = require('express');

const router = express.Router();

router.get('/users',(req,res)=>{

    res.json({message: "GET API for users working"});

});

router.get('/log',(req,res)=>{

    res.json({message: "GET API for LOG working"});

});

router.post('/new-user',(req,res)=>{
    res.json({message: "POST API for New User working"});

});

//Add Exercise
router.post('/add',(req,res)=>{
    res.json({message: "POST API for New Exercise working"});

});

module.exports =router;