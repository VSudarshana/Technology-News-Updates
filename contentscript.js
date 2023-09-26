// Fetch the latest technology news from the News API.
const getTechnologyNews = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=f29a8f94ad5c470781afb7a5bc627575');
    const data = await response.json();
    return data;
  };
  
  // Inject the news into the DOM.
  const injectNews = (data) => {
    const popup = document.querySelector('#popup');
    const newsList = document.createElement('ul');
    for (const article of data.articles) {
      const newsItem = document.createElement('li');
      const newsLink = document.createElement('a');
      newsLink.textContent = article.title;
      newsLink.href = article.url;
      newsLink.target = '_blank';
      newsItem.appendChild(newsLink);
      newsList.appendChild(newsItem);
    }
    popup.appendChild(newsList);
  };
  
  // Get the news and inject it into the DOM.
  getTechnologyNews()
    .then(injectNews)
    .catch(console.error);
  