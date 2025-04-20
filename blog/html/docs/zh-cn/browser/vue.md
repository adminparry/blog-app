# vue
> 源码地址

``` bash
git clone https://github.com/vuejs/vue.git node_modules/vue
cd node_modules/vue
npm install
npm run build
```
> download

``` bash
npm install vue
npm install -g @vue/cli
npm init vite@latest <project-name> --template vue
cd project-name
npm run dev
```
> cdn
``` bash
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```
> 路由

> 内置指令
<table>
    <tr>
        <td>指令名称</td>
        <td>描述</td>
        <td>使用</td>
    </tr>
    <tr>
        <td>v-model</td>
        <td>绑定数据</td>
        <td>&lt;input v-model="message"&gt;</td>
    </tr>
    <tr>
        <td>v-text</td>
        <td>输出字符串</td>
        <td>&lt;p v-text="message"&gt;&lt;/p&gt;</td>
    </tr>
    <tr>
        <td>v-text</td>
        <td>输出dom</td>
        <td>&lt;p v-text="message"&gt;&lt;/p&gt;</td>
    </tr>
    <tr>
        <td>v-once</td>
        <td>只绑定一次数据</td>
        <td>&lt;p v-once&gt;&lt;{{message}}/p&gt;</td>
    </tr>
    <tr>
        <td>v-bind</td>
        <td>绑定属性</td>
        <td>&lt;p v-bind:src="imgUrl"&gt;&lt;{{message}}/p&gt;</td>
    </tr>
    <tr>
        <td>v-show</td>
        <td>display属性none/block</td>
        <td>&lt;p v-show="true"&gt;&lt;{{message}}/p&gt;</td>
    </tr>
    <tr>
        <td>v-if</td>
        <td>是否存在</td>
        <td>&lt;p v-if="true"&gt;&lt;{{message}}/p&gt;</td>
    </tr>
    <tr>
        <td>v-for</td>
        <td>循环数据</td>
        <td>&lt;p v-for="(val, key) in arr&gt;&lt;{{val}}/p&gt;</td>
    </tr>
    <tr>
        <td>v-cloak</td>
        <td>在没有执行vue代码的是否隐藏元素</td>
        <td>&lt;p v-cloak&gt;&lt;{{message}}/p&gt;</td>
    </tr>
</table>

> 自定义指令
``` js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

``` html
<input v-focus>

```
> component

> component生命周期

<table>
    <tr>
        <td>选项式api</td>
        <td>hook inside</td>
    </tr>
    <tr>
        <td>beforeCreate</td>
        <td>创建前</td>
    </tr>
    <tr>
        <td>created</td>
        <td>创建后</td>
    </tr>
    <tr>
        <td>beforeMounted</td>
        <td>挂载前</td>
    </tr>
    <tr>
        <td>mounted</td>
        <td>挂载后</td>
    </tr>
    <tr>
        <td>beforeUpdate</td>
        <td>更新前</td>
    </tr>
    <tr>
        <td>updated</td>
        <td>更新后</td>
    </tr>
    <tr>
        <td>beforeUnmounted</td>
        <td>卸载前</td>
    </tr>
    <tr>
        <td>unmounted</td>
        <td>卸载后</td>
    </tr>
    <tr>
        <td>errorCaptured</td>
        <td></td>
    </tr>
    <tr>
        <td>renderTracked</td>
        <td></td>
    </tr>
    <tr>
        <td>renderTriggered</td>
        <td></td>
    </tr>
    <tr>
        <td>activated</td>
        <td></td>
    </tr>
    <tr>
        <td>deactivated</td>
        <td></td>
    </tr>
</table>


> vue中的diff

头头比较 尾尾比较 头尾比较 尾头比较 新节点先遍历完成删除剩下的旧节点 旧节点先遍历完成删除剩下的新节点

https://www.jianshu.com/p/c90850991026

> vue组件通信方式

props

emit

v-model

refs

provide/inject

eventBus

vuex

> 组件内部属性

$attrs

$children

$createElement

$el

$listeners

$options

$parent

$refs

$root

$scopedSlots

$slots

$store

$vnode
