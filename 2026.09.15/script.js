    function sub(test,min,max) {
        let s = parseInt(test.value);
        let text = "";
        if (isNaN(s)) {
            text = "숫자를 입력해주세요!"
        } else if (s >= min && s <= max) {
            text = "입력한 숫자는 " + s + "입니다."
        } else {
            text = min + "부터 " + max + " 사이의 숫자를 입력해주세요!";
        }
        document.getElementById("result").innerHTML = text;
    }