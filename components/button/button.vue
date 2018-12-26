<template>
    <van-button 
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
      :class="['tg-btn-' + type]"
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
  .tg-button.tg-btn-primary {
    background-color: #3B7BFF;
    border-color: #3B7BFF;
    color: #FFFFFF;
  }
  .tg-button.tg-btn-success {
    background-color: #17BF6A;
    border-color: #17BF6A;
    color: #FFFFFF;
  }
  .tg-button.tg-btn-warning {
    background-color: #FF9900;
    border-color: #FF9900;
    color: #FFFFFF;
  }
  .tg-button.tg-btn-danger {
    background-color: #EE3F15;
    border-color: #EE3F15;
    color: #FFFFFF;
  }
  .tg-button.van-button--disabled {
    border-color: #C4C9D9;
  }
  .tg-button.van-button--plain {
    background-color: #FFFFFF;
  }
  .tg-button.van-button--plain.tg-btn-primary {
    color: #3B7BFF;
  }
  .tg-button.van-button--plain.tg-btn-success {
    color: #17BF6A;
  }
  .tg-button.van-button--plain.tg-btn-warning {
    color: #FF9900;
  }
  .tg-button.van-button--plain.tg-btn-danger {
    color: #EE3F15;
  }
</style>