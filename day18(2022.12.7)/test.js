const $btnPlus = document.querySelector(".btnPlus");
const $btnMinus = document.querySelector(".btnMinus");
let num = 0; // 제어할 숫자를 0으로

    // btnPlus를 클릭할 때마다
    $btnPlus.addEventListener("click", e=> {
        e.preventDefault(); // 새로고침 방지
        num++;
        console.log(num);
    });
    
    // btnMinus를 클릭할 때마다
    $btnMinus.addEventListener("click", e=> {
        e.preventDefault(); // 새로고침 방지
        num--;
        console.log(num);
    });