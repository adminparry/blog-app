# Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）



> example

``` js
let target = {};
let p = new Proxy(target,{});

p.a = 37;

console.log(target.a);//37
```



> vue 属性透传

``` js
const emit = defineEmits(['update:modelVallue']);
const props = defineProps({
	modelValue: {
		type: Object,
		required: true,
	}
});
const model = computed({
	get(){
		return new Proxy(props.modelValue,{
			set(obj, name, val){
			emit('update:modelValue', { ...obj, [name]: val});
			return true;
			}
		})
	},
	set(val){
		emit('update:modelValue', val);
	}
})
```
