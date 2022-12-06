   // 😁함수 표현식(Expression) = 익명함수를 변수에 즉시 할당할 수 있다.

        // 익명 함수 : 함수의 이름이 없다.
        // 함수 선언 후 add 변수에 할당
        // 콘솔창에서 확인해보기.
        let add = function addNumber(a, b) {
            return a + b;
        }

        let sum = add(10, 20); // 익명 함수 실행 후 결과값을 변수 sum에 할당

        // 😁즉시 실행 함수
        let result = (function () {
            return 11 + 22;
        }());
        console.log(result);

        let result2 = (function () {
            return 13 + 24;
        })();
        console.log(result2);

        //😁화살표 함수 : 매개변수가 없을 때
        // 익명함수에서만 쓸 수 있다.
        // return문 생략된 것으로 간주한다.
        const hi = function () {
            return "안녕하세요?";
        }
 
        // 이렇게 바꿔쓸 수 있다.
    //    1. const hi = () => {
    //     return "안녕하세요?"
    //    };
    //   2. const hi = () => "안녕하세요?";


    // 😁매개변수가 1개일 때
    let hi = function(user){
        document.write(user + "님, 안녕하세요?");
    }

    let hi = user=> document.write(user + "님, 안녕하세요?");

    // 😁매개변수가 2개일 때
    let sum = function(a,b) {
        return a + b;
    }

    let sum = (a,b) => {
        return a+b;
    };
    let sum = (a,b) => a+b;