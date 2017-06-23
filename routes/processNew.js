/**
 * Created by rdevansjr on 6/22/17.
 */

var express = require('express');
var router = express.Router();
var getNewUrl = require("../util/getNewUrl");

router.get('/', function(req, res, next) {

    if(req.baseUrl.startsWith("/new/http://")) {
        getNewUrl("http://", req.baseUrl.substring(12), res);
        return;
    }else if(req.baseUrl.startsWith("/new/https://")) {
        getNewUrl("https://", req.baseUrl.substring(13), res);
        return;
    }

    res.send({
        error: "bad request"
    });
});


module.exports = router;

