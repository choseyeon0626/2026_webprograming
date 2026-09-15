let enterdiv1 = 0;
let enterdiv2 = 0;
let enterdiv3 = 0;

function enter1(button) {
    enterdiv1++;
    button.innerHTML = "mouse enter :" + enterdiv1;
    button.style.backgroundColor = "lightyellow";
}

function enter2(button) {
    enterdiv2++;
    button.innerHTML = "mouse enter :" + enterdiv2;
    button.style.backgroundColor = "lightyellow";
}

function enter3(button) {
    enterdiv3++;
    button.innerHTML = "mouse enter :" + enterdiv3;
    button.style.backgroundColor = "lightyellow";
}

function leave(button) {
    button.style.backgroundColor = "lightgreen";
}