<template>
  <div class="container">
    <!--? Drop Shadow Tailwind Vue Bug?-->
    <div class="p-5">
      <BaseMainTitle :title="this.title" />
      <BaseSubTitle class="pt-4" :subtitle="this.subtitle" />
    </div>
    <CardShowAll />


  </div>
</template>

<script>
import CardShowAll from '@/components/CardShowAll.vue';
import NavBarIconAdd from '@/components/NavBarIconAdd.vue';
import BaseMainTitle from '@/components/BaseMainTitle.vue';
import BaseSubTitle from '@/components/BaseSubTitle.vue';




export default {
  data: function () {
    return {
      title: "Coding Resources",
      subtitle: "Search, Find and Rate!"
    }
  },
  components: {
    NavBarIconAdd,
    CardShowAll,
    BaseMainTitle,
    BaseSubTitle
  },
};
</script>

