# myPromise


> 手动实现myPromise

``` js
class MyPromise {
	constructor(executor) {
		this.status = 'pending';
		this.value = undefined;
		this.reason = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];
		const resolve = (value) => {
			if (this.status === 'pending') {
				this.status = 'fulfilled';
				this.value = value;
			}
		}
		const reject = (reason) => {
			if (this.status === 'pending') {
				this.status = 'rejected';
				this.reason = reason;
			}
		}
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}
	then(onFulfilled, onRejected) {
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
		onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };		
		}
		if (this.status === 'fulfilled') {
			onFulfilled(this.value);
		}
		if (this.status === 'rejected') {
			onRejected(this.reason);
		}
		if (this.status === 'pending') {
			this.onFulfilledCallbacks.push(onFulfilled);
			this.onRejectedCallbacks.push(onRejected);
		}

		
}
```

promise的执行顺序

``` js
Promise.resolve().then(() => {
	console.log(0)
	return Promise.resolve(4)
	
}).then(res => {
	console.log(res)
})
Promise.resolve().then(() => {
	console.log(1);
}).then(() => {
	console.log(2);
}).then(() => {
	console.log(3);
}).then(() => {
	console.log(5);
}).then(() => {
	console.log(6);
})

#0,1,2,3,4,5,6
```
转化为
``` js
let p1 = Promise.resolve();

let p2 = p1.then(() => {
	console.log(0);
	let p3 = Promise.resolve(4);
	return p3;
})

let p4 = p2.then(res => {
	console.log(res)
})
let p5 = Promise.resolve();

let p6 = p5.then(res => {
	console.log(1)
})
let p7 = p6.then(res => {
	console.log(2)
})
let p8 = p7.then(res => {
	console.log(3)
})
let p9 = p8.then(res => {
	console.log(5)
})
let p10 = p9.then(res => {
	console.log(6)
})

```
promise为链表实现

microtask队列

[p1, p5]

[p5, p2]

[p1then, p6]

[p6then, p3]

[p3, p7]

[p7, p2]

[p2, p8]

[p8, p9]

[p9, p10]
