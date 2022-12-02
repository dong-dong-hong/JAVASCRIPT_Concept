//////////////////// 🐻🐻🐻클릭 글자 색상 바꾸기 3가지 방법🐻🐻🐻////////////////////////////////////////////
//😢방법 1 : 웹 요소를 변수로 지정 & 미리 만든 함수 사용

// let changeBtn = document.querySelector("#change");
// changeBtn.onclick = changeColor; // 함수명만불러옴 괄호()없다.

// function changeColor() {
//     document.querySelector("p").style.color = "blue";
// }

// 😢방법2 : 웹 요소를 따로 변수로 만들지 않고 사용

// document.querySelector("#change").onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "purple";
// }


// 😢방법 3 : 함수를 직접 선언
document.querySelector('#change').onclick = function () {
    document.querySelector("p").style.color = 'orange';
}