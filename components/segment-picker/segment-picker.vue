<template>
  <div class="tg-segment-picker">
    <md-popup
      v-model="isTabPickerShow"
      position="bottom"
      :mask-closable="maskClosable"
      @show="$_onShow"
      @hide="$_onHide"
      @maskClick="$_onMaskClose"
    >
      <div class="tg-picker-confirm" v-html="okText" @click="$_onPickerConfirm"></div>
      <md-tabs
        :titles="titles"
        :ink-bar-length='inkBarLength'
      >
        <div v-for="(option, index) of options" :key="index">
          <van-datetime-picker 
            v-model="option.currentDate"
            :type="option.type"
            :item-height='40'
            :min-date = 'minDate'
            :max-date = 'maxDate'
            :min-hour = 'minHour'
            :max-hour = 'maxHour'
            :min-minute = 'minMinute'
            :max-minute = 'maxMinute'
            :showToolbar='false'
          />
        </div>
      </md-tabs>
    </md-popup>
  </div>
</template>
<script>
  import { Popup, PopupTitleBar, Tabs, Picker } from 'mand-mobile'
  import { DatetimePicker } from 'vant';
  const currentYear = new Date().getFullYear();
  export default {
    name: "tg-segment-picker",
    components: {
      [Popup.name]: Popup,
      [PopupTitleBar.name]: PopupTitleBar,
      [Tabs.name]: Tabs,
      [DatetimePicker.name]: DatetimePicker
    },
    data() {
      return {
        isTabPickerShow: false,
        maskClosable: true,
        titles: [],
        options: [],
        inkBarLength: 0.00001,
        okText: '确定',
      }
    },
    watch: {
      value(val) {
        val && (this.isTabPickerShow = val)
      },
      isTabPickerShow(val) {
        !val && this.$emit('input', val)
      },
      options: {
        handler: function(opts){
          console.log(opts)
          var currentDate_0 = opts[0].currentDate;
          var currentDate_1 = opts[1].currentDate;
          if(this.type == 'datetime') {
            this.titles[0] = currentDate_0.getFullYear() + '年' + (currentDate_0.getMonth()+1) + '月' + currentDate_0.getDate() + '日';
            this.titles[1] = currentDate_1;
          }else if(this.type == 'date'){
            this.titles[0] = currentDate_0.getFullYear() + '年' + (currentDate_0.getMonth()+1) + '月' + currentDate_0.getDate() + '日';
            this.titles[1] = currentDate_1.getFullYear() + '年' + (currentDate_1.getMonth()+1) + '月' + currentDate_1.getDate() + '日';
          }else{
            this.titles[0] = currentDate_0;
            this.titles[1] = currentDate_1;
          }
        },
        deep: true
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'datetime'
      },
      minDate: {
        type: Date,
        default: () => new Date(currentYear - 10, 0, 1)
      },
      maxDate: {
        type: Date,
        default: () => new Date(currentYear + 10, 11, 31)
      },
      minHour: {
        type: Number,
        default: 0
      },
      maxHour: {
        type: Number,
        default: 23
      },
      minMinute: {
        type: Number,
        default: 0
      },
      maxMinute: {
        type: Number,
        default: 59
      }
    },
    methods: {
      $_onShow() {
        this.$emit('show')
      },
      $_onHide() {
        console.log('hide')
        this.$emit('hide')
      },
      $_onMaskClose() {
        this.$_refreshTabPicker()
      },
      $_refreshTabPicker() {
        this.isTabPickerShow = false
      },
      $_initialTabAndPicker() {
        console.log(this.type)
        var now = new Date();
        var date = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日';
        var time = now.getHours()+':'+ (now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes());
        switch(this.type){
          case 'datetime': 
            this.titles = [date,time];
            this.options = [
              {type: 'date', currentDate: now},
              {type: 'time', currentDate: time}
            ];
            break;
          case 'date':
            this.titles = [date,date];
            this.options = [
              {type: 'date', currentDate: now},
              {type: 'date', currentDate: now}
            ];
            break;
          case 'time':
            this.titles = [time,time];
            this.options = [
              {type: 'time', currentDate: time},
              {type: 'time', currentDate: time}
            ];
            break;
        }
      },
      $_onPickerConfirm(e){
        console.log(this.titles,this.options)
      }
    },
    mounted(){
      this.$_initialTabAndPicker()
    }
  }
</script>
<style lang="css">
  .tg-segment-picker .md-tab-bar {
    font-size: 14px;
    height: 60px;
    color: #C4C9D9;
  }
  .tg-segment-picker .md-tab-bar .md-tab-bar-inner {
    height: 60px;
    padding: 0 5px;
  }
  .tg-segment-picker .md-tab-bar .md-tab-title.active {
    position: relative;
    color: #43454F;
  }
  .tg-segment-picker .md-tab-bar .md-tab-title.active:before {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: #3B7BFF;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: translateY(100%);
    transform: translate(-50%, 100%);
    bottom: -13px;
    left: 50%;
    width: 20px;
    height: 2px;
  }
  .tg-segment-picker .md-tab-bar .ink-bar {
    background: #3B7BFF;
  }
  .tg-segment-picker .md-tab-bar .md-tab-titles-wrapper {
    display: inline-block;
    padding: 15px 0;
    height: initial;
    min-width: initial;
    line-height: 30px;
  }
  .tg-segment-picker .md-tab-bar .md-tab-title {
    display: inline-block;
    padding: 0 12px;
    min-width: initial;
  }
  .tg-segment-picker .van-picker .van-picker-column__item:not(.van-picker-column__item--selected) {
    color: #C4C9D9;
  }
  .tg-segment-picker .van-picker .van-picker-column__item--selected {
    font-size: 18px;
    color: #43454F;
  }
  .tg-segment-picker .tg-picker-confirm {
    position: absolute;
    top: 0;
    right: 0;
    height: 60px;
    line-height: 60px;
    padding: 0 17px;
    color: #3B7BFF;
    font-size: 14px;
    z-index: 102;
  }
  .tg-segment-picker .tg-picker-confirm:active {
    color: #306CE7;
  }
</style>