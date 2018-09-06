<template>
  <div class="tg-picker">
    <md-picker
      ref="picker"
      v-model="isPickerShow"
      :data="pickerData"
	    :default-index="defaultIndex"
      @confirm="onPickerConfirm"
      @change="onChange"
      is-cascade
      :cols="cols"
	    ok-text="确定"
	    cancel-text = "取消"
      :title="title"
	    mask-closable
    ></md-picker>
  </div>
</template>

<script>
  import { Picker } from 'mand-mobile'
  export default {
    name: "tg-picker",
    components: {
      [Picker.name]: Picker
    },
    data() {
      return {
        isPickerShow: false
      }
    },
    watch: {
      value(val){
         this.isPickerShow = val
      },
      isPickerShow(val){
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
      cols: {
        type: Number,
        default: 1
      },
      pickerData: {
        type: Array,
        default: []
      },
      defaultIndex: {
        type: Array,
        default: []
      }
    },
    mounted () {
      
    },
    methods: {
      onPickerConfirm() {
        const values = this.$refs[`picker`].getColumnValues()
        let res = ''
        values.forEach(value => {
          value && (res += `${value.text || value.label} `)
        })
        console.log(values);
        var val = values;
        if(typeof values == "object"){
          val = JSON.stringify(val);
        }
        this.$emit('pickerValue', val )
      },
      onChange(columnIndex, itemIndex, value) {
        console.log(value)
      }
      
    }
  }
</script>
<style lang="css">
  .tg-picker .md-popup-title-bar{
		height: 60px;
	}
  /* .tg-picker .md-picker-column{
    height: 230px !important;
  }
  .tg-picker .md-picker-column-masker{
    height: 85px !important;
  }
  .tg-picker .md-picker-column-masker.bottom{
    height: 112px !important;
  } */
	.tg-picker .md-popup-title-bar .title-bar-left{
		font-size: 15px;
		color:#303146;
	}
	.tg-picker .md-popup-title-bar .title-bar-right{
		font-size: 15px;
		color: #699AFF;
	}
	.tg-picker .md-popup-title-bar .title-bar-title{
		font-size: 18px;
    color: #13152D;
	}
  .tg-picker .md-field-item .md-field-item-label .md-field-item-title{
    font-size: 18px;
  }
  .tg-picker .md-field-item .md-field-item-content{
    font-size: 18px;
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-list .md-picker-column-item ul.column-list li.column-item{
    /* border-top: 2px solid #F6F9FD; */
    font-size: 15px;
    /* height: 40px !important;
    line-height: 40px !important; */
    color:#43454F;
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.bottom:after{
    /* background:none; */
    height: 1px;
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.top:before{
    /* background:none; */
    height: 1px;
  }
  .tg-picker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
</style>