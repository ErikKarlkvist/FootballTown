import News from "./News"
import Events from "./Events"

var Factory = (function () {
    var newsInstance;
    var eventsInstance;

    function createNewsInstance() {
        var newsObject = new News()
        return newsObject;
    }

    function createEventsInstance() {
        var eventsObject = new Events()
        return eventsObject;
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
        }
    }
})();

export default Factory;
