<template>
  <div class="tg-cell" :class="[{'is-require':required,'is-baseline':baseline, 'is-readonly': readonly, 'is-nolabel': isNoLabel, 'is-column': column}]">
    <md-field-item
      :name="name"
      :title="title"
      :arrow="arrow"
      :value="value"
      :align="align"
      :brief="brief"
      :solid="solid"
      :customized="customized"
      :disabled="disabled"
      @click="onClick">
      <slot></slot>
      <slot name="left" slot="left"></slot>
      <slot name="right" slot="right"></slot>
    </md-field-item>
  </div>
</template>

<script>
  import { FieldItem } from 'mand-mobile'
  export default {
    name: "tg-cell",
    components: {
      [FieldItem.name]: FieldItem
    },
    data() {
      return {
        //
      }
    },
    props: {
      name: [String,Number],
      title: {
        type: String,
        default: ''
      },
      brief: String,
      value: String,
      arrow: String,
      align: String,
      disabled: Boolean,
      solid: Boolean,
      customized: Boolean,
      required: {
        type: Boolean,
        default: false
      },
      baseline: {
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default: false
      },
      column: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isNoLabel: function(){
        return this.title.length?false:true;
      }
    },
    methods: {
      onClick(name){
        if(this.readonly) return
        this.$emit('click',name)
      }
    }
  }
</script>
<style lang="css">
  .tg-cell {
    position: relative;
  }
  .tg-cell.is-require:before {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    z-index: 10;
    content: "*";
    font-family: SimSun;
    font-size: 14px;
    color: #EE3F15;
  }
  .tg-cell.is-baseline.is-require:before,.tg-cell.is-column.is-require:before {
    top: 17px;
  }
  .tg-cell.is-baseline .md-field-item .md-field-item-inner{
    align-items: baseline
  }
  .tg-cell.is-column .md-field-item-inner {
    flex-direction: column;
  }
  .tg-cell.is-column .md-field-item-inner .md-field-item-label{
    width: 100%;
    margin-top: 9px;
  }
  .tg-cell.is-column .md-field-item-inner .md-field-item-content.left{
    width: 100%;
    margin-left: 0;
  }
  .tg-cell.is-readonly .md-field-item {
    color: #767A8C;
  }
  .tg-cell .md-field-item {
    color: #43454F;
  }
  .tg-cell .md-field-item .md-field-item-inner {
    min-height: 50px;
    padding: 8px 17px;
  }
  .tg-cell .md-field-item .md-field-item-extra {
    margin-right: 4px;
  }
  .tg-cell .md-field-item .md-field-item-label.solid {
    flex-basis: 84px;
    flex-shrink: 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .tg-cell .md-field-item .md-field-item-label .md-field-item-title {
    font-size: 14px;
    line-height: normal;
    word-break: break-all;
  }
  .tg-cell .md-field-item .md-field-item-label .md-field-item-brief {
    font-size: 12px;
    color: #C4C9D9;
  }
  .tg-cell .md-field-item .md-field-item-content {
    font-size: 14px;
  }
  .tg-cell .md-field-item .md-field-item-content.left {
    margin-left: 19px;
  }
  .tg-cell.is-nolabel .md-field-item .md-field-item-content.left{
    margin-left: 0;
  }
  .tg-cell .md-field-item.has-arrow .md-field-item-content {
    padding-right: 0;
    margin-right: 14px;
  }
  .tg-cell .md-field-item .md-field-arrow {
    color: #C4C9D9;
    width: 21px;
    height: 21px;
    right: 51px;
  }
  .tg-cell .md-field-item.disabled .md-field-item-inner .md-field-item-content,.tg-cell .md-field-item.disabled .md-field-item-inner .md-field-item-label {
    opacity: 1;
    color: #C4C9D9;
  }
  .tg-cell .tg-input{
    width: 100%;
  }
  .tg-cell .tg-input .cube-input-field {
    padding: 7px 0;
  }
  .tg-cell .tg-input .cube-input::after{
    border: none;
  }
  .tg-cell .tg-input.is-column .cube-input {
    padding: 0;
  }
  .tg-cell .tg-input.is-column .cube-input-prepend {
    line-height: 1;
  }
  .tg-cell .md-field-item .md-field-item-content .tg-input.is-column  .cube-input-field {
    padding: 0;
  }
  .tg-cell .tg-textarea-wraper {
    padding: 9px 0 2px;
    width: 100%;
    box-shadow: none;
  }
  .tg-cell .tg-textarea-wraper.is-autosize  textarea{
    top: 9px;
    left: 0;
    width: 100%;
    height: calc(100% - 37px);
  }
  .tg-cell .tg-radio .md-radio .md-field-item.md-radio-item .md-field-item-inner{
    padding: 0;
  }
  .tg-cell .md-field-item.has-arrow::after {
    position: static;
  }
</style>