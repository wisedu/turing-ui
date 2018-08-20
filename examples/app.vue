<template>
  <div id="app">
    <header class="tg-demo">
      <router-link to="/">
        <h1>组件2.0</h1>
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      
    }
  },
  methods:{
    //
  }
}
</script>
<style>
  body{
    margin:0;
  }
  .tg-demo {
    padding: 10px 0;
    font-size: 18px;
    color: #13152D;
    text-align:center;
  }
</style>