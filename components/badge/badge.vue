<template>
  <div class="tg-badge">
    <slot></slot>
    <transition name="tg-zoom-in-center">
      <sup
        v-show="!hidden && (content || content === 0 || isDot)"
        v-text="content"
        class="tg-badge-content"
        :class="[
          'tg-badge-content-' + type,
          {
            'is-fixed': $slots.default,
            'is-dot': isDot
          }
        ]">
      </sup>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'tg-badge',
  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean,
    type: {
      type: String,
      default: 'danger',
      validator(val) {
        return ['primary', 'success', 'warning', 'danger'].indexOf(val) > -1;
      }
    }
  },
  computed: {
    content() {
      if (this.isDot) return;
      var value = this.value;
      var max = this.max;
      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? `${max}+` : value;
      }
      return value;
    }
  }
};
</script>
<style lang="css">
  .tg-badge {
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }
  .tg-badge-content {
    background-color: #EE3F15;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
  }
  .tg-badge-content.is-fixed {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
  }
  .tg-badge-content.is-dot {
    height: 8px;
    width: 8px;
    padding: 0;
    right: 0;
    border-radius: 50%;
  }
  .tg-badge-content.is-fixed.is-dot {
    right: 5px;
  }
  .tg-badge-content-primary {
    background-color: #3B7BFF;
  }
  .tg-badge-content-success {
    background-color: #17BF6A;
  }
  .tg-badge-content-warning {
    background-color: #FF9900;
  }
  .tg-badge-content-danger {
    background-color: #EE3F15;
  }
</style>