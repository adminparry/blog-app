# reflect-metadata

> install

``` bash
npm i reflect-metadata
```

> example

``` ts
import 'reflect-metadata';

function Controller(){
   return (target:object) =>  Reflect.defineMetadata('somekey', 'any',target); 
}

@Controller
class MyClass {

}


```
