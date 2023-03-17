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
    </div>
</template>

<script>

import MainTitle from '@/components/Text/MainTitle.vue';
import SubTitle from '@/components/Text/SubTitle.vue';
import Paragraph from '@/components/Text/Paragraph.vue';
import CardIconComp from '@/components/Card/CardIconComp.vue';
import CardTagComp from '@/components/Card/CardTagComp.vue';



export default {
    data: function () {
        return {
            id: 0,
            info: {},
        }
    },
    components: {
        MainTitle,
        SubTitle,
        Paragraph,
        CardIconComp,
        CardTagComp
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