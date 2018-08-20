<template>
	<div class="demo-radio">
		<p >标准用法:<span>（当前值: {{value}}）</span></p>
		<tg-radio
			v-model="value"
			:options="data"
			icon-position="left"
			hasInputOption
			inputOptionPlaceholder="输入其他答案">
		</tg-radio>
		<p >label内容自定义:<span>（当前值: {{value}}）</span></p>
		<tg-radio
			v-model="value"
			:options="data"
			:optionRender="optionRender">
		</tg-radio>
		<p >icon居右用法:<span>（当前值: {{value}}）</span></p>
		<tg-radio
			v-model="value"
			:options="data"
			icon-position="right">
		</tg-radio>
		<p >横向布局用法:<span>（当前值: {{value1}}）</span></p>
		<tg-radio
			v-model="value1"
			:options="data1"
			horizontal
			@change="handleChange">
		</tg-radio>
		<p >button方式:<span>（当前值: {{value2}}）</span></p>
		<tg-cell
			name="tg-radio"
			title="性别"
			required
			solid
			align="right"
			customized>
				<tg-radio
					v-model="value2"
					:options="data2"
					type="button"
					horizontal>
				</tg-radio>
		</tg-cell>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: 'c',
			data: [
				{text: '选项1',value:'a'}, 
				{text: '选项2',value:'b'}, 
				{text: '选项3',value: 'c',disabled: true}
			],
			value1: '',
			data1: [
				{text: '选项1'}, 
				{text: '选项2'}, 
				{text: '选项3'}
			],
			value2: '',
			data2: [
				{text: '男'}, 
				{text: '女'}
			]
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleChange(val,index){
			console.log(val,index)
		},
		optionRender(item) {
			return `<div>${item.text}</div><div>${item.text}的自定义描述</div>`
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-radio {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-radio>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-radio>p>span{
	color: #EE3F15
}
</style>