define('index', ['math', 'add'], function(math, add) {
    console.log('execute index');

    var index = {
        init: function() {
            console.log(math.add(1, 1));
            console.log(add(1, 2));
            console.log(math.sub(5, 1));
        }
    };

    index.init();

});
