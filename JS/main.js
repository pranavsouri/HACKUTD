

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


