'use strict'

let socket = io.connect();
let $msg = $('#msg');
let $chat = $('#msg-pane');

//console.log(socket);

$('#send').click(function(){
  //console.log('Send');
  socket.emit('send', {msg: $msg.val()});
  $msg.val('');
});

socket.on('new msg', function(data){
  console.log(data);
  $chat.append('<div class = "well">' + data.msg + '</div>');
});
