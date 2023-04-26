<template>
    <div>
        <br>
        <div class="flex flex-wrap gap-2 p-4">
            <BaseFilter @click="clickHandlerAll" name="All" />
            <BaseFilter @click="clickHandlerEnglish" name="English" />
            <BaseFilter @click="clickHandlerGerman" name="German" />
            <BaseFilter @click="clickHandlerHTML" name="HTML" />
            <BaseFilter @click="clickHandlerCSS" name="CSS" />
            <BaseFilter @click="clickHandlerJS" name="JS" />
            <BaseFilter @click="clickHandlerRating" name="Most Wanted" />
        </div>
        <Card v-for=" item in cardList" :key="item.id" :ResourceInfo="item" />
    </div>
</template>

<script>

import Card from '@/components/Card.vue';
import BaseFilter from '@/components/BaseFilter.vue';


export default {
    data: function () {
        return {
            cardList: [],
            query: {
                language: 'english',
                technic: 'html'
            },
            query2: 'Hello'
        }
    },
    components: {
        Card,
        BaseFilter,
    },
    async mounted() {
        const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources");
        const result = await response.json();
        this.cardList = result.results;
        console.log("FETCHED DATA", this.cardList)
    },
    methods: {
        async clickHandlerEnglish() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources/english");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerGerman() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources/german");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        clickHandlerHTML() {
            this.$router.push({ name: 'home', query: { language: 'english', technic: 'html' } })

        },
        async clickHandlerCSS() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources/css");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerJS() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources/js");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerAll() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerRating() {
            const response = await fetch("https://coding-resources-rest-api.onrender.com/ressources/rates");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
    }

}
</script>