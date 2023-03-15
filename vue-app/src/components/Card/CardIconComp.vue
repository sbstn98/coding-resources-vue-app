<template>
    <div class="flex gap-5 py-3">
        <CardIconHTML v-if="this.info.html === 1" />
        <CardIconCSS v-if="this.info.css === 1" />
        <CardIconJS v-if="this.info.jsc === 1" />
    </div>
</template>

<script>

import CardIconHTML from '@/components/Card/CardIconHTML.vue';
import CardIconCSS from '@/components/Card/CardIconCSS.vue';
import CardIconJS from '@/components/Card/CardIconJS.vue';


export default {
    props: {
        info: Object
    },
    components: {
        CardIconHTML,
        CardIconCSS,
        CardIconJS
    },
};

</script>