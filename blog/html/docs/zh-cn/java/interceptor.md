# springmvc interceptor

springmvc 中Interceptor通常用于AOP 它可以在方法调用前后执行一些特定的逻辑


``` java
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class SimpleInterceptor implements HandlerInterceptor {
 
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 在请求处理之前进行调用（Controller方法调用之前）
        System.out.println("Pre Handle");
        return true; // 如果返回false，则停止流程，api不会被调用
    }
 
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        // 请求处理之后进行调用，但是在视图被渲染之前（Controller方法调用之后）
        System.out.println("Post Handle");
    }
 
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        // 在整个请求结束之后调用，也就是在DispatcherServlet渲染了视图执行
        System.out.println("After Completion");
    }
}
```

> 在springmvc配置中添加拦截器

``` java
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
 
@Configuration
public class WebConfig implements WebMvcConfigurer {
 
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new SimpleInterceptor())
                .addPathPatterns("/**"); // 这里可以配置拦截的路径
                //.excludePathPatterns("/login"); // 这里可以配置排除的路径
    }

```
