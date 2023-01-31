const newsContent = document.querySelector('.news');
const newsButton = document.getElementById('getNews');

//Store the URL of the JSON we want to retrieve in a variable
const requestURL = 'https://newsapi.org/v2/top-headlines?' + //top 20 headlines 
          'country=us&category=business&' + //filters
          'apiKey=93b1fdd888374b6cac2a407c8efdfee6'; //my own API key from newsapi.org

// ASYNC/AWAIT
const getNews = async () => {
  const response = await fetch(requestURL, {method: 'get'}); // FETCH makes it easy to get data from APIs
  const json = await response.json();
  return json.articles;
}
getNews().then(newsData => {
  let current = 0;
  newsButton.addEventListener('click', () => { // addEventListener replaces jquery $.click()
    if (current === 20) { current = 0; }
    displayNew(newsData[current]);
    current++;
  });
});

function displayNew(newsItem) {
  const content = `<a target="_blank" href="${newsItem.url}">
    <article>
      <h5>${newsItem.title}</h5>
    </article>
  </a>`;
  newsContent.innerHTML = content;
}