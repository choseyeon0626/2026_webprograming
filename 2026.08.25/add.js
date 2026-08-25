function addNumbers(num1, num2) {
    var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요:"));
    var num2 = parseInt(prompt("두 번째 숫자를 입력하세요:"));
    var sum = num1 + num2;
    alert("두 수의 합은: " + sum);
}

function multiple(a, b=5, c=10) {
    var a = parseInt(prompt("a 값을 입력하세요:"));
    var result = a * b + c;
    alert("a*b+c=" + result);
}