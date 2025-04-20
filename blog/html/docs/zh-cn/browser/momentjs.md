# moment

时间管理

http://momentjs.cn/


> download

``` bash
npm i moment
```
> 格式化

``` javascript
moment().format('MMMM Do YYYY, h:mm:ss a'); // 十一月 4日 2021, 8:25:00 晚上
moment().format('dddd');                    // 星期四
moment().format("MMM Do YY");               // 11月 4日 21
moment().format('YYYY [escaped] YYYY');     // 2021 escaped 2021
moment().format();                          // 2021-11-04T20:25:00+08:00
```

> 相对时间

``` javascript
moment("20111031", "YYYYMMDD").fromNow(); // 10 年前
moment("20120620", "YYYYMMDD").fromNow(); // 9 年前
moment().startOf('day').fromNow();        // 20 小时前
moment().endOf('day').fromNow();          // 4 小时内
moment().startOf('hour').fromNow();       // 25 分钟前
```
> 日历时间
``` javascript
moment().subtract(10, 'days').calendar(); // 2021/10/25
moment().subtract(6, 'days').calendar();  // 上星期五20:25
moment().subtract(3, 'days').calendar();  // 上星期一20:25
moment().subtract(1, 'days').calendar();  // 昨天20:25
moment().calendar();                      // 今天20:25
moment().add(1, 'days').calendar();       // 明天20:25
moment().add(3, 'days').calendar();       // 下星期日20:25
moment().add(10, 'days').calendar();      // 2021/11/14
```

> 多语言

``` javascript

moment.locale();         // zh-cn
moment().format('LT');   // 20:25
moment().format('LTS');  // 20:25:00
moment().format('L');    // 2021/11/04
moment().format('l');    // 2021/11/4
moment().format('LL');   // 2021年11月4日
moment().format('ll');   // 2021年11月4日
moment().format('LLL');  // 2021年11月4日晚上8点25分
moment().format('lll');  // 2021年11月4日 20:25
moment().format('LLLL'); // 2021年11月4日星期四晚上8点25分
moment().format('llll'); // 2021年11月4日星期四 20:25

```

> 简易版

``` js
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
```
![dateFormat](../../assets/dateformat.gif)
> 平年还是闰年

``` js
function ppp(pYear){
    return (pYear%4==0 && pYear%100!=0) || (pYear%100==0 && pYear%400==0)
}
```

> 日历

``` js
function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

let weeks = ['日','一','二','三','四','五','六'];

let year = new Date().getFullYear();
let dayStr = '';

for(let month = 0; month <=11; month++){
    // 每个月的第一天
    let firstDay = new Date(year,month,1); 
    let dayInMonth = daysInMonth(month,year);
    // 每个月的最后一天
    let lastDay = new Date(year,month,dayInMonth);

    // 第一天星期几(0-6)
    let weekday = firstDay.getDay(); 
    // 最后一天星期几
    let lastDayWeekDay = lastDay.getDay();
    // 每一个都是从1号开始
    let date = 1;

    dayStr += weeks.join(' ') + '\n';

    // 补齐前面的空格
    for(let i = 0; i < weekday; i++){
        dayStr += '+ ';
    }

    for(;date <= dayInMonth;date++){
        dayStr += date + ' ';
        weekday++

        if(weekday%7 == 0){
            weekday = 0;
            dayStr += '\n';
        }
    }

    // 补齐后面的空格
    for(let j = 0; j < (7 - lastDayWeekDay - 1); j++){
        dayStr += '+ ';
    }

    dayStr += '\n\n';
}
```