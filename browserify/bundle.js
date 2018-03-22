(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
module.exports = function(n1, n2) {
    return n1 + n2;
}
},{}],2:[function(require,module,exports){
var add = require('./math').add;
console.log(add(1, 1));

var add2 = require('./math2').add;
console.log(add2(1, 1));

var add3 = require('./add');
console.log(add3(1, 1));
},{"./add":1,"./math":3,"./math2":4}],3:[function(require,module,exports){
exports.add = function(n1, n2) {
    return n1 + n2;
}

exports.sub = function(n1, n2) {
    return n1 - n2;
}
},{}],4:[function(require,module,exports){
module.exports = {
    add: function(n1, n2) {
        return n1 + n2;
    }
};
},{}]},{},[2]);
