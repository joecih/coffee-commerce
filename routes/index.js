var express = require('express');
var router = express.Router();
var mongoUrl = "mongodb://localhost:27017/coffee";
var mongoose = require('mongoose');
var Account = require('../models/Accounts');
var bcrypt = require('bcrypt-nodejs');

mongoose.connect(mongoUrl);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/register', function(req, res, next) {
    res.render('register', {
        page: 'register',
        failure: req.query.failure
    });
});

router.get('/options', function(req, res, next) {
    res.render('options', {
        username: req.session.username
    });
});


router.post('/register', function(req, res, next) {
    // the user posted: username, email, password, password2
    if (req.body.password != req.body.password2) {
        res.redirect('/register?failure=password')
    } else {
        var newAccount = new Account({
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password),
            emailAddress: req.body.email
        })
        console.log(newAccount);
        newAccount.save();
        req.session.username = req.body.username;
        res.redirect('/options');
    }
});

module.exports = router;
