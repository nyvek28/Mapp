'use strict'

let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 3000;

server.listen(port, function(){
  console.log('Magic happens at port :' + port);
});
