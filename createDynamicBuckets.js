
function createBuckets() {
    console.log("In buckets");
    var cupList = document.getElementById('cup');
    cupList.appendChild(createBuckets(cup));
    document.getElementById("cup").style.position = "0px 350px";

}

