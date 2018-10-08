<template>
	<div class="demo-progress">
		<p >标准用法(line):</p>
		<tg-progress 
			v-model="value"
			:text="text"
		></tg-progress>
		<tg-button @click="start">开始</tg-button>	
		<p >标准用法(circle):</p>
		<tg-progress 
			v-model="value"
			type="circle"
			:text="text"
		></tg-progress>
		<p>line进度条不显示进度文本</p>
		<tg-progress 
			v-model="value"
			:text="text"
			:showText="false"
		></tg-progress>
		<p>line进度条置灰</p>
		<tg-progress 
			v-model="value"
			:text="text"
			inactive
		></tg-progress>
		<p>line进度条自定义颜色</p>
		<tg-progress v-model="value" :text="text" color="#EE3F15"></tg-progress>
		<tg-progress v-model="value" :text="text" color="#FF9900"></tg-progress>
		<tg-progress v-model="value" :text="text" color="#17BF6A"></tg-progress>
		<p>circle进度条直径</p>
		<tg-progress v-model="value" :text="text" type="circle" size="100px"></tg-progress>
		<p>circle进度条置灰</p>
		<tg-progress v-model="value" :text="text" type="circle" inactive></tg-progress>
		<p>circle进度条自定义颜色</p>
		<tg-progress v-model="value" :text="text" type="circle" color="#EE3F15"></tg-progress>
		<tg-progress v-model="value" :text="text" type="circle" color="#FF9900"></tg-progress>
		<tg-progress v-model="value" :text="text" type="circle" color="#17BF6A"></tg-progress>
		<p>circle进度条宽度</p>
		<tg-progress v-model="value" :text="text" type="circle" size="120px" :stroke-width="60"></tg-progress>
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
		},
		start(){
			var self = this;
			if(self.value ===100) self.value = 0; 
			var time = setInterval(function(){
				self.value++;
				if(self.value ===100){
					clearInterval(time)
				}
			},100)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-progress {
    background: white;
    height: calc(100vh - 44px);
}
.demo-progress>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>