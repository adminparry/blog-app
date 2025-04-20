# echarts

https://echarts.apache.org/zh/index.html

> setOptions

## grid
图表与盒子边缘之间的距离

``` js
 grid: {
                x: 30,
                y: 10,
                x2: 30,

            }
```
## legend
图例

``` js
legend: {
                bottom: 0,
                data: ['Fluctuations in user utilization', 'Concurrency fluctuations']
            },
```
## xAxis
x轴
``` js
 xAxis: {
                type: 'category',
                boundaryGap: false,
                data: Array(6).fill("").concat(["now", ""])
            }
```
## yAxis
y轴
``` js
 yAxis: {
                type: 'value',
                interval: 50,
                axisLabel: {
                    formatter(val) {
                        return Math.abs(val - 150);
                    },
                },
            }
```
## series

数据

``` js
series: [
{
                    data: [50, 30, 24, 18, 35, 47, 60],
                    type: 'line',
                    symbol: 'circle',
                    name: "Concurrency fluctuations",
                    itemStyle: {
                        color: "#AD45FFFF"
                    }
                },
]
```

