<template>
  <div class="tg-area-picker">
    <tg-cell
      name="area-picker"
      :title="title"
      :required="required"
      :align="align"
      :disabled="disabled"
      @click="onClick"
      arrow="arrow-right"
      solid
      customized>
      <span class="tg-area-picker-value" :class="[{'is-placeholder':!currentValue}]">{{currentValue?currentValue:placeholder}}</span>
    </tg-cell>
    <tg-popup
      v-model="isAreaPickerShow"
      position="bottom"
      :mask-closable="maskClosable"
      @maskClick="$_onMaskClose"
    > 
      <!-- 引自md-tab-picker 源码 start -->
      <div class="md-tab-picker-content">
        <md-tabs
          ref="tabs"
          :titles="subTitles"
          :default-index="defaultTabIndex"
          :force-use-array="hasTitleSlotScope"
          @indexChanged="$_onIndexChange"
          :key="refreshTabPicker"
        >
          <template
            slot="title"
            slot-scope="props">
            <slot :label="props" name="titles"></slot>
          </template>
          <div v-for="(title, index) of subTitles" :key="index">
            <md-radio
              ref="radio1"
              :options="renderData[index].data"
              :default-index="~renderData[index].clickedKey ? renderData[index].clickedKey : -1"
              :key="renderData[index].clickedKey"
              :is-slot-scope="hasOptionSlotScope"
              is-across-border
              @change="$_onRadioChange"
            >
              <template
                slot-scope="props">
                <slot :option="props.option" :index="index" name="option"></slot>
              </template>
            </md-radio>
          </div>
        </md-tabs>
        <div class="slot-wrapper" v-if="isLoading || isDataError">
          <div class="slot-inner">
            <slot name="error" v-if="isDataError">数据异常</slot>
            <slot name="loading" v-if="isLoading">loading</slot>
          </div>
        </div>
      </div>
      <!-- 引自md-tab-picker 源码 end -->
    </tg-popup>
  </div>
</template>

<script>
  import { Tabs, Radio } from 'mand-mobile'
  var noop = () => {};
  function compareObjects(object0, object1) {
    let ret = true

    if (!object0 || !object1) {
      ret = false
    } else if (typeof object0 !== 'object' || typeof object1 !== 'object') {
      ret = false
    } else if (JSON.stringify(object0) !== JSON.stringify(object1)) {
      ret = false
    }

    return ret
  }
  export default {
    name: "tg-area-picker",
    components: {
      [Tabs.name]: Tabs,
      [Radio.name]: Radio
    },
    data() {
      return {
        currentValue: this.value,
        isAreaPickerShow: false,
        maskClosable: true,

        subTitles: [],
        renderData: [],
        defaultTabIndex: 0,
        currentIndex: 0,
        isLoading: true,
        isDataError: false,
        currentColumnLock: false,
        lastSelectIndex: null,
        refreshTabPicker: 0,
        walkTimes: 0,
      }
    },
    watch: {
      data: {
        handler(val, oldVal) {
          if (!compareObjects(val, oldVal)) {
            this.$_initTabPicker()
          }
        },
        deep: true,
      },
      isDataError(val) {
        if (val) {
          setTimeout(() => {
            this.isDataError = false
          }, 2000)
        }
      },
    },
    props: {
      value: {
        type: String,
        default: ''
      },
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
        default: '请选择'
      },
      //
      data: {
        type: Array,
        default() {
          return []
        },
      },
      dataStruct: {
        type: String,
        default: 'cascade',
      },
      defaultIndex: {
        type: Array,
        default() {
          return []
        },
      },
      optionRender: {
        type: Array,
        default() {
          return []
        },
        validator(value) {
          if (value.length > 0) {
            return value.every(item => {
              return typeof item === 'function'
            })
          } else {
            return true
          }
        },
      },
      asyncFunc: {
        type: Function,
        default() {
          return noop
        },
      },
    },
    computed: {
      hasTitleSlotScope() {
        return !!this.$scopedSlots.titles
      },
      hasOptionSlotScope() {
        return !!this.$scopedSlots.option
      },
    },
    created() {
      this.$_initTabPicker()
    },
    methods: {
      onClick() {
        this.isAreaPickerShow = true;
      },
      $_onMaskClose() {
        this.isAreaPickerShow = false;
      },
      $_initTabPicker() {
        switch (this.dataStruct) {
          case 'normal':
            this.$_initNoCascadeData()
            break
          case 'cascade':
            this.$_initCascadeData()
            break
          case 'async':
            this.$_initAsyncCascadeData()
            break
          default:
            break
        }
      },
      $_initNoCascadeData() {
        if (this.data.length === 0) {
          return
        }
        this.isLoading = false
        var initialIndex = this.lastSelectIndex || this.defaultIndex
        this.$_initTabContent()
        this.data.forEach((item, index) => {
          var temp = {
            index: index,
            clickedKey: initialIndex.length > 0 && ~initialIndex[index] ? initialIndex[index] : -1,
            data: item.children,
          }
          this.renderData.push(temp)
          var currentColumn = this.renderData[index]
          if (initialIndex && initialIndex.length > 0) {
            this.subTitles.push(currentColumn.data[currentColumn.clickedKey].label)
          } else {
            this.subTitles.push(item.label)
          }
        })
      },
      $_initCascadeData() {
        if (this.data.length === 0) {
          return
        }
        var initialIndex = this.lastSelectIndex || this.defaultIndex
        this.$_walk(initialIndex, this.data)
      },
      $_initAsyncCascadeData() {
        this.asyncFunc(null, this.$_renderInitalAsync)
      },
      $_renderInitalAsync(err, data) {
        if (err) {
          this.isDataError = err
          return
        }
        var initialIndex = this.lastSelectIndex || this.defaultIndex
        this.$_walk(initialIndex, data, true)
      },
      $_walk(initialIndex, data, isAsync) {
        // recursion cascade or async data with initialIndex
        var func = () => {
          if (initialIndex && initialIndex.length > 0) {
            var walk = (err, data) => {
              if (err) {
                this.isLoading = false
                this.isDataError = err
                return
              }
              if (this.walkTimes < initialIndex.length) {
                var temp = initialIndex[this.walkTimes]
                let rawData = isAsync ? data.options : data
                rawData.forEach((item, eq, array) => {
                  if (eq === temp) {
                    this.currentIndex = this.walkTimes
                    this.subTitles.splice(this.currentIndex, this.subTitles.length - 1, item.label)
                    let renderContent = {
                      index: this.walkTimes,
                      clickedKey: temp,
                      data: array,
                    }
                    if (isAsync) {
                      renderContent = {
                        ...renderContent,
                        asyncFunc: data.asyncFunc,
                      }
                    }
                    this.renderData.splice(this.currentIndex, this.renderData.length - 1, renderContent)
                    this.$refs.tabs && this.$refs.tabs.selectTab(this.currentIndex)
                    this.walkTimes++
                    if (item && item.children && Array.isArray(item.children)) {
                      walk(null, item.children)
                    } else if (isAsync && data && data.asyncFunc && typeof data.asyncFunc === 'function') {
                      data.asyncFunc(
                        {
                          index: this.walkTimes,
                          item,
                          eq,
                        },
                        walk,
                      )
                    } else {
                      walk()
                    }
                  }
                })
              } else {
                this.isLoading = false
                this.defaultTabIndex = this.walkTimes - 1
                this.walkTimes = 0
                return false
              }
            }
            walk(null, data)
          } else {
            this.$_initTabContent()
            this.subTitles.push('请选择')
            if (isAsync) {
              this.renderData.push({
                index: 0,
                clickedKey: -1,
                data: data.options,
                asyncFunc: data.asyncFunc,
              })
            } else {
              this.renderData.push({
                index: 0,
                clickedKey: -1,
                data: data,
              })
            }
            this.isLoading = false
          }
        }
        func()
      },
      $_initTabContent() {
        this.subTitles = []
        this.renderData = []
        this.currentIndex = 0
      },
      $_renderNextTabContent(orignData) {
        return (err, asyncData) => {
          this.isLoading = false
          if (err) {
            this.isDataError = err
            return
          }
          try {
            let data,
              asyncFunc = null
            if (orignData) {
              data = orignData
            } else if (asyncData && asyncData.options) {
              data = asyncData.options
              if (asyncData.asyncFunc) {
                asyncFunc = asyncData.asyncFunc
              }
            } else {
              data = []
            }
            this.subTitles.splice(this.currentIndex + 1, this.subTitles.length - 1, '请选择')
            this.renderData.splice(this.currentIndex + 1, this.renderData.length - 1, {
              index: this.currentIndex,
              clickedKey: -1,
              data,
              asyncFunc,
            })
            if (this.renderData.length > 1) {
              this.$nextTick(() => {
                this.$refs.tabs.selectTab(++this.currentIndex)
                setTimeout(() => {
                  this.currentColumnLock = false
                }, 500)
              })
            }
          } catch (error) {
            this.isDataError = true
          }
        }
      },
      $_refreshTabPicker() {
        // revoke this opration
        this.isTabPickerShow = false
        this.isLoading = true
        this.isDataError = false
        this.currentColumnLock = false
        this.refreshTabPicker = Math.random()
        this.$nextTick(() => {
          this.$_initTabPicker()
        })
      },
      // MARK: events handler, 如 $_onButtonClick
      $_onShow() {
        this.$emit('show')
      },
      $_onHide() {
        this.$emit('hide')
      },
      $_onConfirm() {
        this.isTabPickerShow = false
        var selectedItem = this.getSelectedItem()
        var isSelectPart = selectedItem.some(option => {
          return !option
        })
        if (!isSelectPart) {
          this.lastSelectIndex = selectedItem.map(option => {
            return option.item.eq
          })
        }
        this.$emit('confirm', selectedItem)
      },
      $_onCancel() {
        this.$emit('cancel')
        this.$_refreshTabPicker()
      },
      $_onMaskClose() {
        this.$_refreshTabPicker()
      },
      $_onRadioChange(value, index) {
        if (this.dataStruct === 'cascade' && this.currentColumnLock) {
          return
        }
        this.currentColumnLock = true
        this.subTitles[this.currentIndex] = value.label
        var currentColumn = this.renderData[this.currentIndex]
        currentColumn.clickedKey = index
        this.$emit('change', {
          selectTab: this.currentIndex,
          selectIndex: index,
          selectItem: value,
        })
        if (this.dataStruct === 'cascade') {
          if (value && value.children && Array.isArray(value.children) && value.children.length > 0) {
            this.$_renderNextTabContent(value.children)()
            return
          }
          this.currentColumnLock = false
        }
        if (this.dataStruct === 'async' && currentColumn.asyncFunc) {
          value = {
            index: index,
            ...value,
          }
          // Object.assign(value, {index})
          this.isLoading = true
          typeof currentColumn.asyncFunc === 'function' && currentColumn.asyncFunc(value, this.$_renderNextTabContent())
        }
      },
      $_onIndexChange(index) {
        this.currentIndex = index
      },
      // MARK: public methods
      getSelectedItem() {
        return this.renderData.map((item, index) => {
          if (~item.clickedKey) {
            var selected = item.data[item.clickedKey]
            return {
              index: index,
              item: {
                label: selected.label,
                value: selected.value,
                eq: item.clickedKey,
              },
            }
          } else {
            return null
          }
        })
      }
    }
  }
</script>
<style lang="css">
  .tg-area-picker .md-popup-title-bar{
		height: 60px;
	}
	.tg-area-picker .md-popup-title-bar .title-bar-left{
		font-size: 15px;
		color:#303146;
	}
	.tg-area-picker .md-popup-title-bar .title-bar-right{
		font-size: 15px;
		color: #699AFF;
	}
	.tg-area-picker .md-popup-title-bar .title-bar-title{
		font-size: 18px;
    color: #13152D;
	}
  .tg-area-picker .md-field-item .md-field-item-content{
    font-size: 15px;
  }
  .tg-area-picker .md-field .md-field-content .md-field-item .md-field-item-inner:before, .md-field .md-field-content .md-input-item-container:before{
    height: 2px;
    background-color: #F6F9FD;
  }
  .tg-area-picker .md-tabs .md-tab-bar:before{
    height: 2px;
    background-color: #F6F9FD;
  }
  .tg-area-picker .md-popup-title-bar:before{
    -webkit-transform: scaleY(1) translateY(100%);
    transform: scaleY(1) translateY(100%);
    background: #F6F9FD;
    height: 1px;
  }
  .tg-area-picker .md-tab-title{
    font-size: 14px;
    margin-right: 20px;
  }
  .tg-area-picker .md-tab-bar .md-tab-bar-inner{
    height: 60px;
  }
  .tg-area-picker .md-radio.across .md-field .md-field-item.md-radio-item .md-field-item-inner{
    padding: 10px;
    font-size: 16px;
    font-family: sans-serif;
  }
  .tg-area-picker .md-tab-bar{
    height: 60px;
  }
  .tg-area-picker .md-tab-picker .md-tabs .md-tab-content-wrapper{
    height: 225px;
  }
  .tg-area-picker .md-tab-picker .md-tabs .md-tab-content-wrapper .md-tab-content{
    height: 225px;
  }
  .tg-area-picker .md-tab-bar .ink-bar.animate{
    width: 20px !important;
    display: none;
  }
  .tg-area-picker .md-field-item .md-field-item-content.left{
    margin-left: 9px !important;
  }
  .tg-area-picker .md-icon-right{
    display: none;
  }
  .tg-area-picker .md-tab-bar .md-tab-title{
    color: #C4C9D9;
    min-width: 30px;
  }
  .tg-area-picker .md-tab-bar .md-tab-title.active {
    color: #13152D;
    position: relative;
  }
  .tg-area-picker .md-tab-bar .md-tab-title.active:before {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: #3B7BFF;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: translateY(100%);
    transform: translate(-50%, 100%);
    bottom: 2px;
    left: 50%;
    width: 20px;
    height: 2px;
  }
  .tg-area-picker .md-tab-bar .md-tab-titles-wrapper{
    display: inline-block;
    padding-left: 19px;
  }
</style>