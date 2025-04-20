# java

> homebrew
``` bash
brew install openjdk@11
brew info openjdk@11
```

> helloworld
``` java
public HelloWrold {
	public static void main(String[] args){
		System.out.printlnb("hello world");
	}
}
```
> jar
``` bash
jar -h
vi HelloWorld.java
javac HelloWorld.java
java HelloWorld
jar --create --verbose --file HelloWorld.jar --main-class HelloWorld *.class
java -jar HelloWorld.jar
```
> jar包设置密码

https://github.com/yumingzhu/xjarDemo/blob/master/target/xjarDemo-1.0-SNAPSHOT.jar

``` bash
java -cp ./xjarDemo-1.0-SNAPSHOT.jar XjarDemo 111111 ./source.jar ./output.jar
```

<!-- 设置 jitpack.io 仓库 -->
    <repositories>
        <repository>
            <id>jitpack.io</id>
            <url>https://jitpack.io</url>
        </repository>
    </repositories>
    <!-- 添加 XJar 依赖 -->
    <dependencies>
        <dependency>
            <groupId>com.github.core-lib</groupId>
            <artifactId>xjar</artifactId>
            <version>4.0.2</version>
            <!-- <scope>test</scope> -->
        </dependency>
    </dependencies>

