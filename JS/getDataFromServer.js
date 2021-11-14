
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
            revLastFiveH2 = document.getElementById("revLastFiveH2");
            revLastFiveH2.textContent = "Revenue in last 5 seconds: " + data.incrementalRevenue.toFixed(2);

        } else {

            operations = getOperations(data);

            // createChart(operations);
            
            // resp = getResponse(data);
            // resp = JSON.stringify(resp);
            
            resp = stupidResponse(data)
            resp = JSON.stringify(resp);

            for(let i = 0 ; i < operations.len)
            
            inFlowH2 = document.getElementById("inFlowH2");
            inFlowH2.textContent = "Input Flow: " + data.flowRateIn.toFixed(2);


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


