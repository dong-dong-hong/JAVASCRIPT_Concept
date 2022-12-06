      // parseInt : prompt로 부터 받은 수를 정수로 변환 
        // parseInt() 대신 Number() 함수로 써도 된다.
    //    let num1 = parseInt(prompt("첫 번째 숫자는?"));
    //    let num2 = parseInt(prompt("두 번째 숫자는?"));
    //    let result = addNumber(num1, num2);
    //    alert("두 수를 더한 값은 " + result + "입니다.");



    //    function addNumber(a,b) {
    //       let sum = a + b;
    //       return sum; // 😁
    //    }

    //    console.log(sum);


    let result = (function() {
        return 10 + 20;
       }());
       console.log(result);

       // 1. num1변수와 num2 변수에 값을 저장
       // 2. num1와 num2 값을 addNumber()함수 호출
       // 3. 함수 선언부로 넘어와 함수 설정 num1값은 a변수로,
       // num2값은 b변수로 넘어간다.
       // 4. a값과 b값을 더해 sum변수에 저장
       // 5. 결과값 sum을 반환(😁return)
       // 6. 반환된 값을 변수 result에 저장
       // 7. result 변수값으 화면에 표시
       // return문 : 함수 밖에서도 사용할 수 있도록 함수값을 변환한다. 

       // 위의 sum은 단순히 결과값을 저장했다가 반환 역할만하므로
       // 중간 과정을 생략하고 즉시 반환할 수 있다.
       function addNumber(a,b) {
           return a + b;
       }