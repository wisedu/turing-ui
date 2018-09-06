<template>
  <div class="tg-selector">
    <md-selector
      v-model="isSelectorShow"
      :data="pickerData"
      :default-index="defaultIndex"
      :title="title"
      okText="确认"
      cancelText="取消"
      @confirm="onSelectorConfirm($event)"
    ></md-selector>
  </div>
</template>

<script>
  import { Selector } from 'mand-mobile'
  export default {
    name: "tg-selector",
    components: {
      [Selector.name]: Selector
    },
    data() {
      return {
        isSelectorShow: false
      }
    },
    watch: {
      value(val){
         this.isSelectorShow = val
      },
      isSelectorShow(val){
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
      defaultIndex: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      
    },
    methods: {
      onSelectorConfirm(obj) {
        console.log(obj);
        this.$emit('pickerValue', obj )
      }
    }
  }
</script>
<style lang="css">
  .tg-selector .md-popup-title-bar{
		height: 60px;
	}
	.tg-selector .md-popup-title-bar .title-bar-left{
		font-size: 15px;
		color:#303146;
	}
	.tg-selector .md-popup-title-bar .title-bar-right{
		font-size: 15px;
		color: #699AFF;
	}
	.tg-selector .md-popup-title-bar .title-bar-title{
		font-size: 18px;
    color: #13152D;
	}
  .tg-selector .md-field-item .md-field-item-label .md-field-item-title{
    font-size: 18px;
  }
  .tg-selector .md-field-item .md-field-item-content{
    font-size: 15px;
  }
  .tg-selector .md-radio.across .md-field .md-field-item.md-radio-item .md-field-item-inner{
    padding: 10px;
  }
  .tg-selector .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
  .tg-selector .md-field .md-field-content .md-field-item .md-field-item-inner:before, .md-field .md-field-content .md-input-item-container:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
  .tg-selector .md-selector .md-field-item.selected{
    color: #4380FF!important;
  }
</style>