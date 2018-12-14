<template>
  <section>
    <h2>Welcome to Rocket Project!</h2>
    <p>
      Ruby Moltres Drifblim Frillish Drapion Kricketot Gligar. Grass Darumaka Poliwrath Zangoose Pikachu to train them is my cause Glitch City. Johto Golbat Hariyama Blizzard Totodile Cacturne Zangoose. V for victory Zigzagoon Rayquaza Kyogre Lillipup Ledian Cofagrigus. Fighting Ledyba Huntail Entei Diglett MysteryBerry Magikarp. 
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
