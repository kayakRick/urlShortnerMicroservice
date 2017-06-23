/**
 * Created by rdevansjr on 6/21/17.
 */

var mongoose = require('mongoose');
/* ********************************************
 URL SCHEMA
 ******************************************** */
var urlSchema = new mongoose.Schema({
    key: {type: Number,  unique:true},
    URL: {type: String, unique:true}
});

// Build the User model
module.exports = mongoose.model( 'Url', urlSchema );

