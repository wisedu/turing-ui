<template>
	<div class="demo-button">
		<p >标准用法:</p>
		<div class="group">
			<tg-button @click="handleClick">默认按钮</tg-button>
			<tg-button disabled @click="handleClick">按钮disabled</tg-button>
		</div>
		<div class="group">
			<tg-button type="primary">默认按钮</tg-button>
			<tg-button type="primary" disabled>按钮disabled</tg-button>
		</div>
		<p >小按钮（size='small'）:</p>
		<div class="group">
			<tg-button size="small">小型按钮</tg-button>
			<tg-button size="small" type="primary">小型按钮</tg-button>
		</div>
		<p >背景类（size='large'）:</p>
		<tg-button size="large">通栏按钮</tg-button>
		<tg-button size="large" type="primary">通栏按钮</tg-button>
		<p >边框类（plain）:</p>
		<div class="group">
			<tg-button plain>默认按钮</tg-button>
			<tg-button plain disabled>按钮disabled</tg-button>
		</div>
		<div class="group">
			<tg-button type="primary" plain>默认按钮</tg-button>
			<tg-button type="primary" plain disabled>按钮disabled</tg-button>
		</div>
		<p >button原生类型（nativeType）:</p>
		<div class="group">
			<tg-button native-type="button" type="primary">button类型</tg-button>
			<tg-button native-type="submit" type="primary">submit类型</tg-button>
			<tg-button native-type="reset" type="primary">reset类型</tg-button>
		</div>
		<p >button样式类为块元素（block）:</p>
		<div class="group">
			<tg-button block>标准按钮</tg-button>
		</div>
		<div class="group">
			<tg-button size="small" block>小按钮</tg-button>
		</div>
		<p >button无圆角（square）:</p>
		<div class="group">
			<tg-button square>无圆角按钮</tg-button>
			<tg-button square type="primary">无圆角按钮</tg-button>
		</div>
		<p >自定义标签（tag）:</p>
		<div class="group">
			<tg-button tag="div" size="large">div标签</tg-button>
			<tg-button tag="a" href="https://res.wisedu.com" target="_blank" size="large">a标签</tg-button>
		</div>
		<p >自定义内容（slot）:</p>
		<div class="group">
			<tg-button tag="div" size="large">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#plus"></use>
				</svg>
				<span>按钮</span>
			</tg-button>
		</div>
		<p >按钮组:</p>
		<tg-button-group>
			<tg-button size="large">按钮1</tg-button>
			<tg-button size="large" type="primary">按钮2</tg-button>
		</tg-button-group>
		<tg-button-group>
			<tg-button size="large">按钮1</tg-button>
			<tg-button size="large">按钮2</tg-button>
			<tg-button size="large" type="primary">按钮3</tg-button>
		</tg-button-group>
		<tg-button-group>
			<tg-input v-model="value"placeholder="请输入"/>
			<tg-button size="large" type="primary">按钮3</tg-button>
		</tg-button-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: ''
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleClick(val){
			console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-button {
	overflow: hidden;
	background: #EDF2FB;
}
.demo-button>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
.demo-button .group {
	margin: 4px 10px;
}
.demo-button .tg-button-group {
	margin: 10px 0
}
.demo-button .tg-button-group .tg-input{
	flex: 2;
}
.demo-button .tg-button-group input{
	padding: 15px 10px;
}
.icon {
	width: 21px;
	height: 21px;
	vertical-align: sub;
}
</style>