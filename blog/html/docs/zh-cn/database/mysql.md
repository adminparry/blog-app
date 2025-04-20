# mysql

关系型数据库

> download

``` bash
apt-get install mysql
```
> docker-compose
``` yml
version: '3'
services:
  mysql:
    restart: always
    image: mysql:5.7.18
    container_name: mysql-lable
    volumes:
      - /apps/mysql/mydir:/mydir
      - /apps/mysql/datadir:/var/lib/mysql
      - /apps/mysql/conf/my.cnf:/etc/my.cnf
      # 数据库还原目录 可将需要还原的sql文件放在这里
      - /apps/mysql/source:/docker-entrypoint-initdb.d
    environment:
      - "MYSQL_ROOT_PASSWORD=yourpassword"
      - "MYSQL_DATABASE=yourdbname"
      - "TZ=Asia/Shanghai"
    ports:
      # 使用宿主机的3306端口映射到容器的3306端口
      # 宿主机：容器
      - 3306:3306
```
> 密码忘记查看启动日志

``` bash
sudo grep 'temporary password' /var/log/mysqld.log
```

> 查询所有库名 查询所有表名

``` sql
SELECT TABLE_NAME , TABLE_COMMENT, TABLE_ROWS FROM information_schema.tables
WHERE TABLE_SCHEMA = 'databasename';
show databases;
```
> 增删改查

``` sql

SELECT column_name,column_name
FROM table_name
[WHERE Clause]
[LIMIT N][ OFFSET M]

INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );

DELETE FROM table_name [WHERE Clause]

UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
```

> 主键与外键

1. CASCADE: 从父表中删除或更新对应的行，同时自动的删除或更新自表中匹配的行。ON DELETE CANSCADE和ON UPDATE CANSCADE都被InnoDB所支持。

  2. SET NULL: 从父表中删除或更新对应的行，同时将子表中的外键列设为空。注意，这些在外键列没有被设为NOT NULL时才有效。ON DELETE SET NULL和ON UPDATE SET SET NULL都被InnoDB所支持。

  3. NO ACTION: InnoDB拒绝删除或者更新父表。

  4. RESTRICT: 拒绝删除或者更新父表。指定RESTRICT（或者NO ACTION）和忽略ON DELETE或者ON UPDATE选项的效果是一样的。


> innodb

b+ tree 作为索引的数据结构

查询速度相对较快

查询比较稳定

一定会存在一个聚集索引 默认一般是主键 叶子节点存放完整数据 非叶子节点上存放索引数据 内存的交互是以页为单位的 所以可以减少与磁盘之间的交互次数 

sql的查询语句是一样长的索引在非叶子节点

> 二叉树

随着数据量越来越大 会发生倾斜 无论是左倾斜还是右倾斜 最终造成线性表
> 红黑树

路数比较小会使树的深度越来越深 本身也不够平衡 
> b tree

每个节点都存储真实数据 索引树越来越高的时候查询链路也会变长 跟磁盘的交互也会变多

> 读写锁

> 三大范式

> 自增主键不连续

> in 和 exists

> 索引的类型

> 聚合索引和非聚合索引

> 触发器

> 百万数据如何删除


> distinct 和 group by 哪个效率高

在有索引的情况下效率是相同的 

在无索引情况下group by会多进行filesort所以distinct效率会高


