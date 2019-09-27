<template>
	<div class="demo-action-sheet">
		<p >标准用法:</p>
		<tg-button  size="large" type="primary" @click="handleClick">ActionSheet</tg-button>
		<tg-action-sheet
			v-model="value"
			:data="data"
			@select="handleSelect"
			@cancel="handleCancel"
		></tg-action-sheet>
		<p >点击蒙层是否隐藏(maskClosable):</p>
		<tg-button  size="large" type="primary" @click="handleClick(1)">点击蒙层不隐藏</tg-button>
		<tg-action-sheet
			v-model="value1"
			:data="data"
			:maskClosable="false"
			@select="handleSelect"
			@cancel="handleCancel"
		></tg-action-sheet>
		<p >设置高亮选项(active):</p>
		<tg-button  size="large" type="primary" @click="handleClick(2)">设置第一项高亮</tg-button>
		<tg-action-sheet
			v-model="value2"
			:data="data"
			:active="0"
			@select="handleSelect"
			@cancel="handleCancel"
		></tg-action-sheet>
		<p >设置数据项参数(content,align,class):</p>
		<tg-button  size="large" type="primary" @click="handleClick(3)">自定义选项对齐方式与class</tg-button>
		<tg-action-sheet
			v-model="value3"
			:data="data1"
			@select="handleSelect"
			@cancel="handleCancel"
			@mask-click="maskClick"
		></tg-action-sheet>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: false,
			value1: false,
			value2: false,
			value3: false,
			active: 1,
			data: [
				{
					content: '选项一',
					disabled: false
				},
				{
					content: '选项二',
					disabled: true
				},
				{
					content: '选项三',
					disabled: false
				}
			],
			data1: [
				{
					content: '选项一',
					align: 'left',
					class: 'demo-class1'
				},
				{
					content: '选项二',
					align: 'center',
					class: 'demo-class2'
				},
				{
					content: '选项三',
					align: 'right',
					class: 'demo-class3'
				}
			],
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleClick(idx){
			switch(idx){
				case 1 : this.value1 = true;break;
				case 2 : this.value2 = true;break;
				case 3 : this.value3 = true;break;
				default: this.value = true;
			}
		},
		handleCancel(){
			console.log('cancel')
		},
		handleSelect(item, index){
			console.log('select', item, index)
		},
		maskClick(){
			console.log('maskClick')
		},
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-action-sheet {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-action-sheet>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-class1 {
	color: blue!important;
}
.demo-class2 {
	color: red!important;
}
.demo-class3 {
	color: green!important;
}
</style>