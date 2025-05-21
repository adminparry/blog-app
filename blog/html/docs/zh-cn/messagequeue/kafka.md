# kafka


Kafka 通常需要与 Zookeeper 一起部署（Kafka 2.8.0+ 开始支持不需要 Zookeeper 的模式，但生产环境仍建议使用 Zookeeper）。以下是使用 Docker Compose 部署 Kafka 集群的几种方案。

> 单节点 Kafka + Zookeeper

``` yml
version: '3'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.3.0
    container_name: zookeeper
    ports:
      - "2181:2181"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:7.3.0
    container_name: kafka
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 1
    volumes:
      - ./kafka-data:/var/lib/kafka/data
```
> 多节点 Kafka 集群 (3 brokers)

``` yml
version: '3'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.3.0
    container_name: zookeeper
    ports:
      - "2181:2181"
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka1:
    image: confluentinc/cp-kafka:7.3.0
    container_name: kafka1
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka1:9092
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 3
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 3
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 2
    volumes:
      - ./kafka1-data:/var/lib/kafka/data

  kafka2:
    image: confluentinc/cp-kafka:7.3.0
    container_name: kafka2
    depends_on:
      - zookeeper
    ports:
      - "9093:9093"
    environment:
      KAFKA_BROKER_ID: 2
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka2:9093
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9093
    volumes:
      - ./kafka2-data:/var/lib/kafka/data

  kafka3:
    image: confluentinc/cp-kafka:7.3.0
    container_name: kafka3
    depends_on:
      - zookeeper
    ports:
      - "9094:9094"
    environment:
      KAFKA_BROKER_ID: 3
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka3:9094
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9094
    volumes:
      - ./kafka3-data:/var/lib/kafka/data
```

> Kafka + 管理工具 (Kafdrop)

``` yml
version: '3'

services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.3.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  kafka:
    image: confluentinc/cp-kafka:7.3.0
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_LISTENERS: PLAINTEXT://0.0.0.0:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "true"

  kafdrop:
    image: obsidiandynamics/kafdrop:3.30.0
    ports:
      - "9000:9000"
    environment:
      KAFKA_BROKERCONNECT: "kafka:9092"
      JVM_OPTS: "-Xms32M -Xmx64M"
      SERVER_SERVLET_CONTEXTPATH: "/"
    depends_on:
      - kafka
```


> 启动服务

``` bash
docker-compose up -d
```
> 停止服务:

``` bash
docker-compose down
```
> 查看Kafka日志:

``` bash
docker-compose logs -f kafka
```

> 进入Kafka容器

``` bash
docker exec -it kafka /bin/bash
```

> 创建Topic (在容器内执行)

``` bash
kafka-topics --create --topic test-topic --partitions 3 --replication-factor 1 --bootstrap-server localhost:9092
```

> 列出所有Topic

``` bash
kafka-topics --list --bootstrap-server localhost:9092
```


> 环境变量说明

变量名 | 说明
KAFKA_BROKER_ID | 每个broker的唯一ID
KAFKA_ZOOKEEPER_CONNECT | Zookeeper连接地址
KAFKA_ADVERTISED_LISTENERS | 对外暴露的监听地址
KAFKA_LISTENERS | 内部监听地址
KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR | __consumer_offsets topic的副本数
KAFKA_AUTO_CREATE_TOPICS_ENABLE | 是否自动创建topic


> 注意事项
生产环境建议至少部署3个节点的Kafka集群和3个节点的Zookeeper集群

数据目录建议挂载到宿主机持久化

根据实际需求调整内存和CPU限制

跨主机部署时需要正确配置advertised.listeners

对于生产环境，建议使用更安全的SASL认证方式


> broker

消息中间件所在的服务器

> topic

消息的类别

> partition

分区 每个topic 包含一个或多个partition

> producer

发布消息到broker

> consumer

消息消费者

> consumer group 

消费者群组

> offset

偏移量 体现在消息是否被消费过

> command

##列出所有主题

kafka-topics.bat --zookeeper localhost:2181/kafka --list

##列出所有主题的详细信息

kafka-topics.bat --zookeeper localhost:2181/kafka --describe

##创建主题 主题名 my-topic，1副本，8分区

kafka-topics.bat --zookeeper localhost:2181/kafka --create --replication-factor 1 --partitions 8 --topic my-topic

##增加分区，注意：分区无法被删除

kafka-topics.bat --zookeeper localhost:2181/kafka --alter --topic my-topic --partitions 16

##删除主题

kafka-topics.bat --zookeeper localhost:2181/kafka --delete --topic my-topic

##列出消费者群组（仅Linux）

kafka-topics.sh --new-consumer --bootstrap-server localhost:9092/kafka --list

##列出消费者群组详细信息（仅Linux）

kafka-topics.sh --new-consumer --bootstrap-server localhost:9092/kafka --describe --group 群组名


> 创建topic

``` bash
docker exec -it kafka_kafka_1 /bin/bash

kafka-topics.sh --create --topic topic001 --partitions 4 --zookeeper zookeeper:2181 --replication-factor 1

kafka-topics.sh --list --zookeeper zookeeper:2181
```

> 创建producer

``` bash
kafka-console-producer.sh --broker-list localhost:9092 --topic topic001
```
> 创建consumer

``` bash
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic topic001 --from-beginning
```
