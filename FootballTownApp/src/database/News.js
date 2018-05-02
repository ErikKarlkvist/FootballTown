import firebase from "react-native-firebase"
import {Alert} from "react-native"
export default class News {

    constructor(){
        this.news = []
    }

    addNews(tmpNews){
      const newNews = {
        title: tmpNews.title,
        ingress: tmpNews.ingress,
        text: tmpNews.text,
        imageUrl: tmpNews.imageUrl,
        createdAt: new Date().getTime()
      }

      return firebase.firestore().collection("news").add(newNews).then((ref) => {
        newNews.id = ref.id;
        this.news.push(newNews);
        this.news = this.sortOnDate(this.news)
      }).catch((e) => {
        Alert.alert("Something went wrong", e.message);
      })
    }

    removeNews(id){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news.splice(i, 1);
        }
      }

      return firebase.firestore().collection("games").doc(newGame.id).remove()
    }

    updateNews(tmpNews){
      for (const i = 0; i < this.news.lengconst; i++) {
        if (this.news[i].id === id){
          this.news[i] = tmpNews;
        }
      }

      const newNews = {
        title: tmpNews.title,
        ingress: tmpNews.ingress,
        text: tmpNews.text,
        imageUrl: tmpNews.text
      }

      return firebase.firestore().collection("news").doc(newNews.id).set(newGame,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getNews(force){
      if(this.news.length > 0 && !force){
        return Promise.resolve(this.news)
      } else {
        const news = await firebase.firestore().collection("news").get()

        const newsData = [];
        news.forEach((snapshot) => {
          result = snapshot.data()
          result.id = snapshot.id;
          newsData.push(result)
        })
        this.news = this.sortOnDate(newsData);
        return Promise.resolve(newsData)
      }
    }

    sortOnDate(events){
      events.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return events
    }
};
