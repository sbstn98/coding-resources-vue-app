<template>
    <h1 class="text-3xl font-bold">{{ title }}</h1>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: "Main Title",
            required: true,
        }
    }
};

</script>




