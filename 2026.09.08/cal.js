function cal() {
    let problam = eval(document.getElementById("problem").value);
    let answer = document.getElementById("answer").value;

    if (problam == answer) {
        alert("정답!!");
    } else {
        alert("바보!!" + " 정답은 " + problam + "이야");
    }
}