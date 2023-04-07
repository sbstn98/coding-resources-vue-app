<template>
  <!--TODO: INPUTS & BUTTONS IN OWN COMPONENT-->
  <RouterLink to="/">
    <BaseButtonBack />
  </RouterLink>
  <div class="container p-5">
    <h1 class="text-3xl">Add a New Ressource</h1>
    <FormAddNewRessource />
  </div>
</template>

<script>

import FormAddNewRessource from '@/components/FormAddNewRessource.vue';
import BaseButtonBack from '@/components/BaseButtonBack.vue';


export default {
  components: {
    FormAddNewRessource,
    BaseButtonBack
  },
};

</script>






