<template>
	<div class="demo-multi-picker">
		<p >平铺多选器:</p>
		<tg-multi-picker
			title="多选"
			required
			title-bar="投诉理由"
			v-model="value"
			:options="options"
			@confirm="handleConfirm"
			@cancel="handleCancel"
		>
		</tg-multi-picker>
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
			]
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
.demo-multi-picker {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-multi-picker>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-multi-picker .tg-cell {
	margin-bottom: 10px;
}
</style>