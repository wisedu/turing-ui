<template>
  <div class="tg-multi-picker">
    <tg-cell
      solid
      :title = "title"
      :required = "required"
      arrow = "arrow-right"
      :align = "align"
      @click = "onClick"
      customized>
        <div class="tg-multi-picker-value">{{currentValue}}</div>
    </tg-cell>
    <tg-popup
      v-model = "isTabPickerShow"
      :mask-closable = "maskClosable"
      @maskClick = "$_onMaskClose"
      position = "bottom"
    >
      <md-popup-title-bar
        :title = "titleBar"
        :ok-text = "okText"
        :cancel-text = "cancelText"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      ></md-popup-title-bar> 
      <tg-check-group
        v-model = "selected"
        :options = "options"
        icon-position = "right"
      ></tg-check-group>
    </tg-popup>
  </div>
</template>
<script>
  import { Popup, PopupTitleBar } from 'mand-mobile'
  export default {
    name: "tg-multi-picker",
    components: {
      [Popup.name]: Popup,
      [PopupTitleBar.name]: PopupTitleBar,
    },
    data() {
      return {
        isTabPickerShow: false,
        maskClosable: true,
        selected: this.value
      }
    },
    watch: {
      value(newValue) {
        this.selected = newValue;
      }
    },
    computed: {
      currentValue (){
        var self = this;
        var labels = [];
        this.options.forEach(function(opt){
          if(self.value.indexOf(opt.value) > -1){
            labels.push(opt.label);
          }
        });
        return labels.join(',');
      }
    },
    props: {
      value: {
        type: Array,
        default: []
      },
      title: String,
      required: Boolean,
      align: String,
      titleBar: {
        type: String,
        default: ''
      },
      okText: {
        type: String,
        default: '确定',
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      options: {
        type: Array,
        default: []
      }
    },
    methods: {
      onClick() {
        this.isTabPickerShow = true;
      },
      $_onMaskClose() {
        this.isTabPickerShow = false;
        this.selected = this.value;
      },
      handleCancel() {
        this.isTabPickerShow = false;
        this.selected = this.value
        this.$emit('cancel');
      },
      handleConfirm() {
        this.isTabPickerShow = false;
        var result = [];
        var self = this;
        this.options.forEach(function(opt){
          if(self.selected.indexOf(opt.value) > -1){
            result.push(opt);
          }
        });
        this.$emit("input", this.selected)
        this.$emit('confirm',result);
      }
    }
  }
</script>
<style lang="css">
  .tg-multi-picker .md-popup .md-popup-mask {
    background-color: #13152D;
    opacity: 0.5;
  }
  .tg-multi-picker .md-popup-title-bar {
    height: 60px;
  }
  .tg-multi-picker .md-popup-title-bar:before {
    background-color: #EDF2FB;
  }
  .tg-multi-picker .md-popup-title-bar .title-bar-left {
    font-size: 14px;
    color: #13152D;
  }
  .tg-multi-picker .md-popup-title-bar .title-bar-title {
    font-size: 18px;
    color: #13152D;
  }
  .tg-multi-picker .md-popup-title-bar .title-bar-right {
    font-size: 14px;
    color: #3B7BFF;
  }
  .tg-multi-picker .tg-check-group {
    max-height: 300px;
    overflow-y: scroll;
  }
  .tg-multi-picker .md-field-item-content.left, .tg-multi-picker .tg-multi-picker-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>