exports.News = () => {

  let news = {
    {
      id: "00001"
      title: "Arsenal won",
      text: "gg ez"
    },
    {
      id: "00002"
      title: "United lost",
      text: "too bad"
    },
    {
      id: "00003"
      title: "Elfborg wins",
      text: "5-0"
    }
  }

  return {
    getNews(){
      return getNews();
    },
    addNews(tmpNews){
      news.push(tmpNews);
    }
  }

  function getNews(){
    return news;
  }
}
