# 面试题集锦

一切都是浮云面试才是王道

>  Arrays.sort 实现原理和 Collection 实现原理

双轴快速排序

>  foreach 和 while 的区别(编译之后)

>  线程池的种类，区别和使用场景

>  分析线程池的实现原理和线程的调度过程

>  线程池如何调优

>  线程池的最大线程数目根据什么确定

>  动态代理的几种方式

>  HashMap 的并发问题

>  了解 LinkedHashMap 的应用吗

>  反射的原理，反射创建类实例的三种方式是什么？

>  cloneable 接口实现原理，浅拷贝 or 深拷贝

>  Java NIO 使用

>  hashtable 和 hashmap 的区别及实现原理，hashmap 会问到数组索引，hash 碰撞怎么解决

>  arraylist 和 linkedlist 区别及实现原理

>  反射中，Class.forName 和 ClassLoader 区别

>  String，Stringbuffer，StringBuilder 的区别？

>  有没有可能 2 个不相等的对象有相同的 hashcode

有可能

>  简述 NIO 的最佳实践，比如 netty，mina

>  TreeMap 的实现原理

>  JUC/并发相关

>  ThreadLocal 用过么，原理是什么，用的时候要注意什么

>  Synchronized 和 Lock 的区别

>  synchronized 的原理，什么是自旋锁，偏向锁，轻量级锁，什么叫可重入锁，什么叫公平锁和非公平锁

>  concurrenthashmap 具体实现及其原理，jdk8 下的改版

>  用过哪些原子类，他们的参数以及原理是什么

>  cas 是什么，他会产生什么问题（ABA 问题的解决，如加入修改次数、版本号）

>  如果让你实现一个并发安全的链表，你会怎么做

>  简述 ConcurrentLinkedQueue 和 LinkedBlockingQueue 的用处和不同之处

>  简述 AQS 的实现原理

>  countdowlatch 和 cyclicbarrier 的用法，以及相互之间的差别?

>  concurrent 包中使用过哪些类？分别说说使用在什么场景？为什么要使用？

>  LockSupport 工具

>  Condition 接口及其实现原理

>  Fork/Join 框架的理解

>  jdk8 的 parallelStream 的理解

>  分段锁的原理,锁力度减小的思考

>  Spring

>  Spring AOP 与 IOC 的实现原理

>  Spring 的 beanFactory 和 factoryBean 的区别

>  为什么 CGlib 方式可以对接口实现代理？

>  RMI 与代理模式

>  Spring 的事务隔离级别，实现原理

>  对 Spring 的理解，非单例注入的原理？它的生命周期？循环注入的原理，aop 的实现原理，说说 aop 中的几个术语，它们是怎么相互工作的？

>  Mybatis 的底层实现原理

>  MVC 框架原理，他们都是怎么做 url 路由的

>  spring boot 特性，优势，适用场景等

>  quartz 和 timer 对比

>  spring 的 controller 是单例还是多例，怎么保证并发的安全

>  分布式相关

>  Dubbo 的底层实现原理和机制

>  描述一个服务从发布到被消费的详细过程

>  分布式系统怎么做服务治理

>  接口的幂等性的概念

>  消息中间件如何解决消息丢失问题

>  Dubbo 的服务请求失败怎么处理

>  重连机制会不会造成错误

>  对分布式事务的理解

>  如何实现负载均衡，有哪些算法可以实现？

>  Zookeeper 的用途，选举的原理是什么？

>  数据的垂直拆分水平拆分。

>  zookeeper 原理和适用场景

>  zookeeper watch 机制

>  redis/zk 节点宕机如何处理

>  分布式集群下如何做到唯一序列号

>  如何做一个分布式锁

>  用过哪些 MQ，怎么用的，和其他 mq 比较有什么优缺点，MQ 的连接是线程安全的吗

>  MQ 系统的数据如何保证不丢失

>  列举出你能想到的数据库分库分表策略；分库分表后，如何解决全表查询的问题。

>  算法和数据结构以及设计模式

>  海量 url 去重类问题（布隆过滤器）

>  数组和链表数据结构描述，各自的时间复杂度

>  二叉树遍历

>  快速排序

>  BTree 相关的操作

>  在工作中遇到过哪些设计模式，是如何应用的

>  hash 算法的有哪几种，优缺点，使用场景

>  什么是一致性 hash

>  paxos 算法

>  在装饰器模式和代理模式之间，你如何抉择，请结合自身实际情况聊聊

>  代码重构的步骤和原因，如果理解重构到模式？

>  数据库

>  MySQL InnoDB 存储的文件结构

>  索引树是如何维护的？

>  数据库自增主键可能的问题

>  MySQL 的几种优化

>  mysql 索引为什么使用 B+树

>  数据库锁表的相关处理

>  索引失效场景

>  高并发下如何做到安全的修改同一行数据，乐观锁和悲观锁是什么，INNODB 的行级锁有哪 2 种，解释其含义

>  数据库会死锁吗，举一个死锁的例子，mysql 怎么解决死锁

>  Redis&缓存相关

>  Redis 的并发竞争问题如何解决了解 Redis 事务的 CAS 操作吗

>  缓存机器增删如何对系统影响最小，一致性哈希的实现

>  Redis 持久化的几种方式，优缺点是什么，怎么实现的

>  Redis 的缓存失效策略

>  缓存穿透的解决办法

>  redis 集群，高可用，原理

>  mySQL 里有 2000w 数据，redis 中只存 20w 的数据，如何保证 redis 中的数据都是热点数据

>  用 Redis 和任意语言实现一段恶意登录保护的代码，限制 1 小时内每用户 Id 最多只能登录 5 次

>  redis 的数据淘汰策略

>  网络相关

>  http1.0 和 http1.1 有什么区别

>  TCP/IP 协议

>  TCP 三次握手和四次挥手的流程，为什么断开连接要 4 次,如果握手只有两次，会出现什么

>  TIME_WAIT 和 CLOSE_WAIT 的区别

>  说说你知道的几种 HTTP 响应码

>  当你用浏览器打开一个链接的时候，计算机做了哪些工作步骤

>  TCP/IP 如何保证可靠性，数据包有哪些数据组成

>  长连接与短连接

>  Http 请求 get 和 post 的区别以及数据包格式

>  简述 tcp 建立连接 3 次握手，和断开连接 4 次握手的过程；关闭连接时，出现 TIMEWAIT 过多是由什么原因引起，是出现在主动断开方还是被动断开方。

>  JAVA 并发知识库：

>  Java 中实现多线程有几种方法

>  继承 Thread 类

>  实现 Runnable 接口。

>  ExecutorSenvice. Callable. Future 有返回值线程

>  基于线程池的方式

>  4 种线程池

>  如何停止一个正在运行的线程

>  notify0 和 notifyAll0 有什么区别?

>  sleep0 和 wait0 有什么区别?

>  volatile 是什么?可以保证有序性吗?

>  Thread 类中的 start0 和 run0 方法有什么区别?

>  为什么 wait, notify 和 nfifAllI 这些方法不在 thread 类里面?

>  为什么 wait 和 ntify 方法要在同步块中调用?

>  Java 中 interrupted 和 isInterruptedd 方法的区别?

>  Java 中 synchronized 和 ReentrantLock 有什么不同?

>  有三个线程 T1,T2,T3,如何保证顺序执行?

>  SynchronizedMap 和 ConcurrentHashMap 有什么区别?

>  什么是线程安全

>  Thread 类中的 yield 方法有什么作用?

>  JVM 面试题：

>  Serial 垃圾收集器(单线程、复制算法)

>  ParNew 垃圾收集器(Serial+ 多线程)

>  Parallel Scavenge 收集器(多线程复制算法、高效)

>  Serial Old 收集器(单线程标记整理算法)

>  Parallel Old 收集器(多线程标记整理算法)

>  CMS 收集器(多线程标记清除算法)

>  G1 收集器

>  JVM 类加载机制

>  类加载器

>  双亲委派

>  OSGI (动态模型系统)

>  动态改变构造

>  Java 中的 IO 与 NIO 面试题：

>  Java 中 10 流?

>  Java 10 与 NIO 的区别

>  常用 io 类有哪些

>  字节流与字符流的区别

>  阻塞 10 模型

>  非阻塞 10 模型

>  多路复用 10 模型

>  信号驱动 10 模型

>  异步 10 模型

>  JAVA NIO

>  NIO 的缓冲区

>  NIO 的非阻塞

>  Channel

>  Buffer

>  MongoDB 面试题：

>  当更新-个正在被迁移的块(Chunk). 上的文档时会发生什么?

>  MongoDB 在 A:(B,C}上建立索引，查询 A:{B,C]和 A:{C,B)都会使用索引吗?

>  如果一个分片(Shard) 停止或很慢的时候，发起一个查询会怎样?

>  MongoDB 支持存储过程吗?如果支持的话，怎么用?

>  如何理解 MongoDB 中的 GridFS 机制，MongoDB 为何使用 GridFS 来存储文件?

>  什么是 NoSQL 数据库? NoSQL 和 RDBMS 有什么区别?在哪些情况下使用和不使用 NoSQL 数据库?

>  MongoDB 支持存储过程吗?如果支持的话，怎么用?

>  如何理解 MongoDB 中的 GridFS 机制，MongoDB 为何使用 GridFS 来存储文件?

>  为什么 MongoDB 的数据文件很大?

>  当更新-个正在被迁移的块(Chunk) 上的文档时会发生什么?

>  MongoDB 在 A:(B,C}上建立索引，查询 A:{B,C]和 A:{C,B)都会使用索引吗?

>  如果一个分片(Shard) 停止或很慢的时候，发起一个查询会怎样

>  分析器在 MongoDB 中的作用是什么?

>  如果用户移除对象的属性，该属性是否从存储层中删除?

>  MyBatis 面试题：

>  通常一个 Xml 映射文件，都会写一个 Dao 接口与之对应，请问，

>  这个 Dao 接口的工作原理是什么? Dao 接口里的方法，参数不同时，方法能重载吗?

>  如何获取自动生成的(主)键值?

>  在 mapper 中如何传递多个参数?

>  Mybatis 动态 sql 有什么用?执行原理?有哪些动态 sql?

>  Xml 映射文件中，除了常见的 selectlinsertlupdaeldelete 标签之外，还有哪些标签?

>  Mybatis 的 Xml 映射文件中，不同的 Xml 映射文件，id 是否可以重复?

>  为什么说 Mybatis 是半自动 ORM 映射工具?它与全自动的区别在哪里?

>  一对一、一对多的关联查询?

>  MyBatis 实现一对一有几种方式?具体怎么操作的?

>  MyBatis 实现-对多有几种方式，怎么操作的?

>  Mybatis 是否支持延迟加载?如果支持，它的实现原理是什么?

>  Mybatis 的一级、二级缓存

>  什么是 MyBatis 的接口绑定?有哪些实现方式?

>  使用 MyBatis 的 mapper 接口调用时有哪些要求?

>  Mapper 编写有哪几种方式?

>  简述 Mybatis 的插件运行原理，以及如何编写一个插件。

>  MyBatis 实现一对一有几种方式?具体怎么操作的?

>  微服务 面试题：

>  Container 在微服务中的用途是什么?

>  什么是微服务架构中的 DRY?

>  什么是消费者驱动的合同(CDC) ?

>  Web, RESTful API 在微服务中的作用是什么?

>  您对微服务架构中的语义监控有何了解?

>  我们如何进行跨功能测试?

>  我们如何在测试中消除非决定论?

>  Mock 或 Stub 有什么区别?

>  您对 Mike Cohn 的测试金字塔了解多少?

>  Docker 的目的是什么?

>  什么是金丝雀释放?

>  什么是持续集成(CI) ?

>  什么是持续监测?

>  架构师在微服务架构中的角色是什么?

>  我们可以用微服务创建状态机吗?

>  什么是微服务中的反应性扩展?

￼