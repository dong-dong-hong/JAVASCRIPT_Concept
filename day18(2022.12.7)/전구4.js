let $myImage = document.getElementById('myImage');
$myImage.addEventListener("mouseover", changePic);
$myImage.addEventListener("mouseout", changePic2);

function changePic() {
    $myImage.src = "images/light.webp"

}
function changePic2() {
    $myImage.src = "images/light.jpg"

}