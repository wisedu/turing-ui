<template>
	<div class="demo-textarea">
		<p >标准用法:</p>
		<tg-textarea 
			v-model="value"
			:placeholder="placeholder"
			:readonly="readonly"
			:disabled="disabled"
			:maxlength="maxlength"
			:autosize="autosize"
			:validateFail="validateFail"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
		></tg-textarea>
		<p >输入自适应:</p>
		<tg-textarea 
			v-model="value"
			:placeholder="placeholder"
			autosize
		></tg-textarea>
		<p >只读:</p>
		<tg-textarea 
			v-model="readonlyValue"
			:placeholder="placeholder"
			readonly
		></tg-textarea>
		<p >禁用:</p>
		<tg-textarea 
			v-model="disabledValue"
			:placeholder="placeholder"
			disabled
		></tg-textarea>
		<p >必填:</p>
		<tg-textarea 
			v-model="requiredValue"
			:placeholder="placeholder"
			required
		></tg-textarea>
		<p >字数统计:</p>
		<tg-textarea 
			v-model="value1"
			:placeholder="placeholder"
			:maxlength="200"
		></tg-textarea>
		<tg-textarea 
			v-model="value2"
			:placeholder="placeholder"
			:indicator="false"
		></tg-textarea>
		<tg-cell-group title="左右结构">
			<tg-textarea 
				v-model="value3"
				title="横向文本标题"
				isView
			></tg-textarea>
			<tg-textarea 
				v-model="value3"
				title="横向文本标题"
				placeholder="自适应高度"
				isView
				autosize
				required
				validateFail
				:indicator="false"
			></tg-textarea>
		</tg-cell-group>
		<tg-cell-group title="下上结构">
			<tg-textarea 
				v-model="value3"
				title="纵向文本标题"
				isView
				direction='vertical'
			></tg-textarea>
			<tg-textarea 
				v-model="value3"
				title="纵向文本标题"
				placeholder="自适应高度"
				isView
				direction='vertical'
				autosize
				required
				validateFail
			></tg-textarea>
		</tg-cell-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			value1: '输入字数限制200，一个中文算一个字符，始终显示字数统计',
			value2: '输入字数限制200，一个中文算一个字符,输入达到90%时显示字数统计,三大圣地三大圣地撒旦撒旦撒啊旦撒的撒旦撒旦撒旦撒旦撒旦撒酒店房间啊开发阶段空间撒旦撒旦撒 啊萨大啊萨大声的负担',
			value3: '',
			placeholder: '请输入...',
			readonly: false,
			maxlength: 100,
			disabled: false,
			autofocus: false,
			autosize: false,
			validateFail: false,
			readonlyValue: '只读文本',
			disabledValue: '禁用文本',
			requiredValue: '必填文本'
		}
	},
	methods: {
		handleFocus(val,e){
			// console.log(val,e)
		},
		handleBlur(val,e){
			// console.log(val,e)
		},
		handleChange(val,e){
			// console.log(val,e)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-textarea {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-textarea>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>