var express = require('express');
var router = express.Router();
var data = require("./data").data;
const querystring = require('querystring');
const url= require("url");
const newsArticleModel=require('./connector');

/* GET home page. */
router.get('/', function(req, res, next) {
    let parsedUrl = url.parse(req.url);
    let parsedQs = querystring.parse(parsedUrl.query);
    
    if(parsedQs.offset===undefined){
        parsedQs.offset = 0;
    }
    if(parsedQs.limit===undefined){
        parsedQs.limit = 10;
    }
    console.log("request is here");
    console.log(parsedQs);
    newsArticleModel.find({}, {limit:limit, skip:offset}, function (err, result) {            
        if (err) {
            res.send([]);
        }
        else{
            res.send(result);
        }

    })

});

module.exports = router;
