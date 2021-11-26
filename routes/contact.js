// const { response } = require('express');
const express = require('express');
const Contact = require('../models/contact')
const router = express.Router();

router.post('/',(req,res)=>{
    // console.log(req.body);
    // res.json(req.body)
    Contact.create(req.body).then(response => res.json(response).catch(err =>res.json(err)))
})

router.get('/all',(req,res)=>{
    Contact.findAll()
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});
router.get('/',(req,res)=>{
    Contact.findByPk(req.query.id)
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});
router.delete('/',(req,res)=>{
    Contact.findByPk(req.query.id)
    
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});


module.exports=router;