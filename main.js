
var xVal = 0;
var yVal = 100;
var updateInterval = 1000;
var dataLength = 20;
var chart;

function updateChart() {
    count = 100;

    // For data inputs

}

var dps = [];

// window.onload = function () {
//     operations = getOperations(dummyData)
//     dps = getWaterProfitFromOperations(operations[0])

//     dataVal = []
//     for(let i = 0 ; i < operations.length ; i++) {
//         dataVal.push({
//             type: "line",
//             dataPoints: getWaterProfitFromOperations(operations[i]),
//         })
//     }

//     var chart = new CanvasJS.Chart("container",
//     {
//         data: dataVal
//     });
//     chart.render();  
// }

function createChart(operations) {

    dataVal = []
    for(let i = 0 ; i < operations.length ; i++) {
        dataVal.push({
            type: "line",
            dataPoints: getWaterProfitFromOperations(operations[i]),
        })
    }
    var chart = new CanvasJS.Chart("container",
    {
        data: dataVal
    });
    chart.render(); 
}


