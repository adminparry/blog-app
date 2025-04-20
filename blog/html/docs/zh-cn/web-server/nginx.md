# nginx

> download

http://nginx.org/en/download.html

> 安装

``` bash
apt install nginx
```
> 帮助

``` bash
nginx -h
```
> 检查配置文件
``` bash
nginx -t
# 同时也能快速找到配置文件的路径
```
> nginx 中的mime type

``` bash
nginx -t
cat /etc/nginx/nginx.conf | grep mime

nginx -s reload

```
> 配置基本身份验证
``` conf
location /api {
	auth_basic "Administrator";
	auth_basic_user_file /etc/apache2/.htpasswd;
}
```
## 添加密码
``` bash
apt-get install apache2-utils

htpasswd -c /etc/apache2/.htpasswd admin
#123456qq
```
> 配置下载

``` conf
server {
    listen 80;
    root ~/home;
    autoindex on;
}
; 但是为什么在location中配置autoindex 为403的响应这个以后有时间再看
```

> location匹配规则

=         严格匹配。如果请求匹配这个location，那么将停止搜索并立即处理此请求

~         区分大小写匹配(可用正则表达式)

~*       不区分大小写匹配(可用正则表达式)

!~       区分大小写不匹配

!~*     不区分大小写不匹配

^~      如果把这个前缀用于一个常规字符串,那么告诉nginx 如果路径匹配那么不测试正则表达式

> 单页面应用的配置

``` conf
location ~ / {
  try_files $uri $uri/ /index.html;
}
```
> 配置转发

``` conf
location ~ ^/baidu {
  proxy_pass http://www.baidu.com;
}
; https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
```

> nginx优化跨域的OPTIONS请求

自定义请求头或请求头中的content-type是application/x-www-form-urlencoded，multipart/form-data，text/plain之外的格式

满足上面两点，浏览器就会在发送数据请求之前，先发送OPTIONS请求。

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age
``` conf
location / {
            if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Allow-Origin' "http://test.imqianduan.com"; 
                add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS'; 
                add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'; 
                add_header 'Access-Control-Allow-Credentials' true;
                add_header 'Access-Control-Max-Age' 86400;
                return 200; 
            }
            add_header 'Access-Control-Allow-Origin' "http://test.imqianduan.com"; 
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS'; 
            add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'; 
            add_header 'Access-Control-Allow-Credentials' true;
            add_header 'Access-Control-Max-Age' 86400;
            proxy_pass http://127.0.0.1:7001;
            proxy_set_header Access-Control-Max-Age 86400;
            proxy_set_header Host $host; 
            proxy_redirect off; 
            proxy_set_header X-Real-IP $remote_addr; 
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
            proxy_connect_timeout 60; 
            proxy_read_timeout 60; 
            proxy_send_timeout 60; 
        }

location / {
        add_header 'Access-Control-Allow-Origin' $http_origin;   # 全局变量获得当前请求origin，带cookie的请求不支持*
        add_header 'Access-Control-Allow-Credentials' 'true';    # 为 true 可带上 cookie
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';  # 允许请求方法
        add_header 'Access-Control-Allow-Headers' $http_access_control_request_headers;  # 允许请求的 header，可以为 *
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

        if ($request_method = 'OPTIONS') {
             add_header 'Access-Control-Max-Age' 1728000;   # OPTIONS 请求的有效期，在有效期内不用发出另一条预检请求
             add_header 'Content-Type' 'text/plain; charset=utf-8';
             add_header 'Content-Length' 0;

             return 204;                  # 200 也可以
        }

        root  /usr/local/etc/nginx/html/dazhihui;
        index index.html;
    }

```

> 自定义指令

``` conf
location ~ ^/launchpad\/0 {
            try_files $uri @chao;
        }
location @chao {
        proxy_pass http://192.168.31.5;
        }
```
