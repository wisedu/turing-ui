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
		>
		</tg-multi-picker>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: ['bbb'],
			options: [
				{value: 'aaa', label: '未按时到到维修地点'},
				{value: 'bbb', label: '维修师傅态度恶劣'},
				{value: 'ccc', label: '多收费'},
				{value: 'ddd', label: '未维修成功'},
				{value: 'eee', label: '选项五'},
				{value: 'fff', label: '选项六'},
				{value: 'ggg', label: '选项七'},
				{value: 'hhh', label: '选项八'}
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