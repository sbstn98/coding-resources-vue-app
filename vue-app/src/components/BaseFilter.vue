<template>
    <button @click="$emit('click', $event)" v-on="$attrs"
        class="px-5 py-2  text-sm text-black border rounded-md bg-white focus:border-1 focus:border-slate-900 ">{{
            name
        }}</button>
</template>

<script>


export default {
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: "Filter",
            required: true
        }
    },
    emits: ['click']
};

</script>