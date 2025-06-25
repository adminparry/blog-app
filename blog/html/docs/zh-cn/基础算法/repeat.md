# 数组去重


> 利用set的特性

``` js
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
// 或 Array.from(new Set(arr))
// 结果: [1, 2, 3, 4, 5]
```

> 利用对象属性不重复的特性

``` js

function unique(arr) {
  const obj = {};
  return arr.filter(item => {
    const key = typeof item + JSON.stringify(item);
    return obj.hasOwnProperty(key) ? false : (obj[key] = true);
  });
}
```