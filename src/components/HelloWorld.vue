<template>
	<div>
		<cube-button @click="showDialog">cube-ui Button</cube-button>
		<van-cell-group>
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>
		<md-picker
			ref="picker"
			:data="pickerData"
			:cols="3"
			:default-index="pickerDefaultIndex"
			is-view
			is-cascade
			title="选择省市区/县"
			@initialed="onPickerInitialed"
			@change="onPickerConfirm"
		></md-picker>
	</div>
</template>

<script>
import district from '../../static/district';
export default {
	data() {
		return {
			pickerData: [],
			pickerDefaultIndex: [],
			pickerValue: ''
		}
	},
	methods: {
		showDialog () {
		  console.log(11)
		},
		onPickerInitialed() {
			const columnValues = this.$refs.picker.getColumnValues()
			let value = ''
			columnValues.forEach(item => {
				value += `${item.label}-`
			})
			console.log(`[Mand Mobile] Picker getColumnValues: ${value.substr(0, value.length - 1)}`)
		},
		onPickerConfirm(columnIndex, itemIndex, value) {
			if (value) {
				this.pickerValue = value.text
			}
		},
		getColumnValue(picker, index) {
			const value = this.$refs.picker.getColumnValue(index)
			delete value.children
		},
		getColumnIndex(picker, index) {
			const value = this.$refs.picker.getColumnIndex(index)
		}
	},
	mounted() {
		this.pickerData = district
		this.pickerDefaultIndex = [3, 2, 1]

		window.PickerTrigger2 = () => {
			this.getColumnValue('picker', 0)
		}
		window.PickerTrigger3 = () => {
			this.getColumnIndex('picker', 0)
		}
	}
}
</script>
