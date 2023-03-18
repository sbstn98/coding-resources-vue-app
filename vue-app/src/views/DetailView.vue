<template>
    <RouterLink to="/">
        <button class=" flex  gap-2 mx-2 my-5 p-2 bg-white text-black rounded-md">
            <i class="fas fa-arrow-left"></i>
            <p class=" underline underline-offset-4">Back</p>
        </button>
    </RouterLink>
    <div class="mx-5">
        <CardIconComp :info="this.info" />
        <MainTitle :title="this.info.title" />
        <br>
        <SubTitle :subtitle="this.info.subtitle" />
        <br>
        <Paragraph :text="this.info.description" />
        <CardTagComp :language="this.info" />
        <br>
        <Dropdown v-model="this.rating" :label="this.label" />
        <SubmitButton name="SUBMIT" @click="clickHandler" />
    </div>
</template>

<script>

import MainTitle from '@/components/Text/MainTitle.vue';
import SubTitle from '@/components/Text/SubTitle.vue';
import Paragraph from '@/components/Text/Paragraph.vue';
import CardIconComp from '@/components/Card/CardIconComp.vue';
import CardTagComp from '@/components/Card/CardTagComp.vue';
import Dropdown from '@/components/Forms/Dropdown.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';



export default {
    data: function () {
        return {
            id: 0,
            info: {},
            label: "Rating:",
            rating: 0,
            body: {
                id: 0,
                rating: 1,
            },
        }
    },
    components: {
        MainTitle,
        SubTitle,
        Paragraph,
        CardIconComp,
        CardTagComp,
        Dropdown,
        SubmitButton
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
            fetch("http://localhost:3003/ressources", {
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