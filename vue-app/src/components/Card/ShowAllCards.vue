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
        const response = await fetch("http://127.0.0.1:3002/");
        const result = await response.json();
        this.cardList = result.results;
        console.log("FETCHED DATA", this.cardList)
    }
}
</script>