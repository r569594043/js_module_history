import add from './add';
const math = require('./math');

console.log(add(1, 1));
console.log(math.add(1, 2));


const t = require('./test.coffee');
console.log(t.add(1, 3));

require('./test.css');
import './test.less';
require('./test.sass');

const p = require('./props.json');
console.log(p);



import HomeIcon from './home.png';
const img = new Image();
img.src = HomeIcon;
document.body.appendChild(img);



var template = require('./test.jade');
var html = template({
    name: 'world'
});
document.getElementById('wrapper').innerHTML = html;
