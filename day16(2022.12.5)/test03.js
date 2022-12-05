   // div와 h3태그 이용해서 구구단의 모양을 꾸며주세요.
   for(let i=2; i<10; i++) { // 2단 ~ 9단
    document.write("<div>");
    document.write("<h3>" + i + "단</h3>");
    for(let j=1; j<10; j++) { // 1~9까지 곱하는 수
        document.write(i + "x" + j + "=" + i*j +"<br>");
    }
    document.write("</div>");
}