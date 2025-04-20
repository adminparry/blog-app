# 数据库

关系型数据库

非关系型数据库

> mysql

``` yml
version: '3.1'
services:
  db:
    image: mysql
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: example
    ports:
      - '3306:3306'
    volumes:
      - db_data:/var/lib/mysql
volumes:
  db_data:
```
> postgres

``` yml
version: "3.3"
services:
 postgres:
  image: postgres:12-alpine
  container_name: postgres
  restart: always
  environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: 123456
  ports:
    - 5432:5432
  volumes:
    - ./data:/var/lib/postgresql/data
```
> Elasticsearch

``` yml
version: '3.8'
services:
  es01:
    container_name: es01
    image: docker.elastic.co/elasticsearch/elasticsearch:8.12.2
    environment:
      - discovery.type=single-node
      - ELASTIC_PASSWORD=xj2024
      - TZ=Asia/Shanghai
    ports:
      - "9200:9200"
      - "9300:9300"
    mem_limit: 1g
    volumes:
      - ./es/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - ./es/data:/usr/share/elasticsearch/data
      - ./es/plugins:/usr/share/elasticsearch/plugins
    networks:
      - elastic

networks:
  elastic:
    external: true

```

> sqlserver

``` yml
version: '3'
services:
  #服务名称
  sqlserver-db:
    #容器名称
    container_name: sqlserver-db
    #镜像名称
    image: microsoft/mssql-server-linux:latest
    #端口映射
    ports:
      - 1433:1433
    #挂载
    volumes:
      - ./data:/var/opt/mssql/data
    #环境变量
    environment:
      - ACCEPT_EULA=Y
      #SA用户密码长度必须至少为 8 个字符，并包含以下四组中的三组字符：大写字母、小写字母、10 位基数和符号
      - SA_PASSWORD=Sap123456789
```

> mariadb

``` yml
version: '3.1'
services:
  mariadb:
    image: mariadb:10.5.5
    container_name: "mariadb1"
    restart: always
    environment:
      MYSQL_USER: "root"
      MYSQL_PASSWORD: "123456"
      MYSQL_ROOT_PASSWORD: "123456"
      TZ: "Asia/Shanghai"
    ports:
      - "3306:3306"
    volumes:
      - ./data:/var/lib/mysql
      - ./log:/var/log/mysql
      - ./conf/my.cnf:/etc/mysql/my.cnf
```
> sqlite

``` yml
version: '3'
services:
  db:
    image: 'sqlite'
    volumes:
      - './data:/data' 
    command: 'sqlite3 /data/mydatabase.db'
  api:
    build: .
    depends_on:
      - db
    ports:
      - '8080:8080'

```
> mongodb

``` yml
version: '3'
services:                                      # 集合
  ...
  docker_mongo:
    image: mongo:latest
    restart: always
    container_name: mongodb
    ports:
      - 27017:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
    volumes:
      - /home/ubuntu/mongodb/data/db:/data/db
      - /home/ubuntu/mongodb/data/config:/etc/mongo
    command:
      - --wiredTigerCacheSizeGB
      - '1.5'
```
> redis

``` yml
version: '3'

services:
  redis:
    image: redis:latest
    container_name: redis
    restart: always
    ports:
      - 6379:6379
    networks:
      - mynetwork
    volumes:
      - ./redis.conf:/usr/local/etc/redis/redis.conf:rw
      - ./data:/data:rw
    command:
      /bin/bash -c "redis-server /usr/local/etc/redis/redis.conf "
networks:
  mynetwork:
    external: true
```
