# element-plus

一个Vue 3 UI 框架 


> 安装

```bash
npm install element-plus --save
```

> 引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

> 使用

```js
<template>
  <el-button type="primary">Primary Button</el-button>
</template>
```
