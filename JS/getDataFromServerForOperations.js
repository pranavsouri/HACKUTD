var socket = new WebSocket('wss://2021-utd-hackathon.azurewebsites.net');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send(JSON.stringify({setPitCapacity:  100000}));
});

// Listen for messages
socket.addEventListener('message', function (event) {

    if(event.data[0] != '{') {
        console.log(event.data);
    } else {
        data = JSON.parse(event.data);

        if(data.hasOwnProperty("incrementalRevenue")){
            console.log(data);
        } else {
            operations = getOperations(data);
            createChart(operations);
            resp = getResponse(data);
            resp = JSON.stringify(resp);

            console.log(resp);
            socket.send(resp);
        }
    }
    
});

socket.addEventListener('error', function(error) {
    console.log('Connect Error: ' + error.toString());
});