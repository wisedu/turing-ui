<template>
  <div class="tg-progress" :class="objectClass">
    <van-progress 
      :percentage="currentValue"
      :show-pivot="showText"
      :pivot-text="text"
      :pivot-color="pivotColor"
      :text-color="textColor"
      :color="currentColor"
      v-if="type == 'line'"
    />
    <van-circle v-if="type=='circle'"
      v-model="currentValue"
      :rate="currentValue"
      :speed="speed"
      :text="text"
      :fill="fill"
      :layerColor="stroke"
      :color="currentColor"
      :size="size"
      :strokeWidth="strokeWidth"
    />   
  </div>
</template>
<script>
  import { Progress,Circle } from 'vant';
  export default {
    name: "tg-progress",
    components: {
      [Progress.name]: Progress,
      [Circle.name]: Circle,
    },
    data() {
      return {
        currentValue: this.value,
        textColor: "#fff", // 进度条文字颜色
        pivotColor: this.currentColor  // 进度条文字背景颜色
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
      type: {
        type: String,
        default: 'line'
      },
      text: {
        type: String,
        default: ''
      },
      showText: {
        type: Boolean,
        default: true
      },
      inactive: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#3B7BFF'
      },
      speed: Number,
      size: {
        type: String,
        default: '74px'
      },
      fill: {
        type: String,
        default: "white"
      },
      stroke: {
        type: String,
        default: "#EDF2FB"
      },
      strokeWidth: {
        type: Number,
        default: 40
      },
      clockwise: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      currentColor(){
        return this.inactive ? '#C4C9D9' : this.color;
      },
      objectClass(){
        return this.type === 'line'?'is-line':'is-circle'
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
  .tg-progress.is-line {
    height: 50px;
    padding: 0 17px;
  }
  .tg-progress.is-line .van-progress {
    top: 23px;
  }
  .tg-progress .van-progress {
    background: #EDF2FB;
  }
  .tg-progress.is-circle {
    display: inline-block;
  }
  .tg-progress .van-circle {
    display: block;
    margin: 0 auto;
  }
</style>