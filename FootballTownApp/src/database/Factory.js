import News from "./News"
import Events from "./Events"
import Games from "./Games"

var Factory = (function () {
    var newsInstance;
    var eventsInstance;
    var gamesInstance;

    function createNewsInstance() {
        var newsObject = new News()
        return newsObject;
    }

    function createEventsInstance() {
        var eventsObject = new Events()
        return eventsObject;
    }

    function createGamesInstance() {
        var gamesObject = new Games()
        return gamesObject;
    }

    return {
        getNewsInstance: function () {
            if (!newsInstance) {
                newsInstance = createNewsInstance();
            }
            return newsInstance;
        },
        getEventsInstance: function () {
            if (!eventsInstance) {
                eventsInstance = createEventsInstance();
            }
            return eventsInstance;
        },
        getGamesInstance: function () {
            if (!gamesInstance) {
                gamesInstance = createGamesInstance();
            }
            return gamesInstance;
        }
    }
})();

export default Factory;
