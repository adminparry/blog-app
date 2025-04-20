# nuxt

https://nuxt.com/

> install

``` bash
npx nuxi init demo
cd demo
npm i
npm run dev
```

> dir

``` bash
mkdir public components assets content middleware utils composables pages plugins layouts server 
```

> 路由

``` vue
<NuxtLink to="/about">About</NuxtLink>
```
> seo

``` js
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  }
})

```

> i18n
``` bash
npm i @nuxtjs/i18n@next
```
``` js
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "fr", "es"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome"
        },
        fr: {
          welcome: "Bienvenue"
        },
        es: {
          welcome: "Bienvenido"
        }
      }
    }
  }
});

```
> tailwindcss

``` bash
# Using yarn
yarn add --dev @nuxtjs/tailwindcss

# Using npm
npm install --save-dev @nuxtjs/tailwindcss

npx tailwindcss init
```

> vite

> plugins

> public

> proxy

> module

> layouts

> store

> server

