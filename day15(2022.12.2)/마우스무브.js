let cover = document.getElementById("cover")
cover.addEventListener("mouseover", function(){ //click
    cover.src = "images/이미지1.jpg";
});
cover.addEventListener("mouseout", function(){
    cover.src = "images/이미지2.jpg";
});