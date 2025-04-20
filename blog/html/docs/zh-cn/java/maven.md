# maven

> 修改镜像地址为ali源

``` xml
<mirrors>
    <mirror>
        <id>alimaven</id>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf>
    </mirror>
</mirrors>
```

> setting.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <!-- 本地仓库位置 -->
  <localRepository>/Users/codeboyzhou/maven/repository</localRepository>

  <!-- jar包部署到私服 -->
  <servers>
    <server>
      <id>local.com</id>
      <username>username</username>
      <password>password</password>
    </server>
  </servers>

  <!-- 仓库镜像 -->
  <mirrors>
    <!-- 私服 -->
    <mirror>
      <id>local.com</id>
      <name>local maven</name>
      <mirrorOf>central</mirrorOf>
      <url>http://nexus.local.com:8081/nexus/content/groups/public/</url>
    </mirror>
    <!-- 阿里云 -->
    <mirror>
      <id>aliyun</id>
      <name>aliyun maven</name>
      <mirrorOf>central</mirrorOf>
      <url>https://maven.aliyun.com/nexus/content/groups/public/</url>
    </mirror>
  </mirrors>
  
</settings>

```
