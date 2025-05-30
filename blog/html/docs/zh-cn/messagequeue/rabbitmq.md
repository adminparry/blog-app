# rabbitmq


> docker-compose

``` yml
 version: '3.1'
 services:
   rabbitmq:
     image: rabbitmq:3.12.6-management
     container_name: rabbitmq_3_12
     restart: always
     # 节点名 rabbit@rabbitserver，不然会去容器ID
     hostname: rabbitserver
     environment:
       # 默认虚拟机名
       RABBITMQ_DEFAULT_VHOST: admin_vhost
       # 用户名
       RABBITMQ_DEFAULT_USER: root
       # 密码
       RABBITMQ_DEFAULT_PASS: devops666
       # 指定自定义插件目录
       RABBITMQ_PLUGINS_DIR: '/plugins:/myplugins'
     ports:
       - "5672:5672"
       - "15672:15672"
     volumes:
       - ./data:/var/lib/rabbitmq
       - ./myplugins:/myplugins
     networks:
       - devopsnetwork

 networks:
   devopsnetwork:
     external: true
```

> Dockerfile

``` Dockerfile

```
