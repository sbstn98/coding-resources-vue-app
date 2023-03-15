<template>
    <label for="checkbox">{{ label }}</label>
    <input @click="$emit('update:modelValue', $event.target.checked)" v-on="$attrs" type="checkbox" id="checkbox"
        name="checkbox">
</template>

<script>


export default {
    inheritAttrs: false,
    props: {
        label: String,
        modelValue: {
            type: Boolean,
        }
    },
    emits: ['update:modelValue']
};

</script>