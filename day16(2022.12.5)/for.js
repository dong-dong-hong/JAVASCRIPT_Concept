 //😀i++는 i=i+1과 같다.

        // for(let i = 0; i<10; i++){
        //     console.log("숫자 부르기", i)
        // } 

        // for(let i = 1; i<11; i++){
        //     console.log("10번 찍어 안 넘어가는 나무 없다", i)
        // } 

        //😀짝수만 출력하고 싶다면?
        //1️⃣ i+=2 는 i=i+2와 같다.
        // for(let i = 0; i<=11; i+=2){
        //     console.log("짝수", i);
        // }

        // //2️⃣ 나머지가 0인가?
        // for(let i = 0; i<=10; i++){
        //     if(i%2==0){
        //         console.log("짝수인가", i);
        //     }
        // }

        //😀이중for문 : 별찍기, 구구단. [자입]107
        for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
        //5줄 만들려면 5번 복사 붙여넣기.
        document.write("<br>");
        for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
        document.write("<br>");
        for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
        document.write("<br>");
        for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
        document.write("<br>");
        for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
        //😀이것을 더 간단하게 만들 수 있는 방법?
        document.write("<br><br>")
        for(let k=0; k<5; k++){ //i=0부터 i=29까지 총 30회 반복
            for(let i=0; i<30; i++){ //i=0부터 i=29까지 총 30회 반복
            document.write('*');
        }
            document.write("<br>");
        }
        //실행순서
        //1. 바깥쪽 for문을 실행(k=0)
        //2. 안쪽 for문 실행 30번 반복하고 빠져나옴
        //3. <br>태그 추가해서 줄 바꿈.
        //4. 바깥쪽 for문 조건식이 false가 될 때까지 반복
