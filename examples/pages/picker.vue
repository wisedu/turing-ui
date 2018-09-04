<template>
	<div class="demo-picker">
	  <p>平铺选择器</p>
		<tg-cell
		name="tg-cell"
		title="选择器"
		arrow="arrow-right"
		:value="zeroValue"
		@click="value0 = true">
		</tg-cell>
		<tg-selector
			:pickerData="pickerData0"
			v-model="value0"
			:title="title0"
			:defaultIndex="defaultIndex0"
			@pickerValue="pickerValue0"
		></tg-selector>
	  <p>年份选择器</p>
		<tg-cell
		name="tg-cell"
		title="年份选择"
		arrow="arrow-right"
		:value="firstValue"
		@click="value = true">
		</tg-cell>
		<tg-picker
			:pickerData="pickerData"
			v-model="value"
			:title="title"
			:cols="cols"
			:defaultIndex="defaultIndex"
			@pickerValue="pickerValue"
		></tg-picker>
	  <p>地区选择器</p>
		<tg-cell
		name="tg-cell"
		title="地区选择"
		arrow="arrow-right"
		:value="secondValue"
		@click="value2 = true">
		</tg-cell>
		<tg-picker
			:pickerData="pickerData2"
			v-model="value2"
			:title="title2"
			:cols="cols2"
			:defaultIndex="defaultIndex2"
			@pickerValue="pickerValue2"
		></tg-picker>
	  <p>日期选择器</p>
		<tg-cell
		name="tg-cell"
		title="日期选择"
		arrow="arrow-right"
		:value="thirdValue"
		@click="value3 = true">
		</tg-cell>
		<tg-datePicker
			v-model="value3"
			:title="title3"
			:todayText="todayText"
			:type="type"
			:customTypes="customTypes"
			:formatType="formatType"
			@pickerValue="pickerValue3"
		></tg-datePicker>
	  <p>时间选择器</p>
		<tg-cell
		name="tg-cell"
		title="时间选择"
		arrow="arrow-right"
		:value="fourthValue"
		@click="value4 = true">
		</tg-cell>
		<tg-datePicker
			v-model="value4"
			:title="title4"
			:todayText="todayText4"
			:type="type4"
			:customTypes="customTypes4"
			:formatType="formatType4"
			@pickerValue="pickerValue4"
		></tg-datePicker>
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
export default {
	data() {
		return {
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

			//区域tab选择 tabpicker data
			title5:'选择title',
			value5:false,
			fifthValue:"请选择",
			pickerData5: [{"label":"江苏省","value":1,"children":[{"label":"南京市","value":2,"children":[{"label":"江宁区","value":11,"children":""},{"label":"雨花台区","value":22,"children":""},{"label":"白下区","value":22,"children":""},{"label":"秦淮区","value":22,"children":""}]}]},{"label":"安徽省","value":2,"children":[{"label":"合肥市","value":2,"children":[{"label":"某某区","value":11,"children":""}]}]}],
			
			//时间picker data
			title4:'选择时间',
			fourthValue:"请选择",
			value4:false,
			todayText4:'',
			type4:'custom',
			formatType4:'hh:mm',
			customTypes4:['hh', 'mm'],

			//年份选择picker  data
			title: '请选择年份',
			firstValue:"2017",
			value:false,
			pickerData: [[{text:"2015",value:1},{text:"2016",value:2},{text:"2017",value:3},{text:"2018",value:4},{text:"2019",value:5},{text:"2020",value:6}]],
			cols:1,
			defaultIndex:[2],

			//区域选择picker data
			title2:'选择省市区/县',
			secondValue:"安徽省 六安市 霍邱县县级县级",
			value2:false,
			cols2:3,
			defaultIndex2:[0],
			pickerData2: [[
			{
				"value":"340000",
				"label":"安徽省",
				"children":[
					{
						"value":"341500",
						"label":"六安市",
						"children":[
							{"value":"341522","label":"霍邱县县级县级","children":[]},
							{"value":"341502","label":"金安区","children":[]},
							{"value":"341524","label":"金寨县","children":[]},
							{"value":"341526","label":"其它区","children":[]},
							{"value":"341521","label":"寿县","children":[]},
							{"value":"341523","label":"舒城县","children":[]},
							{"value":"341503","label":"裕安区","children":[]}
						]
					},
					{
						"value":"340500",
						"label":"马鞍山市",
						"children":[
							{"value":"340506","label":"博望区","children":[]}
						]
					},
					{
						"value":"341800",
						"label":"宣城市",
						"children":[
							{"value":"341822","label":"广德县","children":[]},
							{"value":"341824","label":"绩溪县","children":[]},
							{"value":"341825","label":"旌德县","children":[]}
						]
					}
				]
			},
			{
				"value":"820000",
				"label":"澳门特别行政区",
				"children":[
					{"value":"820100","label":"澳门半岛","children":[]},
					{"value":"820200","label":"离岛","children":[]}
				]
			},
			{
				"value":"110000",
				"label":"北京",
				"children":[
					{
						"value":"110100",
						"label":"北京市",
						"children":[
							{"value":"110114","label":"昌平区","children":[]},
							{"value":"110105","label":"朝阳区","children":[]},
							{"value":"110103","label":"崇文区","children":[]},
							{"value":"110101","label":"东城区","children":[]},
							{"value":"110111","label":"房山区","children":[]},
							{"value":"110106","label":"丰台区","children":[]},
							{"value":"110108","label":"海淀区","children":[]},
							{"value":"110109","label":"门头沟区","children":[]}
						]
					}
				]
			}
			]]
		}
	},
	methods: {
		pickerValue0: function (val){
			this.zeroValue = val;
	    },
		pickerValue: function (val){
			this.firstValue = val;
	    },
		pickerValue2: function (val){
			this.secondValue = val;
	    },
		pickerValue3: function (val){
			this.thirdValue = val;
	    },
		pickerValue4: function (val){
			this.fourthValue = val;
	    },
		pickerValue5: function (val){
			this.fifthValue = val;
	    }

	},
	watch: {
		
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