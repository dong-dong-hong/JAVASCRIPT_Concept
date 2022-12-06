const $toggleBtn = document.querySelector(".toggleBtn");
const $memu = document.querySelector(".memu");

$toggleBtn.addEventListener("click", ()=>{
    $memu.classList.toggle("active");
})
// toggle : 클래스 유무를 체크해서 없으면 add, 있으면 remove를 자동으로 적용.