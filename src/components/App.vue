<template>
  <div id="app">
    <img alt="mad kitty" src="https://lh3.googleusercontent.com/-KZCid5TfFQE/Vcq9M-7FHeI/AAAAAAAAnhc/bf2UYMWybcE/w530-h398-n/funny-cat-face-angry.jpg">
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
  components: {

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
