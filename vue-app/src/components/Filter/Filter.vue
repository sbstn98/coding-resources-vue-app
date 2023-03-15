<template>
    <button @click="$emit('click', $event)" v-on="$attrs"
        class="mx-2 my-5 px-5 py-2  text-sm text-black border rounded-full">{{
            name
        }}</button>
</template>

<script>


export default {
    inheritAttrs: false,
    props: {
        name: String,
    },
    emits: ['click']
};

</script>