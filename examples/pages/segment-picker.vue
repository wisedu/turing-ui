<template>
	<div class="demo-segment-picker">
		<p >时间选择器:</p>
		<tg-button  size="large" type="primary" @click="handleClick('datetime')">时间选择器</tg-button>
		<tg-segment-picker
			v-model="value"
			type="datetime"
		>
		</tg-segment-picker>
		<p >日期区间选择器:</p>
		<tg-button  size="large" type="primary" @click="handleClick('date')">日期区间选择器</tg-button>
		<tg-segment-picker
			v-model="value1"
			type="date"
		>
		</tg-segment-picker>
		<p >时间区间选择器:</p>
		<tg-button  size="large" type="primary" @click="handleClick('time')">时间区间选择器</tg-button>
		<tg-segment-picker
			v-model="value2"
			type="time"
		>
		</tg-segment-picker>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: false,
			value1: false,
			value2: false,
			data: []
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleClick(val){
			switch(val){
				case 'datetime': this.value = true;break;
				case 'date': this.value1 = true;break;
				case 'time': this.value2 = true;break;
			}
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
</style>