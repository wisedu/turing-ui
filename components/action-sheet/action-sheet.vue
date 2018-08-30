<template>
  <div class="tg-action-sheet">
      <cube-action-sheet
        v-model="visible"
        :data="data"
        :title="title"
        :active="active"
        :maskClosable="maskClosable"
        :cancelTxt="cancelTxt"
        @select="handleSelect"
        @cancel="handleCancel">  
      </cube-action-sheet>
  </div>
</template>
<script>
  import { ActionSheet } from 'cube-ui';
  import 'cube-ui/lib/action-sheet/style.css';
  export default {
    name: "tg-action-sheet",
    components: {
      [ActionSheet.name]: ActionSheet
    },
    data() {
      return {
        visible: false,
        title: ''
      }
    },
    watch: {
      value(newValue) {
        this.visible = newValue
      },
      visible(newValue) {
        this.$emit("input", newValue)
      }
    },
    props: {
      value:{
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: []
      },
      active: {
        type: Number,
        default: -1
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      cancelTxt: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      handleCancel() {
        this.$emit("cancel")
      },
      handleSelect(item, index) {
        this.$emit("select", item, index)
      },
    }
  }
</script>
<style lang="css">
  .tg-action-sheet .cube-popup-mask {
    background-color: #13152D;
    opacity: 0.5;
  }
  .tg-action-sheet .cube-action-sheet-cancel span, .tg-action-sheet .cube-action-sheet-item, .tg-action-sheet .cube-action-sheet-title {
    font-size: 14px;
    color: #43454F;
    padding: 18px 17px;
  }
  .tg-action-sheet .cube-action-sheet-item.cube-action-sheet-item_active {
    color: #EE3F15;
  }
  .tg-action-sheet .cube-action-sheet-item:after, .tg-action-sheet .cube-action-sheet-title:after {
    content: "";
    display: block;
    position: absolute;
    border-bottom: 1px solid #EDF2FB;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-transform-origin: 0 bottom;
    transform-origin: 0 bottom;
  } 
  .tg-action-sheet .border-bottom-1px {
    position: relative;
  }
</style>