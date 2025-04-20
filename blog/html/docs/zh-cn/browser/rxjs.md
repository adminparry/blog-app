# rxjs

https://rxjs-cn.github.io/

> Observable
观察者对象
> Subject
订阅对象
> schedulers


## 创建

> create

``` typescript

var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
    })

// 订阅 observable    
observable.subscribe(function(value) {
    console.log(value);
})
// Jerry
// Anna
```

> fromPromise 与promise配合

``` typescript
var source = fromPromise(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello RxJS!');
    },3000)
  }))
  
source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
    console.log(error)
    }
});
// Hello RxJS!
// complete!
```

> of 与集合配合

``` typescript
var source = of('Jerry', 'Anna');

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});

// Jerry
// Anna
// complete!
```

> from 与集合配合

``` typescript 

var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
var source = from(arr);

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
}); 
```

> fromEvent 与事件配合

``` typescript  
var source = fromEvent(document.body, 'click');

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});
```

> never

``` typescript
var source = never();

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});
```

> empty

``` typescript 
var source = empty();

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
        console.log(error)
    }
});
```

> throw

``` typescript  
var source = throw('Oop!');

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
    console.log('Throw Error: ' + error)
    }
});
```

> interval 与定时器配合

``` typescript
var source = interval(1000);

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
    console.log('Throw Error: ' + error)
    }
});
```

> timer

``` typescript  

var source = Rx.Observable.timer(1000, 5000);

source.subscribe({
    next: function(value) {
        console.log(value)
    },
    complete: function() {
        console.log('complete!');
    },
    error: function(error) {
    console.log('Throw Error: ' + error)
    }
});
```


## 控制数据流


>  takeUntil

``` typescript
const click = fromEvent(document.body, "click");
const source = interval(1000).pipe(takeUntil(click));

source.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log("Error: " + err);
  },
  complete: () => {
    console.log("complete");
  }
});
```


> skip

``` typescript

```
> startWith

``` typescript
const source = interval(1000).pipe(startWith('start'));

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
// start
// 0
// 1
// 2
// 3...
```
> concat

``` typescript

```
> merge

``` typescript

```
> delay

``` typescript

```

> delayWhen

``` typescript

```

> throttle

``` typescript

```

> debounce

舍弃掉在两次输出之间小于指定时间的发出值

``` typescript

```

> distinct

``` typescript

```

> distinctUntilChanged

``` typescript
var example = from(['a', 'b', 'c', 'c', 'b']).pipe(zip(interval(300), (x, y) => x),
    distinctUntilChanged()
)

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
```

## 选择器

> take

``` typescript


```

> first

``` typescript


```

> last

``` typescript
var source = interval(1000).pipe(take(6), last());

source.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log("Error: " + err);
  },
  complete: () => {
    console.log("complete");
  }
});
// 5
// complete

```

> takeLast

``` typescript
var source = interval(1000).pipe(take(6), takeLast(2));

source.subscribe({
  next: value => {
    console.log(value);
  },
  error: err => {
    console.log("Error: " + err);
  },
  complete: () => {
    console.log("complete");
  }
});

// 4
// 5
// complete

```
## 广播
> BehaviorSubject

顺序播

``` typescript

const subject = new Rx.BehaviorSubject(1);

// 订阅者 A
subject.subscribe((data) => {
console.log('Subscriber A:', data);
});
console.log("------2----")
subject.next(2);
console.log("2222222222")
// 订阅者 B
subject.subscribe((data) => {
console.log('Subscriber B:', data);
});

subject.next(3);

console.log(subject.value)


// VM181:5 Subscriber A: 1
// VM181:7 ------2----
// VM181:5 Subscriber A: 2
// VM181:9 2222222222
// VM181:12 Subscriber B: 2
// VM181:5 Subscriber A: 3
// VM181:12 Subscriber B: 3
// VM181:17 3
```

> ReplaySubject 
参数为bufferSize
重播 

``` typescript

const subject = new Rx.ReplaySubject(2);

// 订阅者 A
subject.subscribe((data) => {
console.log('Subscriber A:', data);
});

subject.next(3)
subject.next(4)
subject.next(5)

// 订阅者 B
subject.subscribe((data) => {
console.log('Subscriber B:', data);
});

subject.next(6);

// VM187:5 Subscriber A: 3
// VM187:5 Subscriber A: 4
// VM187:5 Subscriber A: 5
// VM187:14 Subscriber B: 4
// VM187:14 Subscriber B: 5
// VM187:5 Subscriber A: 6
// VM187:14 Subscriber B: 6
```

> AsyncSubject

最终的值

``` typescript

const subject = new Rx.AsyncSubject(5);

// 订阅者A
subject.subscribe((data) => {
console.log('Subscriber A:', data);
});

subject.next(1)
subject.next(2)
subject.next(3)

// 订阅者B
subject.subscribe((data) => {
console.log('Subscriber B:', data);
});

subject.next(4);
subject.complete();

// VM204:5 Subscriber A: 4
// VM204:14 Subscriber B: 4

```





 
