<template>
    Display All Cards:

    <div class="container m-5">
        <Card v-for="card in data" v-bind:cardObject="card" />
        <!-- <ul>
            <li v-for="card in data">{{ card.title }}</li>
        </ul> -->
    </div>
</template>

<script>

import Card from '@/components/Card/Card.vue';

const data = [{
    id: "1",
    title: "Some Title",
    subtitle: "Subtitle",
    web_technic: ["html", "css", "js"],
    categorie: "code",
    description: "lorem ipsulum",
    media: "read",
    language: "german",
    url: "https://www.someurl.de/"
},
{
    id: "2",
    title: "Some Title2",
    subtitle: "Subtitle2",
    web_technic: ["html2", "css2", "js2"],
    categorie: "code2",
    description: "lorem ipsulum2",
    media: "read2",
    language: "german2",
    url: "https://www.someurl.de/"
}]

export default {
    data: function () {
        return {
            data: data,
        }
    },
    components: {
        Card,
    },
    mounted() {
        console.log("DisplayAllCardsData", this.data);
    }
};

</script>