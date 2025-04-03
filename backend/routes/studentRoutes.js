const express = require('express');
const router = express.Router();

router.get('/student',(req,res)=>{
    res.send("Form displayed");
});

router.post('/submit',(req,res)=>{
    res.send("submit done");
});

module.exports = router;z