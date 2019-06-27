<template>
  <div class="tg-search">
    <van-search
      v-model="currentValue"
      :placeholder="placeholder"
      :background="background"
      :show-action="showAction"
      @cancel="$emit('cancel')"
      @focus="handlerFocus"
      @blur="handlerBlur"
      @input="handleChange"
      >
      <slot name="actionBtn" slot="action"></slot>
    </van-search>
  </div>
</template>
<script>
  import { Search } from 'vant';
  import 'vant/lib/search/style';
  export default {
    name: "tg-search",
    components: {
      [Search.name]: Search,
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
      placeholder: {
        type: String,
        default: '请输入'
      },
      showAction: {
        type: Boolean,
        default: false
      },
      background: {
        type: String,
        default: '#FFFFFF'
      }
    },
    methods: {
      handlerFocus(e) {
        this.$emit("focus", this.currentValue, e);
      },
      handlerBlur(e) {
        this.$emit("blur", this.currentValue, e);
      },
      handleChange(value) {
        this.$emit("change", value);
      }
    }
  }
</script>
<style lang="css">
  .tg-search .van-search {
    padding: 9px 17px;
  }
  .tg-search .van-search .van-search__content {
    padding: 0;
  }
  .tg-search .van-search.van-search--show-action {
    padding: 9px 0 9px 17px; 
  }
  .tg-search .van-search .van-cell {
    background: #EDF2FB;
    border-radius: 6px;
    color: #43454F;
    padding: 4px 5px 4px 5px;
  }
  .tg-search .van-search .van-icon-search {
    font-size: 14px;
    color: #C4C9D9;
  }  
  .tg-search .van-search .van-icon-clear {
    color: #C4C9D9;
    padding: 0 5px;
    right: 5px;
  }
  .tg-search .van-search .van-cell input::-webkit-input-placeholder{
    color: #C4C9D9;
  }
  .tg-search .van-search .van-search__action .van-search__cancel {
    color: #3B7BFF;
    padding: 0 17px;
  }
  .tg-search .van-search .van-search__action .van-search__cancel:active {
    background: #FFFFFF;
    color: #306CE7;
  }
  .tg-search .van-search__action:active {
    background-color: #FFFFFF;
  }
</style>