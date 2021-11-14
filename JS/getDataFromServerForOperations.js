
var socket = new WebSocket('wss://2021-utd-hackathon.azurewebsites.net');

// Connection opened
socket.addEventListener('open', function (event) {
    // socket.send(JSON.stringify({setPitCapacity:  100}));
});
let i = 0;
// Listen for messages
socket.addEventListener('message', function (event) {

    // console.log(event.data);
    if(event.data[0] != '{') {
        console.log(event.data);
    } else {
        data = JSON.parse(event.data);

        if(data.hasOwnProperty("incrementalRevenue")){
            

        } else {

            operations = getOperations(data);

            // createChart(operations);
            
            // resp = getResponse(data);
            // resp = JSON.stringify(resp);
            
            resp = stupidResponse(data)

            updateChart(resp);
            resp = JSON.stringify(resp);

            // console.log(resp);
            socket.send(resp);
        }
    }
    // i = i + 1;
    // if(i == 4) {
    //     socket.close();
    // }
});

socket.addEventListener('error', function(error) {
    console.log('Connect Error: ' + error.toString());
});


