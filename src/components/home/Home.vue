<template>
  <section>
    <h2>Welcome to Joke Project!</h2>
    <p>
        My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.
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