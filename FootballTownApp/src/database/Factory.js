import News from "./News"
import Events from "./Events"
import Games from "./Games"
import Teams from "./Teams"
import User from "./User"

var Factory = (function () {
    var newsInstance;
    var eventsInstance;
    var gamesInstance;
    var teamsInstance;
    var userInstance;

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

    function createUserInstance() {
        var userObject = new User()
        return userObject;
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
        },
        getUserInstance: function () {
            if (!userInstance) {
                userInstance = createUserInstance();
            }
            return userInstance;
        }
    }
})();

export default Factory;
