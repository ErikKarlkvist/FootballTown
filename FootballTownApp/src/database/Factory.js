import News from "./News"
import Events from "./Events"
import Games from "./Games"
import Teams from "./Teams"

var Factory = (function () {
    var newsInstance;
    var eventsInstance;
    var gamesInstance;
    var teamsInstance;

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

    function createTeamsInstance() {
        var teamsObject = new Teams()
        return teamsObject;
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
        },
        getTeamsInstance: function () {
            if (!teamsInstance) {
                teamsInstance = createTeamsInstance();
            }
            return teamsInstance;
        }
    }
})();

export default Factory;
