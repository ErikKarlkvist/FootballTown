var Factory = (function () {
    var newsInstance;
    function creatNewsInstance() {
        var newsobject = new News()
        return newsObject;
    }

    return {
        getNewsInstance: function () {
            if (!newsInstance) {
                newsInstance = createNewsInstance();
            }
            return newsInstance;
        }
    }
})