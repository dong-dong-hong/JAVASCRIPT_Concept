const list = document.querySelectorAll(".list li");

for(let el of list) { // el은 변수명 (for of문) for문 in
    el.addEventListener("click", e=> { 
        e.preventDefault(); // 새로고침 방지
        console.log(e.currentTarget.innerText);
    })
}
// currentTarget : 선택한 텍스트를 불러온다.
//텍스트내용 변경하고자 할때
// 선택자.innerText = "변경할 텍스트";