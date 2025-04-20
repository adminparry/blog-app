# pipe

> 自定义转化流

``` js
const { createReadStream, createWriteStream } = require('fs');
const stream = require('stream');


class Upper extends stream.Transform {
  static instance = new Upper();

  _transform = (chunk, encoding, callback) => {
    const data = chunk.toString().toUpperCase();
    console.log(data)
    this.push(data);
    callback();
  };
}
main();
function main() {

  const input = createReadStream('./apis.js');
  const output = createWriteStream('./output.txt');

  input.pipe(Upper.instance).pipe(output);
}


```

