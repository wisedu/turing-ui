<template>
	<div class="demo-toast">
		<p >标准用法:</p>
		<tg-button  size="large" type="primary" @click="handleClick">文字提示</tg-button>
	</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		handleClick(idx){
			this.$toast.success("提示文案")
			console.log(this)
		},
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-toast {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-toast>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>