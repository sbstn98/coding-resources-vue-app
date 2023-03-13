<template>
    <label class="p-2" for="">{{ label }}</label>
    <input class="m-2 p-1 border-solid border border-slate-500 rounded-md" type="text" name="" id="" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>


export default {
    props: {
        label: String,
        modelValue: {
            type: [String, Number],
        }
    }
};


</script>