# 正则

> 标准整数或小数

``` js
/^(((0|[1-9]\d*).\d+)|([1-9]+(\d+)?))$/.test("521.1314")
```

> 驼峰互转

``` js
"myLife".replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

"my-life".replace(/-([a-z])/g, (a,b) => b.toUpperCase())
```
