<template>
	<div class="demo-selector">
	  <p>picker选择器单选</p>
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
			pickerData0: [{text:"选项1"},{text:"选项2"},{text:"选项3"},{text:"选项4"},{text:"选项5"},{text:"选项6"}],
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
		}
	},
	methods: {
		pickerValue0: function (val){
			this.zeroValue = val.text;
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
	.demo-selector{
		background: #EDF2FB;
	}
	.demo-selector>p {
		padding-left: 17px;
		font-size: 12px;
		color: #C4C9D9;
		padding: 5px 17px;
	}
</style>