<template>
  <div class="tg-stepper">
    <md-stepper
      v-model="currentValue"
      :step="step"
      :min="min"
      :max="max"
      :disabled="disabled"
      :read-only="readOnly||disabled"
      :is-integer="isInteger"
      :default-value="defaultValue"
      @change="handerChange"
    ></md-stepper>
  </div>
</template>
<script>
  import {Stepper } from 'mand-mobile'
  export default {
    name: "tg-stepper",
    components: {
      [Stepper.name]: Stepper,
    },
    data() {
      return {
        currentValue: this.value
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
      defaultValue: {
        type: [String,Number],
        default: ''
      },
      step: {
        type: [String,Number],
        default: 1
      },
      min: {
        type: [String,Number],
        default: -Infinity
      },
      max: {
        type: [String,Number],
        default: Infinity
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readOnly: {
        type: Boolean,
        default: false
      },
      isInteger: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handerChange(value) {
        this.$emit("change", value);
      }
    }
  }
</script>
<style lang="css">
  .tg-stepper .md-stepper {
    font-size: 14px;
    color: #43454F;
    height: 24px;
  }
  .tg-stepper .md-stepper .md-stepper-button {
    width: 24px;
    height: 24px;
    background: #EDF2FB;
  }
  .tg-stepper .md-stepper .md-stepper-button:after {
    width: 12px;
    height: 1px;
    background: #767A8C;
  }
  .tg-stepper .md-stepper .md-stepper-button.md-stepper-button-add:before{
    width: 1px;
    height: 12px;
    background: #767A8C;
  }
  .tg-stepper .md-stepper .md-stepper-number {
    min-width: 30px;
    height: 24px;
    background: #EDF2FB;
    margin: 0 3px;
    padding: 0 3px;
  }
  .tg-stepper .md-stepper.disabled .md-stepper-number {
    background: #F7FAFF;
  }
  .tg-stepper .md-stepper .md-stepper-number input {
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    background: #EDF2FB;
  }
  .tg-stepper .md-stepper.disabled .md-stepper-number input {
    color: #C4C9D9;
    background: #F7FAFF;
  }
</style>