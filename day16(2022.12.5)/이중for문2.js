let i, j , result ;
for( i = 10; i > 0; i--) {
    let result = " ";
    for( j = 0; j < i; j++) {
        result += "*"
    }
    document.write(result + "<br>");
}