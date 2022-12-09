let $myImages1 = document.querySelector('pic1');
let $myImages2 = document.querySelector('pic2');
let $myImages3 = document.querySelector('pic3');
let $myImages4 = document.querySelector('pic4');
let $myImages5 = document.querySelector('pic5');
let $myImages6 = document.querySelector('pic6');

$myImages1.addEventListener("click" , changePic1);
$myImages2.addEventListener("click" , changePic2);
$myImages3.addEventListener("click" , changePic3);
$myImages4.addEventListener("click" , changePic4);
$myImages5.addEventListener("click" , changePic5);
$myImages6.addEventListener("click" , changePic6);

function changePic1(){
    $display.src = "images/이미지1.webp";
}
function changePic2(){
    $display.src = "images/이미지2.jpg";
}
function changePic3(){
    $display.src = "images/이미지3.jpg";
}
function changePic4(){
    $display.src = "images/이미지4.jpg";
}
function changePic5(){
    $display.src = "images/이미지5.jpg";
}
function changePic6(){
    $display.src = "images/이미지6.jpg";
}