<template>
  <div>
    <tg-cell-group v-for="(group,key) in navs" :key="key" :title="group.title">
      <tg-cell v-for="item in group.list" :key="item.name" :title="item.name" :name="item.path" :value="item.path" align="right" arrow="arrow-right"  @click="onClick"></tg-cell>
    </tg-cell-group>
  </div>
</template>

<script>
import NavConfig from './nav.config.json'
export default {
  name: 'Home',
  data(){
    return {
      navs: NavConfig
    }
  },
  methods:{
    onClick(name){
      this.$router.push(name)
    }
  }
}
</script>