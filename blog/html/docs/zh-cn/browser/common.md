# js常用



> 0和1的转化

``` js
0^1 // 1
1^1 // 0
0^2 // 2
2^2 // 0
0^3 // 3
3^3 // 0
//当然也可以去小数

Math.PI ^ 0
~~Math.PI

```


> 两位补0

``` javascript  

let test = "3";

("00" + test).substr(test.length)
```

> 复制数组

``` bash
let arr = [1,2,4];

arr.slice()
```

> 偷懒复制对象

``` javascript
let obj = {a:13,b:32}

JSON.parse(JSON.stringify(obj))

```

> 平行结构转树形结构

``` js
 const data = [
 { id: 2, name: "研发部", parentId: 1 },
 { id: 4, name: "行政人事部", parentId: 1 },
 { id: 6, name: "行政人事部下面的行政", parentId: 4 },
 { id: 7, name: "行政人事部下面的人力资源", parentId: 4 },
 { id: 20, name: "研发下面的产品组", parentId: 2 },
 { id: 21, name: "研发下面的测试组", parentId: 2 },
 { id: 22, name: "研发下面的运维组", parentId: 2 },
 { id: 23, name: "研发下面的前端组", parentId: 2 },
 { id: 24, name: "研发下面的后台组", parentId: 2 },
 { id: 25, name: "研发下面的移动开发组", parentId: 2 },
 { id: 99, name: "移动组下面的组", parentId: 25 },
 { id: 98, name: "移动组下面的组", parentId: 25 }
 ]

function format(id="id", pid="pid", arr, root=1){
	return arr.filter(item => {
		return item[pid] === root
	}).map(item => {

		item.children = format(id, pid, arr, item[id]);
		return item;
	})
}

console.log(format("id", "parentId", data, 1))
```
> 树形结构转平行结构

``` js
function format(child="children", arr, ret=[]){
	arr.forEach(item => {
		ret.push(item);
		if(Object.hasOwnProperty.call(item, child) && Object.prototype.toString.call(item[child]).includes('Array') && item[child].length > 0){
			format(child, item[child], ret)
		}
		delete item[child];
	})
	return ret;
}
```

> 求和

``` js
function sum(){
	let args = [...arguments];

	function fn(){
		args = [...args, ...arguments]
		return fn
	}
	fn.toString = () => {
		return args.reduce((a,b) => a+b)
	}
	return fn
}
alert(sum(1)(2)(3))
#6
```

> 排列组合

``` js

function group(arr, count){

	let ret = [];

	
	function fn(t, a, c){
		if(c === 0){return ret.push(t)}
		for(let i = 0;i < a.length; i++){
			fn(t.concat(a[i]),arr.slice(i + 1),c - 1)
		}
	}
	

	fn([], arr, count)
	return ret;
}

console.log(group([1,2,3,4], 2))
```

> 格式化千分位

``` js
const format = num => String(num).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
```

> 复制剪切板

``` js

const copyToClipboard = (text) => {
	navigator.clipboard?writeText && navigator.clipboard.writeText(text)
}
```
> 节流和防抖


