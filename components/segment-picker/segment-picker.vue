<template>
  <div class="tg-segment-picker">
    <tg-cell
      solid
      :title="title"
      :required="required"
      arrow="arrow-right"
      :align="align"
      @click="onClick"
      customized>
      <span>{{currentValue}}</span>
      <!-- <i class="tg-icon-clear">X</i> -->
    </tg-cell>
    <tg-popup
      v-model="isTabPickerShow"
      position="bottom"
      :mask-closable="maskClosable"
      @maskClick="$_onMaskClose"
    >
      <div class="tg-picker-confirm" v-html="okText" @click="$_onPickerConfirm"></div>
      <md-tabs
        :titles="titles"
        :ink-bar-length='inkBarLength'
      >
        <div v-for="(option, index) of options" :key="index">
          <van-datetime-picker 
            v-model = "option.currentDate"
            :type = "option.type"
            :item-height='40'
            :min-date = 'minDate'
            :max-date = 'maxDate'
            :min-hour = 'minHour'
            :max-hour = 'maxHour'
            :min-minute = 'minMinute'
            :max-minute = 'maxMinute'
            :showToolbar = 'false'
          />
        </div>
      </md-tabs>
    </tg-popup>
  </div>
</template>
<script>
  import { Popup, Tabs } from 'mand-mobile'
  import { DatetimePicker } from 'vant';
  const currentYear = new Date().getFullYear();
  export default {
    name: "tg-segment-picker",
    components: {
      [Popup.name]: Popup,
      [Tabs.name]: Tabs,
      [DatetimePicker.name]: DatetimePicker
    },
    data() {
      return {
        currentValue: this.value,
        isTabPickerShow: false,
        maskClosable: true,
        titles: [],
        options: [],
        inkBarLength: 0.00001,
        okText: '确定'
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input',val);
      },
      options: {
        handler: function(opts){
          var currentDate_0 = opts[0].currentDate;
          var currentDate_1 = opts[1].currentDate;
          if(this.type == 'datetime') {
            this.titles[0] = currentDate_0.getFullYear() + '年' + (currentDate_0.getMonth()+1) + '月' + currentDate_0.getDate() + '日';
            this.titles[1] = currentDate_1;
          }else if(this.type == 'date'){
            if(currentDate_0>currentDate_1){
              currentDate_1 = currentDate_0;
              this.$nextTick(()=>{
                opts[1].currentDate = currentDate_0;
              })
            }
            this.titles[0] = currentDate_0.getFullYear() + '年' + (currentDate_0.getMonth()+1) + '月' + currentDate_0.getDate() + '日';
            this.titles[1] = currentDate_1.getFullYear() + '年' + (currentDate_1.getMonth()+1) + '月' + currentDate_1.getDate() + '日';
          }else if(this.type == 'time'){
            if(currentDate_0>currentDate_1){
              currentDate_1 = currentDate_0;
              this.$nextTick(()=>{
                opts[1].currentDate = currentDate_0;
              });
            }
            this.titles[0] = currentDate_0;
            this.titles[1] = currentDate_1;
          }
        },
        deep: true
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'datetime'
      },
      minDate: {
        type: Date,
        default: () => new Date(currentYear - 99, 0, 1)
      },
      maxDate: {
        type: Date,
        default: () => new Date(currentYear + 30, 11, 31)
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
      },
      align: String,
      title: String,
      required: Boolean
    },
    methods: {
      onClick() {
        this.$_initialTabAndPicker();
        this.isTabPickerShow = true
      },
      $_onMaskClose() {
        this.isTabPickerShow = false
      },
      $_initialTabAndPicker() {
        if(!this.value){
          this.$_initialDate()
        }else{
          var box = [];
          switch(this.type){
            case 'datetime': 
              var datetime = new Date(this.value);
              if(datetime == "Invalid Date") throw("Invalid Date");
              var date = datetime.getFullYear() + '年' + (datetime.getMonth()+1) + '月' + datetime.getDate() + '日';
              var time = (datetime.getHours()>9?datetime.getHours():'0'+ datetime.getHours())+':'+ (datetime.getMinutes()>9?datetime.getMinutes():'0'+datetime.getMinutes());
              this.titles = [date,time];
              this.options = [
                {type: 'date', currentDate: datetime},
                {type: 'time', currentDate: time}
              ];
              break;
            case 'date':
              box = this.value.split('至');
              console.log(box)
              if(box.length !== 2 || !box[0] || !box[1]) throw("Invalid Date");
              box[0] = new Date(box[0]);
              box[1] = new Date(box[1]);
              if(box[0] == "Invalid Date" || box[1] == "Invalid Date") throw("Invalid Date");
              this.titles = [box[0],box[1]];
              this.options = [
                {type: 'date', currentDate: new Date(box[0])},
                {type: 'date', currentDate: new Date(box[1])}
              ];
              break;
            case 'time':
              box = this.value.split('至');
              this.titles = [box[0],box[1]];
              this.options = [
                {type: 'time', currentDate: box[0]},
                {type: 'time', currentDate: box[1]}
              ];
              break;
          }
        }
      },
      $_initialDate(){
        var now = new Date();
        var date = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日';
        var time = (now.getHours()>9?now.getHours():'0'+ now.getHours())+':'+ (now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes());
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
      $_onPickerConfirm(){
        this.titles[0] =  this.titles[0].replace(/(年|月)/g,'-').replace(/日/,'')
        if(this.type == 'datetime'){
          this.currentValue = this.titles[0] + ' ' + this.titles[1]; 
        }else if(this.type == 'date'){
          this.titles[1] =  this.titles[1].replace(/(年|月)/g,'-').replace(/日/,'')
          this.currentValue = this.titles[0] + '至' + this.titles[1]; 
        }else{
          this.currentValue = this.titles[0] + '至' + this.titles[1]; 
        }
        this.$emit('confirm', this.titles, this.options);
        this.isTabPickerShow = false
      }
    },
    mounted(){
      this.$_initialTabAndPicker()
    }
  };
</script>
<style lang="css">
  .tg-segment-picker .md-popup .md-popup-mask {
    background-color: #13152D;
    opacity: 0.5;
  }
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
    color: #13152D;
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