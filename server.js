/**
 * Created by jimzhang on 2016/2/23.
 */
var http = require('http');
var fs = require('fs');
var socket_io = require('socket.io');
var port = '8000';
var ip = 'localhost';
function onRequest(request,response){
    console.log('Request recieved');
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html','utf8',function(err,data){
        if(err){
            return console.log(err);
        }

        response.end(data);
    });
}

var server = http.createServer(onRequest).listen(port,ip);
var io = socket_io.listen(server);

io.sockets.on('connection',function(socket){
    socket.on('offer',function(data){
        socket.broadcast.emit('offer',{sdp: data.sdp});
    })
    socket.on('answer',function(data){
        socket.broadcast.emit('answer',{sdp: data.sdp});
    })
    socket.on('ice',function(data){
        socket.broadcast.emit('ice',{candidate: data.candidate});
    })
    socket.on('hangup',function(){
        socket.broadcast.emit('hangup',{});
    })
});
