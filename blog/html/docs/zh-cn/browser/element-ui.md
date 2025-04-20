# element-ui







> 表单校验

required可以添加样式的必填*

prop去绑定要校验的属性
``` vue
<el-form :model="form">

<el-form-item
		v-for="(item, index) in form.list" :key="index"
              :prop="`list[${index}].type`"
              :rules="[{ required: true, message: '不能为空', trigger: ['blur', 'change'] }]"
            >
</el-form>
<script>
export default {
	data(){
	return  {
		form:{
			list:[]
		}
	}
	}
}
</script>

```
