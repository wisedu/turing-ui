<template>
  <div class="tg-datePicker">
    <md-date-picker
      ref="datePicker"
      v-model="isDatePickerShow"
      :type="type"
      :today-text="todayText"
      :title="title"
      :text-render="textRender"
      :custom-types="customTypes"
      :default-date="currentDate"
      :formatType="formatType"
      @change="onDatePickerChange"
      @confirm="onDatePickerConfirm"
    ></md-date-picker>
  </div>
</template>

<script>
import {DatePicker} from 'mand-mobile'

export default {
  name: 'tg-datePicker',
  components: {
    [DatePicker.name]: DatePicker,
  },
  data() {
    return {
      currentDate: new Date(),
      isDatePickerShow: false,
      datePickerValue: '',
    }
  },
  watch: {
    value(val){
        this.isDatePickerShow = val
    },
    isDatePickerShow(val){
      if (!val) {
        this.$emit('input', val)
      }
    }
  },
  props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      formatType: {
        type: String,
        default: ''
      },
      customTypes: {
        type: Array,
        default: []
      },
      type: {
        type: String,
        default: ''
      },
      todayText: {
        type: String,
        default: ''
      }
    },
  methods: {
    textRender() {
      const args = Array.prototype.slice.call(arguments)
      const typeFormat = args[0] // 类型
      const column0Value = args[1] // 第1列选中值
      const column1Value = args[2] // 第2列选中值
      const column2Value = args[3] // 第3列选中值
      
      if (typeFormat === 'dd') {
        // return `${column0Value}/${column1Value}/${column2Value}`
      }
    },
    onDatePickerChange(columnIndex, itemIndex, value) {
      console.log(
        `[Mand Mobile] DatePicker Change\ncolumnIndex: ${columnIndex},\nitemIndex:${itemIndex},\nvalue: ${JSON.stringify(
          value,
        )}`,
      )
    },
    onDatePickerConfirm(columnsValue) {
      // console.log(`[Mand Mobile] DatePicker Confirm\nvalue: ${JSON.stringify(columnsValue)}`)
      // this.datePickerValue = this.$refs.datePicker.getFormatDate('yyyy/MM/dd hh:mm')
      var curFormatType="yyyy/MM/dd hh:mm";
      if(this.$props.formatType){
        curFormatType = this.$props.formatType;
      }
      this.datePickerValue = this.$refs.datePicker.getFormatDate(curFormatType)
      this.$emit('pickerValue', this.datePickerValue )
    }
  }
}

</script>
<style lang="css">
  .tg-datePicker .md-popup-title-bar{
		height: 60px;
	}
  /* .tg-datePicker .md-picker-column{
    height: 230px !important;
  }
  .tg-datePicker .md-picker-column-masker{
    height: 92px !important;
  }
  .tg-datePicker .md-picker-column-masker.bottom{
    height: 112px !important;
  } */
	.tg-datePicker .md-popup-title-bar .title-bar-left{
		font-size: 15px;
		color:#303146;
	}
	.tg-datePicker .md-popup-title-bar .title-bar-left{
		font-size: 16px;
		color:#303146;
	}
	.tg-datePicker .md-popup-title-bar .title-bar-right{
		font-size: 16px;
		color: #699AFF;
	}
	.tg-datePicker .md-popup-title-bar .title-bar-title{
		font-size: 18px !important;
	}
  .tg-datePicker .md-field-item .md-field-item-label .md-field-item-title{
    font-size: 20px !important;
  }
  .tg-datePicker .md-field-item .md-field-item-content{
    font-size: 20px !important;
  }
  .tg-datePicker .md-picker-column .md-picker-column-container .md-picker-column-list .md-picker-column-item ul.column-list li.column-item{
    /* border-top: 2px solid #F6F9FD; */
    font-size: 15px !important;
  }
  .tg-datePicker .md-picker-column .md-picker-column-container .md-picker-column-masker.bottom:after{
    /* background:none; */
    height: 1px;
  }
  .tg-datePicker .md-picker-column .md-picker-column-container .md-picker-column-masker.top:before{
    /* background:none; */
    height: 1px;
  }
  .tg-datePicker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
</style>