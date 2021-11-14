
xPos = 100;
yPos = 200;
margin = 100;

function createBuckets(operationId, waterFlow) {
    var cupList = document.getElementById('operations');
    var temp, item, temp2, opID, a, i;
    temp = document.getElementById("cupTemplate");
    item = temp.content.querySelector("td");

    item.style.width = '200';
    item.style.transform = "transform(" + xPos.toString + "% , " + yPos.toString + "%)";

    a = document.importNode(item, true);
    
    cupList.appendChild(a);
    //console.log(cupList);
    //console.log(xPos);
    //console.log(yPos);
    xPos = xPos + 100;
}

