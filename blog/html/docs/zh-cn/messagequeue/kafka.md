# kafka

> kafka 需要有zookeeper的支持

> docker-compose
``` yml
version: '2'
services:
  zookeeper:
    image: wurstmeister/zookeeper:latest
    ports:
      - "2181:2181"
  kafka:
    image: wurstmeister/kafka:2.11-1.1.1
    ports:
      - "9092:9092"
    links:
      - zookeeper
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: 'true'
      KAFKA_DELETE_TOPIC_ENABLE: 'true'
      KAFKA_CREATE_TOPICS: "topic-test:1:1"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sockversion: '2'
```
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
