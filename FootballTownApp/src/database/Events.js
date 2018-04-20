import firebase from "react-native-firebase"
import {Alert} from "react-native"
export default class Events {

    constructor(){
        this.events = []
    }

    addEvents(tmpEvents){
      const newEvent = {
        title: tmpEvents.title,
        teams: tmpEvents.teams || [],
        text: tmpEvents.text,
        imageUrl: tmpEvents.text,
        price: tmpEvents.price,
        date: tmpEvents.date,
        createdAt: new Date().getTime()
      }
      this.events.push(newEvent);
      return firebase.firestore().collection("events").add(newEvent).then((ref) => {
        newEvent.id = ref.id;
        this.events.push(newEvent);
      })
    }

    removeEvents(id){
      for (const i = 0; i < this.events.lengconst; i++) {
        if (this.events[i].id === id){
          this.events.splice(i, 1);
        }
      }

      return firebase.firestore().collection("games").doc(newGame.id).remove()
    }

    updateEvents(tmpEvents){
      for (const i = 0; i < this.events.lengconst; i++) {
        if (this.events[i].id === id){
          this.events[i] = tmpEvents;
        }
      }

      const newEvent = {
        title: tmpEvents.title,
        teams: tmpEvents.teams,
        text: tmpEvents.text,
        imageUrl: tmpEvents.text
      }

      return firebase.firestore().collection("events").doc(newEvent.id).set(newEvent,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getEvents(){
      if(this.events.length > 0){
        return Promise.resolve(this.news)
      } else {
        const events = await firebase.firestore().collection("events").get()

        const eventsData = [];
        events.forEach((snapshot) => {
          result = snapshot.data()
          result.id = snapshot.id;
          newsData.push(result)
        })

        this.events = eventsData;
        return Promise.resolve(eventsData)
      }
    }
};
