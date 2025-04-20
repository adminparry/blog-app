# java filter

在java中filter是一个可以拦截服务器请求和响应的组件 它可以在请求到达servlet之前拦截请求并在响应返回客户端之前拦截响应


``` java
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
 
public class LogFilter implements Filter {
 
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 在这里可以初始化Filter
    }
 
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        long startTime = System.currentTimeMillis();
        try {
            chain.doFilter(request, response);  // 继续执行其他的Filter或Servlet
        } finally {
            long endTime = System.currentTimeMillis();
            HttpServletRequest req = (HttpServletRequest) request;
            System.out.println("URI: " + req.getRequestURI() + " accessed in " + (endTime - startTime) + "ms");
        }
    }
 
    @Override
    public void destroy() {
        // 在这里可以进行资源清理
    }
}
```

> 在springboot中使用filter

``` java

@Component
@Order(1)
public class Filter1 implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throw IOExceptioin, ServletException {
        filterChain.doFilter(servletRequest, servletResponse);
    }
}   
```
