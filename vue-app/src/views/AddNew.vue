<template>
  <!--TODO: INPUTS & BUTTONS IN OWN COMPONENT-->
  <div class="container p-5">
    <h1 class="text-3xl">Add a New Ressource</h1>
    <FormAddNewRessource />
  </div>
</template>

<script>

import FormAddNewRessource from '@/components/FormAddNewRessource.vue';

export default {
  components: {
    FormAddNewRessource
  },
};

</script>






