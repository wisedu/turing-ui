<template>
  <div class="tg-datetime-picker">
    <tg-cell
      name="segment-picker"
      solid
      :title="title"
      :required="required"
      arrow="arrow-right"
      :align="align"
      :disabled="disabled"
      @click="onClick"
      customized>
      <span class="tg-segment-picker-value" :class="[{'is-placeholder':!currentValue}]">{{currentValue?currentValue:placeholder}}</span>
      <!-- <i class="tg-icon-clear">X</i> -->
    </tg-cell>
    <tg-popup
      v-model="isTabPickerShow"
      position="bottom"
      :mask-closable="maskClosable"
      @maskClick="$_onMaskClose"
    >
      <div class="tg-segment-picker" v-if="segmentPicker">
        <div class="tg-picker-confirm" v-html="okText" @click="$_onPickerConfirm"></div>
        <md-tabs
          :titles="titles"
          :ink-bar-length='inkBarLength'>
          <div v-for="(option, index) of options" :key="index">
            <md-date-picker
              ref="dateSegmentPicker"
              :type="option.type"
              :unit-text="unitText"
              :minDate="option.minDate"
              :maxDate="option.maxDate"
              :default-date="option.currentDate"
              is-view
              @change="segmentPickerChange"
            ></md-date-picker>
          </div>
        </md-tabs>
      </div>
      <div v-if="!segmentPicker">
        <md-popup-title-bar
          :title = "titleBar"
          :ok-text = "okText"
          :cancel-text = "cancelText"
          @cancel="handleCancel"
          @confirm="handleConfirm"
        ></md-popup-title-bar> 
        <md-date-picker
          ref="datetimePicker"
          :type="typeChecked"
          today-text="今天"
          :unit-text="unitText"
          :minDate="minCorrectDate"
          :maxDate="maxCorrectDate"
          :text-render="textRender"
          :custom-types="['yyyy', 'MM']"
          :default-date="defaultDate"
          :minute-step="minuteStep"
          is-view
        ></md-date-picker>
      </div>
    </tg-popup>
  </div>
</template>
<script>
  import { Popup, Tabs, DatePicker, PopupTitleBar } from 'mand-mobile'
  const currentYear = new Date().getFullYear();
  export default {
    name: "tg-datetime-picker",
    components: {
      [Popup.name]: Popup,
      [Tabs.name]: Tabs,
      [DatePicker.name]: DatePicker,
      [PopupTitleBar.name]: PopupTitleBar
    },
    data() {
      return {
        currentValue: this.value,
        typeChecked: this.type === 'dateym'?'custom':this.type,
        isTabPickerShow: false,
        maskClosable: true,
        titles: [],
        options: [],
        inkBarLength: 0.00001,
        okText: '确定',
        cancelText: '取消',
        unitText: this.segmentPicker?['','','','','']:['', '月', '日', '', ''],
        defaultDate: new Date(),
        defaultTab: 0
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
            this.titles[0] = this.setFormatDateTime(currentDate_0);
            this.titles[1] = this.setFormatDateTime(currentDate_1,'time');
          }else if(this.type == 'date'){
            if(currentDate_0>currentDate_1){
              currentDate_1 = currentDate_0;
              this.$nextTick(()=>{
                opts[1].currentDate = currentDate_0;
              })
            }
            this.titles[0] = this.setFormatDateTime(currentDate_0);
            this.titles[1] = this.setFormatDateTime(currentDate_1);
          }else if(this.type == 'time'){
            if(currentDate_0>currentDate_1){
              currentDate_1 = currentDate_0;
              this.$nextTick(()=>{
                opts[1].currentDate = currentDate_0;
              });
            }
            this.titles[0] = this.setFormatDateTime(currentDate_0,'time');
            this.titles[1] = this.setFormatDateTime(currentDate_1,'time');
          }
        },
        deep: true
      }
    },
    computed: {
      minCorrectDate() {
        var start = this.minDate;
        if(!this.segmentPicker && this.type === 'time'){
          start = new Date(new Date().toLocaleDateString()+ ' '+this.minHour + ':' + this.minMinute);
        }
        return start
      },
      maxCorrectDate() {
        var end = this.maxDate;
        if(!this.segmentPicker && this.type === 'time'){
          end = new Date(new Date().toLocaleDateString()+ ' '+this.maxHour + ':' + this.maxMinute);
        }
        return end
      }
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      segmentPicker:{
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: ''
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
      placeholder: {
        type: String,
        default: '请输入'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      align: String,
      title: String,
      required: Boolean,
      titleBar: {
        type: String,
        default: ''
      },
      minuteStep: {
        type: Number,
        default: 1
      }
    },
    methods: {
      /**
       * 数据回显定位
       * 分三种情况:1.区间选择,2.日期选择,3.时间选择
       */
      onClick() {
        if(this.segmentPicker){
          this.$_initialTabAndPicker();
        }else{
          if(this.value){
            if(this.type === 'date' || this.type === 'dateym'){
              this.defaultDate = new Date(this.value);
            }else if(this.type === 'time'){
              this.defaultDate = new Date(new Date().toLocaleDateString() + ' ' + this.value);
            }
          }else{
            this.defaultDate = new Date();
          }
        }
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
              var date = this.setFormatDateTime(datetime);
              var time = this.setFormatDateTime(datetime,'time');
              this.titles = [date,time];
              this.options = [
                {type: 'date', currentDate: new Date(datetime), minDate: this.minDate, maxDate: this.maxDate},
                {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + time), minDate: null, maxDate: null}
              ];
              break;
            case 'date':
              box = this.value.split('至');
              if(box.length !== 2 || !box[0] || !box[1]) throw("Invalid Date");
              box[0] = new Date(box[0]);
              box[1] = new Date(box[1]);
              if(box[0] == "Invalid Date" || box[1] == "Invalid Date") throw("Invalid Date");
              this.titles = [box[0],box[1]];
              this.options = [
                {type: 'date', currentDate: new Date(box[0]), minDate: this.minDate, maxDate: this.maxDate},
                {type: 'date', currentDate: new Date(box[1]), minDate: this.minDate, maxDate: this.maxDate}
              ];
              break;
            case 'time':
              box = this.value.split('至');
              this.titles = [box[0],box[1]];
              this.options = [
                {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + box[0]), minDate: null, maxDate: null},
                {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + box[1]), minDate: null, maxDate: null}
              ];
              break;
          }
        }
      },
      $_initialDate(){
        var now = new Date();
        var date = this.setFormatDateTime(now);
        var time = this.setFormatDateTime(now,'time');
        switch(this.type){
          case 'datetime': 
            this.titles = [date,time];
            this.options = [
              {type: 'date', currentDate: now, minDate: this.minDate, maxDate: this.maxDate},
              {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + time), minDate: null, maxDate: null}
            ];
            break;
          case 'date':
            this.titles = [date,date];
            this.options = [
              {type: 'date', currentDate: now, minDate: this.minDate, maxDate: this.maxDate},
              {type: 'date', currentDate: now, minDate: this.minDate, maxDate: this.maxDate}
            ];
            break;
          case 'time':
            this.titles = [time,time];
            this.options = [
              {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + time), minDate: null, maxDate: null},
              {type: 'time', currentDate: new Date(new Date().toLocaleDateString() + ' ' + time), minDate: null, maxDate: null}
            ];
            break;
        }
      },
      /**
       * 区间选择模式的cancel的事件
       */
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
      },
      /**
       * 区间选择模式的change事件方法
       */
      segmentPickerChange(columnIndex, itemIndex, value){
        var tab_0_title,tab_1_title;
        var opts = this.options;
        if(this.type === 'datetime'){
          tab_0_title = this.$refs[`dateSegmentPicker`][0].getFormatDate('yyyy-MM-dd');
          tab_1_title = this.$refs[`dateSegmentPicker`][1].getFormatDate('hh:mm');
          opts[0].currentDate = new Date(tab_0_title + ' ' + tab_1_title);
          opts[1].currentDate = new Date(tab_0_title + ' ' + tab_1_title);
        }else if(this.type ==='date'){
          tab_0_title = this.$refs[`dateSegmentPicker`][0].getFormatDate('yyyy-MM-dd');
          tab_1_title = this.$refs[`dateSegmentPicker`][1].getFormatDate('yyyy-MM-dd');
          opts[0].currentDate = new Date(tab_0_title);
          opts[1].currentDate = new Date(tab_1_title);
        }else{
          tab_0_title = this.$refs[`dateSegmentPicker`][0].getFormatDate('hh:mm');
          tab_1_title = this.$refs[`dateSegmentPicker`][1].getFormatDate('hh:mm');
          opts[0].currentDate = new Date(new Date().toLocaleDateString() + ' ' + tab_0_title);
          opts[1].currentDate = new Date(new Date().toLocaleDateString() + ' ' + tab_1_title);
        }
        this.options = opts;
      },
      /**
       * 非区间选择模式的cancel的事件
       */
      handleCancel(){
        this.$emit('cancel');
        this.isTabPickerShow = false;
      },
      /**
       * 非区间选择模式的confirm的事件
       */
      handleConfirm(){
        const values = this.$refs[`datetimePicker`].getColumnValues();
        var str = '';
        if(this.type === 'date'){
          str = this.$refs[`datetimePicker`].getFormatDate('yyyy-MM-dd');
        }else if(this.type === 'time'){
          str = this.$refs[`datetimePicker`].getFormatDate('hh:mm');
        }else if(this.type === 'dateym'){
          str = this.$refs[`datetimePicker`].getFormatDate('yyyy-MM');
        }
        this.currentValue = str;
        this.$emit('confirm',values,str);
        this.isTabPickerShow = false
      },
      setFormatDateTime(date,type){
        var type = type || 'date'
        if(type === 'date'){
          const Y = date.getFullYear();
          const M = (date.getMonth()+1)>9?(date.getMonth()+1):'0'+(date.getMonth()+1);
          const D = date.getDate()>9?date.getDate():'0'+date.getDate();
          return Y + '年' + M + '月' + D + '日' 
        }else if(type === 'time'){
          const h = date.getHours()>9?date.getHours():'0'+date.getHours();
          const m = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes();
          return h + ':' + m
        }
      },
      textRender() {
        //用于渲染自定义列文本
      },
    }
  };
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
  .tg-datetime-picker .tg-segment-picker-value.is-placeholder {
    color: #C4C9D9;
  }


  .tg-datetime-picker .md-popup-title-bar{
    height: 60px;
  }
  .tg-datetime-picker .md-popup-title-bar .title-bar-left{
    font-size: 14px;
    color:#43454F;
  }
  .tg-datetime-picker .md-popup-title-bar .title-bar-title{
    font-size: 18px;
    color: #13152D;
  }
  .tg-datetime-picker .md-popup-title-bar .title-bar-right{
    font-size: 14px;
    color: #3B7BFF;
  }
  .tg-datetime-picker .md-picker-column .md-picker-column-container .md-picker-column-list .md-picker-column-item ul.column-list li.column-item {
    font-size: 16px!important;
    color: #43454F;
  }
  .tg-datetime-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.bottom:after{
    height: 1px;
    background-color: #EDF2FB;
  }
  .tg-datetime-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.top:before{
    height: 1px;
    background-color: #EDF2FB;
  }
  .tg-datetime-picker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #EDF2FB;
    height: 1px;
  }
</style>