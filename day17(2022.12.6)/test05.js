   // 1번
   function sumMulti(a,b) {
    if( a == b) return a * b;
    else return a + b;
}
console.log(sumMulti(5,10));
console.log(sumMulti(53,42));

// 2번
let num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
let num2 = parseInt(prompt("비교할 두 번째 숫자: "));

compareTwo(num1, num2); //함수 실행

function compareTwo(a,b) {
    if(a == b) {
        alert(a + "와(과)" + b + "는 같습니다.");
    }else if(a > b) {
        alert(a + "(이)가" + b + "보다 큽니다.");
    }else{
        alert(b + "(이)가" + a + "보다 큽니다.");
    }
}