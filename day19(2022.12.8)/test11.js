let news = [];
//💛api data불러오기.
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE 등
        headers: { 'Authorization': 'KakaoAK a328a4281159fff08e3b30292ec2e623', },
    });
    return data = await response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

postData('https://dapi.kakao.com/v2/search/vclip?query=날씨', { answer: 42 }).then((data) => {
    console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
    news = data.documents;
    //console.log(news);
    render();
});

//array.map : 😀배열 형태로 기존의 값이나 (JSON)새로운 형태의 값을 정의할 수 있다.
const render = () => {
let newsHTML = '';
newsHTML = news.map((item) => {
    return `<div id="data-viewer">
        <h3> ${item.title}</h3>
            <section>
                <article>

                </article>
                <div>
                    <img src="${item.thumbnail}">
                        <a href="${item.url}"> 자세히보기 </a>
                        ${item.author}
                        ${item.datetime}
                </div>
            </section>
        </div> `; 
}).join('');  //😀 array join을 이용해 ,콤마 부분을 없애준다.

document.getElementById("data-viewer").innerHTML = newsHTML;
    }