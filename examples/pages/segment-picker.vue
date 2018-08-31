<template>
	<div class="demo-segment-picker">
		<p >时间选择器:</p>
		<tg-segment-picker
			title="请假时间"
			required
			type="datetime"
			v-model="value"
			@confirm="handleConfirm"
		>
		</tg-segment-picker>
		<p >日期区间选择器:</p>
		<tg-segment-picker
			v-model="value1"
			title="请假时间"
			type="date"
			@confirm="handleConfirm"
		>
		</tg-segment-picker>
		<p >时间区间选择器:</p>
		<tg-segment-picker
			v-model="value2"
			title="请假时间"
			type="time"
			@confirm="handleConfirm"
		>
		</tg-segment-picker>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '2018-8-30 11:59',
			value1: '2018-8-30 至 2018-9-30',
			value2: '09:00 至 10:00',
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleConfirm(value,value1){
			console.log(value,value1)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-segment-picker {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-segment-picker>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-segment-picker .tg-cell {
	margin-bottom: 10px;
}
</style>