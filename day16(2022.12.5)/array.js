  //콘솔창보기 단축키 ctrl + shift + i
        // let fruit = "apple";
        // console.log("과일이름은? " + fruit);
        // let fruit2 = "kiwi";
        // console.log("과일이름은? " + fruit2);
        // let fruit3 = "orange";
        // console.log("과일이름은? " + fruit3);

        let fruit = ['apple', 'kiwi', 'orange', 'banana', 'grape'];
        console.log("과일 종류는 " + fruit);
        console.log("과일 종류중 세번째 과일은? " + fruit[2]);
        console.log("과일 종류중 세번째 과일은? " + fruit[1]);

        // fruit[0] = "pineapple";
        // console.log(fruit);
        // 3번째에 토마토를 넣어주세요
        // fruit[2] = "tomato";
        // console.log(fruit);

        // 😁pop() : 마지막에 있는 아이템을 뺌
        // fruit.pop()
        // console.log(fruit);
        // 😁push() : 아이템을 배열 마지막에 추가
        // fruit.push("cherry");
        // console.log(fruit);

        // 😁includes : 포함하고 있는지 묻는다.
        // console.log(fruit.includes("apples"));

        // 😁indexOf : 몇 번째에 있는지 묻는다.
        // console.log(fruit.indexOf("kiwi"));

        // 😁slice() : 짤라낸다
        // 기존(오리지널)의 배열은 유지
        // console.log(fruit.slice(2)); // 앞에서 2개 잘라냄(추출)
        // console.log(fruit.slice(1,3)); //시작점, 끝점 (끝점은 미포함)

        // splice(2,1) : 시작점으로부터 몇개의 아이템 제거
        // 기존(오리지널)의 배열이 짤림
        // fruit.splice(2,2);
        // console.log(fruit);

        // slice와 splice의 차이
        // let otherFruit = fruit.slice(1,3);
        // console.log("새로운 배열" , otherFruit);
        // console.log("기존", fruit);

        fruit[0] = 'pineapple';
        fruit[1] = '체리';
        fruit.push('영희' , '철수' , 4567, 8888, '길동');
        console.log(fruit);

        