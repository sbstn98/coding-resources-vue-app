
<template>
  <!--? Classes at Templates ?-->
  <NavBarTop class="fixed top-0 left-0 right-0" />
  <div class="container pt-12 md:px-24 lg:px-96">
  <!-- <div class="p-5">
      <BaseMainTitle :title="this.title" />
      <BaseSubTitle :subtitle="this.subtitle" />
                                                                  </div> -->
    <transition name="fade">
      <RouterView class="pb-24" />
    </transition>
  </div>
  <NavBarBottom class="p-10 fixed bottom-0 left-0 right-0" />
</template>

<script >
import { RouterView } from 'vue-router'

import NavBarBottom from '@/components/NavBarBottom.vue';
import NavBarTop from '@/components/NavBarTop.vue';
// import BaseMainTitle from '@/components/BaseMainTitle.vue';
// import BaseSubTitle from '@/components/BaseSubTitle.vue';


export default {
  /*   data: function () {
      return {
        title: "Coding Resources",
        subtitle: "Search, Find and Rate!"
      }
    }, */
  components: {
    NavBarBottom,
    NavBarTop/* ,
    BaseMainTitle,
    BaseSubTitle */
  },
};

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}


.fade-enter,
.fade-leave-to {
  opacity: 0;

}
</style>
