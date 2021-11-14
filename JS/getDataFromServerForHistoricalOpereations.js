var dps = []
var dps1 =[]
var chart;
var historyFlowRateData = [];
var time = 0;
var operationId;

function updateHistoricChart(resp) {
    console.log(resp.incrementalRevenue);
    console.log(resp.revenuePerDay);
    historyFlowRateData.push({
        t: time,
        flow: resp 
    })
    val = resp.incrementalRevenue
    val1 = resp.revenuePerDay
    console.log(val)
    console.log(val1)
    dps.push({
        x: time,
        y: val
    })
    dps1.push({
        x: time,
        y: val1
    })
    time = time + 5
    chart.render()
    chart2.render()
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

    chart2 = new CanvasJS.Chart("container2",
    {
        data: [
            {
                type: "line",
                dataPoints: dps1
            }
        ]
    });
}