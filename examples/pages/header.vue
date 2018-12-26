<template>
  <div class="demo-header">
    <p >标准用法:</p>
    <tg-header title="标题title"></tg-header>
    <tg-header>标题slot</tg-header>
    <p >左侧箭头用法:</p>
    <tg-header title="标题" left-arrow></tg-header>
    <p >左右侧功能文本用法:</p>
    <tg-header title="标题" left-arrow left-text="返回" @click-left="clickLeftHandle"></tg-header>
    <tg-header title="标题" right-text="返回" @click-right="clickRightHandle"></tg-header>
    <p >是否带下边框用法:</p>
    <tg-header title="标题" :border="false"></tg-header>
    <p >是否带下边框用法:<button @click="toggleHandle" style="color:#000">{{btnTxt}}</button></p>
    <tg-header title="标题" :fixed="fixed"></tg-header>
    <p >设置<span style="color:#000"> (z-index) </span>属性:></p>
    <tg-header title="z-index:2" :z-index="2"></tg-header>
    <p >自定义左右侧容器:></p>
    <tg-header title="标题">
      <tg-button type="success" slot="left" @click="clickLeftHandle">返回</tg-button>
      <tg-button type="primary" slot="right" @click="clickRightHandle">分享</tg-button>
    </tg-header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      position: '',
      btnTxt: '设置fixed',
      fixed: false
    }
  },
  watch: {
    
  },
  methods: {
    clickLeftHandle(){
      alert('left')
    },
    clickRightHandle(){
      alert('right')
    },
    toggleHandle(){
      if(this.btnTxt === '设置fixed'){
        this.btnTxt = '重置';
        this.fixed = true;
      }else{
        this.btnTxt = '设置fixed';
        this.fixed = false;
      }
    }
  },
  mounted() {

  }
}
</script>
<style>
.demo-header {
  overflow: hidden;
  background: #EDF2FB;
}
.demo-header>p {
  padding-left: 17px;
  font-size: 12px;
  color: #C4C9D9;
  padding: 5px 17px;
}
</style>