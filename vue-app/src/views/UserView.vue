<template>
  <RouterLink to="/">
    <BaseButtonBack />
  </RouterLink>
  <div class="about">
    <h1 class="text-3xl m-5">The User View</h1>
  </div>
</template>

<script>

import BaseButtonBack from '@/components/BaseButtonBack.vue';


export default {
  components: {
    BaseButtonBack
  },
};

</script>


