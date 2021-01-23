var express = require('express');
var router = express.Router();
var data = require("./data").data;
const querystring = require('querystring');
const url= require("url");
const newsArticleModel=require('./connector').newsArticleModel;

/* GET home page. */
router.get('/', function(req, res, next) {
    let parsedUrl = url.parse(req.url);
    let parsedQs = querystring.parse(parsedUrl.query);
    
    if(parsedQs.offset===undefined || isNaN(parsedQs.offset)||parsedQs.offset<0){
        parsedQs.offset = 0;
    }
    if(parsedQs.limit===undefined  || isNaN(parsedQs.limit)|| parsedQs.limit<0){
        parsedQs.limit = 10;
    }
    // console.log("request is here");
    // console.log(req.url);
    newsArticleModel.find().limit(Number(parsedQs.limit)).skip(Number(parsedQs.offset)).exec(function (err, result) {            
        if (err) {
           // console.log(err);
            res.send([]);
        }
        else{
           // console.log(result);
            res.send(result);
        }

    })

});

module.exports = router;
