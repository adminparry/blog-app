# events

> EventEmitter

``` js
const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('event', exector);

myEmitter.emit('event');

function exector(){
	console.log('halo');
}
```
