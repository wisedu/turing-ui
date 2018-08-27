<template>
  <div class="tg-cell-group">
    <md-field
      :title="title">
      <slot></slot>
    </md-field>
  </div>
</template>
<script>
  import { Field } from 'mand-mobile'
  export default {
    name: "tg-cell-group",
    components: {
      [Field.name]: Field
    },
    data() {
      return {
        //
      }
    },
    props: {
      title: String
    }
  }
</script>
<style lang="css">
  .tg-cell-group .md-field .md-field-title {
    font-size: 12px;
    color: #C4C9D9;
    background: #EDF2FB;
    line-height: 15px;
    padding: 10px 0 5px 17px;
  }
  .tg-cell-group .md-field .md-field-content .md-field-item {
    padding-left: 17px;
    padding-right: 17px;
  }
  .tg-cell-group .md-field-content .tg-cell:not(:last-child) .md-field-item-inner {
    box-shadow: inset 0 -1px 0 0 #EDF2FB;
  }
  .tg-cell-group .tg-cell .md-field-item .md-field-item-inner {
    padding: 8px 0px;
  }
  .tg-cell-group .tg-cell .md-field-item .md-field-arrow {
    right: 34px;
  }
</style>