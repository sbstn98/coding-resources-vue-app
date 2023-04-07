<template>
    <div class="border rounded-md my-2  max-w-fit">
        <BaseIconDescription :IconDescription="language" />
    </div>
</template>

<script>

import BaseIconDescription from '@/components/BaseIconDescription.vue';

export default {
    props: {
        language: {
            type: String,
            default: "Esperanto",
            required: true
        }
    },
    components: {
        BaseIconDescription,
    },
};

</script>