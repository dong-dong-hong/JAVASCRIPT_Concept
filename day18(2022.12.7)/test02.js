const $btnLeft = document.getElementById("btnLeft");
const $btnRight = document.getElementById("btnRight");
const $box = document.getElementById("box");
// const deg = 45; //회전시킬 각도 값 지정
let num = 0;

//btnLeft를 클릭할 때마다
$btnLeft.addEventListener("click", e => {
    e.preventDefault();
    // num값 1씩 감소
    num-=5;
    //45도 각도에 감소된 num값을 계속 곱한 값을 rotate구문에 삽입
    $box.style.transform = `rotate(${num}deg)`;
    // $box.style.transform = 'rotate(" + num * deg  + " deg)';
    // document.getElememtById("myDIV").style.transform = "rotate(7deg)";
});



  //btnRight를 클릭할 때마다
  $btnRight.addEventListener("click", e => {
    e.preventDefault();
    // num값 1씩 감소
    num+=5;
    //45도 각도에 감소된 num값을 계속 곱한 값을 rotate구문에 삽입
    $box.style.transform ="rotate(" + num + "deg)";
});
