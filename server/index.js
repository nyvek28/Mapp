'use strict'

let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 3000;
let connections = [];
let users = [];

app.use(express.static('public'))

app.get('/api', function(req, res){
  res.status(200).send('Hello World!');
});

io.on('connection', function(socket){
  connections.push(socket);
  console.log('Current sockets: ' + connections.length);

  socket.on('disconnect', function(){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Current sockets: ' + connections.length);
  });

});

server.listen(port, function(){
  console.log('Magic happens at port : ' + port);
});
