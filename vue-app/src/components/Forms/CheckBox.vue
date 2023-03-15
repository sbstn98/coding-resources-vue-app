<template>
    <label for="checkbox">{{ label }}</label>
    <input @click="$emit('update:modelValue', $event.target.checked)" v-on="$attrs"
        class="appearance-none m-2 p-5 border-solid border border-slate-500 accent-pink-500 rounded-md" type="checkbox"
        id="checkbox" name="checkbox">
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