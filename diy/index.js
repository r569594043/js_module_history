(function(window, undefined) {

    var document = window.document,
        navigator = window.navigator,
        location = window.location,
        common = window.common;

    var index = {
        init: function() {
            console.log(common.add(1, 1));
        }
    };

    index.init();

})(window);
