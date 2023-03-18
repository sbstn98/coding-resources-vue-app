<template>
  <div class="container">
    <!--? Drop Shadow Tailwind Vue Bug?-->
    <CardShowAll />


  </div>
</template>

<script>
import CardShowAll from '@/components/CardShowAll.vue';
import NavBarIconAdd from '@/components/NavBarIconAdd.vue';



export default {
  components: {
    NavBarIconAdd,
    CardShowAll,
  },
};
</script>

