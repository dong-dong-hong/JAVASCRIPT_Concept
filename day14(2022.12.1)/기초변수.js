 // π’λ³μ λ¬Έμν
 var a= "javascript";
 var num = "100";
 var tag = "<h1> String </h1>"; // νκ·Έλ‘ μΈμ
 console.log(a);
 console.log(num);
 console.log(tag);
 
 document.write(a);
 document.write(num);
 document.write(tag);

 // // λ³μ μ«μν
 var s = 100;
 var t = Number("500");// νλ³ν
 console.log(s);
 console.log(t);

 //λ³μ λΌλ¦¬ν
 var y = true;
 var t = 10 >= 100;//false
 var k = Boolean('hello');// λΉλ¬ΈμμΈ λͺ¨λ true
 console.log(y);
 console.log(t);
 console.log(k);
 
 var m = Boolean(0); // μ«μλ false
 var k = Boolean("νκΈΈλ") // λ¬Έμλ true
 console.log(m);
 console.log(k);



 // π»nullκ³Ό undefined λ°μ΄ν°
 // undefined μλ£κ° μ μ(ν λΉ)λμ§ μμμ λ λ°μ΄ν° μν
 // null λ°μ΄ν° κ°μ΄ μ ν¨νμ§ μμ μν(κ°μ΄ λΉμ΄μλ€..)
 // (μ«μ 0μ nullμ΄ μλ)
 //μλ  λ΄μ©μ μ½μ μ°½μμ μλ ₯ν΄λ³΄κΈ°
 //  var s; //  undefined λ³μsμ κ°μ΄ λ±λ‘λκΈ° μ 
 //  var t = hello;
 //  t = null; // μ§μ λ κ°μ λΉμ°κ³ μ ν  λ μ¬μ©
 //  console.log(s);
 //  console.log(t);

 // typeof μ΄λ€ μλ£νμΈμ§ μκ³  μΆμλ?
 var num = 100;
 var str = "μλ°μ€ν¬λ¦½νΈ"
 document.write(typeof num, "<br>"); // number
 document.write(typeof str, "<br>"); // string

 // μ°μ°μ
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
 // document.write(result, "<br>");// 1 λλ¨Έμ§


 //λ¬Έμμ΄ κ²°ν© μ°μ°μ
 var t1 = "λν΄λ¬Όκ³Ό";
 var t2 = "λ°±λμ°μ΄";
 var t3 = 1234;
 var t4 = "λ§λ₯΄κ³  λ³λλ‘";
 var result;
 result = t1+ t2 + t3 + t4;
 document.write(result + '<br><br><br>');


 // λμμ°μ°μ : μ°μ°λ λ°μ΄ν°λ₯Ό λ³μμ μ μ₯
 // λ³΅ν©μ°μ°μ : μ°μ  + λμ

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

 // ν΄μ¦!! λ³΅ν©μ°μ°μ νλ§λ€κΈ°

 // λ΄κ° νκ±°
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

 // μ λ΅νμ΄
 //  var str = "<table border='1'>";
 //  str += "<tr>";
 //  str += "<td>1<td>";
 //  str += "<td>2<td>";
 //  str += "<td>3<td>";
 //     document.write(str);


     // μ¦κ°μ°μ°μ
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

     //λΉκ΅μ°μ°μ
     var k = 10, m = "10";
     k == 10; //true
     m == 10; //true

     k == 10; // true μλ£νκΉμ§ μΌμΉνλμ§
     m == 10; // false μλ£ν λ€λ¦ [μ«μν/λ¬Έμν]

     // λΉκ΅ν΄λ³΄μΈμ
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
     result1= b1 ==f1; //true, μλ£ν μκ΄μμ΄ λΉκ΅
     document.write(result1, "<br>");
     result1= a1 != b1; //true
     document.write(result1, "<br>");
     result1= b1 === f1; //false μλ£νμ΄ λ€λ¦
     document.write(result1, "<br>");

     // λΌλ¦¬ μ°μ°μ
     var a2 = 10;
     var b2 = 20;
     var m2 = 30;
     var n2 = 40;

     var result2;
     result2 = a2 > b2 || b2 > m2 || m2 > n2; // or μ΄κ±°λ
     document.write(result2, "<br>" );