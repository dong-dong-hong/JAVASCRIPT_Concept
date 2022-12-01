 // 😢변수 문자형
 var a= "javascript";
 var num = "100";
 var tag = "<h1> String </h1>"; // 태그로 인식
 console.log(a);
 console.log(num);
 console.log(tag);
 
 document.write(a);
 document.write(num);
 document.write(tag);

 // // 변수 숫자형
 var s = 100;
 var t = Number("500");// 형변환
 console.log(s);
 console.log(t);

 //변수 논리형
 var y = true;
 var t = 10 >= 100;//false
 var k = Boolean('hello');// 빈문자외 모두 true
 console.log(y);
 console.log(t);
 console.log(k);
 
 var m = Boolean(0); // 숫자는 false
 var k = Boolean("홍길동") // 문자는 true
 console.log(m);
 console.log(k);



 // 🐻null과 undefined 데이터
 // undefined 자료가 정의(할당)되지 않았을 때 데이터 상태
 // null 데이터 값이 유효하지 않은 상태(값이 비어있다..)
 // (숫자 0은 null이 아님)
 //아레 내용은 콘솔 창에서 입력해보기
 //  var s; //  undefined 변수s에 값이 등록되기 전
 //  var t = hello;
 //  t = null; // 지정된 값을 비우고자 할 때 사용
 //  console.log(s);
 //  console.log(t);

 // typeof 어떤 자료형인지 알고 싶을때?
 var num = 100;
 var str = "자바스크립트"
 document.write(typeof num, "<br>"); // number
 document.write(typeof str, "<br>"); // string

 // 연산자
 // var num1 = 15;
 // var num2 = 2;
 // var result;
 // result  = num1 + num2;
 // document.write(result, "<br>"); // 17
 // result  = num1 - num2;
 // document.write(result, "<br>"); // 13
 // result  = num1 * num2;
 // document.write(result, "<br>");// 30
 // result  = num1 / num2;
 // document.write(result, "<br>");// 7.5
 // result  = num1 % num2;
 // document.write(result, "<br>");// 1 나머지


 //문자열 결합 연산자
 var t1 = "동해물과";
 var t2 = "백두산이";
 var t3 = 1234;
 var t4 = "마르고 닳도록";
 var result;
 result = t1+ t2 + t3 + t4;
 document.write(result + '<br><br><br>');


 // 대입연산자 : 연산된 데이터를 변수에 저장
 // 복합연산자 : 산술 + 대입

 // var num1 = 10;
 // var num2 = 3;

 // num1 += num2; 
 // document.write(num1, "<br>"); // 13
 // num1 -= num2;
 // document.write(num1, "<br>"); // 10
 // num1 *= num2;
 // document.write(num1, "<br>"); // 30
 // num1 %= num2;
 // document.write(num1, "<br>"); // 0

 // 퀴즈!! 복합연산자 표만들기

 // 내가 한거
//     var str1 = "<table border='1'>";
//         str1 += "<tr>";
//         str1 += "<td>1<td>";

//     var str2 = "<table border= '1'>";
//         str2 += "<tr>";
//         str2 += "<td>2<td>";

//     var str3 = "<table>";
//         str3 += "<tr>";
//         str3 += "<td>3<td>";
//    document.write(str1 + str2 + str3);

 // 정답풀이
 //  var str = "<table border='1'>";
 //  str += "<tr>";
 //  str += "<td>1<td>";
 //  str += "<td>2<td>";
 //  str += "<td>3<td>";
 //     document.write(str);


     // 증강연산자
     let numB1 = 10;
     let numB2 = 20;
     let resultB;

     numB1--; //9
     document.write(numB1, "<br>");
     numB1++; //10
     document.write(numB1, "<br>");

     resultB = numB2++; // resultB : 20 , num2B : 21
     document.write(resultB, "<br>");

     resultB = ++numB2; // resultB : 22 , num2B : 22
     document.write(resultB, "<br>");

     //비교연산자
     var k = 10, m = "10";
     k == 10; //true
     m == 10; //true

     k == 10; // true 자료형까지 일치하는지
     m == 10; // false 자료형 다름 [숫자형/문자형]

     // 비교해보세요
     var a1 = 10;
     var b1 = 20;
     var c1 = 10;
     var f1 = "20";
     var result1;

     result1= a1> b1; //false
     document.write(result1, "<br>");
     result1= a1 < b1; //true
     document.write(result1, "<br>");
     result1= a1 <= b1; //true
     document.write(result1, "<br>");
     result1= b1 ==f1; //true, 자료형 상관없이 비교
     document.write(result1, "<br>");
     result1= a1 != b1; //true
     document.write(result1, "<br>");
     result1= b1 === f1; //false 자료형이 다름
     document.write(result1, "<br>");

     // 논리 연산자
     var a2 = 10;
     var b2 = 20;
     var m2 = 30;
     var n2 = 40;

     var result2;
     result2 = a2 > b2 || b2 > m2 || m2 > n2; // or 이거나
     document.write(result2, "<br>" );