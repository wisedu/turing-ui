<template>
	<div class="demo-search">
		<p >标准用法:</p>
		<tg-search 
			v-model="value"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
		></tg-search>
		<p >显示内置【取消】按钮:</p>
		<tg-search 
			v-model="value1"
			show-action
			@cancel="handleCancel"
		>
		</tg-search>
		<p >自定义【取消】按钮:</p>
		<tg-search 
			v-model="value2"
			show-action
		>
			<div slot="actionBtn" style="padding: 0 17px;color: #3B7BFF;" @click="handleClick">取消</div>
		</tg-search>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			value1: '',
			value2: ''
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleCancel(val){
			console.log(val)
		},
		handleFocus(val){
			console.log(val)
		},
		handleBlur(val){
			console.log(val)
		},
		handleChange(val){
			console.log(val)
		},
		handleClick(val){
			console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-search {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-search>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-search>.tg-search {
	background: #fff;
	border-bottom: 1px solid #EDF2FB;
}
</style>