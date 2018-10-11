<template>
	<div class="demo-picker">
	  <p>picker选择器单选</p>
		<tg-picker
			v-model="singleValue"
			title="单选"
			:options="singleOptions"
			:default-value="defaultValue"
			@confirm="handleConfirm"
			@onClick="handleClick('single')"
		></tg-picker>
	  <p>picker选择器多选</p>
		<tg-picker
			v-model="multiValue"
			title="独立多选"
			:cols="2"
			:options="multiOptions"
			:default-value="defaultValue1"
			@confirm="handleConfirm"
			@onClick="handleClick('multi')"
		></tg-picker>
	  <p>picker选择器级联多选</p>
		<tg-picker
			v-model="cascadeValue"
			title="级联多选-地区"
			:cols="3"
			:options="cascadeOptions"
			:default-value="defaultValue2"
			is-cascade
			@confirm="handleConfirm"
			@onClick="handleClick('cascade')"
		></tg-picker>

		
		<p>区域选择器</p>
		<tg-cell
		name="tg-cell"
		title="区域选择"
		arrow="arrow-right"
		:value="fifthValue"
		@click="value5 = true">
		</tg-cell>
		<tg-tabPicker
			v-model="value5"
			:pickerData="pickerData5"
			:title="title5"
			@pickerValue="pickerValue5"
		></tg-tabPicker>
	</div>
</template>
<script>
import { column1, column2, column3 } from '../../static/mock/picker.js'
import district from '../../static/mock/district.js'
export default {
	data() {
		return {
			// 独立多选 源数据
			singleValue: [],
			singleOptions: [column1],
			defaultValue: '',

			// 独立多选 源数据
			multiValue: ['卡尔','爆发'],
			multiOptions: [column1,column2],
			defaultValue1: '卡尔,爆发',

			//级联多选-地区
			cascadeValue: ["330000","331100","331122"],
			cascadeOptions: district,
			defaultValue2: '浙江省,丽水市,缙云县',

			//<=4 选择器  data
			title0: '选择器',
			zeroValue:"选项2",
			value0: false,
			pickerData0: [{text:"选项1"},{text:"选项2"},{text:"选项3"},{text:"选项4"}],
			defaultIndex0: 1,

			//日期picker data
			title3:'选择日期',
			thirdValue:"请选择",
			value3:false,
			todayText:'今天',  //&(今天)
			type:'custom',   //date, time, datetime, custom
			formatType:'yyyy-MM-dd',
			customTypes:['yyyy','MM','dd'],  //type="custom"时生效 格式['yyyy', 'MM','dd', 'hh', 'mm']
			
			
			//时间picker data
			title4:'选择时间',
			fourthValue:"请选择",
			value4:false,
			todayText4:'',
			type4:'custom',
			formatType4:'hh:mm',
			customTypes4:['hh', 'mm'],

			title5:'选择title',
			value5:false,
			fifthValue:"请选择",
			pickerData5: [{"label":"江苏省","value":1,"children":[{"label":"南京市","value":2,"children":[{"label":"江宁区","value":11,"children":""},{"label":"雨花台区","value":22,"children":""},{"label":"白下区","value":22,"children":""},{"label":"秦淮区","value":22,"children":""},{"label":"xxx","value":22,"children":""},{"label":"xxx","value":22,"children":""},{"label":"xxx","value":22,"children":""},{"label":"xxx","value":22,"children":""},{"label":"xxx","value":22,"children":""}]}]},{"label":"安徽省","value":2,"children":[{"label":"合肥市","value":2,"children":[{"label":"瑶海区","value":11,"children":""}]}]}]
		}
	},
	methods: {
		pickerValue0: function (val){
			this.zeroValue = val.text;
	    },
		pickerValue: function (val){
			console.log(val,1)
			// let res = ''
			// var values = JSON.parse(val);
			// values.forEach(value => {
			// 	value && (res += `${value.text || value.label} `)
			// })
			// this.firstValue = res;
	    },
		pickerValue2: function (val){
			console.log(val)
			let res = ''
			var values = JSON.parse(val);
			values.forEach(value => {
				value && (res += `${value.text || value.label} `)
			})
			this.secondValue = res;
	    },
		pickerValue3: function (val){
			this.thirdValue = val;
	    },
		pickerValue4: function (val){
			this.fourthValue = val;
	    },
		pickerValue5: function (val){
			var selected = JSON.parse(val);
			var value = "";
			selected.forEach(element => {
				value += element.item.label+" ";
			});
			this.fifthValue = value;
	    },
		handleConfirm(display,values) {
			console.log(display,values)
		},
		handleClick(key){
			if(key === 'single'){
				this.singleOptions = [column1];
			}else if(key === 'multi'){
				this.multiOptions = [column1,column2];
			}else if(key === 'cascade'){
				this.cascadeOptions = district;
			}
		}

	},
	watch: {
		singleValue(val){
			console.log(val)
		},
		multiValue(val){
			console.log(val)
		}
	},
	mounted() {
		
	}
}
</script>
<style>
	.demo-picker{
		background: #EDF2FB;
	}
	.demo-picker>p {
		padding-left: 17px;
		font-size: 12px;
		color: #C4C9D9;
		padding: 5px 17px;
	}
</style>