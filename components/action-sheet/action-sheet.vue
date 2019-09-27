<template>
  <div class="tg-action-sheet">
      <tg-popup
        v-model = "visible"
        :mask-closable = "maskClosable"
        position="bottom"
        @mask-click="maskClick">
        <van-actionsheet
          v-model="visible"
          :actions="getData()"
          :get-container="getContainer"
          :overlay="false"
          :title="title"
          :close-on-click-overlay="maskClosable" 
          :cancel-text="cancelTxt"
          @select="handleSelect"
          @cancel="handleCancel"
        />
      </tg-popup>
  </div>
</template>
<script>
  import { Actionsheet } from 'vant';
  export default {
    name: "tg-action-sheet",
    components: {
      [Actionsheet.name]: Actionsheet
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
        console.log(newValue)
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
      maskClosable: {
        type: Boolean,
        default: true
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      getContainer: [String, Function]
    },
    methods: {
      getData() {
        return this.data.map(function(item) {
          item.name = item.content;
          item.className = item.class;
          if(item.align) item.className = item.className + " " + item.align
          return item
        })
      },
      handleCancel() {
        this.$emit("cancel");
      },
      handleSelect(item, index) {
        this.$emit("select", item, index);
        this.visible = false;
      },
      maskClick() {
        this.$emit("mask-click")
      },
    }
  }
</script>
<style lang="css">
  .tg-action-sheet .van-actionsheet {
    position: relative;
  }
  .tg-action-sheet .van-actionsheet .van-actionsheet__item--disabled {
    color: #C4C9D9;
  }
  .tg-action-sheet .van-actionsheet .van-actionsheet__item.left {
    text-align: left;
    padding: 0 16px;
  }
  .tg-action-sheet .van-actionsheet .van-actionsheet__item.right {
    text-align: right;
    padding: 0 16px;
  }
</style>