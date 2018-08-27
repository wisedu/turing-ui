<template>
  <div class="tg-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "tg-button-group",
    data() {
      return {
        //
      }
    },
    props: {

    },
    methods: {

    }
  }
</script>
<style lang="css">
  .tg-button-group {
    display: flex;
  }
  .tg-button-group:before,.tg-button-group:after {
    display: table;
    content: "";
  }
  .tg-button-group .tg-button {
    flex: 1;
    border-radius: 0;
  }
  .tg-button-group .tg-button:not(:last-child) {
    margin-right: -1px;
  }
  .tg-button-group .tg-button.van-button--primary {
    border-color: #FFFFFF;
  }
</style>