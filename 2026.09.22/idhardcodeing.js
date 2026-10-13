function calc() {
    let s = 0

    let a1 = parseInt(document.getElementById("answer1").value);
    if (isNaN(a1)) {
        alert("숫자를 입력해주세요!");
    } else if (a1 == eval(document.getElementById("answer1").value)) {
        s = s + 1
    } else {
        document.getElementById("question1").style.textDecoration = 'line-through';
    }
    let a2 = parseInt(document.getElementById("answer2").value);
    if (isNaN(a2)) {
        alert("숫자를 입력해주세요!");
    } else if (a2 == eval(document.getElementById("answer2").value)) {
        s = s + 1
    } else {
        document.getElementById("question1").style.textDecoration = 'line-through';
    }
    let a3 = parseInt(document.getElementById("answer3").value);
    if (isNaN(a3)) {
        alert("숫자를 입력해주세요!");
    } else if (a3 == eval(document.getElementById("answer3").value)) {
        s = s + 1
    } else {
        document.getElementById("question1").style.textDecoration = 'line-through';
    }
    let a4 = parseInt(document.getElementById("answer4").value);
    if (isNaN(a4)) {
        alert("숫자를 입력해주세요!");
    } else if (a4 == eval(document.getElementById("answer4").value)) {
        s = s + 1
    } else {
        document.getElementById("question1").style.textDecoration = 'line-through';
    }

    document.getElementById("score").innerHTML = s;
}