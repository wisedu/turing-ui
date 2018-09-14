<template>
	<div class="demo-index-list">
		<p >标准用法:</p>
		<tg-index-list
			:options="data">
		</tg-index-list>
	</div>
</template>
<script>
import citys from '../../static/mock/index-list.js'
export default {
	data() {
		return {
			data: citys.data,
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
.demo-index-list {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-index-list>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>