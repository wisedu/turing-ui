<template>
    <van-button 
      :type="type"
      :tag="tag"
      :size="size"
      :native-type="nativeType"
      :plain="plain"
      :disabled="disabled"
      :loading="loading"
      :block="block"
      :square="square"
      @click="handleClick"
      class="tg-button"
    ><slot>{{ text }}</slot></van-button>
</template>
<script>
  import { Button } from 'vant';
  export default {
    name: "tg-button",
    components: {
      [Button.name]: Button
    },
    data() {
      return {
        //
      }
    },
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'default'
      },
      text: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
      },
      nativeType: {
        type: String,
        default: ''
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      square: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(e) {
        this.$emit("click",e)
      }
    }
  }
</script>
<style lang="css">
  .tg-button.van-button {
    height: 36px;
    line-height: 34px;
  }
  .tg-button.van-button--default {
    color: #43454F;
    border-color: #EDF2FB;
  }
  .tg-button.van-button--small {
    height: 25px;
    line-height: 23px;
    padding: 0 5px;
  }
  .tg-button.van-button--normal {
    padding: 0 8px;
    min-width: 112px;
  }
  .tg-button.van-button--large {
    padding: 0 15px;
    height: 50px;
    line-height: 48px;
    font-size: 18px;
  }
  .tg-button.van-button:before {
    background-color: #E6F0FF;
    border-color: #E6F0FF;
  }
  .tg-button.van-button:active::before {
    opacity: 0.35;
  }
  .tg-button.van-button--primary {
    background-color: #3B7BFF;
    border-color: #3B7BFF;; 
  }
  .tg-button.van-button.van-button--primary:before {
    background-color: #003EA8;
    border-color: #003EA8; 
  }
  .tg-button.van-button--disabled {
    background-color: #C4C9D9;
    color: #EDF2FB;
    border-color: #C4C9D9;
  }
  .tg-button.van-button--default.van-button--disabled,.tg-button.van-button.van-button--plain.van-button--disabled {
    background-color: #FFFFFF;
    color: #E9EAEC;
  }
  .tg-button.van-button--plain {
    background-color: #FFFFFF;
  }
  .tg-button.van-button--plain.van-button--primary {
    color: #3B7BFF;
  }
  .tg-button.van-button.van-button--plain.van-button--primary:before {
    background-color: #E6F0FF;
    border-color: #E6F0FF;
  }
</style>