define('math', ['add', 'sub'], function(add, sub) {
    console.log('execute math');

    return {
        add: add,
        sub: sub
    };
});
