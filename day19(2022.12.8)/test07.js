let listB = document.querySelectorAll(".check");

for(let i = 0; i <= listB.length; i++) {
    listB[i].addEventListener("click", function() {
        listB[i].parentNode.style.color = "#ccc";
    })
}