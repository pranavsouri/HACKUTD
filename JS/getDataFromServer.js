
var socket = new WebSocket('wss://2021-utd-hackathon.azurewebsites.net');

// Connection opened
socket.addEventListener('open', function (event) {
    
});

// Listen for messages
socket.addEventListener('message', function (event) {

    if(event.data[0] != '{') {
        console.log(event.data);
    } else {
        data = JSON.parse(event.data);

        operations = getOperations(data);

        createChart(operations);
        resp = getDummyResponse(operations);
        console.log(resp);
        socket.send(resp);
    }
    
});

socket.addEventListener('error', function(error) {
    console.log('Connect Error: ' + error.toString());
});


