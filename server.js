/**
 * Created by jimzhang on 2016/2/23.
 */
var http = require('http');
var fs = require('fs');
var socket_io = require('socket.io');
var port = '8000';
var ip = '192.168.1.63';
function onRequest(request,response){
    console.log('Request recieved');
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html','utf8',function(){
        if(err){
            return console.log(err);
        }

        response.end(data);
    });
}