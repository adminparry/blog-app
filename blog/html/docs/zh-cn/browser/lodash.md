# lodash

javascript 工具方法 提供一些便捷的数据操作

> 安装

``` bash
npm install lodash
```

> 节流和防抖

``` javascript
import { throttle, bounce } from 'lodash';

throttle(() => {
    console.log('exec')
}, 1000, { leading:true, tailing: true });

```

> 获取和设置属性

``` javascript
import { get, set } from 'lodash';

let json = {
    a:{
        name:'t'
    },
    b:5
}

const ret = get(json, 'a.name', 'default');
console.log(ret);

set(json, 'c', 677)
```

> 深拷贝

``` javascript
import { cloneDeep } from 'lodash';

const treeData = {a:34}
const tree = cloneDeep(treeData);
```

