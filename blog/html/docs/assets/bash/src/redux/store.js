// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // 模块化reducer
    // 其他reducer...
  },
});

