   // let a = 10;
        // let b = 5;
        // let result = a + b;
        // console.log(result);


        // addNumber(2, 3); // 인수를 입력받아서 실행
        // addNumber(10, 20);

        let num1 = parseInt(prompt("첫 번째 숫자는?"));
        let num2 = parseInt(prompt("두 번째 숫자는?"));
        addNumber(num1, num2);

        function addNumber(a, b) { // 매개변수 a,b
            let sum = a + b;
            alert("두 수를 더한 값은 " + sum + "입니다.");
        }
        // 함수 선언 실행 앞이나, 뒤 어디에 놓여도 된다.
        // 1. 프롬프트 창에서 사용자에게 입력받아 변수 num1, num2에 저장
        // 2. num1, num2 값을 addNumber()함수를 호출
        // 3. 함수 선언부로 넘어온다. num1값은 매개변수 a로 num2값은 b로 넘겨준다.
        // 4. 매개변수에 돌아온 인수 값을 사용해 함수 안의 명령을 실행.