<template>
	<div class="demo-area-picker">
		<p>区域选择器</p>
		<tg-area-picker
			v-model="value"
			:data="pickerData"
			:title="title"
			@pickerValue="pickerValue"
		></tg-area-picker>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title:'待完成组件',
			value: '',
			fifthValue:"请选择",
			pickerData: [
				{
					"label":"云南省",
					"value":530000,
					"children":[{
						"label":"昆明市",
						"value":530100,
						"children":[{
							"label":"五华区",
							"value":530102,
						},{
							"label":"盘龙区",
							"value":530103,
						},{
							"label":"官渡区",
							"value":530111,
						},{
							"label":"西山区",
							"value":530112,
						},{
							"label":"东川区",
							"value":530113,
						},{
							"label":"呈贡区",
							"value":530114,
						},{
							"label":"石林彝族自治县",
							"value":530126,
						},{
							"label":"禄劝彝族苗族自治县",
							"value":530128,
						},{
							"label":"寻甸回族彝族自治县",
							"value":530129,
						},{
							"label":"晋宁县",
							"value":530122,
						},{
							"label":"富民县",
							"value":530124,
						},{
							"label":"嵩明县",
							"value":530127,
						}],
					},{
						"label":"红河哈尼族彝族自治州",
						"value":532500,
						"children":[{
							"label":"屏边苗族自治县",
							"value":532523,
						},{
							"label":"金平苗族瑶族傣族自治县",
							"value":532530,
						},{
							"label":"河口瑶族自治县",
							"value":532532,
						},{
							"label":"蒙自市",
							"value":532503,
						},{
							"label":"个旧市",
							"value":532501,
						}]
					}]
				},{
					"label":"新疆维吾尔自治区",
					"value":650000,
					"children": [{
						"label":"巴音郭楞蒙古自治",
						"value":652800,
						"children":[{
							"label":"焉耆回族自治县",
							"value":652826,
						}]
					}]
				}
			]
		}
	},
	methods: {
		pickerValue: function (val){
			var selected = JSON.parse(val);
			var value = "";
			selected.forEach(element => {
				value += element.item.label+" ";
			});
			this.fifthValue = value;
	    }
	}
}
</script>
<style>
	.demo-area-picker{
		background: #EDF2FB;
		overflow: hidden;
	}
	.demo-area-picker>p {
		padding-left: 17px;
		font-size: 12px;
		color: #C4C9D9;
		padding: 5px 17px;
	}
	.demo-area-picker .tg-cell {
		margin-bottom: 10px;
	}
</style>