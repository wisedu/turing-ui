<template>
  <div class="demo-check-group">
    <tg-check-group
      v-model="selected"
      :title="title"
      :options="options"
    ></tg-check-group>
    <tg-check-group
      v-model="selected"
      :title="title1"
      iconPosition="right"
      :options="options"
    ></tg-check-group>
    <tg-check-group
      v-model="selected2"
      :title="title2"
      :max="3"
      :options="options2"
    ></tg-check-group>
    <tg-check-group
      v-model="selected3"
      :title="title3"
      :max="1"
      :options="options2"
    ></tg-check-group>
    <tg-check-group
      v-model="selected4"
      title="多选组disabled"
      :options="options4"
      disabled
    ></tg-check-group>
<!--     <tg-check-group
      v-model="selected4"
      title="内容自定义"
      :options="options5"
    >
      <div slot="content" slot-scope="{ option }">
        <p v-text="option.label"></p>
        <p class="muted" v-text="option.desc"></p>
      </div>
    </tg-check-group> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: ["4","6"],
      options: [
        {value: '1', label: '选项一', disabled: false},
        {value: '2', label: '选项二', disabled: false},
        {value: '3', label: '选项三', disabled: true},
        {value: '4', label: '选项四', disabled: true},
        {value: '5', label: '选项五', disabled: false},
        {value: '6', label: '选项六字数超长长长长长长长长长长长长长长长长长长', disabled: false},
      ],
      selected2: [],
      options2: [
        {value: '1', label: '选项一', disabled: false},
        {value: '2', label: '选项二', disabled: false},
        {value: '3', label: '选项三', disabled: false},
        {value: '4', label: '选项四', disabled: false},
        {value: '5', label: '选项五', disabled: false},
        {value: '6', label: '选项六', disabled: false},
      ],
      selected3: '',
      selected4: [],
      options4: [
        {value: '1', label: '选项一', disabled: false},
        {value: '2', label: '选项二', disabled: false},
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
  computed: {
    title() {
      return  "标准用法：["+this.selected+"]"
    },
    title1() {
      return  "icon居右: ["+this.selected+"]"
    },
    title2() {
      return  "最多选择3项: ["+this.selected2+"]"
    },
    title3() {
      return  "单项选择值: "+this.selected3+""
    }
  },
  watch: {
    selected(newValue) {
      console.log(newValue)
    }
  },
  methods: {
    handleChange(val){
      console.log(val)
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