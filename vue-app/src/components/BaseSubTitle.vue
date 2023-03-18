<template>
    <h2 class="text-2xl py-1"> {{ subtitle }}</h2>
</template>

<script>

export default {
    props: {
        subtitle: {
            type: String,
            default: "A Sub Title",
            required: true
        }
    }
};

</script>