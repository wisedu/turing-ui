<template>
  <div class="tg-popup">
    <van-popup
      v-model="visible"
      :position="position"
      :overlay="hasMask"
      :close-on-click-overlay="maskClosable"
      :lock-scroll="lockScroll"
      @click-overlay="maskHandleClick"
      :get-container="getContainer"
    >
      <slot></slot>
    </van-popup>
  </div>
</template>

<script>
  import { Popup } from 'vant';
  export default {
    name: "tg-popup",
    components: {
      [Popup.name]: Popup
    },
    data() {
      return {
        visible: this.value
      }
    },
    watch: {
      value: function(newValue){
        this.visible = newValue
      },
      visible: function(newValue){
        this.$emit('input',newValue)
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'center'
      },
      hasMask: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true,
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      getContainer: String
    },
    mounted () {
      
    },
    methods: {
      maskHandleClick: function(){
        this.$emit('mask-click')
      }
    }
  }
</script>
<style lang="css">
  .tg-popup .van-modal {
    background: rgba(19,21,45,0.50);
  }
  .tg-popup .van-popup {
    /*transform: translate(-50%,-50%);*/
  }
  .tg-popup .van-popup--bottom,.tg-popup .van-popup--top {
    /*transform: translate(-50%,0);*/
  }
  .tg-popup .van-popup--left,.tg-popup .van-popup--right {
    /*transform: translate(0,-50%);*/
    height: 100%;
    width: 60%;
  }
</style>