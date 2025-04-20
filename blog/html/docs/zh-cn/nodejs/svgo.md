# svgo

https://www.npmjs.com/package/svgo

> useage

``` js
const fs = require('fs');

const { optimize } = require('svgo');
const content = fs.readFileSync("./example.svg");

const result = optimize(content, {
        // optional but recommended field
        // path: 'path-to.svg',
        // all config fields are also available here
        // multipass: true,
        plugins: [
            {
                name: 'prefixIds',
                params: {
                    // Use that ID here.
                    // Do NOT generate the ID itself in the "prefix" function
                    // because that will result in each ID being unique,
                    // breaking the gradient references within a single SVG.
                    prefix: 'b' + Date.now(),
                },
            },
        ],
    });
```
