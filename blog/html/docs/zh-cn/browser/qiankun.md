# qiankun

> api

initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start

> example

``` ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MicroApp from './MicroApp.vue'

import { initGlobalState, registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';


// let ApplicationInstance = createApp(App);
// ApplicationInstance.mount('#app');;


// initialize render
let app: any = null;
function vueRender({ loading }: any) {

    return createApp(MicroApp).mount('#app');
}
function render({ loading }: any) {
    if (!app) {
        app = vueRender({ loading });
    } else {
        app.loading = loading;
    }
}

render({ loading: true });
const loader = (loading: boolean) => render({ loading })
// registe micro appliactions
const micros = [
    {
        name: 'vue3',
        entry: '//localhost:7105',
        container: '#subapp-viewport',
        loader,
        activeRule: '/vue3',
    },
];

registerMicroApps(micros, {
    beforeLoad: [
        async (app) => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
    ],
    beforeMount: [
        async (app) => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterUnmount: [
        async (app) => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
});
// default entry
setDefaultMountApp('/');

// global state
const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
});
onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));
setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    },
});
// starting
start();
runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
});
```

> subapp

``` ts
import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

let router = null;
let instance = null;
let history = null;


function render(props = {}) {
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/');
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}

```

> pulic path

``` ts
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

```

> .d.ts
``` ts

export { }

declare global {
    interface Window {

        __POWERED_BY_QIANKUN__: string;
    }
}
```
