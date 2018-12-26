<template>
  <div v-if="!isView" class="tg-textarea-wraper" :class="[{'is-readonly': readonly,'is-disabled': disabled,'is-required':required,'is-autosize': autosize,'is-validatefail': validateFail&&!readonly&&!disabled}]">
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
  <!-- 与cell组件组合使用 -->
  <tg-cell v-else class="tg-cell-textarea" 
            :title="title" 
            customized 
            :baseline="direction ==='horizontal'" 
            :solid="direction ==='horizontal'" 
            :column="direction ==='vertical'" 
            :required="required" 
            :readonly="readonly"
            :disabled="disabled">
    <div class="tg-textarea-wraper" :class="[{'is-readonly': readonly,'is-disabled': disabled,'is-autosize': autosize,'is-validatefail': validateFail&&!readonly&&!disabled}]">
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
  </tg-cell>
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
      },
      isView: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
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
  }
  .tg-textarea-wraper.is-autosize textarea{
    position: absolute;
    top: 17px;
    left: 17px;
    width: calc(100% - 34px);
    min-height: 40px;
    height: calc(100% - 53px);
  }
  .tg-textarea-wraper.is-required:before {
    position: absolute;
    top: 26px;
    left: 6px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 10;
    content: "*";
    font-family: SimSun;
    font-size: 14px;
    color: #EE3F15;
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
    color: #43454F;
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
  .tg-textarea-wraper.is-readonly>textarea{
    color: #767A8C;
  }
  .tg-textarea-wraper.is-disabled>textarea,.tg-textarea-wraper .tg-textarea-count-normal{
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
  .tg-cell-textarea.tg-cell.is-baseline.is-require:before, .tg-cell-textarea.tg-cell.is-column.is-require:before {
    top: 26px;
  }
</style>