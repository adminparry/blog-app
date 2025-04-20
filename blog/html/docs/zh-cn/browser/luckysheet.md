# luckysheet

excel 在浏览器中的展示

> ps

``` js
import LuckyExcel from 'luckyexcel'

window.luckysheet.create({
      container: 'luckysheet', //luckysheet is the container id
      showinfobar: false,
      data: exportJson.sheets,
      title: exportJson.info.name,
      userInfo: exportJson.info.name.creator
    })
```
