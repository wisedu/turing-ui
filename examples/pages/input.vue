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
			:autocomplete="autocomplete"
			:clearable="clearable"
			:eye="eye"
			@blur="handleBlur"
		></tg-input>
		<tg-input v-model="value"></tg-input>
		<p style="padding:8px">value: {{value}}</p>
		<tg-cell-group title="原生type类型">
			<tg-cell title="text类型" customized solid >
				<tg-input 
					v-model="value_text"
					type="textarea">
				</tg-input>
			</tg-cell>
			<tg-cell title="number类型" customized solid >
				<tg-input 
					v-model="value_number"
					type="number">
				</tg-input>
			</tg-cell>
			<tg-cell title="password类型" customized solid >
				<tg-input 
					v-model="value_password"
					type="password"
					:eye="eye">
				</tg-input>
			</tg-cell>
			<tg-cell title="date类型" customized solid >
				<tg-input 
					v-model="value_date"
					type="date">
				</tg-input>
			</tg-cell>
		</tg-cell-group>
		<tg-cell-group title="表单标准模式">
			<tg-cell title="姓名" customized solid required>
				<tg-input 
					v-model="value0"
					placeholder="请输入"
					type="password"
					validate
					clearable
					eye
					:validateInfo="validateInfo1"
					@blur="validateHandle">
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
			<tg-cell customized required>
				<tg-input 
					v-model="value2"
					placeholder="请输入真实姓名"
					validateFail
					type="text">
				</tg-input>
			</tg-cell>
			<tg-cell customized>
				<tg-input 
					v-model="value3"
					placeholder="真实名字"
					column
					type="text">
				</tg-input>
			</tg-cell>
			<tg-cell customized>
				<tg-input 
					v-model="value3"
					placeholder="真实名字"
					column
					clearable
					:validateInfo="validateInfo"
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
			value_text:'我是text',
			value_number: '20180925',
			value_password: '111111',
			value_date: '2018-09-27',
			placeholder: '请输入...',
			type: 'text',
			readonly: false,
			maxlength: 100,
			disabled: false,
			autofocus: false,
			autocomplete: true,
			clearable: false,
			eye: {open: false},
			validateInfo: '',
			validateInfo1: ''
		}
	},
	methods: {
		handleBlur(val,e){
			if(!val){
				this.validateInfo = '输入名称不能为空'
			}else{
				this.validateInfo = val!=='张三'?'名称校验失败，请重新输入':'';
			}
		},
		validateHandle(val){
			if(!val){
				this.validateInfo1 = '输入名称不能为空'
			}else{
				this.validateInfo1 = val!=='张三'?'名称校验失败，请重新输入':'';
			}
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
	.border-buttom {
		border-bottom:1px solid #EDF2FB;
	}
</style>