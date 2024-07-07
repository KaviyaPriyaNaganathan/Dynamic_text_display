
document.getElementById("input").onkeyup = function() {
    var i1 = document.getElementById("input");
    var h1 = document.getElementById("header");
    if (i1.value.trim() === "") {
        h1.textContent = "Please enter a valid text.";
    } else {
        h1.textContent = i1.value;
    }
}
