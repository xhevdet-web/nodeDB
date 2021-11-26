// const { response } = require('express');
const express = require('express');
const Shpalljet = require('../models/shpalljet')
const router = express.Router();

router.post('/',(req,res)=>{
    // console.log(req.body);
    // res.json(req.body)
    Shpalljet.create(req.body).then(response => res.json(response).catch(err =>res.json(err)))
})

router.get('/all',(req,res)=>{
    Shpalljet.findAll()
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});
router.get('/',(req,res)=>{
    Shpalljet.findByPk(req.query.id)
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});
router.delete('/',(req,res)=>{
    Shpalljet.findByPk(req.query.id)
    .then(response=>res.json(response))
    .catch(err=> res.json(err))
});

module.exports = router;