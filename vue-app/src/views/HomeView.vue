<template>
  <div class="container">
    <div class="container">
      <!--? Drop Shadow Tailwind Vue Bug?-->
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import NavBarIconAdd from '@/components/Navbar/NavBarIconAdd.vue';


export default {
  components: {
    Card,
    NavBarIconAdd,
  },
};
</script>

