export default class Events {

    constructor(){
        this.events = [
            {
                id: "00001",
                title: "Event1",
                text: "gg ez"
            },
            {
                id: "00002",
                title: "Event2",
                text: "too bad"
            },
            {
                id: "00003",
                title: "Event3",
                text: "5-0"
            }
        ]
    }

    addEvents(tmpEvents){
      this.events.push(tmpEvents);
    }


  getEvents(){
    return this.events;
  }
};
