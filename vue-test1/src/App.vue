<template>
  <div id="app" v-bind:title="hello">
    <img src="./assets/logo.png">
    
    <router-view/>
    {{ hello }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      hello: 'world'
      
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
