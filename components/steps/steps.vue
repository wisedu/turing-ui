<template>
  <div class="tg-steps"  :class="[{'is-card':isCard}]">
    <van-steps :active="active" :direction="direction">
      <div class="tg-step" v-for="(item,idx) in options" :key="idx">
        <p class="tg-step-time" v-if="isCard">{{item.time}}</p>
        <van-step :class="item.status">
          <div class="tg-step-default">
            <div v-if="!customized">
              <div class="tg-step-title" >{{item.title}}</div>
              <div class="tg-step-desc">{{item.desc}}</div>
              <div class="tg-step-default-time" v-if="!isCard">{{item.time}}</div>
            </div>
            <slot v-else slot-scope="{ item }" :option="item">{{item.title}}</slot>
          </div>
        </van-step>
      </div>
    </van-steps>
  </div>
</template>
<script>
  import { Step, Steps } from 'vant';
  export default {
    name: "tg-steps",
    components: {
      [Step.name]: Step,
      [Steps.name]: Steps
    },
    data() {
      return {
      }
    },
    watch: {
      //
    },
    props: {
      direction: {
        type: String,
        default: 'vertical'
      },
      active: {
        type: Number,
        default: 0
      },
      options: {
        type: Array,
        default: []
      },
      isCard: {
        type: Boolean,
        default: false
      },
      customized: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      //
    }
  }
</script>
<style lang="css">
  .tg-steps .van-steps--vertical {
    padding-left: 52px;
  }
  .tg-steps .tg-step {
    position: relative;
  }
  .tg-steps .van-icon {
    font-size: 18px;
    top: 15px;
    left: -35px;
    background-color: #FFFFFF;
  }
  .tg-steps .van-step--vertical {
    padding: 15px 17px 15px 0;
  }
  .tg-steps .van-step--vertical .van-step__line {
    left: -26px;
    background-color: #EDF2FB;
  }
  .tg-steps .van-step .van-step__circle {
    width: 8px;
    height: 8px;
    background-color: #FFFFFF;
    border: 1px solid #C4C9D9;
    top: 19px;
    left: -31px;
  }
  .tg-steps .tg-step:last-child .van-step__line {
    height: 20px;
  }
  .tg-steps .tg-step:first-child .van-step__line {
    height: calc(100% - 17px);
    bottom: 0;
    top: initial;
  }
  .tg-steps .van-step--vertical::after {
    border-bottom-width: 0;
  }
  .tg-step-default {
    font-size: 14px;
    color: #43454F;
  }
  .tg-steps .van-step--vertical.van-step--finish .van-step__circle-container i,.tg-steps .van-step--vertical.error .van-step__circle-container i, .tg-steps .van-step--vertical.finish .van-step__circle-container i {
    font: normal normal normal 18px/1 "vant-icon";
    color: #17BF6A;
    top: 15px;
    left: -35px;
    width: 0;
    height: 0;
    border-width: 0;
  }
  .tg-steps .van-step--vertical.van-step--finish .van-step__circle-container i::before,.tg-steps .van-step--vertical.finish .van-step__circle-container i::before{
    content: "\F011";
    display: inline-block;
  }
  .tg-steps .van-step--vertical.error .van-step__circle-container i::before{
    content: "\F012";
    color: #EE3F15;
    display: inline-block;
  }
  .tg-steps.is-card .van-steps {
    background-color: #EDF2FB;
  }
  .tg-steps.is-card .tg-step:not(:first-child) {
    padding-top: 13px;
  }
  .tg-steps.is-card .tg-step-time {
    font-size: 12px;
    color: #767A8C;
    line-height: 24px;
    min-height: 24px;
  }
  .tg-steps.is-card .van-step {
    background-color: #FFFFFF;
    padding: 17px 12px 17px 17px;
    margin-right: 17px;
    border-radius: 4px;
  }
  .tg-steps.is-card .van-step--vertical .van-step__line {
    background-color: #C4C9D9;
  }
  .tg-steps.is-card .tg-step:not(:first-child) .van-step__line {
    height: calc(100% + 37px);
    top: -37px;
  }
  .tg-steps.is-card .tg-step:last-child .van-step__line {
    height: 57px;
    top: -37px;
  }
  .tg-steps.is-card .tg-step .van-step:before {
    content: '';
    display: block;
    position: absolute;
    border-bottom: 7px solid #EDF2FB;
    border-top: 7px solid #EDF2FB;
    border-right: 7px solid #FFFFFF;
    top: 16px;
    left: -7px;
  }
  .tg-steps.is-card .van-step__circle-container {
    display: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #D8D8D8;
    position: absolute;
    top: 16px;
    left: -34px;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(118,122,140,0.50);
  }
  .tg-steps.is-card .van-step .van-step__circle-container i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    background-color: #FFFFFF;
    top: 4px;
    left: 4px;
    border: 0;
  }
  .tg-steps.is-card .van-step .van-step__circle-container i::before {
    content: '';
  }
  .tg-steps.is-card .van-step--vertical.van-step--finish .van-step__circle-container {
    display: block;
  }
  .tg-steps.is-card .van-step--vertical.van-step--process .van-step__circle-container {
    display: block;
    background-color: #3B7BFF;
    box-shadow: 0 4px 8px 0 rgba(59,123,255,0.50);
  }
  .tg-steps.is-card .van-step--vertical.van-step--process .van-step__circle-container i {
    background-color: #FFFFFF;
  }
  .tg-steps.is-card .van-step--vertical.van-step--finish .van-step__circle-container i::before {
    position: relative;
    top: -12px;
    left: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #EDF2FB ;
  }
  .tg-steps.is-card .van-step--vertical.van-step--process .van-step__circle-container i::before {
    position: relative;
    top: -12px;
    left: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #3B7BFF;
  }
  .tg-steps.is-card .van-step--vertical .van-step__line {
    display: none;
  }
  .tg-steps.is-card .van-step--vertical.van-step--finish .van-step__line {
    display: block;
  }
  .tg-steps.is-card .tg-step:not(:first-child) .van-step--vertical.van-step--process .van-step__line {
    display: block;
    height: 57px;
    top: -37px;
  }
  .tg-step-title {
    font-size: 14px;
    color: #13152D;
  }
  .tg-step-desc {
    font-size: 12px;
    color: #767A8C;
    padding: 5px 0;
  }
  .tg-step-default-time {
    display: inline-block;
    background: #EDF2FB;
    padding: 2px 5px;
  }
</style>