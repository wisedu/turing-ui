<template>
	<div class="demo-input">
		<tg-input 
			v-model="value"
			:placeholder="placeholder"
			:type="type"
			:maxlength="maxlength"
			:readonly="readonly"
			:disabled="disabled"
			:autofocus="autofocus"
			:clearable="clearable"
			:eye="eye"
			@blur="handleBlur"
		></tg-input>
		<p style="padding:8px">value: {{value}}</p>
		<tg-cell-group title="原生type类型">
			<tg-cell title="text类型" customized solid >
				<tg-input 
					v-model="value"
					placeholder="请输入"
					type="textarea">
				</tg-input>
			</tg-cell>
			<tg-cell title="number类型" customized solid >
				<tg-input 
					v-model="value"
					placeholder="请输入"
					type="number">
				</tg-input>
			</tg-cell>
			<tg-cell title="password类型" customized solid >
				<tg-input 
					v-model="value"
					placeholder="请输入"
					type="password">
				</tg-input>
			</tg-cell>
			<tg-cell title="date类型" customized solid >
				<tg-input 
					v-model="value"
					placeholder="请输入"
					type="date">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="表单标准模式">
			<tg-cell title="姓名" customized solid required>
				<tg-input 
					v-model="value0"
					placeholder="请输入"
					type="text">
				</tg-input>
			</tg-cell>
			<tg-cell title="手机号" customized solid required>
				<tg-input 
					v-model="value1"
					placeholder="请输入"
					type="text">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="只读">
			<tg-cell title="姓名" customized readonly>
				<tg-input 
					v-model="value"
					readonly
					placeholder="请输入"
					type="text">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="禁用">
			<tg-cell title="姓名" customized disabled>
				<tg-input 
					v-model="value"
					disabled
					placeholder="请输入"
					type="text">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="无title模式及校验">
			<tg-cell customized>
				<tg-input 
					v-model="value2"
					placeholder="真实姓名"
					validateFail
					type="text">
				</tg-input>
			</tg-cell>
			<tg-cell customized>
				<tg-input 
					v-model="value3"
					placeholder="真实名字"
					column
					autofocus
					:validateInfo="validateInfo"
					:type="type"
					@blur="handleBlur">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="右侧带后缀">
			<tg-cell title="年收入" solid customized>
				<tg-input 
					v-model="value4"
					placeholder="请输入年收入"
					type="text">
				</tg-input>
				<div slot="right" class="tg-cell-suffix"><span>元</span></div>
			</tg-cell>
			<tg-cell title="邮箱" solid customized>
				<tg-input 
					v-model="value4"
					placeholder="请输入邮箱"
					type="text">
				</tg-input>
				<div slot="right" class="tg-cell-suffix"><span>.com</span></div>
			</tg-cell>
		</tg-cell-group>
	</div>
</template>
<script>
export default {
	data() {
		return {
			value: '',
			value0: '',
			value1: '13805558888',
			value2: '',
			value3: '张三',
			value4: '',
			placeholder: '请输入...',
			type: 'text',
			readonly: false,
			maxlength: 100,
			disabled: false,
			autofocus: false,
			autocomplete: true,
			clearable: false,
			eye: false,
			validateInfo: ''
		}
	},
	methods: {
		handleBlur(val,e){
			console.log(val)
			this.validateInfo = !this.value3.length?'名称校验失败，请重新输入':'';
		}
	},
	mounted() {
		
	}
}
</script>
<style>
	.demo-input{
		background: #EDF2FB;
		padding: 10px 0;
	}
	.tg-cell-suffix{
		font-size: 14px;
		color: #767A8C;
		text-align: right;
		margin-left: 4px;
	}
	.tg-cell-suffix:before{
		content: "";
		display: inline-block;
		margin-bottom: -2px;
		width: 1px;
		height: 15px;
		background: #767A8C;
	}
	.tg-cell-suffix span{
		margin-left: 10px;
	}
</style>