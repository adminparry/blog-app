# docker

> 国内镜像地址

镜像源提供方	镜像加速地址（Registry Mirror URL）	备注
阿里云	https://<你的ID>.mirror.aliyuncs.com	✅ 最推荐，需免费获取专属地址
腾讯云	https://mirror.ccs.tencentyun.com	✅ 腾讯云用户优先选择
网易云	https://hub-mirror.c.163.com	✅ 稳定免费，适合非云厂商用户
中科大	https://docker.mirrors.ustc.edu.cn	✅ 教育网友好，开源镜像站
百度云	https://mirror.baidubce.com	百度云用户适用
华为云	https://<你的ID>.swr.cn-south-1.myhuaweicloud.com	华为云用户专属


> 下载地址

https://mirrors.aliyun.com/docker-ce/

> install
``` bash
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
#or
curl -sSL https://get.daocloud.io/docker | sh
```

> homebrew

``` bash
brew install docker --cask
```
> 删除所有容器

``` bash
docker rm -f $(docker ps -a -q)
```

> 删除所有镜像

``` bash
docker rmi $(docker images -q)
```
> 停止所有的容器

``` bash
docker stop $(docker ps -aq)
```
> 删除所有volumes
``` bash
docker volume rm $(docker volume ls -q)
# 删除未被使用的volumes
docker volumes prune
```
> 查看
``` bash
docker info
docker ps
```
> docker.service
/etc/systemd/system/docker.service

``` service
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/local/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always

# Note that StartLimit* options were moved from "Service" to "Unit" in systemd 229.
# Both the old, and new location are accepted by systemd 229 and up, so using the old location
# to make them work for either version of systemd.
StartLimitBurst=3

# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.
StartLimitInterval=60s

# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

# Uncomment TasksMax if your systemd version supports it.
# Only systemd 226 and above support this version.
TasksMax=infinity

# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes

# kill only the docker process, not all processes in the cgroup
KillMode=process

[Install]
WantedBy=multi-user.target
```

> 数据卷

``` bash
docker volume ls
```

> 容器生命周期管理

``` bash
docker run -it nginx:latest /bin/bash

docker start/stop /restart  containername
```
> 容器与宿主拷贝文件

``` bash
docker cp pwd containerid:pwd
docker cp containerid:pwd pwd
```
> 自动重启

``` yml
service:
    restart: always
```
> docker pull

``` bash
docker search mysql
docker pull mysql
docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql
```
> 容器操作
> image

``` bash
docker images
docker run -itd --name containerid -p 3306:3307
```

> 容器rootfs命令

> 镜像仓库

> 本地镜像管理

> docker-compose
``` bash
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
#or
sudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


#添加执行权限
sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version
```
> docker-compose 启动
``` bash
docker-compose -d up
```
> docker-compose 关闭
``` bash
docker-compose -d down
```
> docker 开机启动
```
systemctl enable docker.service

docker update --restart=always containername
```
> docker重启
```
systemctl daemon-reload
```
> docker could not resolve host
``` bash
curl www.baidu.com
# could not resolve host 不能解析dns
# 修改宿主机 /etc/daemon.json dns地址
nmcli dev show | grep 'IP4.DNS'
```
> docker-compose restart 重启
``` bash
docker-compose retart
```
> 删除镜像

``` bash
docker rmi imageid -f
```

> 进入容器命令

``` bash
docker exec -it containerid /bin/bash
```




