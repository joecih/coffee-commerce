var express = require('express');
var router = express.Router();
var mongoUrl = "mongodb://localhost:27017/coffee";
var mongoose = require('mongoose');
mongoose.connect(mongoUrl);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/register', function(req, res, next) {
    res.render('register', {});
});

router.post('/register', function(req, res, next) {
    // the user posted: username, email, password, password2
    res.json(req.body)
});

module.exports = router;
