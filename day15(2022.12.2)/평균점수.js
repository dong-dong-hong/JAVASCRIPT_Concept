//var eng = 1; //var 재선언 재할당 -> let
// 문자형을 숫자형으로 형변환
let kor = Number(prompt("국어 점수는?")); // 80
let eng = Number(prompt("영어 점수는?")) ; // 70
let math = Number(prompt("수학 점수는?")); // 60

let result = (kor + eng + math) / 3;
document.write("<h1> 평균 점수는 ? " + result + "점</h1>");

