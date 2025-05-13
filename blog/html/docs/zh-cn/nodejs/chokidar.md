# chokidar
> chokidar 是一个用 Node.js 编写的文件系统监视器，它提供了跨平台文件系统监视器，支持递归监视、文件名匹配、文件系统事件过滤等功能。

## 安装
```bash
npm install chokidar
```

## 使用
```js
const chokidar = require('chokidar');

// 添加文件监视
const watcher = chokidar.watch('path/to/dir', { 
  ignored: /(^|[\/\\])\../, // 忽略点文件
  persistent: true
});

// 监听文件变化
watcher .on('add', path => console.log(`File ${path} has been added`))
  .on('change', path => console.log(`File ${path} has been changed`))
  .on('unlink', path => console.log(`File ${path} has been removed`))
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => { // internal
    log('Raw event info:', event, path, details);
  });


// 监听所有事件
watcher.on('all', (event, path) => console.log(event, path));
```

## API
### watch(paths, options)
> 监视文件或目录

#### 参数
- paths: 要监视的文件或目录的路径
- options: 可选参数，用于配置监视器的行为

#### 返回值

- watcher: 一个 chokidar.Watcher 实例

### unwatch(paths)

> 停止监视文件或目录

#### 参数

- paths: 要停止监视的文件或目录的路径

### close()

> 关闭监视器

### on(event, listener)
> 监听事件

#### 参数
- event: 事件名称
- listener: 事件监听器

### off(event, listener)
> 移除事件监听器

#### 参数
- event: 事件名称
- listener: 事件监听器

### add(path)
> 手动添加文件到监视器

#### 参数
- path: 要添加的文件路径

### remove(path)
> 手动从监视器中移除文件

#### 参数
- path: 要移除的文件路径

### getWatched()

> 获取当前监视的文件和目录

#### 返回值

- watched: 一个对象，包含当前监视的文件和目录
