let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());

document.write("오늘은 " + date.getFullYear() + "년" + date.getMonth() + "월" + date.getDate() + "일 입니다.<br><br>");
document.write("현재 시간은" + date.getHours() + "시" + date.getMinutes() + "분" + date.getUTCSeconds() + "초 입니다.");

// 요일을 배열로 처리
let specialDays = new Array("일","월", "화", "수", "목", "금", "토");
document.write(specialDays[date.getDay()] + "요일입니다.");
