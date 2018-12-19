<template>
	<div class="demo-badge">
		<p >标准用法:</p>
		<div class="demo-badge-container">
			<tg-badge value="12">徽章1</tg-badge>
			<tg-badge :value="12" :max="10">徽章2</tg-badge>
			<tg-badge value="new">徽章3</tg-badge>
			<tg-badge is-dot>徽章4</tg-badge>
		</div>
		<div class="demo-badge-container">
			<tg-badge value="12" type="primary">Primary</tg-badge>
			<tg-badge value="12" type="success">Success</tg-badge>
			<tg-badge value="12" type="warning">Warning</tg-badge>
			<tg-badge value="12" type="danger">Danger</tg-badge>
		</div>
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
.demo-badge {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-badge>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-badge-container {
	background: #fff;
	padding: 15px;
}
.demo-badge-container .tg-badge {
	margin-right: 20px;
}
</style>