let now = new Date("2022-12-07"); // 오늘 날짜를 객체로 지정
let firstDay = new Date("2022-11-14"); // 시작 날짜를 객체로 지정

let toNow = now.getTime();  // 오늘까지 지난 시간(밀리 초)
let toFirst = firstDay.getTime(); // 첫날까지 지난 시간(밀리 초)
let passedTime = toNow - toFirst; // 첫날부터 오늘까지 지난 시간(밀리 초)

pasedTime = Math.round(passedTime / (1000*60*60*24));
//멀리 초를 일 수로 계산하고 반올림
// getTime() 메서드는 특정한 날까지의 시간을 밀리초(1/1000초)단위로 표시한다.

document.querySelector("#result").innerHTML = passedTime;