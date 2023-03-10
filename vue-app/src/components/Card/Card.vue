<template>
    <div class="container">
        <div class="border rounded-md bg-white m-5 ">
            <div class="p-5">
                <CardIconComp />
                <MainTitle /> <!-- :title="this.title" -->
                <SubTitle />
                <Paragraph />
                <CardTagComp />
                {{ data }}
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


export default {
    props: {
        cardObject: Object,
    },
    data: function () {
        return {
            data: this.cardObject,
        }
    },
    components: {
        CardIconComp,
        MainTitle,
        SubTitle,
        Paragraph,
        CardTagComp,
    },
    mounted() {
        console.log("CARD:", this.data)
    }
};

</script>