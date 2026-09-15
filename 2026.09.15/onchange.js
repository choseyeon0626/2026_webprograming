function sub() {
    let x = document.getElementById("input1");
    if (x.value == x.value.toUpperCase()) {
        x.value = x.value.toLowerCase();
    } else {
        x.value = x.value.toUpperCase();
    }
}