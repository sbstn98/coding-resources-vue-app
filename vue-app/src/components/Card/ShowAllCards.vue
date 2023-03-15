<template>
    <div>
        <Filter @click="clickHandler" name="English" />

        <Card v-for="item in cardList" :info="item" />
    </div>
</template>

<script>

import Card from '@/components/Card/Card.vue';
import Filter from '@/components/Filter/Filter.vue';

export default {
    data: function () {
        return {
            cardList: []
        }
    },
    components: {
        Card,
        Filter
    },
    async mounted() {
        const response = await fetch("http://localhost:3003/ressources/");
        const result = await response.json();
        this.cardList = result.results;
        console.log("FETCHED DATA", this.cardList)
    },
    methods: {
        async clickHandler() {
            const response = await fetch("http://localhost:3003/ressources/english");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
    }

}
</script>