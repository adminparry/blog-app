# kline

貌似是谁做的二次封装 不过不影响

https://www.npmjs.com/package/klinecharts

> 设置指标

``` ts
import klinecharts from 'klinecharts'
klinecharts.dispose('id');
const chart = klinecharts.init('id');
chart.createTechnicalIndicator('VOL', false)
chart.createTechnicalIndicator('MACD' false)

chart.createTechnicalIndicator('KDJ' false)
```

> 多语言

配置选项

``` ts
const chart = klinecharts.init('id', {
	candle: {
		tooltip: { labels: ['时间:', '开:', '收:', '高:', '低:', '成交量:']}
	}
})
```
> k线颜色反转

国内红色为上涨 西方国家红色为下跌

``` ts
const chart = klinecharts.init('id', {reverseColor: false})
``` 
