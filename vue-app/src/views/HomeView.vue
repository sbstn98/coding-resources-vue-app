<template>
  <div class="container">
    <div class="container">
      <!--? Drop Shadow Tailwind Vue Bug?-->
      Home View Card:
      <Card />
      <DisplayAllCards />
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';
import NavBarIconAdd from '@/components/Navbar/NavBarIconAdd.vue';
import DisplayAllCards from '../components/Card/DisplayAllCards.vue';

export default {
  components: {
    Card,
    NavBarIconAdd,
    DisplayAllCards,
  },
};
</script>

