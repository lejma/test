var express = require("express");
var app = express();
var port = 8080;
var router = require ("./app/routes");
//var fs = require("fs");
//var cheerio = require("cheerio");
// stackOverflowAPIKey https://stackapps.com/apps/oauth/view/8318

app.use("/", router);

app.listen(port, function() {
	console.log("app started");
});

app.use(express.static(__dirname + "/public"));


var http = require('http');

var options = {
  host: 'api.stackexchange.com',
  path: '/2.2/questions/unanswered?site=stackoverflow&key=QYgDU6vw*kdBcdrGJdEHWA(('
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));

  // Buffer the body entirely for processing as a whole.
  var bodyChunks = [];
  res.on('data', function(chunk) {
    // You can process streamed parts here...
    bodyChunks.push(chunk);
  }).on('end', function() {
    var body = Buffer.concat(bodyChunks);
    //console.log('BODY: ' + body);
    // ...and/or process the entire body here.
	var stuff = JSON.parse(body);
	console.log(JSON.stringify(stuff));
  })
});

req.on('error', function(e) {
  //console.log('ERROR: ' + e.message);
});


// https://api.stackexchange.com/2.2/info?site=stackoverflow&key=app key


