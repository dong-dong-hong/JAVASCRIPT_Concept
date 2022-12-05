   // "pop"이름을 붙여주는 팝업창이 한번(지정한 창에)만 열린다.
        // "pop"이름지정하지 않으면 계속 새로 나타납니다.
        // 모달창(레이어) : 브라우저 창이 아닌 문서 일부처럼 보이게 만든다
        // div 태그를 사용해서 만들엇거 기존 사이트 위에 팝업 창을 겹친다.
        // widnow.open("test12.html", "", "width=500, height=400");

        let newWin = window.open("test12.html", "pop" , "width=300, height=200, left=100, top=200");
        if(newWin == null) { // 팝업이 차단되어 있으면 알림 창 표시
            alert("팝업이 차단되어 있습니다. 해제해주세요.")
        }
        // newWin.moveBy(100,100);