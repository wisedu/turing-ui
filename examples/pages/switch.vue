<template>
	<div class="demo-switch">
		<p >标准用法:</p>
		<tg-switch 
			v-model="value"
			@change="handleChange"
		></tg-switch>
		<tg-cell-group>
			<tg-cell title="是否选项-关"  align="right" customized>
				<tg-switch 
					v-model="value1"
					@change="handleChange"
				></tg-switch>
			</tg-cell>
			<tg-cell title="是否选项-开"  align="right" customized>
				<tg-switch 
					v-model="value2"
					@change="handleChange"
				></tg-switch>
			</tg-cell>
			<tg-cell title="是否选项-disabled"  align="right" customized>
				<tg-switch 
					v-model="value2"
					disabled
					@change="handleChange"
				></tg-switch>
			</tg-cell>
		</tg-cell-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: true,
			value1: false,
			value2: true,
			readonly: false
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
.demo-switch {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-switch>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-switch>.tg-switch {
	padding-left: 17px;
}
</style>