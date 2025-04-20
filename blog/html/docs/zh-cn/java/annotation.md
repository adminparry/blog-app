# 自定义注解


> 元数据获取


``` java
package com.org.test;

import java.lang.annotation.*;


@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface AnnotationTest {

    String value() default "";

}



import java.lang.reflect.Field;

public class Apple {
    @AnnotationTest("Apple")
    private String color;

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public static void main(String[] args) {
        Apple a = new Apple();
        Class<? extends Apple> clazz = a.getClass();

        Field[] fields = clazz.getDeclaredFields();
        System.out.printf("%s\n", fields.length);
        for (Field field:fields
             ) {
            if(field.isAnnotationPresent(AnnotationTest.class)){
                AnnotationTest annotationTest = field.getAnnotation(AnnotationTest.class);
                System.out.printf("name is : %s\n",field.getName());
                System.out.printf("value is : %s\n",annotationTest.value());
            }

        }

    }
}
```
