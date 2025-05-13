# nodejs

https://nodejs.org/dist/

把EventEmitter和stream 弄清楚nodejs你就掌握了一半了

> module

``` bash
const http = require('http')
# this is cjs module
touch http.js
import http from 'http';
# this is esm module
touch http.mjs
```

> 获取当前路径

``` js
const {resolve} = require('path')


console.log('__dirname : ' + __dirname)
console.log('resolve   : ' + resolve('./'))
console.log('cwd       : ' + process.cwd())
```
> http example

``` js
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
> nodejs环境变量

``` bash

#取消nodejs https 证书校验
NODE_TLS_REJECT_UNAUTHORIZED = 0
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
https.request(svgMetaDataUrl, { rejectUnauthorized: false }, () => {

})
```


# 文件

> 读取和写入

``` js
const fs = require('fs')

fs.readFile(path, () => {})
fs.readFileSync(path, );

fs.writeFile(filename,);
fs.wirteFileSync(filename,);
```
> 监听文件夹及文件变化
``` js
fs.watch(filename[, options][, listener])

```


## 第三方

``` bash
npm i chokidar

npm install watch
```

> 读取所有文件

``` js
const fs = require('fs');
const path = require('path');

readdir(path.join(__dirname, 'static'))
function readdir(filepath){
	let ret = [];
	fs.read...
	return ret;
}
```

> globby

``` js
npm i globby
```

> 抓取图片

``` js
const https = require('https');
const fs = require('fs');
const path = require('path');

const originUrl = 'https://www.baidu.com/image/';

const distUrl = path.join(__dirname, 'baidu/image/');

function getResource(name) {
	https.get(originUrl + name, (res) => {
		res.pipe(fs.createWriteStream(distUrl + name));
	})
}
main();
function main(){
	for(let i = 0; i < 50; i++){
		getResource(`${i}.png`)
	}
}
```

> 全局错误拦截

``` js
process.on('uncaughtException', async (p) => {
  console.error('未捕获的异常:', err);
})
```



