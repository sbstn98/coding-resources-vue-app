<template>
    <button class="mx-2 my-5 p-2 bg-slate-900 text-white rounded-md">{{ name }}</button>
</template>

<script>


export default {
    props: {
        name: String,
    },
};

</script>