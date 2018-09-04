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
    <md-popup
      v-model = "isTabPickerShow"
      position = "bottom"
      :mask-closable = "maskClosable"
      @maskClick = "$_onMaskClose"
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
    </md-popup>
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
        currentValue: this.value,
        isTabPickerShow: false,
        maskClosable: true,
        selected: []
      }
    },
    watch: {
      value(newValue) {
        this.currentValue = newValue
      },
      currentValue(newValue) {
        this.$emit("input", newValue)
      }
    },
    props: {
      value: {},
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
      },
      handleCancel() {
        this.isTabPickerShow = false;
        this.$emit('cancel');
      },
      handleConfirm() {
        this.isTabPickerShow = false;
        var result = [];
        var labels = [];
        var self = this;
        this.options.forEach(function(opt){
          if(self.selected.indexOf(opt.value) > -1){
            result.push(opt);
            labels.push(opt.label)
          }
        });
        this.currentValue = labels.join(',');
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