let $myImage = document.getElementById('myImage');
let $onBtn = document.getElementById('onBtn');
let $offBtn = document.getElementById('offBtn');

$onBtn.addEventListener("click" . changePic) // 클릭하면 함수실행
$offBtn.addEventListener("click" . changePic2) // 클릭하면 함수실행

function changePic() {
    $myImage.src = "images/light.webp"
}


function changePic2() {
    $myImage.src = "images/light.jpg"
}