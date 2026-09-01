function showdesc() {
    document.querySelector("#desc").style.display = "block";
    document.querySelector("#open").style.display = "none";
}

function hidedesc() {
    document.querySelector("#desc").style.display = "none";
    document.querySelector("#open").style.display = "block";
}

function showbolder() {
    document.querySelector("#cover").style.border = "2px solid #000";
}
function hidebolder() {
    document.querySelector("#cover").style.border = "none";
}
var coverImage = document.querySelector("#cover");
coverImage.onclick = function () {
    alert("꽃을 클릭했습니다!");
}
