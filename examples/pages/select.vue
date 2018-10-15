<template>
	<div class="demo-select">
		<p >平铺单选器:</p>
		<tg-select
			title="单选"
			required
			v-model="value_1"
			:options="options_1"
			@confirm="handleConfirm"
			@cancel="handleCancel"
		>
		</tg-select>
		<p >平铺多选器:</p>
		<tg-select
			title="多选"
			required
			type="multi"
			title-bar="投诉理由"
			v-model="value"
			:options="options"
			@confirm="handleConfirm"
			@cancel="handleCancel"
		>
		</tg-select>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: ['aaa','bbb','mmm'],
			options: [
				{value: 'aaa', label: '未按时到到维修地点',desc:"描述文字字段可根据具体场景更改",disabled:false},
				{value: 'bbb', label: '维修师傅态度恶劣',desc:"描述文字字段可根据具体场景更改",disabled:false},
				{value: 'ccc', label: '多收费',desc:"描述文字字段可根据具体场景更改",disabled:true},
				{value: 'ddd', label: '未维修成功',desc:"描述文字字段可根据具体场景更改",disabled:false},
				{value: 'eee', label: '选项五',desc:"描述文字字段可根据具体场景更改",disabled:false},
				{value: 'fff', label: '选项六',desc:"描述文字字段可根据具体场景更改",disabled:false},
				{value: 'ggg', label: '选项七',desc:"描述文字字段可根据具体场景更改",disabled:false},
			],
			value_1: 'mmm',
			options_1: [{value:"aaa",text:"选项1"},{value:"bbb",text:"选项2"},{value:"ccc",text:"选项3"},{value:"ddd",text:"选项4"},{value:"eee",text:"选项5"},{value:"fff",text:"选项6"}]
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleConfirm(value){
			console.log(value)
		},
		handleCancel(value){
			console.log(value)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-select {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-select>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-select .tg-cell {
	margin-bottom: 10px;
}
</style>