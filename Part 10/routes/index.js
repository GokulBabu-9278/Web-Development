var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values = ["Gokul", "Dilshad", "Ziyaf", "Abhi"]

  const person = {name:"Gokul", comments:{comment:"This is a sample comment", date:"07-10-2020"}, admin:true}

  res.render('index', {person, values});
});

module.exports = router;
