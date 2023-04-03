<template>
  <RouterLink to="/">
    <BaseButtonBack />
  </RouterLink>
  <div class="flex flex-col items-center">
    <img class="grayscale rounded-full w-5/12 md:w-3/12 border border-4 outline-slate-900 outline-4 outline-offset-2 "
      src="https://xsgames.co/randomusers/avatar.php?g=male">
    <!-- <h1 class="pt-2 text-md font-bold text-slate-600 uppercase"> @{{ this.user.login.username }} </h1> -->
    <div class="pt-5 text-slate-600">
      <div class="flex items-center gap-5 pt-5">
        <i class="fa-regular fas fa-user"></i>
        <h1> Name: {{ this.user.name.first }} {{ this.user.name.last }}</h1>
      </div>
      <div class="flex items-center gap-5 pt-5">
        <i class="fa-regular fas fa-location-dot"></i>
        <h1> Location: {{ this.user.location.city }}, {{ this.user.location.country }}</h1>
      </div>
      <div class="flex items-center gap-5 pt-5">
        <i class="fa-regular fas fa-envelope"></i>
        <h1> E-Mail: {{ this.user.email }} </h1>
      </div>
    </div>

  </div>
</template>

<script>

import BaseButtonBack from '@/components/BaseButtonBack.vue';


export default {
  components: {
    BaseButtonBack
  },
  data: function () {
    return {
      user: []
    }
  },
  created() {
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((data) => this.user = data.results[0])
  },
  mounted() {
    fetch('http://localhost:3004/ressources/rates')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
};

</script>


