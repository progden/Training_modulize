/**
 * Created by progden on 2017/7/7.
 */
'use strict';

var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/003_UMD/public'));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
    console.log("http://localhost:"+app.get('port')+"/");
});

var hightlightTool = require("./003_UMD/umd");
//var hightlightTool = require("./003_UMD/public/js/umd_front");

app.get("/testHighLight", function(req, resp){
    var msg = "Hello Wrold!";
    var keyword = "old";
    resp.send({
        msg: msg,
        keyword: keyword,
        rs: hightlightTool.highlight(msg, keyword)
    });
});