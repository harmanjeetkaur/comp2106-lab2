//references
const express = require('express');
const router = express.Router();
const family = require('./models/family')

//GET: /family
router.get('/', (res, req, next) => {
    family.find(() => (err, family){
        if (err){
            console.log(err);
        }
        else{
            res.render('family/index', {
                title: 'List',
                family: family
            });
        }
    });


});

//make public
module.exports = router;