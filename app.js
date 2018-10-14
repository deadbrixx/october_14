var express = require('express');
var app = express();
//mongodb connection is here
require('./mongoconnect');
//sql connection is here
require('./sqlconnection');

app.listen(4000);
console.log("server on 4000");


