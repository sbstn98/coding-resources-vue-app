<template>
    <div class="flex flex-col items-start">
        <label for="select">{{ label }}</label>

        <select class="my-3 p-1 border-solid border border-slate-500 bg-white rounded-md"
            @change="$emit('update:modelValue', $event.target.value)" v-on="$attrs" type="select" id="dropdown"
            name="select">
            <option value="0" selected>Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
</template>

<script>


export default {
    inheritAttrs: false,
    props: {
        label: String,
        modelValue: {
            type: String,
            required: true,

        }
    },
    emits: ['update:modelValue']
};

</script>