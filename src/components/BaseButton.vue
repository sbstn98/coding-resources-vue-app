<template>
    <button @click="$emit('click', $event)" v-on="$attrs" class="my-3 p-2 bg-slate-900 text-white rounded-md">{{ name
    }}</button>
</template>

<script>



export default {
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: "Button",
            required: true
        }
    },
    emits: ['click']
};

</script>