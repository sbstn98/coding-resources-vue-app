<template>
    <div>
        <Card v-for="item in cardList" :info="item" />
    </div>
</template>

<script>

import Card from '@/components/Card/Card.vue';

export default {
    data: function () {
        return {
            cardList: []
        }
    },
    components: {
        Card
    },
    async mounted() {
        const response = await fetch("http://localhost:3003/ressources/");
        const result = await response.json();
        this.cardList = result.results;
        console.log("FETCHED DATA", this.cardList)
    }
};

</script>