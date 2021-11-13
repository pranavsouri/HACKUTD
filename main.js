

function updateChart() {
    count = count || 1;

    // For data inputs
    for (var j = 0; j < count; j++) {
        yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
        dps.push({
            x: xVal,
            y: yVal
        });
        xVal++;
    }

    if (dps.length > dataLength) {
        dps.shift();
    }

    chart.render();
}

var dps = []; // dataPoints

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Dynamic Data"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });

    var xVal = 0;
    var yVal = 100;
    var dataLength = 20; // number of dataPoints visible at any point

    var updateChart = function (count) {

    };

    updateChart(dataLength);
    setInterval(function () { updateChart() }, updateInterval);
}

function 

