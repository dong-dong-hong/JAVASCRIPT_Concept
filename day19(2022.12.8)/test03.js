  //콘솔에서 확인
        // document.querySelectorAll("li");

        let newP = document.createElement("p");
        let txtNode = document.createTextNode("DOM을 추가해봅시다.")
        newP.appendChild(txtNode);
        document.getElementById("info").appendChild(newP);