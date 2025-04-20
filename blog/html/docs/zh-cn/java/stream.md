# stream

Java Stream API 是一个用于处理集合的编程模型，它允许你以声明式方式处理数据，而不需要使用传统的 for 循环和自定义的函数。Java Stream API 
提供了丰富的操作，如 filter、map、reduce 等，可以用来处理集合中的数据，如过滤、转换、计算等。 

下面是一些 Java Stream API 的操作示例： 
1. 创建 Stream：

``` java
 List<String> list = Arrays.asList("Apple", "Banana", "Cherry", "Date");
 Stream<String> stream = list.stream(); 
```

 2. 过滤（filter）： 

``` java
 List<String> filteredList = stream.filter(s -> s.startsWith("A")).collect(Collectors.toList()); 
``` 

3. 转换（map）： 

``` java
 List<Integer> integerList = stream.map(s -> s.length()).collect(Collectors.toList()); 
``` 

4. 计算（reduce）： 

``` java 
int sum = stream.mapToInt(s -> s.length()).sum();
 ``` 
5. 收集（collect）：

``` java 
List<String> filteredList = stream.filter(s -> s.startsWith("A")).collect(Collectors.toList()); 
``` 

这些操作可以链式调用，例如： 

``` java 
        List<String> filteredAndMappedList = stream
    .filter(s -> s.startsWith("A")) .map(s -> s.length()) .collect(Collectors.toList()); 
```

Java Stream API 还提供了其他操作，如 `distinct()`, `sorted()`, `limit()`, `skip()` 等，可以根据需要进行使用。
