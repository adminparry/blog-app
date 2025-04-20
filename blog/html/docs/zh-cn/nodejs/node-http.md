# node:http

> example

``` js
const http = require('node:http');

const Server = http.createServer().listen(0, function(){
    console.log(this.address())
    this.close();
})
```

> METHODS&STATUS_CODES

``` js
const http = require('node:http');

console.log(http.METHODS);
console.log(http.STATUS_CODES);
```
