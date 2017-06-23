/**
 * Created by rdevansjr on 6/20/17.
 */

var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var urlModel = require("../model/url")

/* GET home page. */
router.get('/:addr', function(req, res, next) {

    if (!req.params.addr){
        next();
    return;
}
    let addr = +req.params.addr;

    switch (Number.isInteger(addr)){
        case true:
            urlModel.findOne({key: addr}, function(err, url){
                if (err) console.log(err);

                if(!url){
                    res.send({error: addr + " is not in the database:"});
                }

                res.redirect(url.URL);
            });

            break;

        case false:
            res.send({error: req.params.addr + " not a valid URL"});
                break;

        }
});

module.exports = router;

