<template>
	<div class="demo-textarea">
		<p >标准用法:</p>
		<tg-textarea v-model="value"></tg-textarea>
		<tg-textarea 
			v-model="value"
			:placeholder="placeholder"
			:readonly="readonly"
			:disabled="disabled"
			:maxlength="maxlength"
			:autosize="autosize"
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
			<tg-cell title="文本标题" customized baseline solid required>
				<tg-textarea 
					v-model="value3"
					placeholder="固定高度"
					validateFail
				></tg-textarea>
			</tg-cell>
			<tg-cell title="文本标题" customized baseline solid required>
				<tg-textarea 
					v-model="value3"
					placeholder="自适应高度"
					autosize
					:indicator="false"
				></tg-textarea>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="下上结构">
			<tg-cell title="文本标题" customized column required>
				<tg-textarea 
					v-model="value3"
					placeholder="固定高度"
				></tg-textarea>
			</tg-cell>
			<tg-cell title="文本标题" customized column required>
				<tg-textarea 
					v-model="value3"
					placeholder="自适应高度"
					autosize
				></tg-textarea>
			</tg-cell>
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
			autosize: false
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