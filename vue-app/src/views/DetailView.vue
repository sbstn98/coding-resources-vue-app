<template>
    <br>
    <p> {{ this.info.title }} </p>
    <br>
    <p> {{ this.info.subtitle }} </p>
    <br>
    <p> {{ this.info.description }} </p>
</template>

<script>


export default {
    data: function () {
        return {
            id: 0,
            info: {},
        }
    },
    created() {
        this.id = parseInt(this.$route.params.id)
    },
    async mounted() {
        const response = await fetch(`http://localhost:3003/ressources/ ${this.id}`);
        const result = await response.json();
        console.log(result)
        this.info = result.results[0];
        console.log("FETCHED DATA!", this.info)
    },

};

</script>