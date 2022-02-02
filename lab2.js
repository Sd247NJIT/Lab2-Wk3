function modifyInto() {
    document.getElementById("p1").innerHTML="wow, changed."
}
function myFunction() {
    var x, text;
    x = document.getElementById("number").value;

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("sher").innerHTML = text;
}