function showPrice() {
    let $originPrice = document.querySelector('#oPrice').value; // 원래 가격
    console.log($originPrice);
    let $rate  = document.getElementById('rate').value; // 할인율
    let savedPrice = $originPrice * ($rate/ 100);// 할인금액
    let resultPrice = $originPrice - savedPrice; // 최종가격(원래가격 - 할인금액)
    document.querySelector('.showResult').innerHTML = "상품의 원래 가격은 " + $originPrice + "원이고, 할인율은 " 
    + $rate + "입니다.<br>" + savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다."
}