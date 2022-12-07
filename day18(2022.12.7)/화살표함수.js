const box = document.querySelector("#box");

box.addEventListener("mouseenter" , () => { // 마우스 올리면
    box.style.backgroundColor = "pink";
});

box.addEventListener("mouseleave", () => { // 마우스 벗어나면
    box.style.backgroundColor = "powderBlue";
});