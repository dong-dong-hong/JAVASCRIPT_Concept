let i,j,a;

for(i = 0; i <= 4; i++) {

    for(j = i; j <= 3; j++){
        document.write("&nbsp"); // &nbsp : 띄어쓰기, 공백을 나타내는 특수문자
    }
    for(a = 1; a <= i * 2 + 1; a++){
        document.write("*");
    }
    for(j = 10; j >= 5; j--){
        document.write("&nbsp");
    }
    document.write("<br>");
}
for(i = 4; i >= 0; i--) {
    for(j = i; j <= 3; j++){
        document.write("&nbsp");
    }
    for(a = 1; a <= i * 2 + 1; a++){
        document.write("*");
    }
    for(j = 10; j >= 5; j--){
        document.write("&nbsp");
    }
    document.write("<br>");
}