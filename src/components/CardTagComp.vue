<template>
    <div class="flex gap-2">
        <CardTag v-if="this.language.english === 1" :language="this.english" />
        <CardTag v-if="this.language.german === 1" :language="this.german" />

    </div>
</template >

<script>

import CardTag from '@/components/CardTag.vue';

export default {
    data: function () {
        return {
            english: "English",
            german: "German"
        }
    },
    props: {
        language: {
            type: Object,
            default: "Esperanto"
        }
    },
    components: {
        CardTag
    },
};

</script>
