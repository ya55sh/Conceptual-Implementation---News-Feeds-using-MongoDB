var express = require('express');
var router = express.Router();
var data = require("./data").data;
const querystring = require('querystring');
const url= require("url");

/* GET home page. */
router.get('/', function(req, res, next) {
    let parsedUrl = url.parse(req.url);
   
    let parsedQs = querystring.parse(parsedUrl.query);
    
    if(parsedQs.offset===undefined){
        parsedQs.offset = 0;
    }
    if(parsedQs.limit===undefined){
        parsedQs.limit = 20;
    }

    res.send(data.slice(parsedQs["offset"],Number(parsedQs["offset"])+Number(parsedQs["limit"])));

});

module.exports = router;
