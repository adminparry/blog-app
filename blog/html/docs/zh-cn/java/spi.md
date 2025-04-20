# spi

serivce provider interface 

jdk提供的一种服务发现机制

对同一个接口做出不同的实现

> 实现

``` java
META-INF/services/${interface_name}
```

> ps

HelloSPI

``` java
package com.vivo.study.spidemo.spi;
public interface HelloSPI {
    void sayHello();
}
```

多个实现

``` java
package com.vivo.study.spidemo.spi.impl;
import com.vivo.study.spidemo.spi.HelloSPI;
public class ImageHello implements HelloSPI {
    public void sayHello() {
        System.out.println("Image Hello");
    }
}
package com.vivo.study.spidemo.spi.impl;
import com.vivo.study.spidemo.spi.HelloSPI;
public class TextHello implements HelloSPI {
    public void sayHello() {
        System.out.println("Text Hello");
    }
}
```

> meta-info/services中创建com.vivo.study.spidemo.spi.HelloSPI

``` java
com.vivo.study.spidemo.spi.impl.ImageHello
com.vivo.study.spidemo.spi.impl.TextHello
```

> 验证

``` java
package com.vivo.study.spidemo.test
import java.util.ServiceLoader;
import com.vivo.study.spidemo.spi.HelloSPI;
public class SPIDemo {
    public static void main(String[] args) {
        ServiceLoader<HelloSPI> serviceLoader = ServiceLoader.load(HelloSPI.class);
        // 执行不同厂商的业务实现，具体根据业务需求配置
        for (HelloSPI helloSPI : serviceLoader) {
            helloSPI.sayHello();
        }
    }
}
```

