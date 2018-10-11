<template>
  <div class="tg-tab-picker">
    <md-tab-picker
      v-model="isTabPickerShow"
      title=""
      :data="pickerData"
      data-struct="cascade"
      ok-text="确认"
      cancel-text="取消"
      @confirm="onTabPickerConfirm"
      @change="onTabPickerChange"
    ></md-tab-picker>
  </div>
</template>

<script>
  import { TabPicker } from 'mand-mobile'
  const NOOP = () => {}
  export default {
    name: "tg-tabPicker",
    components: {
      [TabPicker.name]: TabPicker
    },
    data() {
      return {
        isTabPickerShow: false,
        optionRenders: [NOOP, NOOP, this.optionRender],
      }
    },
    watch: {
      optionRender(item) {
        return `<div class="md-field-item-custom-title">${item.label}</div><div class="md-field-item-custom-brief">十年前你说生如夏花般灿烂，十年后你说平凡才是唯一的答案</div>`
      },
      value(val){
         this.isTabPickerShow = val
      },
      isTabPickerShow(val){
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
      pickerData: {
        type: Array,
        default: []
      },
    },
    mounted () {
      //
    },
    methods: {
      onTabPickerConfirm(selected) {
        if (selected) {
          console.log(`[Mand Mobile] TabPicker 确认选择项: ${JSON.stringify(selected)}`)
          var value = "";
          var val = selected;
          if(typeof selected == "object"){
            val = JSON.stringify(selected);
          }
          selected.forEach(element => {
            value += element.item.label+" ";
          });
          this.$emit('pickerValue', val)
        } else {
          console.warn('[Mand Mobile] TabPicker 点击确认按钮时未选择到任何确定项')
        }
      },
      onTabPickerChange(select) {
      console.log(
        `[Mand Mobile] TabPicker 第${select.selectTab}列, 第${select.selectIndex}项: label: ${select.selectItem
          .label}, value: ${select.selectItem.value}`,
      )
    },
      
    }
  }
</script>
<style lang="css">
  .tg-tab-picker .md-popup-title-bar{
		height: 60px;
	}
	.tg-tab-picker .md-popup-title-bar .title-bar-left{
		font-size: 15px;
		color:#303146;
	}
	.tg-tab-picker .md-popup-title-bar .title-bar-right{
		font-size: 15px;
		color: #699AFF;
	}
	.tg-tab-picker .md-popup-title-bar .title-bar-title{
		font-size: 18px;
    color: #13152D;
	}
  .tg-tab-picker .md-field-item .md-field-item-label .md-field-item-title{
    font-size: 18px;
  }
  .tg-tab-picker .md-field-item .md-field-item-content{
    font-size: 15px;
  }
  .tg-tab-picker .md-field .md-field-content .md-field-item .md-field-item-inner:before, .md-field .md-field-content .md-input-item-container:before{
    height: 2px;
    background-color: #F6F9FD;
  }
  .tg-tab-picker .md-tabs .md-tab-bar:before{
    height: 2px;
    background-color: #F6F9FD;
  }
  .tg-tab-picker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
  .tg-tab-picker .md-tab-title{
    font-size: 14px;
    margin-right: 20px;
  }
  .tg-tab-picker .md-tab-bar .md-tab-bar-inner{
    height: 60px;
  }
  .tg-tab-picker .md-tabs .md-tab-bar {
    position: absolute;
    margin-top: -60px;
  }
  .tg-tab-picker .md-radio.across .md-field .md-field-item.md-radio-item .md-field-item-inner{
    padding: 10px;
    font-size: 16px;
    font-family: sans-serif;
  }
  .tg-tab-picker .md-tab-bar{
    height: 60px;
  }
  .tg-tab-picker .md-tab-picker .md-tabs .md-tab-content-wrapper{
    height: 225px;
  }
  .tg-tab-picker .md-tab-picker .md-tabs .md-tab-content-wrapper .md-tab-content{
    height: 225px;
  }
  .tg-tab-picker .md-tab-bar .ink-bar.animate{
    width: 20px !important;
    display: none;
  }
  .tg-tab-picker .md-field-item .md-field-item-content.left{
    margin-left: 9px !important;
  }
  .tg-tab-picker .md-icon-right{
    display: none;
  }
  .tg-tab-picker .md-tab-bar .md-tab-title{
    color: lightgray;
    min-width: 30px;
  }
  .tg-tab-picker .md-tab-bar .md-tab-title.active {
    color: currentColor;
    position: relative;
  }
  .tg-tab-picker .md-tab-bar .md-tab-title.active:before {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: #3B7BFF;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: translateY(100%);
    transform: translate(-50%, 100%);
    bottom: 2px;
    left: 50%;
    width: 20px;
    height: 2px;
  }
  .tg-tab-picker .md-tab-bar .md-tab-titles-wrapper{
    display: inline-block;
    padding-left: 19px;
  }
</style>