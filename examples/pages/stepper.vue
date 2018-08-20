<template>
	<div class="demo-stepper">
		<p >标准用法:</p>
		<tg-stepper 
			v-model="value"
			@change="handleChange"
		></tg-stepper>
		<tg-cell-group title="基本用法：">
			<tg-cell title="最小值(min=1)" solid customized>
				<tg-stepper 
					v-model="value1"
					min="1"
					@change="handleChange">
				</tg-stepper>
			</tg-cell>
			<tg-cell title="最大值(max=10)" solid customized>
				<tg-stepper 
					v-model="value2"
					max="10"
					@change="handleChange">
				</tg-stepper>
			</tg-cell>
			<tg-cell title="不允许输入" solid customized align="right">
				<tg-stepper 
					v-model="value"
					read-only>
				</tg-stepper>
			</tg-cell>
			<tg-cell title="步进(step=10)" solid customized align="right">
				<tg-stepper 
					v-model="value"
					step="10">
				</tg-stepper>
			</tg-cell>
			<tg-cell title="只允许输入整数" solid customized align="right">
				<tg-stepper 
					v-model="value3"
					is-integer>
				</tg-stepper>
			</tg-cell>
			<tg-cell title="默认值(5)" solid customized align="right">
				<tg-stepper 
					v-model="value4"
					default-value="5">
				</tg-stepper>
			</tg-cell>
			<tg-cell title="禁用" solid customized align="right">
				<tg-stepper 
					v-model="value"
					disabled>
				</tg-stepper>
			</tg-cell>
		</tg-cell-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			value1: '1',
			value2: '10',
			value3: '99',
			value4: ''
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleChange(val){
			console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-stepper {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-stepper>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-stepper>.tg-stepper {
	background: #fff;
	padding: 10px 0;
}
</style>