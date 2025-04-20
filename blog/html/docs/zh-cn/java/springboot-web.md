# springboot-web

> dependency

``` pom
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
 </dependency>   
```

> SimpleController

``` java
package ...

import ...

@RestController
public class SimpleController {
	
	@GetMapping("/")
	public String index(){
		return "Controller creator";
	}
}
```
