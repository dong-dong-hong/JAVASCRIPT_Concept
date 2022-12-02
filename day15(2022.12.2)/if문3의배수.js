//3의 배수인지 아닌지를 if문을 활용해서 만들어보자
// 3으로 나누어서 나머지가 0이 되는지 확인 %를 사용.

let userNumber = 7;
// var userNumber = prompt('숫자를 입력하세요.');

if(userNumber % 3 !== 0) {
    console.log('3의 배수가 아닙니다.')
    alert('3의 배수가 아닙니다.');
    document.write('3의 배수가 아닙니다.');
}else{
    console.log('3의 배수입니다.');
    alert('3의 배수입니다.');
    document.write('3의 배수입니다.');
}



