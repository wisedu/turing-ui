<template>
	<div class="demo-picker">
	  <p>demo0</p>
		<tg-cell
		name="tg-cell"
		title="标题"
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
	  <p>demo1</p>
		<tg-cell
		name="tg-cell"
		title="标题"
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
	  <p>demo2</p>
		<tg-cell
		name="tg-cell"
		title="标题"
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
	  <p>demo3</p>
		<tg-cell
		name="tg-cell"
		title="标题"
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
	  <p>demo4</p>
		<tg-cell
		name="tg-cell"
		title="标题"
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
	</div>
</template>
<script>
export default {
	data() {
		return {
			//<=4 选择器  data
			title0: '选择器',
			zeroValue:"选择器",
			value0: false,
			pickerData0: [{text:"选项1"},{text:"选项2"},{text:"选项3"},{text:"选项4"}],
			defaultIndex0: 1,

			//日期picker data
			title3:'选择日期',
			thirdValue:"日期选择",
			value3:false,
			todayText:'今天',  //&(今天)
			type:'custom',   //date, time, datetime, custom
			formatType:'yyyy-MM-dd',
			customTypes:['yyyy','MM','dd'],  //type="custom"时生效 格式['yyyy', 'MM','dd', 'hh', 'mm']

			//时间picker data
			title4:'选择时间',
			fourthValue:"时间选择",
			value4:false,
			todayText4:'',
			type4:'custom',
			formatType4:'hh:mm',
			customTypes4:['hh', 'mm'],

			//年份选择picker  data
			title: '请选择年份',
			firstValue:"年份选择",
			value:false,
			pickerData: [[{text:"2015",value:1},{text:"2016",value:2},{text:"2017",value:3},{text:"2018",value:4},{text:"2019",value:5},{text:"2020",value:6}]],
			cols:1,
			defaultIndex:[2],

			//区域选择picker data
			title2:'选择省市区/县',
			secondValue:"地区选择",
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
			this.zeroValue = this.zeroValue.split(" ")[0] +" "+ val;
	    },
		pickerValue: function (val){
			this.firstValue = this.firstValue.split(" ")[0] +" "+ val;
	    },
		pickerValue2: function (val){
			this.secondValue = this.secondValue.split(" ")[0] +" "+ val;
	    },
		pickerValue3: function (val){
			this.thirdValue = this.thirdValue.split(" ")[0] +" "+ val;
	    },
		pickerValue4: function (val){
			this.fourthValue = this.fourthValue.split(" ")[0] +" "+ val;
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
		padding: 10px 0;
	}
</style>