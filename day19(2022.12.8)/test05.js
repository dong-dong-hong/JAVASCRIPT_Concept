function newRegister() {
    let newItem = document.createElement("li"); //요소 노드 추가
    let $subject = document.querySelector("#subject"); //폼의 텍스트 필드
    let newText = document.createTextNode($subject.value); 
    //텍스트 필드의 값을 텍스트 노드로 만들기 
    newItem.appendChild(newText); 
    // 텍스트 노드를 요소 노드의 자식 노드로 추가(연결)

    let $itemList = document.querySelector("#itemList"); //웹 문서에서 부모 노드 가져오기
    // $itemList.appendChild(newItem);
    // 추가로 입력한 값을 맨 위에 나오게 한다 [0]
     $itemList.insertBefore(newItem, $itemList.childNodes[0]);
    //새로 만든 요소 노드를 부모 노드에 추가(연결)
    
    // 😁폼의 텍스트 필드 값 지워지게 만들기.
}