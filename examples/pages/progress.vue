<template>
	<div class="demo-progress">
		<p >标准用法:</p>
		<tg-progress 
			v-model="value"
			:text="text"
		></tg-progress>
		<tg-progress 
			v-model="value"
			type="circle"
			:text="text"
		></tg-progress>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: 45,
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	computed: {
		text() {
			return this.value.toFixed(0) + '%'
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
.demo-progress {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-progress>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>