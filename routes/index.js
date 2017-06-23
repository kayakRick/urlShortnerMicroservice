var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'URL Shortner',
        url: process.env.APP_URL});
});

module.exports = router;
