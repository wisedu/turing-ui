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
	  <p>picker选择器级联多选(数据格式1)</p>
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
		<p>picker选择器级联多选（数据格式2）</p>
		<tg-picker
			v-model="cascadeValue1"
			title="级联多选-地区"
			:cols="2"
			format-switch
			:options="cascadeOptions1"
			@confirm="handleConfirm"
			is-cascade
		></tg-picker>

		<p>原子组件方式</p>
		<tg-picker
			:selector="false"
			:options="singleOptions"
			:default-value="defaultIndex"
			:toolbar="false"
			@confirm="handleConfirm"
			@cancel="handleCancel"
			@change="handleChange"
		></tg-picker>
		<tg-picker
			:selector="false"
			:cols="2"
			:default-value="defaultIndexs"
			:options="multiOptions"
			@confirm="handleConfirm"
			@cancel="handleCancel"
			@change="handleChange"
		></tg-picker>
		<tg-picker
			:selector="false"
			:cols="3"
			:options="cascadeOptions"
			:default-value="defaultIndexCascade"
			is-cascade
			@confirm="handleConfirm"
			@cancel="handleCancel"
			@change="handleChange"
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
			singleValue: ['005'],
			singleOptions: [column1],
			defaultValue: '卡尔',

			// 独立多选 源数据
			multiValue: ['005','103'],
			multiOptions: [column1,column2],
			defaultValue1: '卡尔,爆发,萨满',

			//级联多选-地区
			cascadeValue: ["330000","331100","331122"],
			cascadeOptions: district,
			defaultValue2: '浙江省,丽水市,缙云县',

			//级联多选-数据格式2
			cascadeValue1: ["$2.0","$2.3"],
			cascadeOptions1: [{
				"text": "基本信息维护",
				"id": "1",
				"parentid": "-1",
				"value": "$2.0"
			},
			{
				"id": "2",
				"parentid": "1",
				"text": "新增",
				"value": "$2.1"
			}, {
				"id": "3",
				"parentid": "1",
				"text": "删除",
				"value": "$2.2"
			}, {
				"id": "4",
				"parentid": "1",
				"text": "编辑",
				"value": "$2.3"
			}, {
				"id": "5",
				"parentid": "1",
				"text": "上传附件",
				"value": "$2.4"
			},  {
				"id": "11",
				"text": "信息历史查询",
				"parentid": "-1",
				"value": "$2.5"
			}, {
				"id": "7",
				"parentid": "11",
				"text": "导出",
				"value": "$2.6"
			}, {
				"id": "8",
				"text": "附件",
				"parentid": "11",
				"value": "$2.7"
			},{
				"id": "9",
				"text": "xxx",
				"parentid": "8",
				"value": "$2.8"
			}],
			// 非selector模式下的picker单列
			defaultIndex: [3],
			defaultIndexs: [1,2],
			defaultIndexCascade: [3,0,2]
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
		},
		handleChange(columnIndex, itemIndex, value){
			console.log(columnIndex, itemIndex, value)
		},
		handleCancel(){
			console.log('取消')
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