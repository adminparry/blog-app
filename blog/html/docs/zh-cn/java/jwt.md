# java-jwt


> dependency

``` pom
<dependency>
			<groupId>com.auth0</groupId>
			<artifactId>java-jwt</artifactId>
			<version>3.8.2</version>
		</dependency>
```

> filter

``` java
package com.surance.coin.filter;

import com.auth0.jwt.interfaces.Claim;
import com.surance.coin.utils.JwtUtil;
import lombok.extern.slf4j.Slf4j;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Slf4j
@WebFilter(filterName = "jwtFilter", urlPatterns = "/secure/*")
public class JwtFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        final HttpServletRequest request = (HttpServletRequest) servletRequest;
        final HttpServletResponse response = (HttpServletResponse) servletResponse;


        response.setCharacterEncoding("UTF-8");

        final String token = request.getHeader("Authorization");
        if("OPTIONS".equals(request.getMethod())){
            response.setStatus(HttpServletResponse.SC_OK);
            filterChain.doFilter(request, response);
        } else {
            if(token == null){
                response.getWriter().write("present token");
                return;
            }

            Map<String, Claim> userData = JwtUtil.verifyToken(token);

            if(userData == null){
                response.getWriter().write("token invalid");
                return;
            }
            log.info(userData.toString());
            Integer id = userData.get("id").asInt();
            String user = userData.get("user").asString();
            String pass = userData.get("pass").asString();


            request.setAttribute("id", id);
            request.setAttribute("user", user);
            request.setAttribute("pass", pass);

            filterChain.doFilter(servletRequest, servletResponse);
        }

    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}

```

> JwtUtil

``` java
package com.surance.coin.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.surance.coin.entity.UserEntity;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class JwtUtil {
    private static final Logger logger = LoggerFactory.getLogger(JwtUtil.class);

    private static final String SECRET = "hongjun";

    private static final Long Expiration = 1800L;

    public static String createToken(UserEntity userEntity){

        Map<String, Object> map = new HashMap<>();
        Date expireDate = new Date(System.currentTimeMillis() + Expiration * 1000);
        map.put("alg", "HS256");
        map.put("typ", "JWT");

        String token = JWT.create()
                .withHeader(map)
                .withClaim("id", userEntity.getId())
                .withClaim("user", userEntity.getName())
                .withClaim("pass", userEntity.getPass())
                .withExpiresAt(expireDate)
                .sign(Algorithm.HMAC256(SECRET));

        return token;
    }

    public static Map<String, Claim> verifyToken(String token){
        DecodedJWT jwt = null;

        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET)).build();
            jwt = verifier.verify(token);
        }catch(Exception e){
            logger.error(e.getMessage());
            return null;
        }
        return jwt.getClaims();
    }
}

```

> SecureController

``` java
package com.surance.coin.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController

public class SecureController {
	

    @RequestMapping("/login")
    public HttpResponse  login(@RequestParam String user, @RequestParam String pass){
	UserEntity userEntity = new UserEntity(1, user, pass);
	return JwtUtil.createToken(userEntity);
    }
    @RequestMapping("/secure/getUserInfo")
    public String userInfo(HttpServletRequest request){
        Integer id = (Integer) request.getAttribute("id");
        String user = request.getAttribute("user").toString();
        String pass = request.getAttribute("pass").toString();

        return String.format("id=%d&user=%s&pass=%s", id, user, pass);
    }
}

```

> and 和 or的优先级问题

可以重复添加and条件最简单的解决方式

``` java
findByEcoContainingAndProjectNameContainingOrTokenNameContainingAndEcoContaining
```

> 复杂查询

``` java

Specification<FormEntity> specification = new Specification<FormEntity>() {
            @Override
            public Predicate toPredicate(Root<FormEntity> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return query.where(criteriaBuilder.equal()).getRestriction();
            }
       }
```
