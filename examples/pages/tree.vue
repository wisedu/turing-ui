<template>
	<div class="demo-tree">
		<p >标准用法:</p>
		<tg-tree></tg-tree>
	</div>
</template>
<script>
export default {
	data() {
		return {
			visible: false,
			position: ''
		}
	},
	watch: {
		
	},
	methods: {
		handleCancel(val){
			// console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-tree {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-tree>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>