const $list = document.querySelector('.list');
const items = $list.children;
const item2 = document.querySelector(".item2")
const li = document.querySelector("li");

// console.log($list);
// πμμ μμ μ ννκΈ°
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);

// πλΆλͺ¨ μμ μ ννκΈ°
// console.log(item2.parentElement)

// πμ μΌ κ°κΉμ΄ μμ λΆλͺ¨ μμ μ ννκΈ°
console.log(li.closest("main"));

// πνμ  μμ μ ννκΈ°
console.log(item3.previousElementSibling); //μ΄μ  νμ μμ
console.log(item3.nextElementSibling); //λ€μ νμ μμ