# DockerFile

https://www.runoob.com/docker/docker-dockerfile.html

``` dockerfile
# 使用Alpine Linux作为基础镜像
FROM alpine:latest
 
# 安装Nginx
RUN apk add --no-cache nginx
 
# 将Nginx的默认配置文件复制到当前目录
# 你可以在这里修改配置文件
COPY nginx.conf /etc/nginx/nginx.conf
 
# 将Nginx的默认服务器配置复制到当前目录
# 你可以在这里修改服务器的配置
COPY nginx.conf /etc/nginx/conf.d/default.conf
 
# 暴露80端口
EXPOSE 80
 
# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]
```
> 构建镜像

``` bash
docker build -t alpine-nginx .
```
> 运行容器

``` bash
docker run -d -p 8080:80 alpine-nginx
```
