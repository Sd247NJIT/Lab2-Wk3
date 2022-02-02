function modifyInto() {
    document.getElementById("p1").innerHTML="wow, changed."
}
function myFunction() {
    var x, text;
    x = document.getElementById("number").value;

    if (isNaN(x) || x < 6 || x > 16) {
        text = "Input not valid :(";
    } else {
        text = "Input OKAY :)";
    }
    document.getElementById("sher").innerHTML = text;
}
