
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
        var a = document.createElement('a');
        var linkText = document.createTextNode(operations[i]);

        a.appendChild(linkText);
        a.href = "http://example.com";
        td.appendChild(a);

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

function addOperations(resp) {

    table = document.getElementById("dataTable");

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    table = document.getElementById("dataTable");

    for(let i = 0 ; i < resp.length ; i++) {
        addRowToTable(table,resp[i].operationId,resp[i].flowRate);
    }


}

function addRowToTable(table,id,value) {

    var tr = document.createElement('TR');
    table.appendChild(tr);
    

    var td = document.createElement('TD');
    td.width='300';
    var a = document.createElement('a');
    var linkText = document.createTextNode(id);

    a.appendChild(linkText);
    a.href = "http://localhost:8080/Operations.html?id=" +id;
    a.title = id;

    td.appendChild(a);

    tr.appendChild(td);
    td.appendChild(a);
    tr.appendChild(td);


    var td = document.createElement('TD');
    td.width='200';
    tr.appendChild(td);

    var td = document.createElement('TD');
    td.width='300';
    td.appendChild(document.createTextNode(value));
    tr.appendChild(td);
}
 
function load() {
    
    console.log("Page load finished");
 
}