<template>
	<div class="demo-popup">
		<p >标准用法:</p>
		<tg-button type="primary" @click="handleClick('center')">中间弹出</tg-button>
		<p >上下弹出:</p>
		<tg-button type="primary" @click="handleClick('bottom')">底部弹出</tg-button>
		<tg-button type="primary" @click="handleClick('top')">顶部弹出</tg-button>
		<p >左右弹出:</p>
		<tg-button type="primary" @click="handleClick('right')">右侧弹出</tg-button>
		<tg-button type="primary" @click="handleClick('left')">左侧弹出</tg-button>
		<tg-popup :position="position" v-model="visible">
			<tg-cell-group class="scroll">
				<tg-cell v-for="n in 20" :key="n" :value="String(n)"></tg-cell>
			</tg-cell-group>
			<tg-button block @click="visible=false" type="primary" plain>返回</tg-button>	
		</tg-popup>
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
			console.log(val)
		},
		handleFocus(val){
			console.log(val)
		},
		handleBlur(val){
			console.log(val)
		},
		handleChange(val){
			console.log(val)
		},
		handleClick(value){
			this.position = value;
			this.visible = true;
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-popup {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-popup>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-popup>.tg-button {
	margin-bottom: 10px;
}
.demo-popup .van-popup--bottom .scroll, .demo-popup .van-popup--top .scroll,.demo-popup .van-popup--center .scroll{
	height:300px;
	overflow-y: scroll;
	-webkit-overflow-scrolling:touch;
}
.van-popup--center {
	width: 60%;
}
.demo-popup .tg-popup .van-popup--left,.demo-popup .tg-popup .van-popup--right {
	/*width: 100%;*/
}
</style>