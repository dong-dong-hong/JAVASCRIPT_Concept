let $wrap = document.querySelector("#wrap");
let $box = document.querySelector("article");
// classList.contains()는 특정 클래스가 선택요소에 있으면 true,
// 없으면 false를 변환해주는 자바스크립트의 내장 기능이다.
$wrap.addEventListener("click", () => {
    let isOn = $wrap.classList.contains("on"); // 3번
    if(isOn) {
        $wrap.classList.remove("on");
    }else{
        $wrap.classList.add("on");
    }
    // 삼항 연산자 if문을 줄여쓴다.
    (isOn) ? $wrap.classList.remove("on") : $wrap.classList.add("on");

    // console.log(isOn); // true, false 콘솔창에 나온다.
    // wrap.classList.add("on"); // 클래스를 추가해준다.
    // // $wrap.classList.toggle("on"); 2번 remove, add가 합쳐진 내장기능
    // // $box.style.backgroundColor = "hotpink"; 1번
})