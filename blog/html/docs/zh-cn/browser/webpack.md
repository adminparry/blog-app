# webpack

> download

``` bash
npm install webpack webpack-cli --save-dev
```
> documention

https://webpack.js.org/


> 入口文件

``` javascript
module.exports = {
    
}
```
> loader

> plugin

> babel-plugin-dynamic-import-webpack

``` bash
npm install babel-plugin-dynamic-import-webpack --save-dev
```

``` js
{
    test: /\.js/,
    use: [{
        loader: 'babel-loader', 
        options: {//如果有这个设置则不用再添加.babelrc文件进行配置
            "babelrc": false,// 不采用.babelrc的配置
            "plugins": [
                "dynamic-import-webpack"
            ]
        }
    }]
}

```

> require.context

``` js
const files = require.context('.', false, /\.js$/)

let configRouters = [];

files.keys().forEac(item => {
	if(item === './index.js')return;

	configRouters = configRouters.concat(files(item).default);
})

export default configRouters;

const modules = require.context('./modules', true, /\.js$/).keys().reduce((modules, modulePath) => {
// set './app.js' => 'app'
const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
const value = require.context('./modules', true, /\.js$/)(modulePath);
modules[moduleName] = value.default;
return modules;
}, {});

const store = new Vuex.Store({
modules
});

```
