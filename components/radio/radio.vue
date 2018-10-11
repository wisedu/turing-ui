<template>
  <div class="tg-radio" :class="[{'is-horizontal':horizontal,'is-button': type == 'button','is-required':required&&title}]">
    <div class="tg-radio-title" v-if="title">{{title}}</div>
    <md-radio
      v-model="currentValue"
      title="单选"
      :options="options"
      :default-index="defaultIndex"
      :invalid-index="invalidIndex"
      :has-input-option="hasInputOption"
      :input-option-label="inputOptionLabel"
      :input-option-placeholder="inputOptionPlaceholder"
      :icon="iconChecked"
      :icon-size="iconSize"
      :icon-inverse="iconInverseChecked"
      :icon-position="iconPositionChecked"
      :option-render="optionRenderChecked"
      :type="type"
      @change="handerChange"
    >
    </md-radio>
  </div>
</template>
<script>
  import {Radio} from 'mand-mobile'
  export default {
    name: "tg-radio",
    components: {
      [Radio.name]: Radio,
    },
    data() {
      return {
        currentValue: this.value,
        iconChecked: this.type === "button"?'':this.icon,
        iconInverseChecked: this.type === 'button'?'': this.iconInverse,
        iconPositionChecked: this.horizontal?"left":this.iconPosition,
        hasInputOptionChecked: this.horizontal?false:this.hasInputOption,
        optionRenderChecked: this.type === "button"?this.optionRenderButton:this.optionRender
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
      options: Array,
      defaultIndex: {
        type: Number,
        default: -1
      },
      invalidIndex: {
        type: [Number, Array],
        default() {
          return []
        },
      },
      hasInputOption: {
        type: Boolean,
        default: false
      },
      inputOptionLabel: {
        type: String,
        default: ''
      },
      inputOptionPlaceholder: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'radio-checked'
      },
      iconInverse: {
        type: String,
        default: 'radio'
      },
      iconPosition: {
        type: String,
        default: "left"
      },
      iconSize: {
        type: String,
        default: ''
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
      },
      optionRender: Function,
      title: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handerChange(value,index) {
        this.$emit("change", value, index);
      },
      optionRenderButton(item) {
        return `<button class="tg-radio-button">${item.text}</button>`
      }
    }
  }
</script>
<style lang="css">
  .tg-radio .tg-radio-title {
    position: relative;
    line-height: 20px;
    padding: 15px 17px;
    font-size: 16px;
    color: #13152D;
    background-color: #FFFFFF;
  }
  .tg-radio.is-required .tg-radio-title:before {
    position: absolute;
    top: 14px;
    left: 6px;
    z-index: 10;
    content: "*";
    font-family: SimSun;
    font-size: 14px;
    color: #EE3F15;
  }
  .tg-radio .md-field {
    padding: 0;
  }
  .tg-radio .md-field-item {
    color: #43454F;
  }
  .tg-radio .md-field-item .md-field-item-content {
    font-size: 14px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.icon-left .md-field-item-content {
    padding-left: 52px;
  }
  .tg-radio.is-horizontal .md-field .md-field-item.md-radio-item.icon-left .md-field-item-content {
    padding-left: 45px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item .md-field-item-content{
    padding-left: 17px;
    opacity: 1;
  }
  .tg-radio .md-field .md-field-item.md-radio-item .md-field-item-inner {
    min-height: 34px;
    padding: 8px 0;
  }
  .tg-radio .md-field .md-field-content .md-field-item .md-field-item-inner:before {
    background-color: #EDF2FB;
  }
  .tg-radio.is-horizontal .md-field .md-field-content .md-field-item .md-field-item-inner:before {
    display: none;
  }
  .tg-radio .md-field .md-field-content .md-field-item.md-radio-item.icon-left .md-field-item-inner:before {
    left: 52px;
  }
  .tg-radio .md-icon {
    width: 18px;
    height: 18px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.icon-left .md-icon {
    left: 17px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item .md-icon {
    right: 17px;
  }
  .tg-radio .md-input-item .md-input-item-title {
    font-size: 14px;
    width: 84px;
    height: 50px;
  }
  .tg-radio .md-input-item {
    min-height: 50px;
  }
  .tg-radio .md-input-item .md-input-item-control {
    min-height: 34px;
    padding: 8px 0;
  }
  .tg-radio .md-input-item .md-input-item-control .md-input-item-input {
    font-size: 14px;
    color: #43454F;
    height: 34px;
    padding-left: 52px;
  }
  .tg-radio.is-horizontal .md-field .md-field-content {
    flex-direction: initial;
  }
  .tg-radio.is-horizontal .md-field .tg-radio-button {
    position: relative;
    padding: 0 9px;
    color: #767A8C;
    border: 1px solid #C4C9D9;
    background-color: #FFFFFF;
    display: inline-block;
    height: 24px;
    line-height: 22px;
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.selected {
    color: #3B7BFF;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.disabled {
    color: #C4C9D9;
  }
  .tg-radio.is-horizontal.is-button .md-field .md-field-item.md-radio-item .md-field-item-content {
    padding: 0;
  }
  .tg-radio.is-button .md-field .md-field-item:not(:last-child) {
    margin-right: 17px;
  }
  .tg-radio.is-horizontal .md-field .md-field-item.selected .tg-radio-button {
    color: #FFFFFF;
    background: #3B7BFF;
    border-color: #3B7BFF;
    box-shadow: 0 2px 4px 0 #A9D2FF;
  }
  .tg-radio .md-radio .md-field .md-field-item.md-radio-item .md-icon {
    fill: #3B7BFF;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.disabled .md-icon {
    fill: #EDF2FB;
  }
</style>