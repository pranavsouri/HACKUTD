var dps = []
var chart;
var historyFlowRateData = [];
var time = 0;
var operationId;

function updateChart(resp) {
    historyFlowRateData.push({
        t: time,
        flow: resp 
    })
    val = 0
    for(let i = 0 ; i < resp.length ; resp++) {
        if(resp[i].operationId == operationId) {
            val = resp[i].flowRate
            break;
        }
    }
    dps.push({
        x: time,
        y: val
    })
    time = time + 5
    chart.render()
}

window.onload = function createChart(operations) {

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    operationId = params.id;

    chart = new CanvasJS.Chart("container",
    {
        data: [
            {
                type: "line",
                dataPoints: dps
            }
        ]
    });
    chart.render(); 
}