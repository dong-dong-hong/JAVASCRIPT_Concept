const link = document.querySelector("a");

link.addEventListener("click" , (e) => {
    e.preventDefault();//😊
    console.log("링크를 클릭했습니다.");
});

// 링크 클릭시 기본 기능인 링크 이동을 막고,
// 콘솔 창에 텍스트가 나타나도록 한다.
// e값은 이벤트 객체
// prventDefault는 기본기능을 실행하지 말라는 명령어
// 이벤트명 뒤에 있는 괄호에서 전달되는 값 하나이면 괄호생략가능