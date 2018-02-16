const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index',
      {
          title: 'Harman',
          message: 'My name is Harman'
      });
});


//get: /brother
router.get('/Simmi', (req, res, next)=> {
    //load the view
    res.render('Simmi', {
        title: 'Brother: Simmi',
        message: 'Simmmi is 16 years old, he is superb in creative things and Science. He is super funny <3'
    });

});

//get: /dad
router.get('/HS', (req, res, next)=> {
    //load the view
    res.render('HS', {
        title: 'Dad: HardevS',
        message: 'My Dad name is Hardev Singh, he is a business man! He have his Air conditioners showroom and real estate business'
    });

});

//get: /mom
router.get('/PK', (req, res, next)=> {
    //load the view
    res.render('PK', {
        title: 'Mom: ParamjeetK',
        message: 'My Mother name is Paramjeet Kaur, she is a Hindi language teacher in a government school in India'
    });

});
module.exports = router;
