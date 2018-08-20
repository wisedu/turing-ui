<template>
  <div class="tg-input" :class="{'is-column':isfocus||column,'is-active': column&&isfocus,'is-validatefail': !column&&validateFail&&!readonly&&!disabled}">
    <cube-input 
      v-model="inputValue"
      v-bind="$props"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :clearable="clearable"
      :eye="eye"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander">
      <slot name="prepend" slot="prepend" v-if="!column"></slot>
      <slot name="append" slot="append" v-if="!column"></slot>
      <div slot="prepend" v-if="isfocus||column&&inputValue.length>0">真实名字</div>
      <div slot="append" v-if="validateFail&&column">{{validateInfo}}</div>
    </cube-input>
  </div>
</template>

<script>
  export default {
    name: "tg-input",
    data() {
      return {
        inputValue: this.value,
        isfocus: false
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue) {
        this.$emit("input", newValue)
      }
    },
    props: {
      value: {},
      type: {
        type: String,
        default: 'text'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: Number,
        default: 60
      },
      placeholder: {
        type: String,
        default: ''
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      eye: {
        type: [Boolean,Object],
        default: false
      },
      column: {
        type: Boolean,
        default: false
      },
      validateInfo: {
        type: String,
        default: ''
      },
      validateFail: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleFocus(e) {
        if(this.column) this.isfocus = true;
        this.$emit("focus", this.inputValue, e)
      },
      handleBlur(e) {
        if(this.column) this.isfocus = false;
        this.$emit("blur", this.inputValue, e)
      },
      changeHander(e) {
        this.$emit("change", this.inputValue, e)
      }
    }
  }
</script>
<style lang="css">
  .tg-input .cube-input-field{
    color: #43454F;
    font-size: 14px;
  }
  .tg-input input[readonly].cube-input-field{
    color: #767A8C;
  }
  .tg-input input[disabled].cube-input-field{
    color: #C4C9D9;;
  }
  .tg-input .cube-input_active::after {
    border-color: transparent;
  }
  .tg-input.is-column .cube-input {
    flex-direction: column;
    align-items: flex-start;
  }
  .tg-input.is-column .cube-input {
    padding: 8px 0 7px 17px;
  }
  .tg-input.is-column .cube-input-prepend {
    color: #C4C9D9;
    font-size: 12px;
    line-height: 16px;
  }
  .tg-input.is-column .cube-input-field {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  .tg-input.is-column .cube-input-append {
    margin: 0;
    color: #EE3F15;
    font-size: 12px;
    line-height: 16px;
  }
  .tg-input.is-active .cube-input-prepend {
    color: #3B7BFF ;
  }
  .tg-input input::-webkit-input-placeholder {
    color: #C4C9D9!important;
  }
  .tg-input.is-validatefail input::-webkit-input-placeholder {
    color: #EE3F15!important;
  }
</style>