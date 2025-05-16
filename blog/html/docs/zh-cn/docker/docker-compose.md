# docker-compose

> repository

您可以将nginx:latest替换为您需要使用的任何镜像地址，格式通常为<repository>:<tag>，如果不指定<tag>，则默认为latest。


> docker-compose.yml

Docker-Compose 是一个用于管理多容器 Docker 应用的工具，通过 docker-compose.yml 文件定义和协调容器。以下是一些常用的 Docker-Compose 命令，帮助用户更有效地管理和部署容器化应用。

启动容器

docker-compose up 命令用于启动使用 Docker Compose 编排的多个容器。它会根据指定的配置文件（默认为 docker-compose.yml）创建并运行多个容器，使它们协同工作。

docker-compose up
如果希望在后台运行容器，可以使用 -d 选项：

docker-compose up -d
查看容器状态

docker-compose ps 命令用于列出由 Docker Compose 管理的容器的状态。它会显示与配置文件中定义的服务相关联的容器的详细信息。

docker-compose ps
停止容器

docker-compose stop 命令用于停止正在运行的容器，可以通过 docker-compose start 再次启动。

docker-compose stop
移除容器

docker-compose down 命令用于停止和移除由 docker-compose up 创建的容器、网络和卷。

docker-compose down
查看日志

docker-compose logs 命令用于查看由 Docker Compose 启动的服务的日志。

docker-compose logs
如果希望实时查看日志，可以使用 -f 选项：

docker-compose logs -f
构建服务容器

docker-compose build 命令用于构建（重新构建）项目中的服务容器。

docker-compose build
拉取镜像

docker-compose pull 命令用于拉取服务依赖的镜像。

docker-compose pull
重新启动容器

docker-compose restart 命令用于重新启动由 Docker Compose 启动的服务容器。

docker-compose restart
删除容器

docker-compose rm 命令用于删除所有（停止状态的）服务容器。

docker-compose rm
执行命令

docker-compose run 命令用于在指定服务上执行一个命令。

docker-compose run <service> <command>