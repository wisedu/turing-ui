<template>
	<div class="demo-steps">
		<p >标准用法:</p>
		<tg-steps :active="active" :options="options"></tg-steps>
		<tg-steps :active="active" :options="options" is-card></tg-steps>
		<p >step自定义用法:</p>
		<tg-steps 
			:active="active"
			:options="options"
			customized>
			<div slot-scope="{ option }">
				<div class="tg-step-title">{{option.title}}</div>
				<div class="tg-step-desc">{{option.desc}}</div>
				<div class="tg-step-default-time" v-if='option.time'>{{option.time}}</div>
			</div>
		</tg-steps>
		<tg-button @click="handleChange">下一步</tg-button>
		<tg-steps 
			:active="active"
			:options="options1"
			customized
			is-card>
			<div slot-scope="{ option }">
				<div class="tg-step-title">{{option.title}}</div>
				<div class="tg-step-desc">
					<div>{{option.desc1}}</div>
					<div>{{option.desc2}}</div>
					<div>{{option.desc3}}</div>
				</div>
				<div class="tg-step-status">{{option.action}}</div>
			</div>
		</tg-steps>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: true,
			active: 1,
			options: [
				{title: '一级审批已通过', desc: '已通过你的报销审批',time:'00:45 18.01.02',status:'error'},
				{title: '二级审批已通过', desc: '已通过你的报销审批',time:'00:45 18.01.03'},
				{title: '已提交申请', desc: '等待上级的审核',time:'20:45 12.30'},
				{title: '公示', desc: '等待流程办结',time:''}
			],
			options1: [
				{title: '拟稿人起草', desc1: `经办人：XXX`,desc2:'办理意见：这里是一行文本补充信息，只占位，无实际意义，最长就只显示两行文本',desc3:'耗时：1分24秒',action:'已退回',time:'2018.10.27 12:47'},
				{title: '拟稿人起草', desc1: `经办人：XXX`,desc2:'办理意见：这里是一行文本补充信息，只占位，无实际意义，最长就只显示两行文本',desc3:'耗时：1分24秒',action:'已提交',time:'2018.10.27 12:47'},
				{title: '拟稿人起草', desc1: `经办人：XXX`,desc2:'办理意见：这里是一行文本补充信息，只占位，无实际意义，最长就只显示两行文本',desc3:'耗时：1分24秒',action:'已通过',time:'2018.10.27 12:47'},
				{title: '拟稿人起草', desc1: `经办人：XXX`,desc2:'办理意见：这里是一行文本补充信息，只占位，无实际意义，最长就只显示两行文本',desc3:'耗时：1分24秒',action:'待办理',time:'2018.10.27 12:47'}
			]
		}
	},
	watch: {
		value(newValue){
			// console.log(newValue)
		}
	},
	methods: {
		handleChange(val){
			if(this.active === 3){
				this.active = 0
			}else{
				this.active++
			}
		}
	},
	mounted() {
		
	}
}
</script>
<style>
.demo-steps {
	overflow: hidden;
    background: #EDF2FB;
}
.demo-steps>p {
	padding-left: 17px;
	font-size: 12px;
	color: #C4C9D9;
	padding: 5px 17px;
}
</style>