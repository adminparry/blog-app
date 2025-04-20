# bignumber

JavaScript 中的数字按照 IEEE 754 的标准，使用 64 位双精度浮点型来表示。

浮点数精度问题，比如 0.1 + 0.2 !== 0.3

大数精度问题，比如 9999 9999 9999 9999 == 1000 0000 0000 0000 1

https://www.runoob.com/w3cnote/js-precision-problem-and-solution.html

``` bash
npm i bignumber.js
```

> +

``` javascript
x = new BigNumber(0.3)
x.plus(0.1)

```
> -
``` javascript
x = new BigNumber(0.3)
x.minus(0.1)
```
> *
``` javascript

x = new BigNumber(0.3)
x.multipliedBy(0.1)

```
> /
``` javascript
y = new BigNumber(355)
y.dividedBy(113) 
```

