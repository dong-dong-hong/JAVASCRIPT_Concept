let news = [];
//๐api data๋ถ๋ฌ์ค๊ธฐ.
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE ๋ฑ
        headers: { 'Authorization': 'KakaoAK a328a4281159fff08e3b30292ec2e623', },
    });
    return data = await response.json(); // JSON ์๋ต์ ๋ค์ดํฐ๋ธ JavaScript ๊ฐ์ฒด๋ก ํ์ฑ
}

postData('https://dapi.kakao.com/v2/search/vclip?query=๋ ์จ', { answer: 42 }).then((data) => {
    console.log(data); // JSON ๋ฐ์ดํฐ๊ฐ `data.json()` ํธ์ถ์ ์ํด ํ์ฑ๋จ
    news = data.documents;
    //console.log(news);
    render();
});

//array.map : ๐๋ฐฐ์ด ํํ๋ก ๊ธฐ์กด์ ๊ฐ์ด๋ (JSON)์๋ก์ด ํํ์ ๊ฐ์ ์ ์ํ  ์ ์๋ค.
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
                        <a href="${item.url}"> ์์ธํ๋ณด๊ธฐ </a>
                        ${item.author}
                        ${item.datetime}
                </div>
            </section>
        </div> `; 
}).join('');  //๐ array join์ ์ด์ฉํด ,์ฝค๋ง ๋ถ๋ถ์ ์์ ์ค๋ค.

document.getElementById("data-viewer").innerHTML = newsHTML;
    }