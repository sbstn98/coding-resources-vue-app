<template>
    <div>
        <InputField v-model="searchTerm" />
        {{ searchTerm }}
        {{ ergebnis }}
        <br>
        <Filter @click="clickHandlerAll" name="All" />
        <Filter @click="clickHandlerEnglish" name="English" />
        <Filter @click="clickHandlerGerman" name="German" />
        <Filter @click="clickHandlerHTML" name="HTML" />
        <Filter @click="clickHandlerCSS" name="CSS" />
        <Filter @click="clickHandlerJS" name="JS" />
        <Card v-for=" item in cardList" :info="item" />
    </div>
</template>

<script>

import Card from '@/components/Card/Card.vue';
import Filter from '@/components/Filter/Filter.vue';
import InputField from '@/components/Forms/InputField.vue';



export default {
    data: function () {
        return {
            cardList: [],
            searchTerm: '',
            ergebnis: [],
        }
    },
    components: {
        Card,
        Filter,
        InputField,
    },
    watch: {
        searchTerm() {
            const ergebnis = this.searchTerm.toLocaleLowerCase()
            this.cardList.forEach(card => {
                // if (element.description.indexOf(this.searchTerm) > -1) {
                if (card.description.includes(this.searchTerm)) {
                    this.ergebnis.push(card.description);
                }
            });
            // console.log(this.cardList)
        }
    },
    async mounted() {
        const response = await fetch("http://localhost:3003/ressources/");
        const result = await response.json();
        this.cardList = result.results;
        console.log("FETCHED DATA", this.cardList)
    },
    methods: {
        async clickHandlerEnglish() {
            const response = await fetch("http://localhost:3003/ressources/english");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerGerman() {
            const response = await fetch("http://localhost:3003/ressources/german");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerHTML() {
            const response = await fetch("http://localhost:3003/ressources/html");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerCSS() {
            const response = await fetch("http://localhost:3003/ressources/css");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerJS() {
            const response = await fetch("http://localhost:3003/ressources/js");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
        async clickHandlerAll() {
            const response = await fetch("http://localhost:3003/ressources/");
            const result = await response.json();
            this.cardList = result.results;
            console.log("FETCHED DATA", this.cardList)
        },
    }

}
</script>