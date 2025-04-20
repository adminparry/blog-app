# react


> download

``` bash
npx create-react-app my-app --template typescript
cd my-app
npm start
# react react-dom
```

React在v0.14之前是没有react-dom的，所有功能都包含在react里。从v0.14(2015-10)开始，react才被拆分成react和react-dom。

> jsx

> state

## ComponentLifecycle

> componentDidMount

> shouldComponentUpdate

> componentWillUnmount

> componentDidCatch

## NewLifecycle

> componentDidUpdate

> getSnapshotBeforeUpdate


> render

> hooks


useState

useEffect

第二个参数 如果不进行传递则为全部更新

StrictMode 

识别不安全的生命周期
关于使用过时字符串 ref API的警告
关于使用废弃的 findDOMNode 方法的警告
检测意外的副作用
检测过时的 context API
确保可复用的状态

在StrictMode下 useEffect会被执行两次
``` js
import { useEffect, useState } from 'react';

function App () {
  const [ count, setCount ] = useState(0)
  const [ width, setWidth ] = useState(document.body.clientWidth)
  const onChange = () => {
    setWidth(document.body.clientWidth)
  }
  //最简单用法
  useEffect(() => {
    //只有方法体，相当于componentDidMount和componentDidUpdate中的代码
    document.title = count;
  })
  //加返回值用法
  useEffect(() => {
    //添加监听事件，相当于componentDidMount和componentDidUpdate中的代码
    window.addEventListener('resize', onChange, false);
    //返回的函数用于解绑事件，相当于componentWillUnmount中的代码
    return () => {
      window.removeEventListener('resize', onChange, false)
    }
  })
  //加空数组参数用法
  useEffect(() => {
    // 相当于 componentDidMount
    window.addEventListener('resize', onChange, false)
    return () => {
      // 相当于 componentWillUnmount
      window.removeEventListener('resize', onChange, false)
    }
  }, []);
  //加监听值用法
  useEffect(() => {
    //只有当count的值发生变化，此函数才会执行
    console.log(`count change: count is ${count}`)
  }, [ count ]);
  return (
    <div>
      页面名称: { count }
      页面宽度: { width }
      <button onClick={() => { setCount(count + 1)}}>点我</button>
    </div>
    )
}
```

useLayoutEffect 

useRef

useMemo

``` js
//react/packages/react-reconciler/src/ReactFiberHooks.js
export function useMemo<T>(
  nextCreate: () => T,
  inputs: Array<mixed> | void | null,
): T {
  currentlyRenderingFiber = resolveCurrentlyRenderingFiber(); //返回一个变量
  workInProgressHook = createWorkInProgressHook(); // 返回包含memoizedState的hook对象

  const nextInputs =
    inputs !== undefined && inputs !== null ? inputs : [nextCreate]; // 需要保存下来的inputs，用作下次取用的key

  const prevState = workInProgressHook.memoizedState; // 获取之前缓存的值
  if (prevState !== null) {
    const prevInputs = prevState[1];
    // prevState不为空，并且取出上次存的`key`, 然后下面判断(前后的`key`是不是同一个)，如果是就直接返回，否则继续向下
    if (areHookInputsEqual(nextInputs, prevInputs)) {
      return prevState[0];
    }
  }

  const nextValue = nextCreate(); //执行useMemo传入的第一个参数(函数)
  workInProgressHook.memoizedState = [nextValue, nextInputs]; // 存入memoizedState以便下次对比使用
  return nextValue; 
}
```

useContext

useReducer

useCallback

useImperativeHandle 

```

> 动态组件

原理为动态插入script标签


## react-router-dom

``` bash
npm install react-router-dom --save

```
``` tsx
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';


import Loading from './pages/Loading'
const Test1 = lazy(() => import('./pages/Test1'));
const Test2 = lazy(() => import('./pages/Test2'));
const Test3 = lazy(() => import('./pages/Test3'));

const LoadingWrap = (Lazy: any) => <Suspense fallback={<Loading />}><Lazy /></Suspense>;

function RouterList() {

    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" element={LoadingWrap(Loading)}/>
                    <Route path='/test1' element={LoadingWrap(Test1)} />
                    <Route path='/test2' element={LoadingWrap(Test2)} />
                    <Route path='/test3' element={LoadingWrap(Test3)} />
                </Switch>
        </BrowserRouter>
    )
}

export default RouterList
```

> 组件通讯方式


props传递

``` tsx
import React from 'react';
function Test1(){
    return (
        <Test1Child title="hello world" />
    )
}

function Test1Child(props: { title: React.ReactChild }){
    return (
        <h1>{props.title}</h1>
    )
}

export default Test1;   
```

``` tsx
import React from 'react';
function Test2() {
    const cb = (msg: string) => {
        console.log(msg)
    }
    return (
        <Test2Child callback={(msg: string) => cb(msg)} />
    )
}
function Test2Child(props: { callback: (msg: string) => void }) {

    return (
        <h2 onClick={() =>  props.callback("msg")}>click to call parent</h2>
    )
}
export default Test2
```

eventbus传递

``` bash
npm install event --save
```

``` ts
import { EventEmitter } from 'events'

export default new EventEmitter();
```

``` tsx
import Test1 from '../components/Test1'
import Test2 from '../components/Test2'

function Test3(){

    return (
        <div>
            <Test1 />
            <Test2 />
        </div>
    )
}

export default Test3
```

``` tsx
import emit from '../event'
import { useState } from 'react'


function Test1(){
    const [bar, setBar] = useState("foo")
    emit.addListener("callYr", (msg: string) => {
        setBar(msg)
    })

    return (
        <div>
            <h2>{bar}</h2>
            <div onClick={ () =>  emit.emit("callMe", "me")}>foo click</div>
        </div>
    )
}

export default Test1
```

``` tsx
import emit from '../event'
import { useState } from 'react'

function Test1(){
    const [bar, setBar] = useState("bar")
    emit.addListener("callMe", (msg: string) => {
        setBar(msg)
    })
    
    return (
        <div>
            <h1 onClick={() => emit.emit("callYr", "yours")}>bar click</h1>
            <h2>{ bar }</h2>
        </div>
    )
}

export default Test1
```

context传递

``` ts
import { createContext, useState } from "react"
import Child from './child'
import { useEventCallback } from "rxjs-hooks";
import { map } from "rxjs/operators";
export default () => {

    const [clickCallback, [description, x, y]] = useEventCallback((event$) =>
        event$.pipe(
            map((event) => [event.target.innerHTML, event.clientX, event.clientY]),
        ),
        ["nothing", 0, 0],
    )

    return (
        <div>

            <h1>click position: {x}, {y}</h1>
            <h1>"{description}" was clicked.</h1>
            <button onClick={clickCallback}>click me</button>
            <button onClick={clickCallback}>click you</button>
            <button onClick={clickCallback}>click him</button>
            <hr />
            <Context.Provider value={description}>
                <Child />
            </Context.Provider>
        </div>
    )
}

export const Context = createContext(0)
```

``` js
import { useContext } from "react"
import { Context } from './test'

export default () => {
    const count = useContext(Context)
    return (
        <div>从父组件得到的值{count}</div>
    )
}
```
> 自定义hooks

``` js
function useFormat(list){
	return useMemo(() => {
		return list.map(item => {
			return item.toLowerCase();
		})
	}, [])
}
```


> react 中的diff

同级比较 循环新dom对象 去找老dom对象中是否有 如果没有进行新创建 如果有则移动节点 根据老dom对象索引与更新索引比较进行移动与不移动
