
<template>
  <div class="relative">
    <TopNav class="p-10 fixed top-0 left-0 right-0" />
  </div>

  <RouterView />
  <BottomNav class="p-10 fixed bottom-0 left-0 right-0" />
</template>

<script >
import { RouterView } from 'vue-router'

import BottomNav from '@/components/BottomNav.vue';
import TopNav from '@/components/TopNav.vue';

export default {
  components: {
    BottomNav,
    TopNav,
  },
};

</script>
