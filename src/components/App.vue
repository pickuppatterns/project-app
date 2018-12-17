<template>
  <div id="app">
    <h2>This works</h2>
    <RouterView></RouterView>
    {{result}}
  </div>
</template>

<script>
import api from '../services/api';
export default {
  data() {
    return {
      result: null
    };
  },
  created() {
    api.test()
      .then(result => this.result = result);
  }
};
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
