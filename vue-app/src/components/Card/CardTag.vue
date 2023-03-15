<template>
    <div class="border rounded-full my-2 max-w-fit">
        <IconDescription :IconDescription="language" />
    </div>
</template>

<script>

import IconDescription from '@/components/Text/IconDescription.vue';

export default {
    props: {
        language: String,
    },
    components: {
        IconDescription,
    },
};

</script>