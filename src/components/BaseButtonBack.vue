<template>
    <button class=" flex gap-2 items-center mx-2 my-5 p-2 bg-white text-black rounded-md" @click="goBack">
        <i class="fas fa-arrow-left"></i>
        <p class=" underline underline-offset-4">Back</p>
    </button>
</template>

<script>



export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
};

</script>