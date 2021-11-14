
xPos = 10;

function createBuckets(xPos, operationId, waterFlow) {
    console.log("adas");
    var cupList = document.getElementById('operations');

    var temp, item, a, i;
    temp = document.getElementById("cupTemplate");
    item = temp.content.querySelector("div");

    a = document.importNode(item, true);

    // a.style.position = "0px " + xPos.toString() + "px";
    
    a.style.left = xPos.toString + "%";
   
    console.log(a.style.position);
    cupList.appendChild(a);
    xPos = xPos + 20;
}

