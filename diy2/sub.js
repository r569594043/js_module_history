define('sub', [], function() {
    console.log('execute sub');

    return function(n1, n2) {
        return n1 - n2;
    }
});
