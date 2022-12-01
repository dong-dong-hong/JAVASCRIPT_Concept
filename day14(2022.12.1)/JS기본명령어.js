   //변수에 대해서
        // 정수 , 실수를 구별하지 않는다. 정확한 계산 어렵다.
        var num = 10; // 숫자
        var str = '자바스크립트'; // 문자열
        var temp = true; // Boolean
        document.write(num + '<br>' + str + '<br>' + temp + '<br><br>');
        //br같은 태그들을 문자로 ''표현합니다.

        // 😢퀴즈! 이렇게 해보세요.
        var test1 = '안녕하세요';
        var test2 = '또 만났네요';
        document.write(test1+ '<br>' + test2 + '<br>');

        // var의 단점은?
         // 이렇게 덮어씁니다. let(버전es6)은 덮어쓸 수 없으며
         // 블록{}에서도 차이점이 있습니다. 전역변수와 지역변수
        var test1 = '솥두껑';
        document.write(test1 + '<br>');

        let test3 = 300;
        // let test3 = 400; let은 중복 선언시 오류 발생! 에러 확인
        document.write(test3);

        // 🧐지역 local 변수와 전역 global 변수
        // var kor = 90;
        //     function getScore() {
        //         kor = 100; // 🧐전역변수 (var없다)
        //         console.log(kor); //100
        //     }
        //     getScore();
        //     console.log(kor); // 100

            // 지여 local변수
            // var eng = 80;
            // function getScore() {
            //     var eng = 100; //지역변수 var로 선언함
            //     // {}블록 밖에서 사용할 수 없다.
            //     console.log(eng); // 100
            // }
            // getScore(); 함수 실행!
            // console.log(eng); //100



            function getScore() {
                var math = 88;
                 console.log(math); // 100
            }
            getScore();
            // console.log(math); //에러 지역변수
            // 블록{}에 의해 변수의 범위가 달라지는 것을 범수의 scope라고 한다.

            // 함수 레벨 스코프 function level scope와 
            // 블록 레벨 스코프 block level scope
            var numS = 33 ;
            {
                var numS = 44; // numS는 var전역 변수(함수아님)
                console.log(numS);// 44
            }
            console.log(numS); // 44

///////////////////////////////////////////////////////////////////////////
            let numSc = 33 ;
            {
                let numSc = 44; // numSC는 let지역 변수
                console.log(numSc);// 44
            }
            console.log(numSc); // 33

////////////////////////////////////////////////////////////////////////////////////

            const numSco = 33;
            {
                const numSco = 44; // numSco는 const지역변수
                console.log(numSco);// 44
            }
            console.log(numSco); // 33
////////////////////////////////////////////////////////////////////////////////////////
