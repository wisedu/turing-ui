<template>
  <div class="tg-select" :class="[{'is-normal': !isCheck,'is-check': isCheck}]">
    <tg-cell
      :solid="title?true:false"
      name="multi-select"
      :title = "title"
      :required = "required"
      arrow = "arrow-right"
      :align = "align"
      :disabled="disabled"
      @click = "onClick"
      customized>
        <div class="tg-select-value" :class="[{'is-placeholder':!currentValue}]">{{currentValue?currentValue:placeholder}}</div>
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
      <!--多选-->
      <tg-check-group
        v-if="type === 'multi'"
        v-model = "selected"
        :options = "correctOptions"
        icon-position = "right"
      ></tg-check-group>
      <!--单选-->
      <md-scroll-view
        v-if="type === 'single'"
        ref="scroll"
        class="single-select"
        :scrolling-x="false"
        :style="[{maxHeight: `${maxHeight}px`}]"
      >
        <div class="md-selector-list">
          <md-radio
            ref="radio"
            :key="radioKey"
            :options="options"
            :default-index="defaultIndex"
            :invalid-index="invalidIndex"
            icon="circle-right"
            icon-inverse="circle"
            icon-size="md"
            is-across-border
            :optionRender="optionRender"
            :is-slot-scope="hasSlot"
            @change="$_onSelectorChoose"
          >
            <template slot-scope="{ option }">
              <slot :option="option"></slot>
            </template>
          </md-radio>
        </div>
      </md-scroll-view>
    </tg-popup>
  </div>
</template>
<script>
  import { Popup, PopupTitleBar, ScrollView, Radio } from 'mand-mobile'
  var noop = () => {};
  export default {
    name: "tg-select",
    components: {
      [Popup.name]: Popup,
      [PopupTitleBar.name]: PopupTitleBar,
      [ScrollView.name]: ScrollView,
      [Radio.name]: Radio,
    },
    data() {
      return {
        isTabPickerShow: false,
        selected: this.value,
        correctOptions: this.options,
        radioKey: Date.now(),
        defaultIndex: -1,
        invalidIndex: -1,
        singleSelected: '' // 用于接收单选的选中值
      }
    },
    watch: {
      value(newValue) {
        this.selected = newValue;
      },
      options(newOpts) {
        this.correctOptions = newOpts;
      }
    },
    computed: {
      currentValue (){
        var self = this;
        var labels;
        if(this.type === 'multi'){
          labels = [];
          var ids = [];
          this.options.forEach(function(opt){
            ids.push(opt.value);
          });
          this.value.forEach(function(item){
            if(ids.indexOf(item) === -1){
              self.correctOptions.unshift({"value":item,"label":item});
            }
          });
          this.correctOptions.forEach(function(opt){
            if(self.value.indexOf(opt.value) > -1){
              labels.push(opt.label);
            }
          });
          return labels.join(',');
        }else{
          labels = self.value;
          this.options.forEach(function(item, index){
            if(item.value == self.value){
              labels = item.text;
              self.defaultIndex = index;
            }
          })
          return labels
        }
      },
      hasSlot() {
        return !!this.$scopedSlots.default
      }
    },
    props: {
      type: {
        type: String,
        default: "single"
      },
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
        default: () => {
          return []
        }
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      isCheck: {
        type: Boolean,
        default: false
      },
      optionRender: {
        type: Function,
        default: noop
      },
      maxHeight: {
        type: Number,
        default: 400
      },
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
        if(this.type ==='multi'){
          this.correctOptions.forEach(function(opt){
            if(self.selected.indexOf(opt.value) > -1){
              result.push(opt);
            }
          });
          this.$emit("input", this.selected)
        }else{
          this.$emit("input", this.singleSelected.value)
          result = this.singleSelected;
        }
        this.$emit('confirm',result);
      },
      /**
       * 单选选择事件
       * @item 选中项对象
       * @index 选中项在options中的索引
       */
      $_onSelectorChoose(item, index) {
        this.singleSelected = item;
      },
    }
  }
</script>
<style lang="css">
  .tg-select .md-popup .md-popup-mask {
    background-color: #13152D;
    opacity: 0.5;
  }
  .tg-select .md-popup-title-bar {
    height: 60px;
  }
  .tg-select .md-popup-title-bar .title-bar-left {
    font-size: 14px;
    color: #43454F;
  }
  .tg-select .md-popup-title-bar .title-bar-title {
    font-size: 18px;
    color: #13152D;
  }
  .tg-select .md-popup-title-bar .title-bar-right {
    font-size: 14px;
    color: #3B7BFF;
  }
  .tg-select .tg-check-group {
    max-height: 300px;
    overflow-y: scroll;
  }
  .tg-select .md-field-item-content.left, .tg-select .tg-select-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tg-select .tg-select-value.is-placeholder {
    color: #C4C9D9;
  }
  .tg-select.is-normal .single-select .md-field-item-content.left {
    justify-content: center;
  }
  .tg-select.is-normal .single-select .md-field-item .md-icon {
    display: none;
  }
  .tg-select.is-normal .single-select .md-radio.across .md-field .md-field-item.md-radio-item .md-field-item-inner {
    padding: 8px 0;
    min-height: 50px;
  }
  .tg-select.is-normal .single-select .md-field-item .md-field-item-content {
    font-size: 14px;
  }
  .tg-select.is-normal .single-select .md-field-item {
    color: #43454F;
  }
  .tg-select.is-normal .single-select .md-radio .md-field .md-field-item.md-radio-item.selected {
    color: #3B7BFF;
  }
  .tg-select .md-popup-title-bar:before, .tg-select .md-field .md-field-content .md-field-item .md-field-item-inner:before, .tg-select  .md-field .md-field-content .md-input-item-container:before {
    background-color: #EDF2FB;
    height: 1px;
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
  }
</style>