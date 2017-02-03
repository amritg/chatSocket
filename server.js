var express = require('express');
var morgan = require('morgan');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(morgan('dev'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('chatMessage', function(msg){
        console.log('Message is: ' + msg);
        io.emit('chatMessage', msg);
    });
    socket.on('disconnect', function(){
        console.log('A user disconnected');
    });
});

http.listen(3000,function(){
    console.log("Application running at => localhost:3000")
});


