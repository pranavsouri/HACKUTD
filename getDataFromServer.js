#!/usr/bin/env node
var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {
        if (message.type === 'utf8') {            
            data = JSON.parse(message.utf8Data);
            
        }
    });
    
    function sendNumber() {
        if (connection.connected) {
            connection.send(JSON.stringify({setPitCapacity:  100000}));
        }
    }
    sendNumber();
});

client.connect('wss://2021-utd-hackathon.azurewebsites.net');
