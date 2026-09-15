let exp = "";

function add(char) {
    exp = exp + char;
    document.getElementById("display").value = exp;
}

function clearDisplay() {
        exp = "";
    document.getElementById("display").value = exp;
}

function compute() {
    document.getElementById("display").value = eval(exp);
}
