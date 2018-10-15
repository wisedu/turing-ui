<template>
	<div class="demo-picker">
	  <p>picker选择器单选</p>
		<tg-picker
			v-model="singleValue"
			title="单选"
			:options="singleOptions"
			:default-value="defaultValue"
			@confirm="handleConfirm"
			@onClick="handleClick('single')"
		></tg-picker>
	  <p>picker选择器多选</p>
		<tg-picker
			v-model="multiValue"
			title="独立多选"
			:cols="2"
			:options="multiOptions"
			:default-value="defaultValue1"
			@confirm="handleConfirm"
			@onClick="handleClick('multi')"
		></tg-picker>
	  <p>picker选择器级联多选</p>
		<tg-picker
			v-model="cascadeValue"
			title="级联多选-地区"
			:cols="3"
			:options="cascadeOptions"
			:default-value="defaultValue2"
			is-cascade
			required
			@confirm="handleConfirm"
			@onClick="handleClick('cascade')"
		></tg-picker>
	</div>
</template>
<script>
import { column1, column2, column3 } from '../../static/mock/picker.js'
import district from '../../static/mock/district.js'
export default {
	data() {
		return {
			// 独立多选 源数据
			singleValue: [],
			singleOptions: [column1],
			defaultValue: '',

			// 独立多选 源数据
			multiValue: ['卡尔','爆发'],
			multiOptions: [column1,column2],
			defaultValue1: '卡尔,爆发',

			//级联多选-地区
			cascadeValue: ["330000","331100","331122"],
			cascadeOptions: district,
			defaultValue2: '浙江省,丽水市,缙云县',
		}
	},
	methods: {
		handleConfirm(display,values) {
			console.log(display,values)
		},
		handleClick(key){
			if(key === 'single'){
				this.singleOptions = [column1];
			}else if(key === 'multi'){
				this.multiOptions = [column1,column2];
			}else if(key === 'cascade'){
				this.cascadeOptions = district;
			}
		}

	},
	watch: {
		singleValue(val){
			console.log(val)
		},
		multiValue(val){
			console.log(val)
		}
	}
}
</script>
<style>
	.demo-picker{
		background: #EDF2FB;
		overflow: hidden;
	}
	.demo-picker>p {
		padding-left: 17px;
		font-size: 12px;
		color: #C4C9D9;
		padding: 5px 17px;
	}
	.demo-picker .tg-cell {
		margin-bottom: 10px;
	}
</style>