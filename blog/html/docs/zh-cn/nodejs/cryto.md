# crypto

> md5

``` js
const crypto = require('crypto');

const md5 = crypto.createHash('md5');

const ret = md5.update('df64c966').digest('hex');

console.log(ret);

```

> sha256 sha512
