<template>
	<div class="demo-checkbox">
		<p >标准用法:({{checked}})</p>
		<tg-checkbox 
			v-model="checked"
			@change="handleChange"
		>复选框</tg-checkbox>
		<p>option用法（{{checked2}}）</p>
		<tg-checkbox 
			v-model="checked2"
			position="right"
			@change="handleChange"
			:option="option"
		></tg-checkbox>
		<tg-checkbox 
			v-model="checked2"
			position="right"
			:option="option2"
		></tg-checkbox>
	</div>
</template>
<script>
export default {
	data() {
		return {
			checked: false,
			checked2: 'xxx',
			option: {
				label: "复选框",
				value: "xxx",
				disabled: false
			},
			option2: {
				label: "复选框禁用",
				value: "xxx",
				disabled: true
			}
		}
	},
	methods: {
		handleChange(val){
			console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-checkbox {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-checkbox>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>