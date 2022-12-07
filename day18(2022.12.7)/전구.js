let $myImage = document.getElementById('myImage');
let $onBtn = document.getElementById('onBtn');
let $offBtn = document.getElementById('offBtn');

$onBtn.onclick = changePic; // 함수 실행
$offBtn.onclick = changePic2; // 괄호 없음

function changePic() {
    $myImage.src = "images/light.webp"
}


function changePic2() {
    $myImage.src = "images/light.jpg"
}