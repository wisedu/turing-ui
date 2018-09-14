<template>
  <div class="demo-check-group">
    <p @click="click">标准用法{{selected}}</p>
    <tg-check-group
      v-model="selected"
      :options="options"
    ></tg-check-group>
    <p>带标题用法{{selected}}</p>
    <tg-check-group
      v-model="selected"
      required
      title="1.你在工作之余经常了解新知识吗？"
      :options="options"
    ></tg-check-group>
    <p>按钮居右用法：{{selected1}}</p>
    <tg-check-group
      v-model="selected1"
      required
      title="2.你对哪一类设计比较感兴趣？"
      iconPosition="right"
      :options="options1"
    ></tg-check-group>
    <p>最多选择3项用法：{{selected2}}</p>
    <tg-check-group
      v-model="selected2"
      :max="3"
      :options="options2"
    ></tg-check-group>
    <p>单选用法：{{selected3}}</p>
    <tg-check-group
      v-model="selected3"
      :max="1"
      :options="options2"
    ></tg-check-group>
    <p>多选组disabled</p>
    <tg-check-group
      v-model="selected4"
      :options="options4"
      disabled
    ></tg-check-group>
    <p>多选组横向布局： {{selected4}}</p>
    <tg-check-group
      v-model="selected4"
      required
      title="3.以下钱币中你喜欢哪些？（多选）"
      :options="options4"
      horizontal
    ></tg-check-group>
    <tg-check-group
      v-model="selected4"
      title="携带副标题"
      :options="options5"
      iconPosition="right"
      hasInputOption
      inputOptionPlaceholder="请输入其他答案"
    >
    </tg-check-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ["2","3"],
      options: [
        {value: '1', label: '选项一', disabled: false},
        {value: '2', label: '选项三', disabled: false},
        {value: '3', label: '选项六字数超长长长长长长长长长长长长长长长长长长', disabled: false},
      ],
      selected1: ['APP设计','WEB设计'],
      options1: [
        {value: 'APP设计', label: 'APP设计', disabled: false},
        {value: 'WEB设计', label: 'WEB设计', disabled: false},
        {value: '动画设计', label: '动画设计', disabled: false},
        {value: '平面设计', label: '平面设计', disabled: false}
      ],
      selected2: [],
      options2: [
        {value: '1', label: '选项一', disabled: false},
        {value: '2', label: '选项二', disabled: false},
        {value: '3', label: '选项三', disabled: false},
        {value: '4', label: '选项四', disabled: false}
      ],
      selected3: '',
      selected4: ['1','3'],
      options4: [
        {value: '1', label: 'RMB'},
        {value: '2', label: '美元'},
        {value: '3', label: '欧元'},
        {value: '4', label: '英镑'},
        {value: '5', label: '法郎'},
      ],
      selected5: [],
      options5: [
        {value: '1', label: '选项一', desc: '描述文字字段可根据具体场景更改', disabled: false},
        {value: '2', label: '选项二', desc: '描述文字字段可根据具体场景更改', disabled: false},
        {value: '3', label: '选项三', desc: '描述文字字段可根据具体场景更改', disabled: false},
        {value: '4', label: '选项四', desc: '描述文字字段可根据具体场景更改', disabled: true},
        {value: '5', label: '选项五', desc: '描述文字字段可根据具体场景更改', disabled: false},
        {value: '6', label: '选项六', desc: '描述文字字段可根据具体场景更改', disabled: false},
      ],
    }
  },
  watch: {
    selected(newValue) {
      //console.log(newValue)
    }
  },
  methods: {
    handleChange(val){
      console.log(val)
    },
    click(){
      this.selected = ['1'];
    }
  },
  mounted() {
    
  }
}
</script>
<style>
.demo-check-group {
  overflow: hidden;
    background: #EDF2FB;
}
.demo-check-group>p {
  padding-left: 17px;
  font-size: 12px;
  color: #C4C9D9;
  padding: 5px 17px;
}
</style>