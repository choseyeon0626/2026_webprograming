var a = parseInt(prompt("a 값을 입력하세요:"));

alert("a*b+c=" + multiple(a));

function multiple(a, b = 5, c = 10) {
    var result = a * b + c;
    return result;
}