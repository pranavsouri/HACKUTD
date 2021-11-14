
/* Attemping to add inFlow Numbers */
function addInFlow(){
    var inFlow = document.getElementById("inFlow");
    var outPutFlow = document.createElement('H2');
    outPutFlow.appendChild(document.createTextNode(operations.flowRateIn));
    inFlow.appendChild(outPutFlow);
}
 
function addTable(operations) {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    // The data
    for (var i=0; i<operations.length; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       

        var td = document.createElement('TD');
        td.width='300';
        td.appendChild(document.createTextNode(operations[i].id));
        tr.appendChild(td);


        var td = document.createElement('TD');
        td.width='200';
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.width='300';
        td.appendChild(document.createTextNode(i.toString()));
        tr.appendChild(td);

        console.log(operations[i]);
       
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}