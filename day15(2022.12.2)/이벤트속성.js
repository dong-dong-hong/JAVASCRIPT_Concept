let now = new Date(); // Date 객체 : 현재 날짜와 시간을 출력하거나 달력 표시

// innertext와 innerhtml의 차이
function innertext() {
    document.getElementById('current').innerText = "<em>" + now + "</em>";
}

function innerhtml() {
    document.getElementById('current').innerHTML = "<em>" + now + "</em>";
}


//이미지 속성 가져오기
function displaySrc() {
    let cup = document.querySelector('#cup');
    alert("이미지 소스 : " + cup.getAttribute("src")); //이미지 속성
}

function changePic() {
    let small = document.querySelectorAll('.small');
    alert("이미지 소스 : " + cup.getAttribute("src")); // 이미지 속성
}

function changePic2() {
    
    let cup = document.querySelector('#pic');
    alert("이미지 소스 : " + cup.getAttribute("src")); // 이미지 속성 
}