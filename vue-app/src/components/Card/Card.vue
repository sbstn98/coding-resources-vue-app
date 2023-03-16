<template>
    <div class="container">
        <div class="border rounded-md bg-white m-5 ">
            <div class="p-5">
                <CardIconComp :info="this.info" />
                <MainTitle :title="this.info?.title" /> <!--this.info?.title  // fail fast -->
                <SubTitle :subtitle="this.info.subtitle" />
                <Paragraph :text="this.info.description" />
                <CardTagComp :language="this.info" />

                <RouterLink :to="'/details/' + this.info.id">
                    <SubmitButton name="See Details" />
                </RouterLink>

            </div>
        </div>

    </div>
</template>

<script>

import CardIconComp from '@/components/Card/CardIconComp.vue';
import MainTitle from '@/components/Text/MainTitle.vue';
import SubTitle from '@/components/Text/SubTitle.vue';
import Paragraph from '@/components/Text/Paragraph.vue';
import CardTagComp from '@/components/Card/CardTagComp.vue';
import SubmitButton from '@/components/Buttons/SubmitButton.vue';



export default {
    props: {
        info: Object,
    },
    components: {
        CardIconComp,
        MainTitle,
        SubTitle,
        Paragraph,
        CardTagComp,
        SubmitButton,
    }, mounted() {
        console.log("CONSOLE CARD:", this.info)
    }
};

</script>