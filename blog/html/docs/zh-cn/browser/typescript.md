# typescript


> download

``` bash

npm install -g typescript

tsc -v

```
> aot 前置检查

与之对应的jit

> .d.ts

类型声明文件

> 接口

``` typescript
interface Struct {
	name: string;
	age: number;
}
```
> 联合类型 交叉类型

``` typescript
#联合类型 可以是string 也可以是number
const val = string | number;
#交叉类型 必须都要包含
interface A {
	name: string;
	age: number;
}
interface B {
	gender: string;
	say: () => void;
}
const val1 = {
	name: 'waa',
	age: 28,
	gender: 'older',
	say(){
		console.log('what a day!')
	}
}
```
> 模块

``` ts
declare module 'electron' {
  export = Electron;
}
```
> 命名空间

``` ts
declare namespace Test {
    class EventEmitter {
        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;

        once(event: string, listener: Function):  this;
        removeListener(event: string, listener: Function):  this;
        removeAllListener(event?: string):  this;
        setMaxListeners(num:  number): this;
        getMaxListeners(): number;
        
    }
}
```

> 类型收窄

``` ts
typeof

in

is

instanceof


```
> 泛型

``` typescript

function ids<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

ids<string, number>('hello', 222)

```

> 内置类型

``` ts
// 只读属性
type Readonly<T> = {
	readonly [P in keyof T]: T[P]
}
// 过滤属性
type Pick<T, K extends keyof T> = {
	[P in K]: T[P]
}
// interface Person {
	// name: string
	// age: number
// }
// type ac = Pick<Person, 'name' | 'age'>;

// 对象的属性与值
type Record<K extends keyof any, T> = {
	[P in K]: T
}

// type info = Record<'name'|'age', string>

type Exclude<T, U> = T extends U ? never: T;

type Partial<T> = {
	[P in keyof T]?: T[p]
}

type Require<T> = {
	[P in keyof T]-?: T[p]
}
// 交集
type Extract<T, U> = T extends U ? T : never;

type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

```


> 修饰器

``` ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;

declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;

declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;


```
> 生成tsconfig.json

``` bash
tsc --init

```

> 生成d.ts

``` json

{
    "files": ["index.ts"],
    "compilerOptions": {
      "target": "es2015",
      "module": "es2015",
      "declaration": true,

	}	
}
```

> decorator

``` ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => void;

```

