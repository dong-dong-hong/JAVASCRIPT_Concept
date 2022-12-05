const $toggleBtn = document.querySelector(".toggleBtn");
const $pic1 = document.querySelector(".pic1");
const $pic2 = document.querySelector(".pic2");


//add와 remove를 한꺼번에 사용 : toggle
$toggleBtn.addEventListener("click", () => {
    $pic1.classList.toggle("active");// active가 있다면 추가 해주고
    $pic2.classList.toggle("active");// active가 없다면 빼준다
})