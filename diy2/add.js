define('add', [], function() {
    console.log('execute add');
    
    return function(n1, n2) {
        return n1 + n2;
    }
});
