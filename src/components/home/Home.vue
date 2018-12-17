<template>
  <section>
    <h2>Welcome to Joke Project!</h2>
    <p>
        Jokes go here, not hooked to API yet.
    </p>
    {{restaurants}}
  </section>
</template>

<script>
import restaurantApi from '../../services/restaurantApi';

export default {
  data() {
    return {
      restaurants: null
    };
  },
  created() {
    restaurantApi.getAll()
      .then(restaurants => this.restaurants = restaurants);
  }


};
</script>

<style lang="postcss" scoped>
</style>