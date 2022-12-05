let i = 0;
let images = [];

images[0] = "images/images1.jpg";
images[1] = "images/images2.webp";
images[2] = "images/images3.jpg";
images[3] = "images/images4.webp";



// name으로 slide를 선택
// id나 class와는 다르게 CSS 접근할 수 없다.
// 인덱스값은 필수로 넣어줘야 한다.

function changeImg() {
    document.slide.src = images[i];

    if( i < images.length-1) {
        i++
    }else{
        i = 0;
    }

    setTimeout("changeImg()", 2000);
}


// 브라우저 내장객체 window : 
// 브라우저 창이 열릴 때마다 하나씩 만들어지는 객체
// Document : body 태그를 만나면 만들어지는 객체
// History : 방문기록 
// Location : 현재 페이지에 대한 URL 
// Navigator : 사용중인 브라우저 정보  
// Screen : 현재 사용중인 화면 정보

window.onload = changeImg;