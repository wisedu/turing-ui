<template>
  <div class="tg-switch">
    <van-switch 
      v-model="currentValue"
      :disabled="disabled"
      :size="size"
      @change="handerChange">
    </van-switch>
  </div>
</template>
<script>
  import { Switch } from 'vant';
  export default {
    name: "tg-switch",
    components: {
      [Switch.name]: Switch
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
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: '24px'
      }
    },
    methods: {
      handerChange() {
        this.$emit("change", this.currentValue)
      }
    }
  }
</script>
<style lang="css">
  .tg-switch .van-switch {
    background-color: #C4C9D9;
    display: block;
  }
  .tg-switch .van-switch--on {
    background-color: #3B7BFF;
  }
  .tg-switch .van-switch__node {
    width: 0.8em;
    height: 0.8em;
    top: 0.1em;
    left: 0.1em;
    box-shadow: none;
  }
</style>