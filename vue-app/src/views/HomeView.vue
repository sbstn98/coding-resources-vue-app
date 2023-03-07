<template>
  <div class="container">
    <h1 class="text-3xl p-5">This is the Home</h1>
    <div class="container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>

