<template>
  <!--TODO: INPUTS & BUTTONS IN OWN COMPONENT-->
  <div class="container p-5">
    <h1 class="text-3xl">Add a New Ressource</h1>
    <AddNewRessource />
  </div>
</template>

<script>

import AddNewRessource from '@/components/Forms/AddNewRessource.vue';

export default {
  components: {
    AddNewRessource
  },
};

</script>






