<template>
  <div class="tg-checkbox">
    <cube-checkbox 
      v-model="checked"
      :position="position"
      :shape="shape"
      :option="option"
      :hollowStyle="hollowStyle">
      <slot></slot>  
    </cube-checkbox>
  </div>
</template>
<script>
  import { Checkbox } from 'cube-ui'
  import { CheckBox } from 'mand-mobile'
  import 'cube-ui/lib/checkbox/style.css';
  export default {
    name: "tg-checkbox",
    components: {
      [Checkbox.name]: Checkbox,
      [CheckBox.name]: CheckBox
    },
    data() {
      return {
        checked: this.value
      }
    },
    watch: {
      value(newValue) {
        this.checked = newValue
      },
      checked(newValue) {
        this.$emit("input", newValue);
        this.$emit("change", newValue);
      }
    },
    props: {
      value: {},
      position: {
        type: String,
        default: 'left'
      },
      shape: {
        type: String,
        default: 'circle'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      },
      option: {}
    },
    methods: {
      handerChange(value) {
        this.$emit("change", value);
      }
    }
  }
</script>
<style lang="css">
.tg-checkbox .cube-checkbox {
  color: #43454F;
  font-size: 14px;
  background-color: #FFFFFF;
  padding: 0 17px;
  box-shadow: inset 0 -1px 0 0 #EDF2FB;
}
.tg-checkbox .cube-checkbox.cube-checkbox_checked {
  color: #3B7BFF;
}
.tg-checkbox .cube-checkbox.cube-checkbox_disabled {
  color: #C4C9D9;
}
.tg-checkbox .cube-checkbox_disabled .cube-checkbox-ui {
  background-color: #EDF2FB;
}
.tg-checkbox .cube-checkbox_checked.cube-checkbox_disabled .cube-checkbox-ui {
  background-color: #FFFFFF;
}
.tg-checkbox .cube-checkbox_checked .cube-checkbox-ui i {
  color: #3B7BFF;
}
.tg-checkbox .cube-checkbox_disabled .cube-checkbox-ui i {
  color: #EDF2FB;
}
.tg-checkbox .cube-checkbox_disabled .cube-checkbox-ui:before {
  color: transparent;
}
.tg-checkbox .cube-checkbox-ui:before {
  color: #C4C9D9;
}
.tg-checkbox .cube-checkbox-ui {
  margin-right: 17px;
  width: 18px;
  height: 18px;
}
.tg-checkbox .cube-checkbox-wrap {
  min-height: 50px;
}
.cubeic-round-border:before {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  content: "\e62b";
}
.cubeic-right:before {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  content: "\e611";
 }
</style>