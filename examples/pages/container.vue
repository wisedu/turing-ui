<template>
	<div class="demo-container">
		<p >标准用法:</p>
		<tg-container @click="handleClick">普通容器</tg-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// TODO
		}
	},
	methods: {
		handleClick(val){
			console.log(val)
		}
	}
}
</script>
<style>
.demo-container {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-container>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>