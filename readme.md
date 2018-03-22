# 前端模块化的历史

## 1. CommonJS
### export: math.js
```javascript
exports.add = function(n1, n2) {
    return n1 + n2;
}
exports.sub = function(n1, n2) {
    return n1 - n2;
}
```
### export: math.js
```javascript
module.exports = {
    add: function(n1, n2) {
        return n1 + n2;
    },
    sub: function(n1, n2) {
        return n1 - n2;
    }
};
```
### export: add.js
```javascript
module.exports = function(n1, n2) {
    return n1 + n2;
}
```
### import: index.js
```javascript
var add = require('math').add;
add(1, 1);

var math = require('math');
math.add(1, 1);
```
* [CommonJS](http://wiki.commonjs.org/wiki/Modules)
* [NodeJS Modules](https://nodejs.org/docs/latest-v4.x/api/modules.html)



## 2.AMD
### export: math.js
```javascript
define({
    add: function(n1, n2) {
        return n1 + n2;
    }
});
```
### import: index.js
```javascript
define(["./math"], function(math) {
    console.log(math.add(1, 1));
});
```
[Require.js](http://requirejs.org/docs/api.html)


## 3.CMD
### export: math.js
```javascript
define(function(require, exports, module) {
        exports.add = function(n1, n2) {
            return n1 + n2;
        }
    }
);
```
### import: index.js
```javascript
define(function(require, exports, module) {
        var math = require('./math')

        console.log(math.add(1, 1));
    }
);
```
* [CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)
* [Sea.js Docs](https://seajs.github.io/seajs/docs/)

## 4.Browserify
`npm install -g browserify`
`browserify index.js -o bundle.js`
语法同CommonJS
[Browserify](http://browserify.org/)


## 5.UMD
* [jQuery wrapper](https://github.com/jquery/jquery/blob/master/src/wrapper.js)
* [UMD](https://github.com/umdjs/umd)


## 6.ES6
`node --experimental-modules index.mjs`
### export: math.js
```javascript
export function add(n1, n2) {
    return n1 + n2;
}
```

### export: math.js
```javascript
function add(n1, n2) {
    return n1 + n2;
}
export {
    add
}
```

### export: add.js
```javascript
export default function(n1, n2) {
    return n1 + n2;
}
```

### import: index.js
```javascript
import { add } from './math';
import { add as add2 } from './math2';
import add3 from './add';
```

## 7.webpack
[Webpack](https://webpack.js.org/)

## 8.Vue
[Vue.js 官方文档](https://cn.vuejs.org/v2/guide/)
[vue-router 官方文档](https://router.vuejs.org/zh-cn/)
[Vuex 官方文档](https://vuex.vuejs.org/zh-cn/)

## 参考
* [前端模块化开发那点历史](https://github.com/seajs/seajs/issues/588)
* [Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
* [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)
* [Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
* [学习 ES2015](https://babeljs.cn/learn-es2015/)
* [Babel](https://babeljs.cn/)

## 题外话
* [Node.js也分裂，核心开发者创建分支io.js](http://www.infoq.com/cn/news/2014/12/node.js-split-branch-iojs)
* [Node.js与io.js那些事儿](http://www.infoq.com/cn/articles/node-js-and-io-js/)
* [一个名字引发的血案: left-pad 和 npm 的那些事](http://ms.csdn.net/geek/64211)
* [NPM 与 left-pad 事件：我们是不是早已忘记该如何好好地编程？](https://zhuanlan.zhihu.com/p/20707235)