let width; //반지름 값을 받기 위해 변수 선언
let height; //낙타체(변수선언: 의미가 있는 단어의 조합)
let result; //결과

width = prompt("가로 길이는?");
height = prompt("세로 길이는?");
result = width * height / 2; //가로 * 높이 / 2

document.write("<h3> 삼각형의 넓이는? " + result + "</h3>");
document.write("<h5> 가로 길이는? " + width + "</h5>");
document.write("<h5> 세로 길이는? " + height + "</h5>");