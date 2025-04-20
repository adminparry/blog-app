# http-server

``` bash
npm install -g http-server

http-server -p 9090
```

target：要使用url模块解析的url字符串

forward：要使用url模块解析的url字符串

agent：要传递给http.squest的对象（请参阅Node的https代理和http代理对象）

ssl：要传递给https.createServer（）的对象

ws：是/否，如果您想代理websocket

xfwd：true / false，添加x-forward标头

secure：true / false，如果要验证SSL证书

toProxy：true / false，将绝对URL传递为path（用于代理代理）

prependPath：true / false，默认值：true-指定是否要将目标路径添加到代理路径之前

ignorePath：true / false，默认值：false-指定是否要忽略传入请求的代理路径（注意：如果需要，您将必须手动添加/）。

localAddress：绑定到传出连接的本地接口字符串

changeOrigin：true / false，默认值：false-将主机标头的来源更改为目标URL

prepareHeaderKeyCase：true / false，默认：false-指定是否要保留响应标题键的字母大小写

auth：基本身份验证，即“ user：password”，用于计算Authorization标头。

hostRewrite：重写（201/301/302/307/308）重定向上的位置主机名。

autoRewrite：根据请求的主机/端口重写（201/301/302/307/308）重定向上的主机/端口位置。默认值：false。

protocolRewrite：重写（201/301/302/307/308）重定向到“ http”或“ https”上的位置协议。默认值：null。

cookieDomainRewrite：重写set-cookie标头域。可能的值：

false （默认）：禁用Cookie重写
字符串：例如，新域cookieDomainRewrite: “new.domain”。要删除域，请使用cookieDomainRewrite: “”。
对象：域到新域的映射，用于""匹配所有域。例如，保持一个域不变，重写一个域并删除其他域：
``` js
cookieDomainRewrite: {
“unchanged.domain”: “unchanged.domain”,
“old.domain”: “new.domain”,
"": “”
}
```
cookiePathRewrite：重写set-cookie标头的路径。可能的值：

false （默认）：禁用Cookie重写
字符串：新路径，例如cookiePathRewrite: “/newPath/”。要删除路径，请使用cookiePathRewrite: “”。设置root的使用路径cookiePathRewrite: “/”。
对象：路径到新路径的映射，用于""匹配所有路径。例如，要保持一个路径不变，请重写一个路径并删除其他路径：
``` js
cookiePathRewrite: {
“/unchanged.path/”: “/unchanged.path/”,
“/old.path/”: “/new.path/”,
"": “”
}
```
headers：带有额外标头的对象，该标头将添加到目标请求中。

proxyTimeout：传出代理请求的超时（以毫秒为单位）

超时：传入请求的超时（以毫秒为单位）

followRedirects：是/否，默认值：false-指定是否要跟随重定向

selfHandleResponse true / false，如果设置为true，则不会调用任何webOutgoing传递，并且您有责任通过侦听并处理proxyRes事件来适当地返回响应

buffer：作为请求正文发送的数据流。也许您有一些中间件在代理之前就消耗了请求流，例如，如果您将请求的主体读入名为“ req.rawbody”的字段中，则可以在buffer选项中重新传输该字段：
``` js
‘use strict’;

const streamify = require(‘stream-array’);
const HttpProxy = require(‘http-proxy’);
const proxy = new HttpProxy();

module.exports = (req, res, next) => {
proxy.web(req, res, {
target: ‘http://localhost:4003/’,
buffer: streamify(req.rawBody)
}, next);

};
```
