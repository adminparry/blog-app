# lombok


> install

![plugin](../../assets/lombok/v2-32d671893de715b5f04f493a4b2ff62e_1440w.jpeg)

> dependency

``` pom
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.16.18</version>
    <scope>provided</scope>
</dependency>
```
> lombok.config

``` config
config.stopBubbling = true
lombok.addLombokGeneratedAnnotation = true

```

> annotation

@Data
@Setter
@Getter
@Log4j
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@NonNull
@Cleanup
@ToString
@RequiredArgsConstructor
@Value
@SneakyThrows
@Synchronized
@Accessors(chain=true)

> @Accessors(chain=true)

链式访问，该注解设置chain=true，生成setter方法返回this（也就是返回的是对象），代替了默认的返回void。

> @Data

注解在 类 上；提供类所有属性的 get 和 set 方法，此外还提供了equals、canEqual、hashCode、toString 方法。

![](../../assets/lombok/v2-9b36bb6fd37372cee213b118d7e26c7b_1440w.jpeg)

> @Setter

注解在 属性 上；为单个属性提供 set 方法; 注解在 类 上，为该类所有的属性提供 set 方法， 都提供默认构造方法。

![](../../assets/lombok/v2-12139fea446022a1986ba2042f886a7d_1440w.jpeg)


![](../../assets/lombok/v2-994e89f3c9c6976b05e345fcd0848692_1440w.jpeg)

> @Getter

注解在 属性 上；为单个属性提供 get 方法; 注解在 类 上，为该类所有的属性提供 get 方法，都提供默认构造方法。


![](../../assets/lombok/v2-18149a8d23a4e3673b9441b198a1f976_1440w.jpeg)


![](../../assets/lombok/v2-2cb156b6d93198d271f2ff4bca1c21ff_1440w.jpeg)

> @Log4j

注解在 类 上；为类提供一个 属性名为 log 的 log4j 日志对象，提供默认构造方法。

![](../../assets/lombok/v2-ce28a344baae222aa0c4ea0b84461000_1440w.jpeg)

> @AllArgsConstructor

注解在 类 上；为类提供一个全参的构造方法，加了这个注解后，类中不提供默认构造方法了。

![](../../assets/lombok/v2-31bca5c4da7e9c475bade1eaa400802f_1440w.jpeg)

> @NoArgsConstructor

注解在 类 上；为类提供一个无参的构造方法。

![](../../assets/lombok/v2-518a849c9d5fffde690b2a801e951275_1440w.jpeg)

> @EqualsAndHashCode

注解在 类 上, 可以生成 equals、canEqual、hashCode 方法。

![](../../assets/lombok/v2-6bddfeaa77e8dd29b05bb8b499da65f4_1440w.jpeg)

> @NonNull

注解在 属性 上，会自动产生一个关于此参数的非空检查，如果参数为空，则抛出一个空指针异常，也会有一个默认的无参构造方法。


![](../../assets/lombok/v2-268671034ed3141e117c99f055a3f2ad_1440w.jpeg)

> @Cleanup

这个注解用在 变量 前面，可以保证此变量代表的资源会被自动关闭，默认是调用资源的 close() 方法，如果该资源有其它关闭方法，可使用 @Cleanup(“methodName”) 来指定要调用的方法，也会生成默认的构造方法

![](../../assets/lombok/v2-6408e68a5f77eba5add53abe3ee8abf2_1440w.jpeg)

> @ToString

这个注解用在 类 上，可以生成所有参数的 toString 方法，还会生成默认的构造方法。

![](../../assets/lombok/v2-28b29cc1b5940f31de246e719cfcd9e8_1440w.jpeg)

> @RequiredArgsConstructor

这个注解用在 类 上，使用类中所有带有 @NonNull 注解的或者带有 final 修饰的成员变量生成对应的构造方法。

![](../../assets/lombok/v2-866a42cd03707c5095b44721be5e17ba_1440w.jpeg)

> @Value

这个注解用在 类 上，会生成含所有参数的构造方法，get 方法，此外还提供了equals、hashCode、toString 方法。

![](../../assets/lombok/v2-159c62a7a9f545505246939abe6cfcc0_1440w.jpeg)

> @SneakyThrows

这个注解用在 方法 上，可以将方法中的代码用 try-catch 语句包裹起来，捕获异常并在 catch 中用 Lombok.sneakyThrow(e) 把异常抛出，可以使用 @SneakyThrows(Exception.class) 的形式指定抛出哪种异常，也会生成默认的构造方法。


![](../../assets/lombok/v2-2cd23582188406e3301a318d37bfa426_1440w.jpeg)

> @Synchronized

这个注解用在 类方法 或者 实例方法 上，效果和 synchronized 关键字相同，区别在于锁对象不同，对于类方法和实例方法，synchronized 关键字的锁对象分别是类的 class 对象和 this 对象，而 @Synchronized 的锁对象分别是 私有静态 final 对象 lock 和 私有 final 对象 lock，当然，也可以自己指定锁对象，此外也提供默认的构造方法。


![](../../assets/lombok/v2-7f38c354c3ca8ba9205ecbcaae04d1d3_1440w.jpeg)

