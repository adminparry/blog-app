# npm

nodejs的包管理工具

> .npmrc
``` bash
registry=https://alibaba.baidu.com/nexus/repository/npm-group
```
> npx

``` bash
npx create-react-app
```

> npm config list

查看npm配置项

> npm ci

安装依赖

> npm install

下载依赖

> npm install -g package

全局安装

> npm i somepackage -D

写入package.json持久

> 初始化npm

``` bash
npm init -y
```

> registry

``` bash
npm i nrm -g

```

> nrm ls
``` bash
  npm ------------ https://registry.npmjs.org/
  yarn ----------- https://registry.yarnpkg.com/
  tencent -------- https://mirrors.cloud.tencent.com/npm/
  cnpm ----------- https://r.cnpmjs.org/
  taobao --------- https://registry.npmmirror.com/
  npmMirror ------ https://skimdb.npmjs.com/registry/
```
> nrm use cnpm

切换镜像地址

> nrm add key url

添加镜像地址

> nrm del key

删除镜像地址

> .npmrc
npm 的registry地址配置
``` bash
# registry=http://registry.npmjs.org
```
> 发布包

``` bash
npm login

npm publish
```

> create

``` bash
npm create 
```

> workspace
``` bash
// main
{
	"workspace": ["packages/*"]
}
// sub
{
	"devDenpendencies": "workspace:*"
}
pnpm i
```
https://pnpm.io/zh/workspaces

``` bash
npm init -y

npm init -w ./package/a

npm init -w ./package/b

npm i @example/a -w @example/b	
```
> pre & post script

To create "pre" or "post" scripts for any scripts defined in the "scripts" section of the package.json, simply create another script with a matching name and add "pre" or "post" to the beginning of them.

``` json
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```
 
