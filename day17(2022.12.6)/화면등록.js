function myCheck() {
    let myt = document.myform.title.value;
    if(myt == "" || myt == null) {
        alert('상품명 데이터 공백입니다.\n 정확하게 입력해주세요.');
        document.myform.title.focus(); // 입력란에 초점
        return; // 아래문장 처리하지 않고 함수 탈출 return false;라고 쓴다.
    }else{
        document.myform.pay.focus();
    }            

    let myp = document.myform.pay.value;
    if(myp == ""|| myp == null) {
        alert('가격 데이터 공백입니다.\n 정확한 데이터를 입력해주세요.');
        document.myform.pay.focus();
        return false;
    } else{
        if( size < 3 || size > 5) {
            alert("자릿수는 3~5자릿수 적절합니다.");
            myform.pay.value = " "; //데이터 삭제 //myp
            myform.pay.focus();

        }
    }
    // 😊3~5자리가 적절합니다.

    let message = '상품명 데이터: ' + myt + " 상품 가격 데이터:" + myp;
    document.getElementById('display').innerHTML= '<h2>' + message + '</h2>';
}

// 기본 reset 버튼이 초기화 제공
function myClear() {
    document.getElementById('display').innerHTML='';
}

function myNumberCheck() {
    size = myform.pay.value.length;
    myp=myform.pay.value;
    alert(myp + ' 문자열 길이 ' + size);
    // 문자열 길이 3~5제한

    document.getElementById('display').innerHTML= myp+ ' ' + size;
}