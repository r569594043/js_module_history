// define(["./math-umd"], function(math) {
define(["./math-jquery"], function(math) {
    console.log(math.add(1, 1));
});

// define(function(require, exports, module) {
//         var math = require('./math-umd');
//         var math2 = require('./math-jquery');

//         console.log(math.add(1, 1));
//         console.log(math2.add(1, 1));
//     }
// );