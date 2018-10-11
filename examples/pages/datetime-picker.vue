<template>
	<div class="demo-segment-picker">
		<p >时间选择器(yyyy-MM-dd hh:mm):</p>
		<tg-datetime-picker
			title="请假时间"
			v-model="value"
			placeholder="我是占位符"
			type="datetime"
			segment-picker
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
		<p >日期区间选择器(yyyy-MM-dd至yyyy-MM-dd):</p>
		<tg-datetime-picker
			v-model="value1"
			title="请假时间"
			type="date"
			segment-picker
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
		<p >时间区间选择器(hh:mm至hh:mm):</p>
		<tg-datetime-picker
			v-model="value2"
			title="请假时间"
			type="time"
			segment-picker
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
		<p >日期选择器(yyyy-MM-dd):</p>
		<tg-datetime-picker
			v-model="value3"
			title="日期"
			type="date"
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
		<p >日期选择器(yyyy-MM):</p>
		<tg-datetime-picker
			v-model="value4"
			title="时间(年/月)"
			type="dateym"
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
		<p >时间选择器(hh:mm):</p>
		<tg-datetime-picker
			v-model="value5"
			title="时间"
			type="time"
			@confirm="handleConfirm"
		>
		</tg-datetime-picker>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			value1: '2018-08-03 至 2018-09-30',
			value2: '09:00 至 10:00',
			value3: '2018-12-01',
			value4: '2018-12',
			value5: '12:11'
		}
	},
	watch: {
		value(newValue){
			console.log(newValue)
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