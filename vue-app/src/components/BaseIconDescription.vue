<template>
    <h3 class="text-xs p-2">{{ IconDescription }}</h3>
</template>


<script>
export default {
    props: {
        IconDescription: {
            type: String,
            default: "IconDescription",
            required: true,
        }
    }
};
</script>