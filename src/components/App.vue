<template>
  <div id="app">
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
</style>