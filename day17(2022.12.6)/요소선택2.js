const $list = document.querySelector('.list');
const items = $list.children;
const item2 = document.querySelector(".item2")
const li = document.querySelector("li");

// console.log($list);
// 😁자식 요소 선택하기
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);

// 😁부모 요소 선택하기
// console.log(item2.parentElement)

// 😁제일 가까운 상위 부모 요소 선택하기
console.log(li.closest("main"));

// 😁형제 요소 선택하기
console.log(item3.previousElementSibling); //이전 형제요소
console.log(item3.nextElementSibling); //다음 형제요소