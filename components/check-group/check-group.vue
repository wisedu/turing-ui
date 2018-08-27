<template>
  <div class="tg-check-group">
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
      <slot name="content" slot="content"></slot>
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
        this.checked = newValue
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
      content: {
        type: Boolean,
        default: false
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
    font-size: 12px;
    color: #C4C9D9;
    background: #EDF2FB;
    line-height: 15px;
    padding: 10px 0 5px 17px;
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
  }
  .tg-check-group .md-field .md-field-content .md-field-item .md-field-item-inner:before {
    background-color: #EDF2FB;
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
</style>