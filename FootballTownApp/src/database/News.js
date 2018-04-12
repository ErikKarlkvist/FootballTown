export default class News {

    constructor(){
        this.news = [
            {
                id: "00001",
                title: "Arsenal won",
                text: "gg ez"
            },
            {
                id: "00002",
                title: "United lost",
                text: "too bad"
            },
            {
                id: "00003",
                title: "Elfborg wins",
                text: "5-0"
            }
        ]
    }

    addNews(tmpNews){
      this.news.push(tmpNews);
    }

    removeNews(id){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news.splice(i, 1);
        }
      }
    }

    updateNews(tmpNews){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news[i] = tmpNews;
        }
      }
    }

    getNews(){
      return this.news;
    }
};
