function chColor() {
    let arrColor = ["red", "orange" , "yellow", "green", "blue", "purple" , "black"];
    let $bodyTag = document.getElementById("theBody");
    let arrNum = Math.floor(Math.random()*arrcolor.length); // 배열의 길이
    //Math.floor은 소수점을 버린다.
    //Math.random()은 랜덤한 숫자를 반환한다.
    //Math.random  0 ~ 1의 소수점을 포함한 랜덤한 숫자를 반환     
    $bodytag.style.backgroundColor = arrcolor[arrNum];
}