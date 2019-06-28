<template>
  <div class="tg-header">
    <van-nav-bar
      :title="title"
      :left-text="leftText"
      :right-text="rightText"
      :left-arrow="leftArrow"
      :fixed="fixed"
      :border="border"
      :z-index="zIndex"
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <slot slot="title"></slot>
      <slot name="left" slot="left"></slot>
      <slot name="right" slot="right"></slot>
    </van-nav-bar>
  </div>
</template>
<script>
import { NavBar } from 'vant';
import 'vant/lib/nav-bar/style';
export default {
  name: 'tg-header',
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onClickLeft(){
      this.$emit('click-left')
    },
    onClickRight(){
      this.$emit('click-right')
    }
  }
};
</script>
<style lang="css">
  .tg-header .van-nav-bar {
  	height: 50px;
  	line-height: 50px;
  }
  .tg-header .van-nav-bar .van-nav-bar__title{
  	font-size: 18px;
  	font-weight: bold;
  }
  .tg-header .van-nav-bar .van-icon {
    color: #C4C9D9;
  }
  .tg-header .van-nav-bar__text {
  	color: #43454F;
  }
</style>