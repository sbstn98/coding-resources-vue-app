<template>
    <div class="flex items-center">
        <input @click="$emit('update:modelValue', $event.target.checked)" v-on="$attrs"
            class="appearance-none m-2 p-3 border-solid border border-slate-500 checked:bg-blue-500 rounded-md"
            type="checkbox" id="checkbox" name="checkbox">
        <label for="checkbox">{{ label }}</label>

    </div>
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