import firebase from "react-native-firebase"
import {Alert} from "react-native"
import Factory from "./Factory"
export default class Events {

    constructor(){
        this.events = []
    }

    addEvent(tmpEvents){
      const newEvent = {
        title: tmpEvents.title,
        teams: tmpEvents.teams || [],
        text: tmpEvents.text,
        location: tmpEvents.location,
        price: tmpEvents.price,
        imageUrl: tmpEvents.imageUrl,
        price: tmpEvents.price,
        date: tmpEvents.date,
        location: tmpEvents.location,
        createdAt: new Date().getTime()
      }
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
      for (const i = 0; i < this.events.length; i++) {
        if (this.events[i].id === id){
          this.events[i] = tmpEvents;
        }
      }

      const newEvent = {
        title: tmpEvents.title,
        location: tmpEvents.location,
        price: tmpEvents.price,
        teams: tmpEvents.teams,
        text: tmpEvents.text,
        imageUrl: tmpEvents.text
      }

      return firebase.firestore().collection("events").doc(newEvent.id).set(newEvent,{merge:true}).catch((error) => {Alert.alert("Couldn't save")})
    }

    async getEvents(force){
      if(this.events.length > 0 && !force){
        return Promise.resolve(this.events)
      } else {
        try {
          const events = await firebase.firestore().collection("events").get()
          const teams = await Factory.getTeamsInstance().getTeams()

          const eventsData = [];
          events.forEach((snapshot) => {
            const result = snapshot.data()
            result.id = snapshot.id;
            teams.forEach(team => {
              if(result.teams.includes(team.id)){
                const index = result.teams.indexOf(team.id);
                result.teams[index] = team;
              }
            })
            eventsData.push(result)
          })

          this.events = this.sortOnDate(eventsData);
          return Promise.resolve(eventsData)
        }catch (e) {
          Alert.alert("Couldn't get events", e.message)
        }
      }
    }

    sortOnDate(events){
      events.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      return events
    }

};
