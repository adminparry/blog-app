# kafkajs

nodejs使用kafka

> install

``` bash
npm i kafkajs
```

> demo
``` js
const { Kafka, Partitioners, CompressionTypes, logLevel } = require("kafkajs");

const kafka = new Kafka({
//   logLevel: logLevel.DEBUG,
  clientId: "my-app",
  brokers: ["192.168.31.27:9092"]
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "topic-test",
    // compression: CompressionTypes.GZIP,
    messages: [
      { key: "key-2", value: "value-2-2022-07-12T03:55:36.114Z" }
    ]
  });

  await consumer.connect();

  await consumer.subscribe({ topic: "topic-test", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        offset: message.offset,
        value: message.value.toString()
      });
    }
  });
};

run().catch(console.error);

```
