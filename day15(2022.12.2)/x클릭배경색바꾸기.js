function chColor() {
    var arrColor = ["#ff0" , "#6c0" , "#fcf" , "#cf0" , "#39ff"];
    var arrNum = Math.floor(Math.random()*arrColor.length);
    var bodyTag = document.getElementById("theBody");
    var element = document.getElementById("theBody");
    element.style.backgroundColor = 'blue';
    bodyTag.style.backgroundColor = arrColor[arrNum];
}