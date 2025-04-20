# node-xlsx

> install

``` bash
npm i node-xlsx
```

> example

``` js
const path = require('path');
const fs = require('fs')
const xlsx = require('node-xlsx').default;


const templateUrl = path.resolve(__dirname, 'template');
const outputUrl = path.resolve(__dirname, '../output');

const data = xlsx.parse(path.resolve(templateUrl, 'tpl.xlsx'));

const buffer = xlsx.build(data);


fs.writeFileSync(path.resolve(outputUrl, './test.xlsx'), buffer);

```
