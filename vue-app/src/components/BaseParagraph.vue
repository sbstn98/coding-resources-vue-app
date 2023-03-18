<template>
    <p class="text-1xl">{{ text }} </p>
</template>


<script>

export default {
    props: {
        text: {
            type: String,
            default: "A Paragraph",
            required: true
        }
    }
};

</script>
