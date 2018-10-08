<template>
  <div class="tg-textarea-wraper" :class="{'is-readonly': readonly,'is-disabled': disabled,'is-autosize': autosize,'is-validatefail': validateFail&&!readonly&&!disabled}">
    <pre  class="pre" ref="pre" v-if="autosize">{{inputValue.length?inputValue:placeholder}}</pre>
    <textarea
      class="tg-textarea"
      v-model="inputValue"
      :placeholder="placeholder"
      :maxlength="maxlengthCheck"
      :readonly="readonly"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handerChange">
    </textarea>
    <div class="tg-textarea-count" v-if="indicator || count>=Math.floor(maxlength*0.9)"><span :class="'tg-textarea-count-'+countType">{{count}}</span>/{{maxlength}}</div>
  </div>
</template>
<script>
  export default {
    name: "tg-textarea",
    data() {
      return {
        inputValue: this.value,
        isfocus: false,
        count: 0,
        easycheck: true, 
        maxlengthCheck: this.maxlength
      }
    },
    watch: {
      value(newValue) {
        this.inputValue = newValue
      },
      inputValue(newValue,oldValue) {
        this.checkCount(newValue,oldValue);
        this.$emit("input", newValue)
      }
    },
    computed: {
      countType(){
        return this.count>this.maxlength?"error":"normal";
      }
    },
    props: {
      value: {},
      placeholder: {
        type: String,
        default: '请输入'
      },
      maxlength: {
        type: Number,
        default: 100
      },
      indicator: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      autosize: {
        type: Boolean,
        default: false
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
      handerChange(e) {
        this.$emit("change", this.inputValue, e)
      },
      checkCount(val,old) {
        if(val===undefined){
          if (this.easycheck === false) this.maxlengthCheck = this.maxlength;
          this.count=0;
          return
        }
        if (this.easycheck === false) {
          let reg = /[^\x00-\xff]/ig;
          let count = 0;
          let self = this;
          this.maxlengthCheck = this.maxlength;
          val.split('').forEach(function(code){
            if (code.match(reg) !== null) {
              count += 2;
              self.maxlengthCheck -=1;
            } else {
              count ++;
            }
          });
          this.count = count;
        } else {
          this.count = val.length;
        }
      }
    },
    created(){
      this.checkCount(this.value);
    }
  }
</script>
<style lang="css">
  .tg-textarea-wraper {
    position: relative;
    color: #43454F;
    background-color: #fff;
    padding: 17px 17px 10px 17px;
    box-shadow: inset 0 -1px 0 0 #EDF2FB;
  }
  .tg-textarea-wraper.is-autosize textarea{
    position: absolute;
    top: 17px;
    left: 17px;
    width: calc(100% - 34px);
    min-height: 40px;
    height: calc(100% - 53px);
  }
  .pre {
    font-family: monospace;
    font-size: 14px;
    visibility:hidden;
    word-break:break-all;
    white-space: pre-wrap;
    min-height: 40px;
    line-height: 20px;
  }
  .tg-textarea {
    color: inherit;
    display: block;
    width: 100%;
    height: 67px;
    font-size: 14px;
    line-height: 20px;
  }
  textarea::-webkit-input-placeholder {
    color: #C4C9D9;
  }
  .tg-textarea-wraper.is-validatefail  textarea::-webkit-input-placeholder {
    color: #EE3F15;
  }
  .tg-textarea-wraper.is-readonly {
    color: #767A8C;
  }
  .tg-textarea-wraper.is-disabled,.tg-textarea-wraper .tg-textarea-count-normal{
    color: #C4C9D9;
  }
  .tg-textarea-count {
    text-align: right;
    margin-top: 10px;
    font-size: 12px;
    color: #C4C9D9;
  }
  .tg-textarea-count-normal {
    color: #767A8C;
  }
  .tg-textarea-count-error {
    color: #EE3F15;
  }
</style>