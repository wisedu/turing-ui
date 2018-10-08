<template>
  <div class="tg-input" :class="[{'is-column':isfocus||column,'is-active': column&&isfocus,'is-validatefail': !column&&validateFail&&!readonly&&!disabled,'is-validate': validate,'is-validate-icon': eye&&clearable&&(validate|| column)}]">
    <cube-input 
      v-model="inputValue"
      v-bind="$props"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :clearable="clearable"
      invisible
      :eye="eye"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="changeHander">
      <slot name="prepend" slot="prepend" v-if="!column"></slot>
      <slot name="append" slot="append" v-if="!column"></slot>
      <div slot="prepend" v-if="isfocus||column&&inputValue.length>0">{{placeholder}}</div>
      <div slot="append" v-if="column">{{validateInfo}}</div>
      <div slot="append" v-if="validate&&validateInfo" style="margin-top: -5px;">{{validateInfo}}</div>
    </cube-input>
  </div>
</template>

<script>
  import { Input } from 'cube-ui';
  import 'cube-ui/lib/input/style.css';
  export default {
    name: "tg-input",
    components: {
      [Input.name]: Input
    },
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
        default: '请输入'
      },
      autofocus: {
        type: Boolean,
        default: false
      },
      autocomplete: {
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
      },
      validate: {
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
    position: relative;
    margin: 0;
    color: #EE3F15;
    font-size: 12px;
    line-height: 16px;
    width: 100%;
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
  .tg-input .cube-input-clear,.tg-input .cube-input-eye {
    color: #C4C9D9;
    font-size: 16px;
    padding: 10px 17px;
  }
  .tg-input .cube-input-clear i,.tg-input .cube-input-eye i {
    font-family:"iconfont" !important;
    font-size:16px;
    transform: scale(1);
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .tg-input .cube-input-clear+.cube-input-eye {
    position: relative;
  }
  .tg-input .cube-input-clear+.cube-input-eye:before {
    content: '';
    position: absolute;
    left: 8px;
    width: 1px;
    height: 16px;
    background-color: #767A8C; 
  }
  .tg-input .cube-input-clear i:before {
    content: "\e62a";
  }
  .tg-input .cube-input-eye .cubeic-eye-visible:before {
    content: "\e62b";
  }
  .tg-input .cube-input-eye .cubeic-eye-invisible:before {
    content: "\e62c";
  }
  .tg-cell .tg-input .cube-input-clear,.tg-cell .tg-input .cube-input-eye {
    color: #C4C9D9;
    font-size: 16px;
    padding: 9px 0 9px 17px;
  }
  .tg-cell .tg-input.is-validate .cube-input {
    align-items: flex-start;
    flex-direction: column;
  }
  .tg-cell .tg-input.is-validate .cube-input .cube-input-append {
    position: relative;
    margin-left: 0;
    color: #EE3F15;
    font-size: 12px;
    line-height: 16px;
    width: 100%;
  }
  .tg-cell .tg-input.is-validate .cube-input .cube-input-field {
    width: calc( 100% - 33px);
  }
  .tg-cell .tg-input.is-validate-icon .cube-input .cube-input-field {
    width: calc( 100% - 66px);
  }
  .tg-cell .tg-input.is-validate .cube-input .cube-input-append .cube-input-clear, .tg-cell .tg-input.is-validate .cube-input .cube-input-append .cube-input-eye {
    position: absolute;
    right: 0;
    top: -34px;
  }
  .tg-cell .tg-input.is-column .cube-input .cube-input-append .cube-input-clear, .tg-cell .tg-input.is-column .cube-input .cube-input-append .cube-input-eye {
    position: absolute;
    right: 0;
    top: -27px;
  }
  .tg-cell .tg-input.is-validate-icon .cube-input .cube-input-append div.cube-input-clear {
    right: 33px;
  }
</style>