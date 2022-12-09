let $pics = document.getElementsByClassName("pic"); //pic한 요소 전부 가져옴
let $lightbox = document.getElementById("lightbox"); // div 박스 요소 가져옴
let $display = document.getElementById("display"); // 큰 이미지 가져옴

for(i = 0; i< $pics.length; i++) {
 $pics[i].addEventListener("click", showDisplay); // i번째 요소 클릭시 showDisplay함수 실행
}

function showDisplay() {
 let $bigLocation = this.getAttribute("data-src");// img부분의 data-src속성값을 가져옴
 $display.setAttribute("src", $bigLocation); //이미지 경로를 수정
 // $lightbox.style.display = "block";
}

//😁라이트박스를 클릭하면 감춤
lightbox.onclick = function() {
 lightbox.style.display = "none";
}