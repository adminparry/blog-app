# vite

> create

``` bash
npm create vite@latest
```

> template
``` bash

npm create vite@latest my-app -- --template vue
npm create vite@latest my-app -- --template vue-ts
npm create vite@latest my-app -- --template react
npm create vite@latest my-app -- --template react-ts
```


> tsconfg paths

``` ts
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()]
})
```

> proxy

``` ts
export default defineConfig({
	server: {
		proxy: {
			"/api":{ target: "http://192.168.1.1",changeOrigin: true}
		}
	}
})
```

> remove console

``` ts
export default defineConfig({
	esbuild: {
		drop:["console", "debugger"]
	}	
})
```

> plugins

``` ts
import viteImagemin from "vite-plugin-imagemin";

const removes = [
  "removeDoctype",
  "removeXMLProcInst",
  "removeComments",
  "removeMetadata",
  "removeEditorsNSData",
  "removeUselessDefs",
  "removeUnknownsAndDefaults",
  "removeNonInheritableGroupAttrs",
  "removeUselessStrokeAndFill",
  "removeViewBox",
  "removeHiddenElems",
  "removeEmptyText",
  "removeEmptyAttrs",
  "removeEmptyContainers",
  "removeUnusedNS",
  "removeTitle",
  "removeDesc",
  "cleanupIDs"
];
export default defineConfig({
	viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: removes.map((item) => ({ name: item }))
      }
    })
})
```

> alias

``` ts
export default defineConfig({
	resolve: {
		alias:[{find:/@\//, replacement: "src"}]
	},
	resolve: {
		alias:{'@':path.resolve(__dirname, 'src')}
	}
})


```
> css

``` js
export default defineConfig({
    css: {
        preprocessorOptions: { // key + config key代表预处理器的名
            less: { // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
                // 在webpack里就给less-loader去配置就好了
                math: "always",
                globalVars: { // 全局变量
                    mainColor: "red",
                }
            },
        },
        devSourcemap: true,
    }
})

```
> tsconfig

``` json

{
"baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  },
}
```
> require.context

``` ts
// vite
const routeFiles = import.meta.globEager('@/router/main/**/*.ts')
console.log(routeFiles)
for (const path in routeFiles) {
  allRoutes.push(routeFiles[path].default)
}

```
> css

``` js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`
      },
 	less: {
          modifyVars: {
            // 用于全局导入，以避免需要单独导入每个样式文件。
            // reference:  避免重复引用
            hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
            // ↓这行代码下一章讲
            // ...generateModifyVars(),
          },
          javascriptEnabled: true,
        },
    }
  }
}
```
> chunk

``` js
export default {
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
	output: {
	  manualChunks: {
		lodash: ['lodash']
	  }
	}	
    }	
  }
}
```

> 配置https

``` bash
npm i vite-plugin-mkcert -D
```
``` js
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  server: { https: true },
  plugins: [ mkcert() ]
})
```
> 配置环境切换

.env.development

``` env
VITE_SHOW_TAG=com
VITE_BASE_URL=http://192.168.31.18:9999
VITE_OUTPUT=dist3
```

.env.development

``` env
VITE_SHOW_TAG=admin
VITE_BASE_URL=http://192.168.31.18:9999
```

index.html

``` html
<body>
    <div id="root"></div>
    <% if (VITE_SHOW_TAG === 'admin') { %>
    <script type="module" src="/src/main.admin.tsx"></script>
    <% } %>
    <% if (VITE_SHOW_TAG === 'com') { %>
    <script type="module" src="/src/main.tsx"></script>
    <% } %>
</body>
```

vite.config.ts

``` ts
import { createHtmlPlugin } from "vite-plugin-html";
import { UserConfigExport, splitVendorChunkPlugin, loadEnv } from "vite";

plugins.unshift(createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          ...dotenv
        }
      }
}))
```
> 定义环境变量值

vite.config.ts

``` ts
export default (ctx:any) => {
return {
	define:{
	"process.env":{
		BASE_URL:"/"
		}
	}
}

}
```

axios.ts

``` ts
const config: AxiosRequestConfig = {
  baseURL: process.env.BASE_URL || "/",
  maxRedirects: 5,
  timeout: 3000
};
```

> zip

``` bash
npm i -D vite-plugin-zip-pack
```

``` ts
npm i -D vite-plugin-zip-pack

export default defineConfig({
  plugins: [zipPack()],
});
```
> vite dev下的缓存在node_modules下的.vite文件夹下

> plugins

@vitejs/plugin-vue-jsx

unplugin-auto-import/vite

unplugin-vue-components/vite

unplugin-vue-components/resolvers

vite-plugin-pages

vite-plugin-mock

@originjs/vite-plugin-federation
