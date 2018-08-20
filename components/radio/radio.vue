<template>
  <div class="tg-radio" :class="{'is-horizontal':horizontal}">
    <md-radio
      v-model="currentValue"
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
  import loadSprite from './load-spirte'
  export default {
    name: "tg-radio",
    components: {
      [Radio.name]: Radio,
    },
    data() {
      return {
        currentValue: this.value,
        iconChecked: this.type === "button"?'':this.icon,
        iconInverseChecked: this.type === 'button'?'':this.iconInverse,
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
        default: 'plus'
      },
      iconInverse: {
        type: String,
        default: 'circle'
      },
      iconPosition: {
        type: String,
        default: "left"
      },
      iconSize: {
        type: String,
        default: 'tg-sm'
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
      },
      optionRender: Function
    },
    methods: {
      handerChange(value,index) {
        this.$emit("change", value, index);
      },
      optionRenderButton(item) {
        return `<button class="tg-radio-button">${item.text}</button>`
      }
    },
    mounted() {
      loadSprite()
    },
  }
</script>
<style lang="css">
  .tg-radio .md-field {
    padding: 0;
  }
  .tg-radio .md-field-item .md-field-item-content {
    font-size: 14px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item.icon-left .md-field-item-content {
    padding-left: 52px;
  }
  .tg-radio .md-field .md-field-item.md-radio-item .md-field-item-content {
    padding-left: 17px;
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
  .tg-radio .md-icon.tg-sm {
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

</style>