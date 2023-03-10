
<template>
  <!--? Classes at Templates ?-->
  <!--![Vue warn]: Extraneous non-props attributes (class) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. -->
  <TopNav class="fixed top-0 left-0 right-0" />
  <div class="container md:px-96">
    <h1 class="text-3xl font-bold pt-20 pl-5">Coding Ressources</h1> <!--! OWN COMPONENT !-->
    <h1 class="text-1xl pl-5">Search, Find and Rate!</h1> <!--! OWN COMPONENT !-->
    <RouterView class="py-10 pb-20" />
  </div>
  <BottomNav class="p-10 fixed bottom-0 left-0 right-0" />
</template>

<script >
import { RouterView } from 'vue-router'

import BottomNav from '@/components/Navbar/BottomNav.vue';
import TopNav from '@/components/Navbar/TopNav.vue';

export default {
  components: {
    BottomNav,
    TopNav,
  },
};

</script>
