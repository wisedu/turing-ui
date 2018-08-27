<template>
  <div class="tg-progress" :class="{'is-line':type=='line'}">
    <van-progress 
      :percentage="currentValue"
      :show-pivot="showText"
      :pivot-text="text"
      :color="color"
      v-if="type == 'line'"
    />
    <van-circle v-if="type=='circle'"
      v-model="currentValue"
      :rate="currentValue"
      :speed="speed"
      :text="text"
      :color="color"
      :size="size"
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
      color: {
        type: String,
        default: '#3B7BFF'
      },
      speed: Number,
      size: {
        type: String,
        default: '74px'
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
</style>