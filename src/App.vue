<template>
  <div id="app">
    <node-form></node-form>
  </div>
</template>

<script>
import nodeForm from './components/Form.vue'

export default {
  name: 'app',
  components: {
    nodeForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
