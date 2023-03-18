<template>
    <div class="flex gap-5 py-3">
        <CardIconHTML v-if="this.info.html === 1" />
        <CardIconCSS v-if="this.info.css === 1" />
        <CardIconJS v-if="this.info.jsc === 1" />
    </div>
</template>

<script>

import CardIconHTML from '@/components/CardIconHTML.vue';
import CardIconCSS from '@/components/CardIconCSS.vue';
import CardIconJS from '@/components/CardIconJS.vue';


export default {
    props: {
        info: {
            type: Object,
            required: true
        }
    },
    components: {
        CardIconHTML,
        CardIconCSS,
        CardIconJS
    },
};

</script>