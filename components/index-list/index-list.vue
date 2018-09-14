<template>
  <div class="tg-index-list">
    <cube-index-list
      :data="options"
      :title="title"
      @select="handleSelect">
    </cube-index-list>
  </div>
</template>

<script>
  import { IndexList } from 'cube-ui';
  import "cube-ui/lib/index-list/style.css";
  export default {
    name: "tg-index-list",
    components: {
      [IndexList.name]: IndexList
    },
    data() {
      return {

      }
    },
    watch: {

    },
    props: {
      title: String,
      options: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      handleSelect(e) {
        console.log(e)
      }
    }
  }
</script>
<style lang="css">
  .tg-index-list {
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>