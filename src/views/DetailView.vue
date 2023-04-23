<template>
    <RouterLink to="/">
        <BaseButtonBack />
    </RouterLink>
    <div class="mx-5">
        <CardIconComp :info="this.info" />
        <BaseMainTitle :title="this.info.title" />
        <br>
        <BaseSubTitle :subtitle="this.info.subtitle" />
        <br>
        <BaseParagraph :text="this.info.description" />
        <CardTagComp :language="this.info" />
        <br>
        <BaseDropdown v-model="this.rating" :label="this.label" />
        <BaseButton name="SUBMIT" @click="clickHandler" />
    </div>
</template>

<script>

import BaseMainTitle from '@/components/BaseMainTitle.vue';
import BaseSubTitle from '@/components/BaseSubTitle.vue';
import BaseParagraph from '@/components/BaseParagraph.vue';
import CardIconComp from '@/components/CardIconComp.vue';
import CardTagComp from '@/components/CardTagComp.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseButtonBack from '@/components/BaseButtonBack.vue';




export default {
    data: function () {
        return {
            id: 0,
            info: {},
            label: "Rate the resource here:",
            rating: "0",
            body: {
                id: 0,
                rating: 1,
            },
        }
    },
    components: {
        BaseMainTitle,
        BaseSubTitle,
        BaseParagraph,
        CardIconComp,
        CardTagComp,
        BaseDropdown,
        BaseButton,
        BaseButtonBack
    },
    created() {
        this.id = parseInt(this.$route.params.id)
    },
    async mounted() {
        const response = await fetch(`https://coding-resources-rest-api.onrender.com/ressources/ ${this.id}`);
        const result = await response.json();
        console.log(result)
        this.info = result.results[0];
        console.log("FETCHED DATA!", this.info)
    },
    methods: {
        clickHandler() {
            const newRating = this.info.rating + Number(this.rating)
            console.log(newRating)
            this.body = {
                id: this.info.id,
                rating: newRating
            }
            const body = JSON.stringify(this.body)
            console.log(this.body)
            fetch("https://coding-resources-rest-api.onrender.com/ressources", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }

};

</script>