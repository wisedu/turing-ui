<template>
  <div class="tg-check-group" :class="[{'is-horizontal': horizontal, 'is-required': required&&title},'column-'+column]" >
    <md-check-list
      v-model="selected"
      :options="options"
      :icon="icon"
      :iconSize="iconSize"
      :iconPosition="iconPosition"
      :iconInverse="iconInverse"
      :max="max"
      :title="title"
      :disabled="disabled"
    > 
      <div slot="content" slot-scope="{ option }">
        <p v-text="option.label"></p>
        <p class="tg-muted" v-text="option.desc" v-if="option.desc"></p>
      </div>
    </md-check-list>
  </div>
</template>
<script>
  import { CheckList  } from 'mand-mobile'
  export default {
    name: "tg-check-group",
    components: {
      [CheckList.name]: CheckList,
    },
    data() {
      return {
        selected: this.value, 
        icon: 'circle-right',
        iconInverse: 'circle',
        iconSize: ''
      }
    },
    watch: {
      value(newValue) {
        this.selected = newValue
      },
      selected(newValue) {
        this.$emit("input", newValue)
      }
    },
    props: {
      value: {
        type: [String, Number, Array],
        default: '',
      },
      options: {
        type: Array,
        default: []
      },
      max: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left'
      },
      title: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      hasInputOption: {
        type: Boolean,
        default: false
      },
      inputOptionPlaceholder: {
        type: String,
        default: ''
      },
      column: {
        type: Number,
        default: 4
      }
    },
    methods: {
      handerChange(value) {
        this.$emit("change", value);
      }
    }
  }
</script>
<style lang="css">
  .tg-check-group .md-field .md-field-title {
    line-height: 20px;
    padding: 15px 17px;
    font-size: 16px;
    color: #13152D;
  }
  .tg-check-group .md-field-item {
    color: #43454F;
  }
  .tg-check-group .md-field .md-field-content .md-field-item {
    padding: 0;
  }
  .tg-check-group .md-check-list .md-check-list-item.is-selected {
    color: #3B7BFF;
  }
  .tg-check-group .md-check-list .md-field-item .md-field-item-inner {
    min-height: 34px;
    padding: 8px 0;
    box-shadow: inset 0 -1px 0 0 #EDF2FB;
  }
  .tg-check-group.is-horizontal .md-check-list .md-field-item .md-field-item-inner {
    padding: 0;
    box-shadow: none;
  }
  .tg-check-group .md-field .md-field-content .md-field-item .md-field-item-inner:before {
    background-color: transparent;
  }
  .tg-check-group.is-horizontal .md-field .md-field-content .md-field-item .md-field-item-inner:before {
    background-color: transparent;
  }
  .tg-check-group .md-check-list .md-field-item .md-field-item-content {
    font-size: 14px;
    padding-left: 17px;
  }
  .tg-check-group .md-field-item .md-field-right {
    margin: 0 17px 0 10px;
  }
  .tg-check-group .md-field-item .md-field-item-extra {
    margin-right: 0;
    margin-left: 17px;
  }
  .tg-check-group .md-icon {
    width: 18px;
    height: 18px;
  }
  .tg-check-group .md-field-item.disabled .md-field-item-inner .md-field-item-content, .tg-check-group .md-field-item.disabled .md-field-item-inner .md-field-item-label {
    opacity: 1;
    color: #C4C9D9;
  }
  .tg-check-group .md-field-item.disabled .md-icon {
    fill: #EDF2FB;
  }
  .tg-check-group.is-horizontal .md-field .md-field-content>div {
    padding: 8px 0;
  }
  .tg-check-group.is-horizontal.column-2 .md-field .md-field-content .md-field-item {
    width: 50%;
    display: inline-block;
  }
  .tg-check-group.is-horizontal .md-field .md-field-content .md-field-item {
    width: 25%;
    display: inline-block;
  }
  .tg-check-group.is-required .md-field-title {
    position: relative;
  }
  .tg-check-group.is-required .md-field-title:before {
    position: absolute;
    top: 14px;
    left: 6px;
    z-index: 10;
    content: "*";
    font-family: SimSun;
    font-size: 14px;
    color: #EE3F15;
  }

  .tg-check-group .tg-check-group-input {
    position: relative;
    min-height: 34px;
    padding: 8px 0;
    background-color: #FFFFFF;
  }
  .tg-check-group .tg-check-group-input:before {
    content: "";
    position: absolute;
    z-index: 2;
    background-color: #EDF2FB;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform: scaleY(.5) translateY(100%);
    transform: scaleY(.5) translateY(100%);
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  .tg-check-group .tg-check-group-input input{
    font-size: 14px;
    color: #43454F;
    height: 34px;
    padding-left: 52px;
    padding-right: 17px;
    width: calc(100% - 69px);
  }
  .tg-check-group .tg-check-group-input.right input{
    padding-left: 17px;
    width: calc(100% - 34px);
  }
  .tg-check-group .tg-check-group-input input:focus {
    color: #3B7BFF;
  }
  .tg-check-group .tg-muted {
    font-size: 12px;
    color: #767A8C;
  }
</style>