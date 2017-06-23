/**
 * Created by rdevansjr on 6/21/17.
 */
var urlModel = require("../model/url")

module.exports = function (transport, newUrl, res) {

    let numDots = newUrl.match(/\./g);

    if( numDots == null || (numDots.length != 1 && numDots.length != 2))
        res.send({error: transport + newUrl + " not a valid URL"});

    urlModel
        .findOne({})
        .sort('-key')  // give me the max
        .exec(function (err, url) {

            if (err) console.log(err);

            console.log(url);

            let urlKey = 1000;

            if (url) urlKey = url.key + 1;

            newUrlModel = new urlModel({
                key: urlKey,
                URL: transport + newUrl
            });

            newUrlModel.save(function (err, url) {

                if (err) console.log(err);

                res.send({
                    original_url: transport + newUrl,
                    short_url: process.env.APP_URL + "/" + urlKey
                });

            });
        });

}
