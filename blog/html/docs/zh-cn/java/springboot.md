# springboot

https://start.spring.io/

> spring中的设计模式

单例模式： spring中的bean 默认都是单例模式

工厂模式: 工厂模式主要通过 BeanFactory 和 ApplicationContext 来生产Bean对象

代理模式: 常见的aop的实现方式就是通过代理模式时间 spring主要是使用jdk动态代理 和cglib代理

> ioc和aop

ioc 控制反转 通过spring来管理对象的创建 配置和生命周期 把控制权交给了spring 不用手动管理对象之间的依赖关系

aop 面向切面编程 一种编程范式 aop基于动态代理模式实现

> jdk的动态代理和cglib代理

jdk动态代理 主要是对类实现了接口 基于反射机制实现生成一个同样接口的代理类 通过重写的方式对代码进行增强

如果某个类没有实现接口 aop 会使用gclib代理 实现原理基于asm第三方框架  通过修改字节码生成一个子类 然后重写父类方法

> springBean的生命周期 

1 实例化 创建Bean
2 填充属性 为属性赋值
3 初始化
4 销毁

> 数据源配置

``` properties
spring.datasource.url=jdbc:postgresql://localhost:5432/test
spring.datasource.username=test
spring.datasource.password=test
spring.datasource.max-total=20
spring.datasource.init-size=5
spring.datasource.driver-class-name=org.postgresql.Driver


```
> 端口配置

``` properties
spring.application.name=demo
server.port=9999
```
> springmvc
> dispatcherServlet

> generator

``` bash
npm -v
npm i -g yo generator-springboot
yo springboot
```

> spring initializr

> spring security

> interceptor

> filter

> controller

> service

> entity

> repository

> component

> 配置cors

``` java
package com.surance.coin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableJpaRepositories
@EnableJpaAuditing
@ServletComponentScan
public class DemoApplication {

	public static void main(String[] args) {
		System.setProperty("server.servlet.context-path", "/api");
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration config = new CorsConfiguration();
		config.addAllowedOrigin("*");
		config.addAllowedMethod("*");
		config.addAllowedHeader("*");
		UrlBasedCorsConfigurationSource corsConfigurationSource = new UrlBasedCorsConfigurationSource();
		corsConfigurationSource.registerCorsConfiguration("/**", config);
		return new CorsFilter(corsConfigurationSource);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("*").allowedOrigins("http://127.0.0.1:8989").allowedOrigins("http://127.0.0.1:8899").allowedOrigins("https://127.0.0.1:8989");
			}
		};
	}
}

```
> 自定义返回结构体

``` java
package com.surance.coin.dto;

import lombok.Data;

@Data
public class HttpResponse<T> {

    private  T data;

    protected int status;

    protected String error;

    public static <T> HttpResponse<T> success() {
        return new HttpResponse<>();
    }
    public static <T> HttpResponse<T> success(T data) {
        return new HttpResponse<>(data);
    }
    public static <T> HttpResponse<T> fail(String message) {
        return new HttpResponse<>(ResponseCodeEnums.FAIL.getCode(), message);
    }
    public HttpResponse() {
        this.status = ResponseCodeEnums.SUCCESS.getCode();
        this.error = ResponseCodeEnums.SUCCESS.getMessage();
    }
    public HttpResponse(ResponseCodeEnums statusEnums) {
        this.status = statusEnums.getCode();
        this.error = statusEnums.getMessage();
    }

    public HttpResponse(int code, String msg) {
        this.status = code;
        this.error = msg;
    }

    public HttpResponse(T data) {
        this.data = data;
        this.status = ResponseCodeEnums.SUCCESS.getCode();
        this.error = ResponseCodeEnums.SUCCESS.getMessage();
    }

    public HttpResponse(T data, String msg) {
        this.data = data;
        this.status = ResponseCodeEnums.SUCCESS.getCode();
        this.error = msg;
    }

}

```

> 自定义异常

``` java
package com.surance.coin.controller;

import com.surance.coin.dto.HttpResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.nio.file.AccessDeniedException;

@Slf4j
@RestControllerAdvice
public class ExceptionHandlerAdvice {
    /**
     * 参数格式异常处理
     */
    @ExceptionHandler({IllegalArgumentException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public HttpResponse<String> badRequestException(IllegalArgumentException ex) {
        log.error("参数格式不合法：{}", ex.getMessage());
        return HttpResponse.fail(ex.getMessage()    );
    }
    /**
     * 权限不足异常处理
     */
    @ExceptionHandler({AccessDeniedException.class})
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public HttpResponse<String> badRequestException(AccessDeniedException ex) {
        return HttpResponse.fail(ex.getMessage());
    }
    /**
     * 参数缺失异常处理
     */
    @ExceptionHandler({MissingServletRequestParameterException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public HttpResponse<String> badRequestException(Exception ex) {
        return HttpResponse.fail(ex.getMessage());
    }
    /**
     * 空指针异常
     */
    @ExceptionHandler(NullPointerException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public HttpResponse<String> handleTypeMismatchException(NullPointerException ex) {
        log.error("空指针异常，{}", ex.getMessage());
        return HttpResponse.fail(ex.getMessage());
    }
    @ExceptionHandler(Exception.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public HttpResponse<String> handleUnexpectedServer(Exception ex) {
        log.error("系统异常：", ex);
        return HttpResponse.fail(ex.getMessage());
    }
    /**
     * 系统异常处理
     */
    @ExceptionHandler(Throwable.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public HttpResponse<String> exception(Throwable throwable) {
        log.error("系统异常", throwable);
        return HttpResponse.fail("coinsurance");
    }

}
```
