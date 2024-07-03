var express = require('express');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
var router = express.Router();

/* Server Connection. */

mongoose.connect('mongodb://127.0.0.1:27017/user_profile')
var db = mongoose.connection
db.on('error', ()=> console.log('error'))
db.once('open', ()=> console.log('DB connected'))


/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req, res)=> {
  console.log(req.body)  

  var name = req.body.first_name
  var sname = req.body.last_name
  //var mail = req.body.email
  var pass = req.body.pw
 
  var data = {
    "full name":name+' '+sname,
    "first name":name,
    "second name":sname,
    "email":req.body.email,
    "password":pass

  }
  db.collection("user_log").insertOne(data, ()=>{
    if(err) throw err;
    console.log('profile created')
  })
  res.send('sucess')
})

module.exports = router;
