# viewport

``` js
const meta = document.querySelector("meta[name='viewport']");
const scale = '1.0';
meta.content = "initial-scale=,minimum-scale=,maximum-scale=,user-scalable=no".replace(/,/g, scale + ',');

```