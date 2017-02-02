var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000,function(){
    console.log("Application running at => localhost:3000")
});


