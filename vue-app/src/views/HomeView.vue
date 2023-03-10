<template>
  <div class="container">
    <!--? Drop Shadow Tailwind Vue Bug?-->
    <ShowAllCards />


  </div>
</template>

<script>
import Card from '@/components/Card/Card.vue';
import ShowAllCards from '@/components/Card/ShowAllCards.vue';
import NavBarIconAdd from '@/components/Navbar/NavBarIconAdd.vue';



export default {
  components: {
    Card,
    NavBarIconAdd,
    ShowAllCards,
  },
};
</script>

