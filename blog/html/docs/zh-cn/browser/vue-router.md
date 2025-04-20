# vue-router

> install

``` bash
npm i vue-router
```

> example

``` ts
import { createRouter, createWebHistory } from 'vue-router';
import { App } from 'vue';

import guard from './guard';
import routers from '@/router';


const router = createRouter({
    history: createWebHistory(),
    routes:[

        ...routers,

        {
            name: '401',
            path: '/401',
            component: () => import('@/views/401.vue')
        },
        {
            name: '404',
            path: '/404',
            component: () => import('@/views/404.vue')
        },
        {
            path:'*',
            redirect: '/404',
        }

    ]
});

router.beforeEach(guard);


export default (app:App) => {

    app.use(router)
}
```
