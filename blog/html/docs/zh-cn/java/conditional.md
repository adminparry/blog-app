# @Conditional

在 Spring 框架中，@Conditional 注解是一个强大的条件装配工具，允许根据特定条件决定是否加载 Bean 或配置类。它广泛应用于 Spring Boot 自动配置、多环境适配等场景，极大提升了应用的灵活性和可配置性。

> demo

``` java
public class OnEnvCondition implements Condition {

    @Override
    public boolean matches(MethodMetadata metadata, BeanDefinitionRegistry registry) {
        // 获取环境变量
        Map<String, Object> attrs = metadata.getAnnotationAttributes(ConditionalOnEnv.class.getName());
        String requiredEnv = (String) attrs.get("value");
        String currentEnv = System.getenv("MYAPP_ENV");
        return requiredEnv.equals(currentEnv);
    }
}
```

> ConditionalOnClass

> ConditionalOnMissingBean

容器中不存在指定 Bean 时生效

``` java
@Configuration(proxyBeanMethods = false)
public class DataSourceAutoConfiguration {

    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    @ConditionalOnMissingBean // 用户未定义 DataSource 时生效
    public DataSource dataSource(DataSourceProperties properties) {
        // 创建默认数据源（如 HikariCP、Tomcat JDBC 等）
    }
}
```

> ConditionalOnProperty

配置文件属性满足条件时生效

``` java
@Configuration(proxyBeanMethods = false)
@EnableConfigurationProperties(CacheProperties.class)
@ConditionalOnProperty(prefix = "myapp.cache", name = "enabled", havingValue = "true", matchIfMissing = false) // 属性为 true 时生效（默认不缺失时）
public class CacheAutoConfiguration {

    @Bean
    public CacheManager cacheManager(CacheProperties properties) {
        // 创建缓存管理器
    }
}
```

> ConditionalOnWebApplication

Web 应用环境生效

``` java
@Configuration(proxyBeanMethods = false)
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET) // 仅 Servlet Web 应用
public class EncodingAutoConfiguration {

    @Bean
    public CharacterEncodingFilter characterEncodingFilter() {
        // 注册字符编码过滤器
    }
}
```

> ConditionalOnNotWebApplication