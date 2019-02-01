<template>
  <div class="tg-picker">
    <template v-if="selector">
      <tg-cell
        name="picker"
        solid
        :title="title"
        :required="required"
        arrow="arrow-right"
        :align="align"
        :disabled="disabled"
        @click="onClick"
        customized>
        <span class="tg-picker-value" :class="[{'is-placeholder':!currentValue}]">{{currentValue?currentValue:placeholder}}</span>
      </tg-cell>
      <tg-popup
        v-model = "isPickerShow"
        :mask-closable = "maskClosable"
        @maskClick = "$_onMaskClose"
        position = "bottom">
        <md-popup-title-bar
          :title = "titleBar"
          :ok-text = "okText"
          :cancel-text = "cancelText"
          @cancel="handleCancel"
          @confirm="handleConfirm"
        ></md-popup-title-bar> 
        <md-picker
          ref="picker"
          :data="formatSwitch?treeData:options"
          :cols="cols"
          :default-index="defaultIndex"
          is-view
          :is-cascade="isCascade"
          @change="onChange"
        ></md-picker>
      </tg-popup>
    </template>
    <template v-else>
      <md-popup-title-bar
        v-if="toolbar"
        :title = "titleBar"
        :ok-text = "okText"
        :cancel-text = "cancelText"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      ></md-popup-title-bar> 
      <md-picker
        ref="picker"
        :data="formatSwitch?treeData:options"
        :cols="cols"
        :default-index="defaultValue"
        is-view
        :is-cascade="isCascade"
        @change="onChange"
      ></md-picker>
    </template>
  </div>
</template>

<script>
  import { Picker, PopupTitleBar } from 'mand-mobile'
  export default {
    name: "tg-picker",
    components: {
      [Picker.name]: Picker,
      [PopupTitleBar.name]: PopupTitleBar,
    },
    data() {
      return {
        currentValue: this.defaultValue,
        defaultIndex: [],
        isPickerShow: false,
        maskClosable: true,
        treeData: []
      }
    },
    watch: {
      options: {
        handler: function(opts) {
          this.locateSelectedValue();
        },
        deep: true
      }
    },
    props: {
      value: {
        type: Array,
        default: function(){
          return []
        }
      },
      selector: {
        type: Boolean,
        default: true
      },
      defaultValue: [Array, String],
      title: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: 'left'
      },
      placeholder: {
        type: String,
        default: '请输入'
      },
      titleBar: {
        type: String,
        default: ''
      },
      cols: {
        type: Number,
        default: 1
      },
      options: {
        type: Array,
        default: ()=>{
          return []
        }
      },
      okText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      isCascade: {
        type: Boolean,
        default: false
      },
      formatSwitch: {
        type: Boolean,
        default: false
      },
      toolbar: {
        type: Boolean,
        default: true
      }
    },
    mounted () {
      if(this.formatSwitch){
        // 数据转换
        var data = this.toTreeData(this.options,"-1",{ukey:"id", pkey:'parentid', toCKey:'children'});
        this.treeData = [data];
      }
      if(this.options.length && this.value.length){
        //初始化源数据(options)存在时，初始化显示值（currentValue）
        var self = this;
        var arr = [];
        if(!this.isCascade){
          // 非级联时
          this.options.map(function(opt,index){
            opt.forEach(function(val){
              if(self.value[index] === val.value){
                arr.push(val.text)
              }
            })
          });
        }else{
          //级联时
          arr = this.childrenLoop(this.options[0],0,arr);
        }
        if(arr.length) this.currentValue = arr.join(',');
      }
    },
    methods: {
      onClick() {
        this.$emit('onClick');
        this.locateSelectedValue();
        this.isPickerShow = true;
      },
      handleConfirm() {
        var values = this.$refs[`picker`].getColumnValues();
        var resultName = [], resultId = [];
        var self = this;
        values.forEach(function(value){
          resultName.push(value.text);
          resultId.push(value.value)
        });
        this.currentValue = resultName.join(',');
        this.$emit('input',resultId);
        this.$emit('confirm', this.currentValue, values);
        this.isPickerShow = false;
      },
      onChange(columnIndex, itemIndex, value) {
        this.$emit("change", columnIndex, itemIndex, value);
      },
      handleCancel() {
        this.$emit("cancel");
        this.isPickerShow = false;
      },
      $_onMaskClose() {
        this.isPickerShow = false;
      },
      /**
       * 定位选中值：首先需要校验源数据（options）与 当前值（value）是否都有值
       */
      locateSelectedValue() {
        if(this.options.length && this.value.length){
          var self = this;
          if(!this.isCascade){
            this.options.map(function(opt,index){
              opt.forEach(function(val,idx){
                if(self.value[index] === val.value){
                  self.defaultIndex.push(idx)
                }
              })
            })
          }else{
            var count = 0; 
            var children = this.options[0];
            this.childrenLoop(children,count);
          }
        }
      },
      /**
       * 循环级联源数据，获取初始值（value）定位
       * @children 循环数据子项组
       * @count children数据对应列
       * @text 选中项对应的文本，即返回值
       */
      childrenLoop(children,count,text) {
        var self = this;
        var txt = text || [];
        if(children && children.length){
          children.map(function(child,idx){
            if(self.value[count] === child.value){
              self.defaultIndex.push(idx);
              txt.push(child.text);
              count++;
              children = child.children;
              txt=self.childrenLoop(children,count,txt);
            }
          })
        }
        return txt;
      },
      toTreeData(data, parent_id, options) {
        let opt = options || {ukey:"id", pkey:'parent_id', toCKey:'children'}
        var tree = [];
        var temp;
        for (var i = 0; i < data.length; i++) {
          if (data[i][opt.pkey] == parent_id || data[i][opt.ukey] === data[i][opt.pkey]) {
            var obj = data[i];
            temp = this.toTreeData(data, data[i][opt.ukey], opt);
            if (temp.length > 0) {
              obj[opt.toCKey] = temp;
            }
            tree.push(obj);
          }
        }
        return tree;
      }
    }
  }
</script>
<style lang="css">
  .tg-picker .md-popup-title-bar{
    height: 60px;
  }
  .tg-picker .md-popup-title-bar .title-bar-left{
    font-size: 14px;
    color:#43454F ;
  }
  .tg-picker .md-popup-title-bar .title-bar-right{
    font-size: 14px;
    color: #3B7BFF;
  }
  .tg-picker .md-popup-title-bar .title-bar-title{
    font-size: 18px;
    color: #13152D;
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-list .md-picker-column-item ul.column-list li.column-item{
    font-size: 15px;
    color:#43454F;
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.bottom:after{
    height: 1px;
    background-color: #EDF2FB;
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
  }
  .tg-picker .md-picker-column .md-picker-column-container .md-picker-column-masker.top:before{
    height: 1px;
    background-color: #EDF2FB;
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
  }
  .tg-picker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #EDF2FB;
    height: 1px;
  }
  .tg-picker .md-field-item-content.left, .tg-picker .tg-picker-value {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tg-picker .tg-picker-value.is-placeholder {
    color: #C4C9D9;
  } 
</style>