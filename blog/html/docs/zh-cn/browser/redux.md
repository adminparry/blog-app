# redux


> 引入

``` js
npm i redux redux-persist redux-thunk redux-promise
```

> combineReducers

``` js

const global = (state, action) => {
    return 
}

const reducers = combineReducers({
    
})
```


> 使用

```js
import { createStore } from 'redux'

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
``` 


> 参考

- [redux](https://github.com/reduxjs/redux)