function myinfo() {
    info  = '국어 = ' + kor + ' 영어 = ' + eng + ' 평균 = ' +  avg + " 학점 = " + avv +  " 결과는 " + message;
    document.getElementById('display').innerHTML = '<h3>'  + info + '</h3>'; 
    //document.write 권장사항이 아님.
}

// 초간단 제어문 if-else
let kor = 90;
let eng = 85;
let message = '시험결과';
let sum = kor + eng;// 국어+영어 점수
let avg = sum / 2; // 평균점수
let grade = '학점';

if(avg >= 90) {
    grade = 'A';
}else if(avg >=80){
    grade = 'B';
}else if(avg >=70){
    grade = 'C';
}else if(avg >= 60){
    grade = 'D'
}else{
    grade = 'F'
}



if(avg >= 70) {
    message = '축합격입니다.';
} else {
    message = '재시험 대상입니다.';
}


console.log(sum);
console.log(avg);
console.log(message);
