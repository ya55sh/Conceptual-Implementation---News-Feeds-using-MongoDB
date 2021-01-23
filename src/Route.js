var express = require('express');
var router = express.Router();
var data = require("./data").data;
const querystring = require('querystring');
const url= require("url");

/* GET home page. */
router.get('/', function(req, res, next) {
    let parsedUrl = url.parse(req.url);
    console.log(req.url);
    console.log(parsedUrl);
    let parsedQs = querystring.parse(parsedUrl.query);
    console.log(JSON.stringify(parsedQs));
    res.send(data.slice(parsedQs["offset"],Number(parsedQs["offset"])+Number(parsedQs["limit"])));

});

module.exports = router;
