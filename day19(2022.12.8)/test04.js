function addP() {
    let newP = document.createElement("p");
    let txtNode = document.createTextNode("Dom은 docment object model의 줄임말입니다.")
    newP.appendChild(txtNode); // 텍스트 노드를 자식 노드로 연결하기
    document.getElementById("info").appendChild(newP);

    let newImg = document.createElement("img");
    let srcNode = document.createAttribute("src");
    let altNode = document.createAttribute("alt");
    srcNode.value = "images/큰이미지1.jpg" // src 속성값 지정
    altNode.value = "돔 트리 예제 이미지"; // alt 속성값 지정
    newImg.setAttributeNode(srcNode);   // 이미지의 src속성 노드 연결하기
    document.getElementById("info").appendChild(newImg);
}