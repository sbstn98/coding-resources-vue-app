<template>
    <div class="flex gap-2">
        <CardTag v-if="this.language.english === 1" :language="this.english" />
        <CardTag v-if="this.language.german === 1" :language="this.german" />

    </div>
</template >

<script>

import CardTag from '@/components/Card/CardTag.vue';

export default {
    data: function () {
        return {
            english: "English",
            german: "German"
        }
    },
    props: {
        language: Object,
    },
    components: {
        CardTag
    },
};

</script>
