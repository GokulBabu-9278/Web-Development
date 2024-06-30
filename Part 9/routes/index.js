var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web-Development', name:'Gokul', domain:'Node.js' });
});

module.exports = router;
