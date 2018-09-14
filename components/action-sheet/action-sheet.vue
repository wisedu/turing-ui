<template>
  <div class="tg-action-sheet">
      <tg-popup
        v-model = "visible"
        :mask-closable = "maskClosable"
        position="bottom"
        @mask-click="maskClick">
        <cube-action-sheet
          v-model="visible"
          :data="data"
          :title="title"
          :active="active"
          :maskClosable="maskClosable"
          :z-index="zIndex"
          :cancelTxt="cancelTxt"
          @select="handleSelect"
          @cancel="handleCancel">  
        </cube-action-sheet>
      </tg-popup>
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
      },
      zIndex: {
        type: Number,
        default: 100
      }
    },
    methods: {
      handleCancel() {
        this.$emit("cancel")
      },
      handleSelect(item, index) {
        this.$emit("select", item, index)
      },
      maskClick() {
        this.$emit("mask-click")
      },
    }
  }
</script>
<style lang="css">
  .tg-action-sheet .cube-popup {
    position: relative;
  }
  .tg-action-sheet .cube-popup-container {
    position: static;
    transform: none;
    height: initial;
  }
  .tg-action-sheet .cube-popup-content {
    position: static;
    transform: none;
  }
  .tg-action-sheet .cube-popup-mask {
    display: none!important;
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
  .tg-action-sheet .cube-action-sheet-content {
    max-height: 300px;
    overflow: scroll;
  }
  .tg-action-sheet .cube-action-sheet-space {
    height: 5px;
    background-color: rgba(19,21,45,0.50);
  }
</style>