
<template>
  <!--? Classes at Templates ?-->
  <NavBarTop class="fixed top-0 left-0 right-0" />
  <div class="container md:px-24 lg:px-96">
    <h1 class="text-3xl font-bold pt-20 pl-5">Coding Ressources</h1> <!--! OWN COMPONENT !-->
    <h1 class="text-1xl pl-5">Search, Find and Rate!</h1> <!--! OWN COMPONENT !-->
    <RouterView />
  </div>
  <NavBarBottom class="p-10 fixed bottom-0 left-0 right-0" />
</template>

<script >
import { RouterView } from 'vue-router'

import NavBarBottom from '@/components/NavBarBottom.vue';
import NavBarTop from '@/components/NavBarTop.vue';

export default {
  components: {
    NavBarBottom,
    NavBarTop,
  },
};

</script>
