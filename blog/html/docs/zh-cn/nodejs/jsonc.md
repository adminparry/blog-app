# jsonc

解析带有注释的json
例如tsconfig.json

> install

``` bash
npm i jsonc
```

> example

``` js
import jsonc from 'jsonc';

jsonc.parse('// comment\n{"data": /* comment */ "value"}\n');
```
